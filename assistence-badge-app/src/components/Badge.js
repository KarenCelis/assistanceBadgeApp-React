import React from "react";
import confLog from "../images/el-planeta-tierra.svg";
import "./styles/Badge.css";
import Gravatar from "./Gravatar";
class Badge extends React.Component {
  render() {
    // const name = "Elizabeth";
    // const lastName = "Torres";

    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLog} alt="Logo conferencie" />
        </div>
        <div className="Badge__section-name">
          <Gravatar
          className="Badge__avatar" email={this.props.email} alt="avatar"></Gravatar>
          <h1>
            {this.props.name} <br />
            {this.props.lastName}
          </h1>
        </div>

        <div className="Badge__section-info">
          <h3>{this.props.jobTitle}</h3>
          <div>@{this.props.twitter}</div>
        </div>
        <div className="Badge__footer">#savearth</div>
      </div>
    );
  }
}

export default Badge;
