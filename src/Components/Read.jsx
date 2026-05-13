const read = (props) => {
    const todos = props.todos;
    const settodos = props.settodos;


    const renderTodos = todos.map((todo) => {
        return <li key={todo.id} className="flex mb-3 justify-between items-center p-5 bg-gray-900 rounded-2xl ">
            <span className="text-3xl font-thin">{todo.title}</span>
            <span className="cursor-pointer font-thin text-red-400 text-xl"
                onClick={() => deleteHandler(todo.id)}>
                Delete
            </span></li>
    })

    const deleteHandler = (id) => {
        const filtertodo = todos.filter((todo) => todo.id != id)
        settodos(filtertodo)
    }

    return (
        <div className="w-[40%] p-10">
            <h1 className="mb-10 text-7xl font-thin"> <span className="text-pink-400">Panding </span>Todos</h1>
            <ol>{renderTodos}</ol>
        </div>
    )
}

export default read 