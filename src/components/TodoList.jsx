/* eslint-disable react/prop-types */
import TodoCard from "./TodoCard"

// eslint-disable-next-line react/prop-types
function TodoList(props) {

   const {todos} = props
    
  return (
    <ul className="main">
        {
            // eslint-disable-next-line react/prop-types
            todos.map((todo, todoIndex) => {
                return (
                    <TodoCard {...props} key={todoIndex} index={todoIndex}>
                        <p>{todo}</p>
                    </TodoCard>
                )
            })
        }
    </ul>
  )
}

export default TodoList