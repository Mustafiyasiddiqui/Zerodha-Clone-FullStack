import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-6">
          <img src={imageURL} style={{ width: "80%" }} />
        </div>
        <div className="col-6 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={tryDemo} style={{ textDecoration: "none" }}>
              Try Demo
            </a>{" "}
            &nbsp; <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            <a
              href={learnMore}
              style={{ marginLeft: "50px", textDecoration: "none" }}
            >
              Learn More
            </a>{" "}
            &nbsp; <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img src="media\googlePlayBadge.svg" alt="google" />
            </a>{" "}
            &nbsp;
            <a href={appStore}>
              <img src="media\appstoreBadge.svg" alt="appStore" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
