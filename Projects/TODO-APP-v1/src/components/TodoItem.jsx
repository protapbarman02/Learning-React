import React from "react";

function TodoItem() {
  const todos = {
    todoTitle: "Practice Basic PHP",
    todoDate: "10/03/2025",
  };

  return (
    <div className="row align-items-center my-2">
      <div className="col-6">{todos.todoTitle}</div>
      <div className="col-4">{todos.todoDate}</div>
      <div className="col-2">
        <button className="btn btn-outline-danger btn-sm rounded-0">
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
