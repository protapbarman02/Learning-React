import "./App.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";

function App() {
  const todoItems = [
    {
      id: 1,
      todoTitle: "Practice Basic PHP",
      todoDate: "10/03/2025",
    },
    {
      id: 2,
      todoTitle: "Practice Advanced PHP",
      todoDate: "15/03/2025",
    },
    {
      id: 3,
      todoTitle: "Practice Advanced SQL",
      todoDate: "20/03/2025",
    },
  ];

  return (
    <>
      <div className="container">
        <AppName />
        <AddTodo />
        <TodoItems todoItems={todoItems} />
      </div>
    </>
  );
}

export default App;
