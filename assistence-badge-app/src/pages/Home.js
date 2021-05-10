import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles/Home.css';
import confLog from "../images/el-planeta-tierra.svg";
import handImage from '../images/girls.svg';

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="container">
          <div className="row">
            <div className="Home__col col-12 col-md-4">
              <img
                src={confLog}
                alt="Conf Logo"
                className="img-fluid mb-2"
              />

              <h1>Badge Management System</h1>
              <Link className="btn btn-primary" to="/badges">
                Start
              </Link>
            </div>

            <div className="Home__col d-none d-md-block col-md-8">
              <img
                src={handImage}
                alt="Girl"
                className="img-fluid p-4"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
