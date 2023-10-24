import { useEffect, useState } from 'react'
import './App.css'
import { TodoContext } from './context/TodoContext'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const[todos, setTodos] = useState([])
  const addTodo = (todo)=>{
    const curTodo = {
      id: Date.now(),
      task: todo,
      completed: false
    }
    setTodos((prevTodos)=>([curTodo, ...prevTodos]));
  }
  const updateTodo = (id, todo)=>{
    setTodos((prevTodos)=>(
      prevTodos.map((prevTodo)=>(prevTodo.id===id ? {...prevTodo, task:todo} : prevTodo))
    ))
  }
  const deleteTodo = (id)=>{
    setTodos((prevTodos)=>(prevTodos.filter((prevTodo)=>(prevTodo.id ===id ?false:true))))
  }
  const toggleTodo = (id)=>{
    setTodos((prevTodos)=>(prevTodos.map((prevTodo)=>(prevTodo.id === id? {...prevTodo, completed: !prevTodo.completed} : prevTodo))))
  }

    useEffect(()=>{
      const localTodos = JSON.parse(localStorage.getItem("todos"))
      if(localTodos && localTodos.length>0) setTodos(localTodos)
    }, [])
    useEffect(()=>{
      localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])


  return (
    <TodoContext.Provider value={{todos, addTodo, updateTodo, deleteTodo, toggleTodo}}>
     <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {
                          todos.map((todo)=>(
                            <div key={todo.id} className='w-full'>
                            <TodoItem todo = {todo} />
                            </div>
                          ))
                        }
                    </div>
                </div>
            </div>
    </TodoContext.Provider>
  )
}

export default App
