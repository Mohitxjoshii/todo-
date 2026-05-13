import React, { useState } from 'react'
import Read from './Components/Read'
import Create from './Components/Create'

const App = () => {
    const [todos, settodos] = useState([
        { id: 1, title: "kaam karle bhai", isCompleted: false }
    ])

    return (
        <div className="flex w-screen h-screen text-white bg-gray-800 p-10">
            <Create todos={todos} settodos={settodos} />
            <Read todos={todos} settodos={settodos} />
        </div>
    )
}

export default App 
