import './App.css'
import TodoForm from './components/TodoForm'
import Todos from './components/Todos'

function App() {

  return (
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-3xl mt-20'>Todo With Redux</h1>
        <TodoForm />
        <Todos />
      </div>
  )
}

export default App
