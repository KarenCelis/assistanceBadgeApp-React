import React from "react";
import Navbar from "../components/Navbar";
import confLog from "../images/el-planeta-tierra.svg";
import "./styles/BadgeNew.css";
import Badge from '../components/Badge';
class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img
            className=""
            src={confLog}
            alt="Logo"
            height="100%"
            style={{ filter: "drop-shadow(2px 4px 6px black)" }}
          />
        </div>
        <div className="container"></div>
        <div className="row">
          <div className="col">
            <Badge
              avatarUrl="https://avatars.githubusercontent.com/u/47069950?v=4"
              name="Lucia"
              lastName="Ruiz"
              jobTitle="Biologa"
              twitter="soyEcoFriend"
            ></Badge>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
