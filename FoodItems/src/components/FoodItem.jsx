import React from "react";

function FoodItem({ foodItem, handleDelete }) {
  return (
    <div className="d-flex align-items-center justify-content-between my-1 py-1">
      <div>
        <span>{foodItem}</span>
      </div>
      <div>
        <button
          className="btn btn-sm btn-outline-success me-2"
          onClick={(e) => handleDelete(e, foodItem)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default FoodItem;
