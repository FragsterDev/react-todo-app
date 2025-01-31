import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
import { useState } from "react"

function App() {
  
  const [todos, setTodo] = useState(
    [
      'Go to gym',
      'Have breakfast',
    ]
  )

  const [todoValue, setTodoValue] = useState('')

  function handleAddTodo(newTodo){
    const newTodoList = [...todos, newTodo]
    persistData(newTodoList)
    setTodo(newTodoList)
  }

  function handleDeleteTodo(index){
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    setTodo(newTodoList);
  }

  function handleEditTodo(index){
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited)
    handleDeleteTodo(index)

  }

  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({todos: newList}))
  }

  return (
    <main>
      <TodoInput handleAddTodo={handleAddTodo} setTodoValue={setTodoValue} todoValue = {todoValue}/>
      <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo}/>
    </main>
  )
}

export default App