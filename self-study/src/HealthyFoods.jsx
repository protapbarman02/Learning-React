import CssPerModule from "./HealthyFoods.module.css";

function HealthyFoods() {
  let foodItems = ["Egg", "Bread", "Milk", "Salad"];

  return (
    <>
      <h3>Healthy Foods</h3>
      <ul className="list-group">
        {foodItems.map((item) => (
          <li key={item} className="list-group-item">
            <span className={CssPerModule["text-danger"]}>{item}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default HealthyFoods;
