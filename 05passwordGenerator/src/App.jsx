import { useState, useEffect, useCallback, useRef } from "react"

function App() {
  const [length, setLength] = useState(8)
  const [isNumbersChecked, setIsNumbersChecked] = useState(false)
  const [isCharactersChecked, setIsCharactersChecked] = useState(false)
  const [password, setPassword] = useState("")
  const passwordRef = useRef()

  // console.log("isNumbersChecked: ", isNumbersChecked)
  // console.log("isCharactersChecked: ",isCharactersChecked)

  const passwordGenerate = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(isNumbersChecked){
      str += '0123456789'
    }
    if(isCharactersChecked){
      str += '!@#$%^&*()[]{}|/+-=<>~:;?'
    }
    // console.log("str: ", str)
    // console.log(Math.random() * str.length + 1)
    for (let i = 1; i <= length; i++) {
      let strRandomIndex = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(strRandomIndex)
    }

    setPassword(pass)
  }, [length, isNumbersChecked, isCharactersChecked])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)

    // Use the selected range to copy to the clipboard
    // passwordRef.current?.setSelectionRange(0,3) // Selects characters from index 0 to 3
    // passwordRef.current?.focus() // Ensures the input field is focused for the selection to work
    // const selectedText = passwordRef.current.value.substring(0,3) // Get the first three characters
    // console.log("selectedText: ", selectedText)
    // window.navigator.clipboard.writeText(selectedText) // Write to clipboard
  }, [password])

  useEffect(() => {
    passwordGenerate()
  }, [length, isNumbersChecked, isCharactersChecked])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            className="outline-none w-full py-1 px-3"
            value={password}
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          >copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
             type="range"
             min={6}
             max={100}
             className='cursor-pointer'
             value={length}
             onChange={(e) => setLength(e.target.value)} 
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
             type="checkbox" 
             defaultChecked={false}
             id="numberInput"
             onChange={() => {setIsNumbersChecked((prev) => !prev)}}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
             type="checkbox" 
             defaultChecked={false}
             id="charInput"
             onChange={() => {setIsCharactersChecked((prev) => !prev)}}
            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
