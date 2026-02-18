import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <div>
          <h1>The Zerodha Universe</h1>
          <p>
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media\images\zerodhaFundhouse.png"
            style={{ width: "50%", marginBottom: "2rem" }}
          />
          <p className="text-small text-muted">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media\images\sensibullLogo.svg"
            style={{ width: "50%", marginBottom: "2rem" }}
          />
          <p>
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media\images\tijori.svg"
            style={{ width: "40%", marginBottom: "2rem" }}
          />
          <p>
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img
            src="media\images\streakLogo.png"
            style={{ width: "50%", marginBottom: "2rem" }}
          />
          <p className="text-small text-muted">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="/media/images/smallcaseLogo.png"
            style={{ width: "50%", marginBottom: "2rem" }}
          />
          <p>
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="/media/images/dittoLogo.png"
            style={{ width: "30%", marginBottom: "2rem" }}
          />
          <p>
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
      </div>
      <button
        className="p-2 btn btn-primary fs-5 mt-5 mb-5 "
        style={{ width: "20%", margin: "0 auto", marginLeft: "40%" }}
      >
        Sign up for free
      </button>
    </div>
  );
}

export default Universe;
