// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextFrom from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [display, setDisplay] = useState("none");
  const showAlert = (msg, typ) => {
    setAlert({
      message: msg,
      type: typ,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggelMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#1e365c";
      showAlert("Dark mode has been enabled", "success");
      setDisplay("block");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      setDisplay("none");
    }
  };
  const handleRedMode = () => {
    document.body.style.backgroundColor = "rgb(84, 11, 6)";
    // Array.from(document.getElementsByClassName("btn")).map((element) => {
    //   element.style.backgroundColor = "rgb(204, 32, 20)";
    // });
  };
  const handlePinkMode = () => {
    document.body.style.backgroundColor = "rgb(84, 6, 55)";
    // Array.from(document.getElementsByClassName("btn")).map((element) => {
    //   element.style.backgroundColor = "rgb(204, 32, 20)";
    // });
  };
  const handleGreenMode = () => {
    document.body.style.backgroundColor = "rgb(2, 64, 33)";
    // Array.from(document.getElementsByClassName("btn")).map((element) => {
    //   element.style.backgroundColor = "rgb(204, 32, 20)";
    // });
  };
  return (
    <>
      <Navbar
        title="Text TooL"
        about="About"
        mode={mode}
        display={display}
        handleRedMode={handleRedMode}
        handlePinkMode={handlePinkMode}
        handleGreenMode={handleGreenMode}
        toggelMode={toggelMode}
      />
      <Alert alert={alert}></Alert>
      <div className="container my-3">
        <TextFrom
          title="Enter text to analyze below"
          mode={mode}
          alert={showAlert}
        />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
