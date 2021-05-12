import React from "react";
import "./styles/BadgestList.css";
import { Link } from "react-router-dom";
import Gravatar from "./Gravatar";
//los hooks solo funcionana dentro de componentes funcionales
class BadgesListItem extends React.Component {
  render() {
    return (
      <div className="BadgesListItem">
        <Gravatar
          className="Badge__avatar"
          email={this.props.badge.email}
          alt="avatar"
        ></Gravatar>
        <div>
          <div className="fw-bold">
            {this.props.badge.firstName} {this.props.badge.lastName}
          </div>
          <div>
            <i className="bi bi-twitter BadgesIcon"></i>{" "}
            <span>@{this.props.badge.twitter} </span>
          </div>
          <div>{this.props.badge.jobTitle}</div>
        </div>
      </div>
    );
  }
}
class BadgestList extends React.Component {
  render() {
    if (this.props.badges.length === 0) {
      return (
        <div>
          <h3>No badges were found</h3>
          <Link to="/badges/new" className="btn btn-primary">
            Create New badge
          </Link>
        </div>
      );
    }
    return (
      <div className="BadgesList">
        <ul className="list-unstyled">
          {this.props.badges.map((badge) => {
            return (
              <li key={badge.id}>
                <Link  className="text-reset text-decoration-none" to={`/badges/${badge.id}/details`}>
                  <BadgesListItem badge={badge} />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default BadgestList;
