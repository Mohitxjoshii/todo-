import React, { useState } from 'react'
import { nanoid } from 'nanoid'

const App = () => {
    const [todos, settodos] = useState([
        { id: 1, title: "kaam karle bhai", isCompleted: false }
    ])

    const [title, settitle] = useState("")

    const submitHandler = (e) => {
        e.preventDefault();

        const newtodo = {
            id: nanoid(),
            title: title,
            isCompleted: false
        }

        const copyTodos = [...todos]
        copyTodos.push(newtodo)
        settodos(copyTodos)

        settitle("");
    };
     
    const renderTodos = todos.map((todo) => {
        return <li key = {todo.id}> {todo.title}</li>
    })

    return (
        <div>
            <h1>Create tasks</h1>
            <form onSubmit={submitHandler}>
                <input
                    value={title}
                    onChange={(e) => settitle(e.target.value)}
                    type="text"
                    placeholder='title' />
                <br />
                <br />
                <button>create todo</button>
            </form>
            <br />
            <hr />
            <h1>Panding Todos</h1>
            <ol>{renderTodos}</ol>
        </div>
    )
}

export default App 
