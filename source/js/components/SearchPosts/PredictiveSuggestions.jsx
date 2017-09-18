import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const propTypes = {
  className: PropTypes.string,
  closeSearch: PropTypes.func,
  emphasize: PropTypes.bool,
  msg: PropTypes.string,
  suggestions: PropTypes.array,
};
const defaultProps = {
  className: "",
  closeSearch: () => {},
  emphasize: false,
  msg: null,
  suggestions: null,
};

export const renderSearchLink = function(suggestions, closeSearch) {
  return (
    <ul className="predictiveSuggestions__list">
      {suggestions.map(article => {
        return (
          <li
            key={`${article.id}-predictiveSuggestions`}
            className="predictiveSuggestions__listItem"
          >
            <Link
              onClick={closeSearch}
              className="predictiveSuggestions__link"
              to={`/posts/${article.id}`}
            >
              <span className="predictiveSuggestions__title">{article.title}</span>
              <br />
              <span className="predictiveSuggestions__matchedTerm">
                matches: <strong>{article.matchedPhrases.join(", ")}</strong>
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export const renderNoSuggestions = function() {
  return (
    <p className="predictiveSuggestions__none">
      There are no posts that match your search query
    </p>
  );
};

export const showMsg = function(msg) {
  return (
    <p className="predictiveSuggestions__none predictiveSuggestions__msg">
      {msg}
    </p>
  );
};
export default function PredictiveSuggestions(props) {
  const classNames = props.emphasize
    ? ` ${props.className} predictiveSuggestions predictiveSuggestions--emphasize`
    : `${props.className} predictiveSuggestions`;
  return (
    <div className={classNames}>
      {props.msg ? showMsg(props.msg) : null}
      {props.suggestions && props.suggestions.length > 0
        ? renderSearchLink(props.suggestions, props.closeSearch)
        : renderNoSuggestions()}
    </div>
  );
}

PredictiveSuggestions.propTypes = propTypes;
PredictiveSuggestions.defaultProps = defaultProps;
