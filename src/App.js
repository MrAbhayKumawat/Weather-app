import logo from "./logo.svg";
import "./App.css";
import Weather from "./Components/WEATHER/Weather";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightIcon from "@mui/icons-material/Nightlight";
function App() {
  return (
    <>
      <div className="App">
        <Weather />
      </div>
    </>
  );
}

export default App;
