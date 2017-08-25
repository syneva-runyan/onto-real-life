import React from "react";
import PropTypes from "prop-types";

const propTypes = {
    suggestions: PropTypes.array
}
const defaultProps = {
    suggestions: null
}

export const renderSearchLink = function(suggestions) {
    return (
        <ul className="predictiveSuggestions__list">
            <li>Links to related posts go here</li>
        </ul>
    )
}

export const renderNoSuggestions = function() {
    return (<p className="predictiveSuggestions__none">There are no posts that match your search query</p>)
}
export default function PredictiveSuggestions(props) {
    return (
        <div className="predictiveSuggestions">
            {props.suggestions ? 
                renderSearchLink(props.suggestions) :
                renderNoSuggestions()
            }
        </div>
    )
}

PredictiveSuggestions.propTypes = propTypes;
PredictiveSuggestions.defaultProps = defaultProps;