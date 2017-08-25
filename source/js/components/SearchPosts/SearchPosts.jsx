import React, { Component } from "react";
import { catalogSearcher } from "../../utils/search-posts";
import PredictiveSuggestions from "./PredictiveSuggestions";

export default class SearchPosts extends Component {
  constructor(props) {
    super(props);
    this.predictiveSearchStart = 3;
    this.state = {
      serachTerm: "",
      PredictiveSuggestions: null,
    };

    this.boundOnChange = this.onChange.bind(this);
    this.boundCloseSearch = this.closeSearch.bind(this);
  }

  onChange(e) {
    const searchTerm = e.target.value;
    this.setState({
      searchTerm,
    });

    if (searchTerm.length >= this.predictiveSearchStart) {
      this.searchPosts(searchTerm);
    }
  }

  closeSearch() {
    this.setState({
      searchTerm: "",
      predictiveSuggestions: null,
    });
  }

  searchPosts(searchTerm) {
    const possibleMatches = catalogSearcher.find(searchTerm);
    this.setState({
      searchPredictions: possibleMatches,
    });
  }

  render() {
    const searchClassNames =
      this.state.searchTerm && this.state.searchTerm.length > 0
        ? "active searchPosts"
        : "searchPosts";

    return (
      <div className={searchClassNames} tabIndex={-1}>
        <input
          className="searchPosts__input"
          type="search"
          onChange={this.boundOnChange}
          placeholder="Search Posts"
          value={this.state.searchTerm}
        />
        <button
          className="searchPosts__submit"
          type="submit"
          onClick={this.boundSearch}
        />
        {this.state.searchTerm &&
        this.state.searchTerm.length >= this.predictiveSearchStart
          ? <PredictiveSuggestions
              suggestions={this.state.searchPredictions}
              closeSearch={this.boundCloseSearch}
            />
          : null}
      </div>
    );
  }
}
