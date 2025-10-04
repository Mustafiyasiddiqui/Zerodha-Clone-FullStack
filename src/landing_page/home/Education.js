import React from "react";

function Education() {
  return (
    <div className="container">
      <div className="row">
        <div className="col mt-5 p-3">
          <img src="media\education.svg" style={{ width: "50%" }} />
        </div>
        <div className="col">
          <h1 className="fs-2 mb-4 mt-5">Free and open market education </h1>
          <p className="mb-4">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="" className=" mb-5" style={{ textDecoration: "none" }}>
            versity <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>

          <p className="mb-4">
            TradingQ&A, the most active trading and investment community in
            india for all your market related queries.
          </p>
          <a href="" className=" mb-5" style={{ textDecoration: "none" }}>
            TradingQ&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
