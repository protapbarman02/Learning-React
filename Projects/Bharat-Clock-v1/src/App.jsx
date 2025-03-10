import "./App.css";
import ClockHeading from "./components/ClockHeading";
import ClockSlogan from "./components/ClockSlogan";
import CurrentTime from "./components/CurrentTime";

function App() {
  return (
    <>
      <ClockHeading />
      <ClockSlogan />
      <hr />
      <div className="container">
        <CurrentTime />
      </div>
    </>
  );
}

export default App;
