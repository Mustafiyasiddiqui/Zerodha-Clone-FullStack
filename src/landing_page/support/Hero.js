import React from "react";

function Hero() {
  return (
    <section className="container-fluid">
      <div className="row support">
        <div className="col-2"></div>
        <div className="col-4">
          <h3 className="mb-5 fs-5">Support Portal</h3>
          <h4 className="fs-5 text-small">
            Search for an answer or browse help topics to create a ticket
          </h4>
          <input
            className="supportInput"
            placeholder="Eg: how do i activate F&O, why is my order getting rejected....."
          ></input>
          <br />
          <a href="" className="" style={{ color: "white" }}>
            Track account opening
          </a>{" "}
          &nbsp; &nbsp;
          <a href="" style={{ color: "white" }}>
            Track segment activation
          </a>{" "}
          &nbsp; &nbsp;
          <a href="" style={{ color: "white" }}>
            Intraday margins
          </a>{" "}
          &nbsp; &nbsp;
          <a href="" style={{ color: "white" }}>
            Kite user manual
          </a>
        </div>

        <div className="col-1"></div>

        <div className="col-3">
          <h3 className="text-center mb-2">
            <a href="">Track Tickets</a>
          </h3>
          <h4>Featured</h4>
          <p>
            1.<a href="">Current Takeovers and Delisting - January 2024</a>
          </p>
          <p>
            2.<a href="">Latest Intraday leverages - MIS & CO</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
