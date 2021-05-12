import React from "react";
import ReactDOM from "react-dom"
import Badge from "../components/Badge";
import confLog from "../images/girls.svg";
import { Link } from "react-router-dom";
function BadgeDetails(props) {
  const badge = props.badge;
  return (
    <div>
      <div className="BadgeDetails__hero">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img
                className=""
                src={confLog}
                alt="Logo"
                height="150px"
                style={{ filter: "drop-shadow(2px 4px 6px black)" }}
              />
            </div>
            <div className="col-6 BadgeDetails__hero-attendant-name">
              <h1>
                {badge.firstName} {badge.lastName}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <Badge
              name={badge.firstName}
              lastName={badge.lastName}
              email={badge.email}
              twitter={badge.twitter}
              jobTitle={badge.jobTitle}
            />
          </div>
          <div className="col">
            <h2> Actions </h2>
            <div>
              <Link
                className="btn btn-primary mb-4"
                to={`/badges/${badge.id}/edit`}
              >
                Edit
              </Link>
            </div>
            <div>
              <button className="btn btn-danger">
                Delete
              </button>
              {/* {ReactDOM.createPortal(que , donde)} */}
              {ReactDOM.createPortal(<h1>helllo</h1>, document.getElementById('modal'))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BadgeDetails;
