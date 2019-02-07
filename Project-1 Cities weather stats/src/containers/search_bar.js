import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions/index";

class SearchBar extends Component {
  state = { term: "" };

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onForSubmit = event => {
    event.preventDefault();

    this.props.fetchWeather(this.state.term);
    this.setState({ term: "" });
  };

  render() {
    return (
      <form onSubmit={e => this.onForSubmit(e)} className="input-group">
        <input
          placeholder="Get a five-day forecast in your favourite cities"
          value={this.state.term}
          className="form-control"
          onChange={ev => this.onInputChange(ev)}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary bg-primary">
            Submit
          </button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
