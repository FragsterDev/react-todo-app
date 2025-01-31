
function TodoCard(props) {

  // eslint-disable-next-line react/prop-types
  const { children , handleDeleteTodo, index, handleEditTodo } = props



  return (
    <li className="todoItem">
        <div className="actionsContainer">
          {children}
          <button onClick={() => {
            handleEditTodo(index)
          }}>
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
          <button onClick={() => {
            handleDeleteTodo(index)
          }}>
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
    </li>
  )
}

export default TodoCard