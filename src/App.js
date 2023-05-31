import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Leftside from "./components/LeftSide/Leftside";
import Rightside from "./components/RightSide/Rightside";

function App() {
  return (
    <>
      <div className="mainPage">
        <div className="row m-0">
          <Leftside />
          <Rightside />
        </div>
      </div>
    </>
  );
}

export default App;
