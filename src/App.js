import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Leftside from "./components/LeftSide/Leftside";
import Rightside from "./components/RightSide/Rightside";
import "./App.css";

function App() {
  return (
    <>
      <div className="mainPage">
        <div className="row mt-3 align-on-short" style={{ width: "100vw" }}>
          <Leftside />
          <Rightside />
        </div>
      </div>
    </>
  );
}

export default App;
