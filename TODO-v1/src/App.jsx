import "./App.css";
import { useState } from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewTodo = (name, date) => {
    const updatedItems = [...todoItems, { todoTitle: name, todoDate: date }];
    setTodoItems(updatedItems);
  };

  const handleDelete = (deletedItem) => {
    const updatedItems = todoItems.filter((item) => item != deletedItem);
    setTodoItems(updatedItems);
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
