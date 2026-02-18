import React from "react";

function Hero() {
  return (
    <div className="container-fluid" id="supportHero">
      <div className="p-5 " id="supportWrapper">
        <h1>Support Portal</h1>
        <button
          className="p-2 btn btn-primary fs-5 "
          style={{ width: "10rem" }}
        >
          My Ticket
        </button>
      </div>
      <div class="input-group input-group-lg">
        <input
          type="text"
          class="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-lg"
        />
      </div>
    </div>
  );
}

export default Hero;
