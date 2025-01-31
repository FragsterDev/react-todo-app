/* eslint-disable react/prop-types */

// import { useState } from "react"

function TodoInput(props) {

  const { handleAddTodo, todoValue, setTodoValue } = props

  // const [todoValue, setTodoValue] = useState('')

  return (
    <header>
        <input placeholder="Enter your todo here" onChange={(e) => {
          setTodoValue(e.target.value)
        }} value={todoValue}/>
        <button onClick={() => {
          handleAddTodo(todoValue)
        }}>Add</button>
    </header>
  )
}

export default TodoInput