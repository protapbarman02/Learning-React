import AppName from "./components/AppName";
import HealthyFood from "./components/HealthyFood";
import styles from "./assets/css/modules/App.module.css";

function App() {
  return (
    <div className={`${styles.App} container p-4 mt-4`}>
      <AppName />
      <HealthyFood />
    </div>
  );
}

export default App;
