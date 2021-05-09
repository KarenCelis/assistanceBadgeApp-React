import React from "react";
import "./styles/Navbar.css";
import confLog from "../images/el-planeta-tierra.svg";
class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <a className="Navbar__brand" href="">
            <img className="Navbar__brand-logo" width="50" height="50"src={confLog} alt="Logo" />
            <span className="fw-light">Earth</span>
            <span className="fw-bold">Conf</span>
          </a>
        </div>
      </div>
    );
  }
}

export default Navbar;
