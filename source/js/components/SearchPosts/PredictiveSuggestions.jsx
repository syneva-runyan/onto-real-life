import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const propTypes = {
    suggestions: PropTypes.array,
    closeSearch: PropTypes.func
}
const defaultProps = {
    closeSearch: () => {},
    suggestions: null
}

export const renderSearchLink = function(suggestions, closeSearch) {
    return (
        <ul className="predictiveSuggestions__list">
            {suggestions.map(article => {
                return <li key={`${article.id}-predictiveSuggestions`}className="predictiveSuggestions__listItem">
                        <Link onClick={closeSearch} className="predictiveSuggestions__link" to={`/posts/${article.id}`}>{article.title}</Link>
                    </li>
            })}
        </ul>
    )
}

export const renderNoSuggestions = function() {
    return (<p className="predictiveSuggestions__none">There are no posts that match your search query</p>)
}
export default function PredictiveSuggestions(props) {
    return (
        <div className="predictiveSuggestions">
            {props.suggestions && props.suggestions.length > 0 ? 
                renderSearchLink(props.suggestions, props.closeSearch) :
                renderNoSuggestions()
            }
        </div>
    )
}

PredictiveSuggestions.propTypes = propTypes;
PredictiveSuggestions.defaultProps = defaultProps;