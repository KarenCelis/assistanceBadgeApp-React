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
    modalIsOpen: false,
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
//eventos del modal
  handleOpenModal = (event) => {
    this.setState({ modalIsOpen: true });
  };
  handleCloseModal = (event) => {
    this.setState({ modalIsOpen: false });
  };

  handleDeleteBadge = async (event) => {
    this.setState({ loading: true, error: null });

    try {
      await api.badges.remove(this.props.match.params.badgeId);
      this.setState({ loading: false });

      this.props.history.push("/badges");
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

    return (
      <BadgeDetails
        onOpenModal={this.handleOpenModal}
        onCloseModal={this.handleCloseModal}
        modalIsOpen={this.state.modalIsOpen}
        badge={this.state.data}
        onDeleteBadge={this.handleDeleteBadge}
      ></BadgeDetails>
    );
  }
}

export default BadgeDetailsContainer;
