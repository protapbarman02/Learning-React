import { useState } from "react";
import styles from "../assets/CssModules/AddTodo.module.css";

function AddTodo({ handleNewTodo }) {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleNewTodo(todoName, todoDate);
    setTodoName("");
    setTodoDate("");
  };

  return (
    <form className="row align-items-center" onSubmit={(e) => handleSubmit(e)}>
      <div className="col-6">
        <input
          type="text"
          className={`form-control focus-ring ${styles["no-focus-ring"]}`}
          placeholder="Enter TODO here..."
          value={todoName}
          onChange={(event) => setTodoName(event.target.value)}
        />
      </div>
      <div className="col-4">
        <input
          type="date"
          className={`form-control focus-ring ${styles["no-focus-ring"]}`}
          value={todoDate}
          onChange={(event) => setTodoDate(event.target.value)}
        />
      </div>
      <div className="col-2">
        <button className="btn btn-outline-success btn-sm rounded-0 w-100">
          Add
        </button>
      </div>
    </form>
  );
}

export default AddTodo;
