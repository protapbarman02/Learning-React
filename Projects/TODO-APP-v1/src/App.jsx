import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <AppName />
        <AddTodo />
        <TodoItem />
      </div>
    </>
  );
}

export default App;
