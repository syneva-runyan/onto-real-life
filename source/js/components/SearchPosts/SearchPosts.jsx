import React, { Component } from "react";
import { catalogSearcher } from "../../utils/search-posts";
import PredictiveSuggestions from "./PredictiveSuggestions";

const invalidSearchAdvisory = "Please enter 3 or more characters";

export default class SearchPosts extends Component {
  constructor(props) {
    super(props);
    this.predictiveSearchStart = 3;
    this.state = {
      searchTerm: "",
      PredictiveSuggestions: null,
      showMsg: null,
      emphasizeResults: false,
    };

    this.boundOnChange = this.onChange.bind(this);
    this.boundCloseSearch = this.closeSearch.bind(this);
    this.boundSearch = this.search.bind(this);
  }

  onChange(e) {
    const searchTerm = e.target.value;
    this.setState({
      searchTerm,
      showMsg: null,
      emphasizeResults: false,
    });

    if (searchTerm.length >= this.predictiveSearchStart) {
      this.searchPosts(searchTerm);
    }
  }

  showResults() {
    if (this.state.searchTerm.length < this.predictiveSearchStart) {
      this.setState({
        showMsg: invalidSearchAdvisory,
      });
    }

    this.emphasizeResults();
  }

  search() {
    this.textInput && this.textInput.focus();
    if (this.state.searchTerm) {
      this.showResults();
    }
  }

  emphasizeResults() {
    this.setState({
      emphasizeResults: true,
    });
  }

  closeSearch() {
    this.setState({
      searchTerm: "",
      predictiveSuggestions: null,
      emphasizeResults: false,
      showMsg: null,
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
          ref={input => {
            this.textInput = input;
          }}
          value={this.state.searchTerm}
        />
        <button
          className="searchPosts__submit"
          type="submit"
          onClick={this.boundSearch}
        />
        {(this.state.searchTerm &&
          this.state.searchTerm.length >= this.predictiveSearchStart) ||
        this.state.showMsg
          ? <PredictiveSuggestions
              className="searchPosts__suggestions"
              suggestions={this.state.searchPredictions}
              closeSearch={this.boundCloseSearch}
              msg={this.state.showMsg}
              emphasize={this.state.emphasizeResults}
            />
          : null}
        {this.state.searchTerm && this.state.searchTerm.length >= 1
          ? <button
              className="searchPosts__clear"
              onClick={this.boundCloseSearch}
            >
              X
            </button>
          : null}
      </div>
    );
  }
}
