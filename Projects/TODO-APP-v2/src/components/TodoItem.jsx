function TodoItem({ todoTitle, todoDate }) {
  return (
    <div className="row align-items-center my-2">
      <div className="col-6">{todoTitle}</div>
      <div className="col-4">{todoDate}</div>
      <div className="col-2">
        <button className="btn btn-outline-danger btn-sm rounded-0 w-100">
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
