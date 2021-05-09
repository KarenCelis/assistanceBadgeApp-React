import React from "react";

class BadgeForm extends React.Component {
  state = {
    email: "",
    firstName: "",
    lastName: "",
    jobTitle: "",
    twitter: "",
  };
  handleChange = (event) => {
    //console.log(event.target.name, event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleClick = (event) => {
    // console.log(event.target.name, "button click");
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div style={{ position: "relative", top: "-180px" }}>
        <h1 style={{ textAlign: "center" }}>New Attendant</h1>
        <form
          className="card p-4"
          style={{ gap: "20px" }}
          onSubmit={this.handleSubmit}
        >
          <div className="form-group">
            <label>First Name</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="firstName"
              value={this.state.firstName}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="lastName"
              value={this.state.lastName}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="email"
              name="email"
              value={this.state.email}
            />
          </div>
          <div className="form-group">
            <label>Job Title</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="jobTitle"
              value={this.state.jobTitle}
            />
          </div>
          <div className="form-group">
            <label>Twitter</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="twitter"
              value={this.state.twitter}
            />
          </div>
          <button onClick={this.handleClick} className="btn btn-primary">
            SAVE
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
