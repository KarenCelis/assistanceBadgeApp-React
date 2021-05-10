import React from "react";
import "./styles/BadgestList.css";
class BadgestList extends React.Component {
  render() {
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
                  <div>
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
