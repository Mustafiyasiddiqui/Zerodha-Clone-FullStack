import React from "react";

function Universe() {
  return (
    <div className="container text-center">
      <div className="row ">
        <p className="mt-5 fs-6 mb-5">
          Want to know more about our technology stack? Check out the
          Zerodha.tech blog.
        </p>
        <br />
        <br />
        <h1 className="mt-3"> The Zerodha Universe </h1>
        <br />
        <p className="fs-6 mt-2 mb-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="row  mt-5 mb-5">
        <div className="col">
          <img src="\media\smallcaseLogo.png" alt="smallcase" />
          <p className="text-muted ">Thematic investment platform</p>
        </div>
        <div className="col ">
          <img
            src="\media\streakLogo.png"
            alt="streak"
            style={{ width: "40%" }}
          />
          <p className="mt-1 text-muted ">Algo and strategy platform</p>
        </div>
        <div className="col">
          <img
            src="\media\sensibullLogo.svg"
            alt="sensibull"
            style={{ width: "50%" }}
            className="mt-2"
          />
          <p className="text-muted mt-3">Options trading platform</p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col">
          <img
            src="\media\zerodhaFundhouse.png"
            alt="fundhouse"
            style={{ width: "40%" }}
          />
          <p className="text-muted mt-2">Asset management</p>
        </div>
        <div className="col">
          <img src="\media\goldenpiLogo.png" alt="goldenpi" />
          <p className="text-muted mt-2">Bonds trading platform</p>
        </div>
        <div className="col">
          <img
            src="\media\dittoLogo.png"
            alt="ditto"
            style={{ width: "35%" }}
          />
          <p className="text-muted mt-2">Options trading platform</p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col">
          <button
            className="p-2 btn btn-primary fs-5 mb-5"
            style={{ width: "20%", margin: " 0 auto " }}
          >
            Sign Up Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Universe;
