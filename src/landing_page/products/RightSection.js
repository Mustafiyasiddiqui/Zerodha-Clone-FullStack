import React from "react";

function RightSection({
  productName,
  productDescription,
  learnMore,
  imageURL,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col mt-5 p-5">
          <h1 className="mt-5">{productName}</h1>
          <p>{productDescription}</p>
          <a
            href={learnMore}
            style={{ textDecoration: "none", color: "black" }}
          >
            Learn More &nbsp;{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>{" "}
          </a>
        </div>
        <div className="col">
          <img src={imageURL} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
