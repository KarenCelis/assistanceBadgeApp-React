import React from "react";
import "./styles/BadgestList.css";
import { Link } from "react-router-dom";
class BadgestList extends React.Component {
  render() {
    if(this.props.badges.length === 0){
      return(<div>
        <h3>No badges were found</h3>
        <Link to="/badges/new" className="btn btn-primary">
              Create New badge
            </Link>
      </div>)

    }
    return (
      <div className="BadgesList">
        <ul className="list-unstyled">
          {this.props.badges.map((badge) => {
            return (
              <li className="BadgesListItem" key={badge.id}>
                <img
                  className="BadgesListItem__avatar"
                  src={badge.avatarUrl}
                  alt=""
                />
                <div>
                  <div className="fw-bold">
                    {badge.firstName} {badge.lastName}
                  </div>
                  <div><i className="bi bi-twitter BadgesIcon"></i> <span>@{badge.twitter} </span></div>
                 <div>{badge.jobTitle}</div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default BadgestList;
