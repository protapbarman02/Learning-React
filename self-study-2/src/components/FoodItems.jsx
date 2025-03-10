import React from "react";
import FoodItem from "./FoodItem";

function FoodItems({ foodItems, handleDelete }) {
  return (
    <div className="border rounded mt-2 p-2">
      {foodItems.map((foodItem) => (
        <FoodItem
          key={foodItem}
          foodItem={foodItem}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default FoodItems;
