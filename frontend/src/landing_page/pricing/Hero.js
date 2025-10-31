import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row text-center mt-5 border-bottom">
        <h1>Pricing</h1>
        <p className="text-muted mt-2 mb-5">
          Free equity investments and flat ₹20 traday and F&O trades.
        </p>
      </div>
      <div className="row mt-5 text-center">
        <div className="col">
          <img src="\media\pricing0.svg" alt="zero" />
          <h3 className="fs-5">Free equity delivery</h3>
          <p className="text-muted">
            All equity delivery investments( NSE, BSE), <br />
            are absolutely free- ₹ o brokerage.
          </p>
        </div>
        <div className="col">
          <img src="\media\intradayTrades.svg" alt="twenty" />
          <h3 className="fs-5">Intraday and F&O trades</h3>
          <p className="text-muted">
            Flat Rs.20 or 0.03% (Whichever is lower) <br />
            per executed order on intraday trades <br />
            across equity, currency, and commodity <br />
            trades.
          </p>
        </div>
        <div className="col">
          <img src="\media\pricing0.svg" alt="zero" />
          <h3 className="fs-5">Free direct MF</h3>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
