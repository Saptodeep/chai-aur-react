import { useDispatch, useSelector } from "react-redux"
import { removeTodo } from "../features/todo/todoSlice"

function Todos() {

    const todos = useSelector((state) => state.todos)
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch({
            type: removeTodo,
            payload: id
        })
    }

    return (
        <>
        <div>Todos</div>
        {todos.map((todo) => (
            <li key={todo.id}>
                {todo.text}
                <button onClick={() => handleDelete(todo.id)}>X</button>
            </li>
        ))}
        </>
    )
}

export default Todos
