import { nanoid } from 'nanoid'
import { useState } from 'react'


const create = (props) => {
    const todos = props.todos;
    const settodos = props.settodos;

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

    return (
        <div className=" w-[60%] p-10">
            <h1 className="mb-10 text-7xl font-thin">
                Set <span className='text-red-500'>Reminder</span> for <br /> tasks</h1>
            <form onSubmit={submitHandler}>
                <input
                    className="p-4 border-b w-full text-3xl font-thin outline-0"
                    value={title}
                    onChange={(e) => settitle(e.target.value)}
                    type="text"
                    placeholder='title' />
                <br />
                <br />
                <button className="mt-10 text-3xl px-15 py-4 border-2 rounded-xl cursor-pointer">create todo</button>
            </form>
        </div>
    )
}

export default create