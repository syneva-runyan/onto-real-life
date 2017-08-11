import React, { Component } from "react";

export default class SearchPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      serachTerm: "",
    };

    this.boundOnChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      searchTerm: e.target.value,
    });
  }

  searchPosts(searchTerm) {}

  render() {
    return (
      <div>
        <input type="input" onChange={this.boundOnChange} placeholder="Search Posts" value= {this.state.searchTerm} />
        <button type="submit" onClick={this.boundSearch} />
      </div>
    );
  }
}
