import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(15)

  const handleIncrement = () => {
    if(count < 20){
    setCount(count + 1)
    }
  }

  const handleDecrement = () => {
    if(count > 0){
    setCount(count - 1)
    }
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value : {count}</h2>

      <button onClick={handleIncrement}>Increment</button>
      <br />
      <button onClick={handleDecrement}>Decrement</button>
    </>
  )
}

export default App
