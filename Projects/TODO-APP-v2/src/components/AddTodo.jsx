import styles from "../assets/CssModules/AddTodo.module.css";

function AddTodo() {
  return (
    <div className="row align-items-center">
      <div className="col-6">
        <input
          type="text"
          className={`form-control focus-ring ${styles["no-focus-ring"]}`}
          placeholder="Enter TODO here..."
        />
      </div>
      <div className="col-4">
        <input
          type="date"
          className={`form-control focus-ring ${styles["no-focus-ring"]}`}
        />
      </div>
      <div className="col-2">
        <button className="btn btn-outline-success btn-sm rounded-0 w-100">
          Add
        </button>
      </div>
    </div>
  );
}

export default AddTodo;
