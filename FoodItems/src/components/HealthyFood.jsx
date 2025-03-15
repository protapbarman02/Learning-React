import React, { useEffect, useState } from "react";
import Input from "./Input";
import FoodItems from "./FoodItems";
import ErrorMessage from "./ErrorMessage";

function HealthyFood() {
  const [foodItems, setFoodItems] = useState([]);
  const [errorMessage, setErrorMessage] = useState();

  useEffect(() => {
    if (foodItems.length === 0) {
      setErrorMessage("No Food Items");
    }
  });

  const inputHandler = (e) => {
    setErrorMessage("");
    if (e.key === "Enter") {
      if (foodItems.includes(e.target.value)) {
        setErrorMessage("Food Already Exists");
        e.target.value = "";
        return;
      }
      const updatedFoodItems = [...foodItems, e.target.value];
      setFoodItems(updatedFoodItems);
      e.target.value = "";
    }
  };

  const handleDelete = (e, item) => {
    const updatedFoodItems = foodItems.filter((foodItem) => foodItem != item);
    setFoodItems(updatedFoodItems);
  };

  return (
    <div className="row align-items-center justify-content-center">
      <div className="col-md-6 col-sm-12 border rounded p-4">
        <Input inputHandler={inputHandler} />
        {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
        {foodItems.length !== 0 && (
          <FoodItems foodItems={foodItems} handleDelete={handleDelete} />
        )}
      </div>
    </div>
  );
}

export default HealthyFood;
