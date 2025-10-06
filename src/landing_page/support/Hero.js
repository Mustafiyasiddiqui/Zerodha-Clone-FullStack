import React from "react";

function Hero() {
  return (
    <div className="container-fluid" id="supportHero">
      <div className=" p-3 mt-5" id="supportWrapper">
        <h4 className="ml-5">Support Portal</h4>
        <a href="" style={{ color: "white" }}>
          Track Tickets
        </a>
      </div>

      <div className=" row mb-5 mx-5">
        <div className=" col p-5 mb-5">
          <h2 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h2>
          <input
            type="text"
            placeholder="Eg: how do i activate F&O , why is my orger getting rejected"
          />
          <a href="" style={{ color: "white" }}>
            Track account opening
          </a>{" "}
          &nbsp;
          <a href="" style={{ color: "white" }}>
            Track segment activation
          </a>{" "}
          &nbsp;
          <a href="" style={{ color: "white" }}>
            Intraday.margins
          </a>{" "}
          &nbsp;
          <a href="" style={{ color: "white" }}>
            Kite user manual
          </a>
        </div>
        <div className=" col p-5 mb-5">
          <h2 className="fs-3">Featured</h2>
          <p>
            1.
            <a href="" style={{ color: "white" }}>
              Current Takeovers and Delisting - January 2024
            </a>
          </p>
          <p>
            2.
            <a href="" style={{ color: "white" }}>
              Latest Intraday Leverages - MIS & CO
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
