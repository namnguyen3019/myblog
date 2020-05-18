import React, { Component } from "react";
import { connect } from 'react-redux';
import { createProject } from '../../store/actions/projectActions';


export class CreateProject extends Component {
  state = {
    title: "",
    content: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    //console.log(this.state);
    this.props.createProject(this.state);
  };
  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Create a new Project</h5>
          <div className="input-field">
            <label htmlFor="title">Title </label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="content"> Content</label>
            <textarea
              className="materialize-textarea"
              cols="30"
              rows="10"
              id="content"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Create </button>
          </div>
        </form>
      </div>
    );
  }
}


export default connect(null ,{ createProject })(CreateProject);
