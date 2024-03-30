import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo } from "../features/todo/todoSlice";

function TodoApp() {
  // const todos = useSelector((state) => state.todos); // initially wihtout combineReducers
  const todos = useSelector((state) => state.todo.todos); // write the reducer name as well.
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      dispatch(addTodo(inputValue));
      setInputValue("");
    }
  };

  const handleRemoveTodo = (index) => {
    dispatch(removeTodo(index));
  };

  return (
    <div className="container">
      <h1>Todo App</h1>
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter todo"
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            {todo.text}
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
