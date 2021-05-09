import React from "react";

class BadgeForm extends React.Component {
  handleChange = (event) => {
    console.log(event.target.name, event.target.value);
  };
  handleClick = (event) => {
    console.log(event.target.name, 'button click');
  };
  handleSubmit= (event) => {
    event.preventDefault();
    console.log('asasa')
  };
  render() {
    return (
      <div>
        <h1>New Attendant</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input onChange={this.handleChange}  className="form-control" type="text" name="firstName" />
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
