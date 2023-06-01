import React, { useEffect, useState } from "react";
import "./Leftside.css";
import {
  GlobeAmericas,
  Linkedin,
  Facebook,
  Instagram,
} from "react-bootstrap-icons";

function Leftside() {
  const headingText = ["100% Uptime", "0% Downtime", "100% Available"];
  const descriptionText = ["Zero Infrastructure", "Instance", "Reliablity"];

  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = () => {
      setVisible(false);
    };
    setInterval(timer, 2000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const fadeOut = () => {
    if (!visible) {
      setIndex((prevIndex) => {
        if (prevIndex === headingText.length - 1) {
          return 0;
        }
        return prevIndex + 1;
      });
      setVisible(true);
    }
  };

  return (
    <div className="m-3 g-col-6 " style={{ width: "46%" }} id="backimage">
      <img
        className="d-inline m-3 pt-1"
        src={require("./../../assets/exo.png")}
        alt="exo"
      />

      <div className="container" style={{ marginLeft: "10px" }}>
        <div
          // style={{ width: "54%" }}
          className="row d-flex flex-row justify-content-start align-items-start"
        >
          <h1
            className="text-style-left fw-bolder"
            style={{ opacity: visible ? 1 : 0, transition: "opacity 0.5s" }}
            onTransitionEnd={fadeOut}
          >
            {headingText[index]} &#128526;
          </h1>
          <br />
          <h2
            className="text-secondary"
            style={{ opacity: visible ? 1 : 0, transition: "opacity 0.5s" }}
            onTransitionEnd={fadeOut}
          >
            {descriptionText[index]}{" "}
          </h2>{" "}
          <br /> <h2 className="text-secondary">Management</h2>
          <img
            style={{ width: "54px" }}
            className="rounded float-start original"
            src={require("./../../assets/crousel.png")}
            alt="Text"
          />
          <div
            className="d-inline-block text-light align-self-start d-flex flex-row mt-4 justify-content-between"
            style={{ marginTop: "20px" }}
          >
            <div className="mt-4 d-flex flex-row ">
              <GlobeAmericas className="text-secondary mt-1" />
              <p className="text-secondary ms-1">aesthisia.com</p>
            </div>
            <div className="mt-4 d-flex flex-row pe-4">
              <Linkedin className="text-light mt-1 " />
              <Facebook className="text-light ms-1 mt-1" />
              <Instagram className="text-light ms-1 mt-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leftside;
