import Item from "./Item";

function FoodItems(props) {
  const handleClick = (item) => {
    console.log(item + " clicked");
  };
  return (
    <ul className="list-group">
      {props.foodItems.map((item) => (
        <Item key={item} item={item} handleClick={() => handleClick(item)} />
      ))}
    </ul>
  );
}

export default FoodItems;
