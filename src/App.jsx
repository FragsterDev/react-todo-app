import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    "Go to gym",
    "Have breakfast",
  ]);

  const [todoValue, setTodoValue] = useState("");

  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, newTodo];
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((_, todoIndex) => todoIndex !== index);
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  function handleEditTodo(index) {
    const valueToBeEdited = todos[index];
    setTodoValue(valueToBeEdited);
    handleDeleteTodo(index);
  }

  useEffect(() => {
    let localTodos = localStorage.getItem("todos");
    if (!localTodos) {
      return;
    }
    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos);
  }, []);

  function persistData(newList) {
    localStorage.setItem("todos", JSON.stringify({ todos: newList }));
  }

  return (
    <main>
      <TodoInput
        handleAddTodo={handleAddTodo}
        setTodoValue={setTodoValue}
        todoValue={todoValue}
      />
      <TodoList
        todos={todos}
        handleDeleteTodo={handleDeleteTodo}
        handleEditTodo={handleEditTodo}
      />
    </main>
  );
}

export default App;
