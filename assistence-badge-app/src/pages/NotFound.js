import React from "react";
import imgNontF from "../images/norFound.svg";
import "./styles/NotFound.css";
function NotFound() {
  return (
    <div className="NotF">
      <div className="container">
        <div className="row">
          <div className="col">
          <img src={imgNontF} alt="Not Found" className="img-fluid mb-2" />
          </div>
          <div className="col">
            <h1>404 Not Found</h1>
          </div>

        </div>
      </div>
    </div>
  );
}

export default NotFound;
