import Hello from "./Hello";
import Random from "./Random";
import MessageTable from "./MessageTable";
import HealthyFoods from "./HealthyFoods";
import HealthyFoodsV2 from "./HealthyFoodsV2";
import ParentContainer from "./components/ParentContainer";

function App() {
  const btnHandler = (num) => {
    console.log("button clicked" + num);
  };

  const changeHandler = (event) => {
    console.log(event.target.value);
  };

  return (
    <div className="App">
      <Hello />
      <div className="container">
        <Random />
        <hr />
        <MessageTable />
        <hr />
        <HealthyFoods />
        <hr />
        <HealthyFoodsV2 />

        <ParentContainer>
          <p>Children 1</p>
          <div>
            <span>Coffee</span>
            <button
              className="btn btn-outline-success rounded-0 float-end"
              onClick={() => btnHandler(1)}
            >
              Buy
            </button>
          </div>
          <input type="text" onChange={changeHandler} />
        </ParentContainer>
      </div>
    </div>
  );
}

export default App;
