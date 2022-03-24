import React from "react";
import ReactDOM from "react-dom";
import Map from "./Map.jsx";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Map />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
