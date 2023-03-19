import logo from "./logo.svg";
import "./App.css";
import Weather from "./Components/WEATHER/Weather";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightIcon from "@mui/icons-material/Nightlight";
function App() {
  const lightmod = () => {
    const lightMode = (document.body.style.backgroundColor = "white");
    document.getElementById("setcolor").style.color = "black";
  };
  const darkmod = () => {
    document.body.style.backgroundColor = "black";
    document.getElementById("setcolor").style.color = "white";
  };
  return (
    <>
      <div style={{textAlign:"end",marginRight:"5%"
      }}>
        <LightModeIcon onClick={lightmod} />

        <NightlightIcon onClick={darkmod} />
      </div>
      <div className="App">
        <h1 id="setcolor">Check Weather In Your City</h1>
        <Weather />
      </div>
    </>
  );
}

export default App;
