import "./App.css";
import { useState } from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewTodo = (name, date) => {
    setTodoItems((prev) => [...prev, { todoTitle: name, todoDate: date }]);
  };

  const handleDelete = (deletedItem) => {
    setTodoItems((prev) => prev.filter((item) => item !== deletedItem));
  };

  return (
    <>
      <div className="container">
        <AppName />
        <AddTodo handleNewTodo={handleNewTodo} />
        <TodoItems todoItems={todoItems} handleDelete={handleDelete} />
      </div>
    </>
  );
}

export default App;
