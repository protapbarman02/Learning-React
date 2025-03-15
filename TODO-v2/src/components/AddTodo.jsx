import { useRef } from "react";
import styles from "../assets/CssModules/AddTodo.module.css";

function AddTodo({ handleNewTodo }) {
  const todoName = useRef();
  const todoDate = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleNewTodo(todoName.current.value, todoDate.current.value);
    todoName.current.value = "";
    todoDate.current.value = "";
  };

  return (
    <form className="row align-items-center" onSubmit={(e) => handleSubmit(e)}>
      <div className="col-6">
        <input
          type="text"
          ref={todoName}
          className={`form-control focus-ring ${styles["no-focus-ring"]}`}
          placeholder="Enter TODO here..."
        />
      </div>
      <div className="col-4">
        <input
          type="date"
          ref={todoDate}
          className={`form-control focus-ring ${styles["no-focus-ring"]}`}
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
