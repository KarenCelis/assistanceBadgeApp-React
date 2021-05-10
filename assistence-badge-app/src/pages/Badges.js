import React from "react";
import BadgestList from "../components/BadgestList";
import confLog from "../images/el-planeta-tierra.svg";
import {Link} from 'react-router-dom'
import "./styles/Badges.css";
class Badges extends React.Component {
  state = {
    data: [
      {
        id: "2de30c42-9deb-40fc-a41f-05e62b5939a7",
        firstName: "Freda",
        lastName: "Grady",
        email: "Leann_Berge@gmail.com",
        jobTitle: "Legacy Brand Director",
        twitter: "FredaGrady22221-7573",
        avatarUrl:
          "https://avatars.githubusercontent.com/u/17813458?v=4",
      },
      {
        id: "d00d3614-101a-44ca-b6c2-0be075aeed3d",
        firstName: "Major",
        lastName: "Rodriguez",
        email: "Ilene66@hotmail.com",
        jobTitle: "Human Research Architect",
        twitter: "MajorRodriguez61545",
        avatarUrl:
          "https://avatars.githubusercontent.com/u/17813458?v=4",
      },
      {
        id: "63c03386-33a2-4512-9ac1-354ad7bec5e9",
        firstName: "Daphney",
        lastName: "Torphy",
        email: "Ron61@hotmail.com",
        jobTitle: "National Markets Officer",
        twitter: "DaphneyTorphy96105",
        avatarUrl:
          "https://avatars.githubusercontent.com/u/17813458?v=4",
      },
    ],
  };
  render() {
    return (
      <React.Fragment>

        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img className="Badges_conf-logo" src={confLog} alt="" />
            </div>
          </div>
        </div>
        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New badge
            </Link>
          </div>
          <div className="Badges__list">

            <div className="Badges__container">
            <BadgestList badges={this.state.data}></BadgestList>

            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
