import React from "react";
import Navbar from "../components/Navbar";
import confLog from "../images/el-planeta-tierra.svg";
import "./styles/BadgeNew.css";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
class BadgeNew extends React.Component {
  state = {
    form: {
      email: "",
      firstName: "",
      lastName: "",
      jobTitle: "",
      twitter: "",
    },
  };
  handleChange = (event) => {
    // const nextForm = this.state.form;
    // nextForm[event.target.name] = event.target.value;
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value,
      },
    });
  };
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
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                avatarUrl="https://avatars.githubusercontent.com/u/47069950?v=4"
                name={this.state.form.firstName}
                lastName={this.state.form.lastName}
                jobTitle={this.state.form.jobTitle}
                email={this.state.form.email}
                twitter={this.state.form.twitter}
              ></Badge>
            </div>
            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
