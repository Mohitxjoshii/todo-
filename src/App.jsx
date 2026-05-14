import Read from './Components/Read'
import Create from './Components/Create'

const App = () => {

    return (
        <div className="flex w-screen h-screen text-white bg-gray-800 p-10">
            <Create  />
            <Read  />
        </div>
    )
}

export default App 
