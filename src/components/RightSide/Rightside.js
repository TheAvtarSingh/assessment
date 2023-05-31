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
      className="ms-5 m-3 g-col-6 d-flex flex-column justify-content-center align-items-center"
      style={{ width: "46%" }}
    >
      <img
        className="d-inline pt-5 leaf"
        src={require("./../../assets/leaf.png")}
        alt="leaf"
      />
      <div className="d-flex flex-row">
        <h1 className="text-style fw-bolder">Welcome</h1>
        <h1 className="text-style fw-bolder ps-1 text-success">Back!</h1>
      </div>
      <h5 className="text-secondary font-weight-normal pb-4">
        Glad to see you, Again!
      </h5>

      <div className="container d-flex  justify-content-center align-items-center">
        <div
          className="d-flex flex-column justify-content-center align-items-center"
          style={{ width: "72%" }}
        >
          <form
            action="/"
            method="post"
            className="d-flex flex-column justify-content-center align-items-center"
          >
            <div className="form-group mb-3">
              <input
                type="email"
                name="email"
                id="email"
                className="form-control mt-3"
                placeholder="Enter Your Email"
              />{" "}
            </div>
            <div className="form-group mb-1">
              <input
                type="password"
                name="password"
                id="password"
                className="form-control"
                placeholder="Enter Your Password"
              />
            </div>

            <a
              href="#"
              className="text-secondary text-decoration-none align-self-end"
            >
              Forgot Password?
            </a>

            <button
              style={{
                width: "100%",
                boxShadow: "0px 15px 20px rgb(0, 0, 0);",
              }}
              className="shadow-lg btn btn-dark btn-block ps-5 pe-5 mt-3 "
              type="submit"
            >
              Log in
            </button>
          </form>
          <div className="d-flex flex-row mt-4">
            <p className="text-style-light text-secondary">
              Don't have an account yet?
            </p>
            <p className="text-style-light ps-1 text-success">Sign up</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rightside;
