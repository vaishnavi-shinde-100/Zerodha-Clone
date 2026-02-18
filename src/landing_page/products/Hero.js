import React from "react";

function Hero() {
  return (
    <div className="container border-bottom " >
      <div className="text-center mt-5 p-5">
        <h1
          style={{
            fontSize: "28px",
            fontSize: "500",
            lineHeight: "1.25",
            color: "#424242",
          }}
        >
          Zerodha Products
        </h1>
        <h4
          style={{
            fontSize: "20px",
            fontWeight: "400",
            lineHeight: "1.8",
            color: "#424242",
          }}
        >
          Sleek, modern, and intuitive trading platforms
        </h4>
        <p style={{ fontSize: "20px", fontSize: "400", lineHeight: "1.8" }}>
          Check out our {""}
          <a href="" style={{ textDecoration: "none" }}>
            investment offerings
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
