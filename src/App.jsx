import './App.css'
import AddTodo from './Components/AddTodo/AddTodo'
import Todo from './Components/Todo/Todo'

function App() {
  return (

    <div className="Headding">
    <h1>Add Your Todos</h1>
      <AddTodo/>
      <Todo />
   </div>
  )
}

export default App
