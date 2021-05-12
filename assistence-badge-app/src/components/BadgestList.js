import React from "react";
import "./styles/BadgestList.css";
import { Link } from "react-router-dom";
import Gravatar from "./Gravatar";

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
function useSearchBadges(badges) {
  const [query, setQuery] = React.useState("");
  const [filteredBadges, setFilteredBadges] = React.useState(badges);
  React.useMemo(() => {
    const result = badges.filter((badge) => {
      return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });
    setFilteredBadges(result);
  }, [badges, query]);

  return { query, setQuery, filteredBadges };
}
//los hooks solo funcionana dentro de componentes funcionales
//class BadgestList extends React.Component {
function BadgestList(props) {
  const badges = props.badges;

  //FILTRADO POTENCIALMENTE DE CUELLO DE BOTELLA
  // const filteredBadges = badges.filter((badge) => {
  //   return `${badge.firstName} ${badge.lastName}`
  //     .toLowerCase()
  //     .includes(query.toLowerCase());
  // });

  //para solucionarlo se una usememo

  const { query, setQuery, filteredBadges } = useSearchBadges(badges);

  if (filteredBadges.length === 0) {
    return (
      <div>
        <div className="form-group">
          <label htmlFor="">Filter Badges</label>
          <input
            type="text"
            className="form-control"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
            }}
          />
        </div>
        <h3>No badges were found</h3>
        <Link to="/badges/new" className="btn btn-primary">
          Create New badge
        </Link>
      </div>
    );
  }
  return (
    <div className="BadgesList">
      <div className="form-group">
        <label htmlFor="">Filter Badges</label>
        <input
          type="text"
          className="form-control"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
          }}
        />
      </div>
      <ul className="list-unstyled">
        {filteredBadges.map((badge) => {
          return (
            <li key={badge.id}>
              <Link
                className="text-reset text-decoration-none"
                to={`/badges/${badge.id}/details`}
              >
                <BadgesListItem badge={badge} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BadgestList;
