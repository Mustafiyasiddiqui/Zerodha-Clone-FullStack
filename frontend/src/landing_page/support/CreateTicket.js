import React from "react";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row">
        <h4 className="mt-5">To create a ticket, Select a relevent topic</h4>
        <div className="col-3">
          <h3 className="fs-6 mt-5">
            <i class="fa fa-plus-circle" aria-hidden="true"></i> &nbsp; Account
            Opening
          </h3>
          <div className="mt-5 ml-5">
            <a href="" style={{ lineHeight: "3", textDecoration: "none" }}>
              Online Account Opening
            </a>
            <a href="" style={{ lineHeight: "3", textDecoration: "none" }}>
              Offline Account Opening
            </a>
            <a href="" style={{ lineHeight: "3", textDecoration: "none" }}>
              Company, Partnership and HUF Account Opening
            </a>
            <a href="" style={{ lineHeight: "3", textDecoration: "none" }}>
              NRI Account Opening
            </a>
            <a href="" style={{ lineHeight: "3", textDecoration: "none" }}>
              Charges at Zerodha
            </a>
            <a href="" style={{ lineHeight: "3", textDecoration: "none" }}>
              Zerodha IDFC FIRST Bank 3-in-1 Account
            </a>
            <a href="" style={{ lineHeight: "3", textDecoration: "none" }}>
              Getting Started
            </a>
          </div>
        </div>
        <div className="col-1"></div>
        <div className="col-3 ">
          <h3 className="fs-6 mt-5">
            <i class="fa fa-user" aria-hidden="true"></i>&nbsp; Your Zerodha
            Account
          </h3>

          <div className="mt-5 ml-5">
            <a href="" style={{ lineHeight: "3", textDecoration: "none" }}>
              Login Credentials
            </a>
            <a href="" style={{ lineHeight: "3", textDecoration: "none" }}>
              Account Modification and Segment Addition{" "}
            </a>
            <a href="" style={{ lineHeight: "3", textDecoration: "none" }}>
              Dp ID and bank deatils
            </a>
            <a href="" style={{ lineHeight: "3", textDecoration: "none" }}>
              Your Profile
            </a>
            <a href="" style={{ lineHeight: "3", textDecoration: "none" }}>
              Transfer and Conversion of Shares
            </a>
          </div>
        </div>
        <div className="col-1"></div>
        <div className="col-3">
          <h3 className="fs-6 mt-5">
            {" "}
            <i class="fa fa-bar-chart" aria-hidden="true"></i>&nbsp; Your
            Zerodha Account
          </h3>

          <div className="mt-5 ml-5">
            <a href="" style={{ lineHeight: "3", textDecoration: "none" }}>
              Margin/Leverages, Product and Order types
            </a>
            <a href="" style={{ lineHeight: "3", textDecoration: "none" }}>
              Kite Web and Mobile{" "}
            </a>
            <a href="" style={{ lineHeight: "3", textDecoration: "none" }}>
              Trading FAQs
            </a>
            <a href="" style={{ lineHeight: "3", textDecoration: "none" }}>
              Corporate Actions
            </a>
            <a href="" style={{ lineHeight: "3", textDecoration: "none" }}>
              Sentinel
            </a>
            <a href="" style={{ lineHeight: "3", textDecoration: "none" }}>
              Kite API
            </a>
            <a href="" style={{ lineHeight: "3", textDecoration: "none" }}>
              Pi and other platforms
            </a>
            <a href="" style={{ lineHeight: "3", textDecoration: "none" }}>
              Stockreports+
            </a>
            <a href="" style={{ lineHeight: "3", textDecoration: "none" }}>
              GTT
            </a>
          </div>
        </div>
        <div className="col-1"></div>
      </div>

      <div className="row">
        <div className="col-3">
          <h3 className="fs-6 mt-5">
            <i class="fa fa-credit-card" aria-hidden="true"></i> &nbsp; Funds
          </h3>
          <div className="mt-5 ml-5">
            <a href="" style={{ lineHeight: "3", textDecoration: "none" }}>
              Adding Funds
            </a>
            <br />

            <a href="" style={{ lineHeight: "3", textDecoration: "none" }}>
              Fund Withdwaral
            </a>
            <br />

            <a href="" style={{ lineHeight: "3", textDecoration: "none" }}>
              eMandates
            </a>
            <br />
          </div>
        </div>
        <div className="col-1"></div>

        <div className="col-3 ">
          <h3 className="fs-6 mt-5">
            <i class="fa fa-circle-o-notch" aria-hidden="true"></i>&nbsp;Console
          </h3>

          <div className="mt-5 ml-5">
            <a href="" style={{ lineHeight: "3", textDecoration: "none" }}>
              Reports
            </a>
            <br />

            <a href="" style={{ lineHeight: "3", textDecoration: "none" }}>
              Ledger
            </a>
            <br />
            <a href="" style={{ lineHeight: "3", textDecoration: "none" }}>
              Portfolio
            </a>
            <br />
          </div>
        </div>
        <div className="col-1"></div>
        <div className="col-3">
          <h3 className="fs-6 mt-5">
            <i class="fa fa-circle-o" aria-hidden="true"></i>&nbsp; Coin
          </h3>

          <div className="mt-5 ml-5">
            <a href="" style={{ lineHeight: "3", textDecoration: "none" }}>
              Understanding Mutual Funds
            </a>
            <br />

            <a href="" style={{ lineHeight: "3", textDecoration: "none" }}>
              About Coin
            </a>
            <br />

            <a href="" style={{ lineHeight: "3", textDecoration: "none" }}>
              Buying and Selling through Zerodha
            </a>
            <br />
          </div>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}

export default CreateTicket;
