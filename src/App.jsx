import { useEffect, useState } from "react";
import { NewTodoForm } from "./NewTodoForm";
import { v4 as uuidv4 } from "uuid";
import "./styles.css";
import { TodoList } from "./TodoList";

function App() {
  const [todos, setTodos] = useState(()=> {
    const localValue = localStorage.getItem("ITEMS")
    if(localValue == null) return []
    return JSON.parse(localValue)
  });

  useEffect(()=> {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  },[todos])

  function addTodo(title) {
    setTodos((currentTodos) => [
      ...currentTodos,
      { id: uuidv4(), title, completed: false },
    ]);
  }

  //completed can be True/False
  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          //Return new updated version
          return { ...todo, completed };
        }

        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return (
        //Filter is keep the value
        currentTodos.filter((todo) => todo.id !== id)
      );
    });
  }

  return (
    <>
      <NewTodoForm onSubmit={addTodo}/>
      <h1 className="">Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>
  );
}

export default App;
