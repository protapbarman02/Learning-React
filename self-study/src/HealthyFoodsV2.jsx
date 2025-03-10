import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";

function HealthyFoodsV2() {
  let foodItems = ["Milk", "Bread", "Eggs"];
  // let foodItems = [];

  return (
    <>
      <h5>Healthy Foods</h5>
      <ErrorMessage foodItems={foodItems} />
      <FoodItems foodItems={foodItems} />
    </>
  );
}

export default HealthyFoodsV2;
