import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodos, removeTodos } from "../features/todoFetch/todoFetchSlice";
import { fetchTodos } from "../features/todoFetch/todoFetchSlice";

export default function TodoFetchApp() {
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todosfetch.todos);
  const isLoading = useSelector((state) => state.todosfetch.isLoading);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      dispatch(addTodos(inputValue));
      setInputValue("");
    }
  };

  const handleRemoveTodo = (index) => {
    dispatch(removeTodos(index));
  };
  const handleFetchTodo = () => {
    dispatch(fetchTodos());
  };

  return (
    <div className="container">
      <h1>Todo Fetch App</h1>
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        <>
          <div className="input-container">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Enter todo"
            />
            <span style={{ margin: "10px" }}></span>
            <button onClick={handleAddTodo}>Add Todo</button>
            <span style={{ margin: "10px" }}></span>
            <button onClick={handleFetchTodo}>Fetch Todos</button>
          </div>
          <ul className="todo-list">
            {todos &&
              todos.map((todo) => (
                <li key={todo.id} className="todo-item">
                  {todo.title}
                  <button onClick={() => handleRemoveTodo(todo.id)}>
                    Remove
                  </button>
                </li>
              ))}
          </ul>
        </>
      )}
    </div>
  );
}
