import React, { Component } from "react";
import { catalogSearcher }from "../../utils/search-posts";

export default class SearchPosts extends Component {
  constructor(props) {
    super(props);
    this.predictiveSearchStart = 3;
    this.state = {
      serachTerm: "",
    };

    this.boundOnChange = this.onChange.bind(this);
  }

  onChange(e) {
    const searchTerm = e.target.value;
    this.setState({
      searchTerm,
    });

    (searchTerm.length >= this.predictiveSearchStart) ? this.searchPosts(searchTerm) : null;
  }

  searchPosts(searchTerm) {
    const possibleMatches = catalogSearcher.find(searchTerm);
    console.log(possibleMatches);
  }

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
