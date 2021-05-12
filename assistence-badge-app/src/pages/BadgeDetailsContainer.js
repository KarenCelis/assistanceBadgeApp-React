import React from "react";

import "./styles/BadgeDetails.css";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import BadgeDetails from "../pages/BadgeDetails";
import api from "../api";

class BadgeDetailsContainer extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
  };

  componentDidMount() {
    this.fetchData();
  }
  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.read(this.props.match.params.badgeId);
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    //manejo de estados
    if (this.state.loading) {
      return <PageLoading></PageLoading>;
    }
    if (this.state.error) {
      return <PageError error={this.state.error}></PageError>;
    }

    return <BadgeDetails badge={this.state.data} ></BadgeDetails>;
  }
}

export default BadgeDetailsContainer;
