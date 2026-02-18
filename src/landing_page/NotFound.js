import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container p-5">
      <div className="row text-center">
        <h1 className="mt-5 mb-4">404 Not Found</h1>
        <p className="mb-5">
          We couldn’t find the page you were looking for. <br />
          Visit{" "}
          <Link to="/" style={{ textDecoration: "none" }}>
            Zerodha’s home page
          </Link>
        </p>
      </div>
    </div>
  );
}
export default NotFound;
