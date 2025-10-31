import React from "react";

function Stats() {
  return (
    <div className="container p-5">
      <div className="row p-5">
        <div className="col-6 p-5">
          <h1 className="fs-1">Trust with confidence</h1>

          <h2 className="fs-5 mb-2">Customer-first always</h2>
          <p className="text-muted">
            That's why 1.3+crore customers trust Zerodha with &#8377; + lakhs
            crores worth of equity investments{" "}
          </p>

          <h2 className="fs-5 mb-2">No spam of gimmicks </h2>
          <p className="text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.{" "}
          </p>

          <h2 className="fs-5 mb-2">The Zerodha universe</h2>
          <p className="text-muted">
            Not just an app but a whole ecosystem. our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>

          <h2 className="fs-5 mb-2">Do better with money</h2>
          <p className="text-muted">
            With initiatives like Nudge and kill switch , we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col-6">
          <img src="\media\ecosystem.png" style={{ width: "90%" }} />
          <div className="text-center">
            <a href="" className="mx-5" style={{ textDecoration: "none" }}>
              Explore our products{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a href="" className="mx-5" style={{ textDecoration: "none" }}>
              Try kite demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
