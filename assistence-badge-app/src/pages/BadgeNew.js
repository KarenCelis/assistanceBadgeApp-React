import React from "react";
import confLog from "../images/girls.svg";
import "./styles/BadgeNew.css";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import api from "../api";
import PageLoading from "../components/PageLoading"
class BadgeNew extends React.Component {
  state = {
    loading : false,
    error : null,
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
//Peticion post
  handleSubmit = async (event) => {
    event.preventDefault();
    this.setState({loading: true, error : null})

    try {
      //momento exacto
      await api.badges.create(this.state.form);
      this.setState({loading: false})

      this.props.history.push('/badges')
    } catch (error) {
      this.setState({loading: false, error : error})
    }
  };
  render() {
    if(this.state.loading){
      return(
      <PageLoading></PageLoading>
      )
    }
    return (
      <React.Fragment>
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
                name={this.state.form.firstName || "FIRST_NAME"}
                lastName={this.state.form.lastName || "LAST_NAME"}
                jobTitle={this.state.form.jobTitle || "JOB_TITLE"}
                email={this.state.form.email}
                twitter={this.state.form.twitter || "TWITTER"}

              ></Badge>
            </div>
            <div className="col-6">
            <h1 style={{ textAlign: "center" }}>New Attendant</h1>
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error = {this.state.error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
