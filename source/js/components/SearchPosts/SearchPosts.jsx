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

    const searchClassNames = !!this.state.searchTerm ? 
      "active searchPosts" : "searchPosts";

    return (
      <div className={searchClassNames} tabIndex={1} >
        <input className="searchPosts__input" type="search" onChange={this.boundOnChange} placeholder="Search Posts" value={this.state.searchTerm} />
        <button className="searchPosts__submit" type="submit" onClick={this.boundSearch} />
      </div>
    );
  }
}
