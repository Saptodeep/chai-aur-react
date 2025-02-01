import { useEffect, useState } from 'react'
import './App.css'
import { TodoContextProvider } from './contexts'
import { TodoForm, TodoItem } from './components'

function App() {

  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {  //here we are passing todo as an object with todo title and completed attribute
    setTodos((prevTodos) => [{id: Date.now(), ...todo},...prevTodos])
  }

  const updateTodo = (id, todo) => {
    setTodos((prevTodos) => prevTodos.map((item) => item.id === id ? {...item, todo} : item))
  }

  const removeTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((item) => item.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prevTodos) => prevTodos.map((item) => item.id === id? {...item, completed: !(item.completed)} : item))
  }

  /*
  localStorage gets the item and sets the item as a string.
  So we need to parse it to JSON and stringify from JSON accordingly
  */
 useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'))

    if( todos && todos.length > 0){
      setTodos(todos)
    }
    
 }, [])

 useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
 }, [todos])

  return (
    <TodoContextProvider value={{todos, addTodo, updateTodo, removeTodo, toggleComplete}}>
            <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */}
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((item) => (
                          <div key={item.id} className='w-full'>
                            <TodoItem todoItem={item} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoContextProvider>
  )
}

export default App
