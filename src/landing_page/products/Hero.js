import React from "react";

function Hero() {
  return (
    <div className="container border-bottom mb-5">
      <div className="row text-center m-5 p-3">
        <h1>Technology</h1>
        <h3 className="text-muted fs-5 mt-4">
          Sleek,modern and intuitive trading platforms
        </h3>
        <h6 className="text-muted fs-6 mt-4 mb-5">
          check out our &nbsp;
          <a href="" style={{ textDecoration: "none" }}>
            investment offerings &nbsp;
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </h6>
      </div>
    </div>
  );
}

export default Hero;
