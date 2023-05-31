import React from "react";
import "./Rightside.css";
import {
  GlobeAmericas,
  Linkedin,
  Facebook,
  Instagram,
} from "react-bootstrap-icons";

function Rightside() {
  return (
    <div
      className="ms-5 m-3 g-col-6 d-flex flex-column "
      style={{ width: "46%" }}
    >
      <img
        className="d-inline m-3 pt-1 leaf"
        src={require("./../../assets/leaf.png")}
        alt="leaf"
      />
      <div className="container" style={{ marginLeft: "10px" }}>
        <div
          // style={{ width: "54%" }}
          className="row d-flex flex-row justify-content-start align-items-start"
        >
          <h1 className="text-style fw-bolder">100% Uptime &#128526;</h1>
          <br />

          <h2 className="mt-2 text-secondary">
            Zero Infrastructure <br /> Management
          </h2>
          <img
            style={{ width: "54px" }}
            className="rounded float-start original"
            src={require("./../../assets/crousel.png")}
            alt="Text"
          />
          <div
            className="d-inline-block text-light align-self-start d-flex flex-row mt-5 justify-content-between"
            style={{ marginTop: "20px" }}
          >
            <div className="mt-4 d-flex flex-row ">
              <GlobeAmericas className="text-secondary mt-1" />
              <p className="text-secondary ms-1">aesthisia.com</p>
            </div>
            <div className="mt-4 d-flex flex-row pe-4">
              <Linkedin className="text-secondary mt-1 " />
              <Facebook className="text-secondary ms-1 mt-1" />
              <Instagram className="text-secondary ms-1 mt-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rightside;
