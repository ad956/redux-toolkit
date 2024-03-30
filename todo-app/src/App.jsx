import TodoApp from "./components/TodoApp";
import TodoFetchApp from "./components/TodoFetchApp";
import "./App.css";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <TodoApp />
      <TodoFetchApp />
    </div>
  );
}

export default App;
