import React from "react";
import Badge from "../components/Badge";
import confLog from "../images/girls.svg";
import { Link } from "react-router-dom";
import DeleteBadgeModal from "../components/DeleteBadgeModal";
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
              <button onClick={props.onOpenModal} className="btn btn-danger">
                Delete
              </button>

              <DeleteBadgeModal
                isOpen={props.modalIsOpen}
                onClose={props.onCloseModal}
                onDeleteBadge = {props.onDeleteBadge}
              ></DeleteBadgeModal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BadgeDetails;
