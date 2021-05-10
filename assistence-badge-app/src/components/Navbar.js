import React from "react";
import "./styles/Navbar.css";
import confLog from "../images/el-planeta-tierra.svg";
import {Link} from 'react-router-dom'
class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <Link className="Navbar__brand" to="">
            <img className="Navbar__brand-logo" width="50" height="50"src={confLog} alt="Logo" />
            <span className="fw-light">Earth</span>
            <span className="fw-bold">Conf</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
