import React from "react";
import PropTypes from "prop-types";

const defaultProps = {
  toggleSpin: () => {},
};
const propTypes = {
  toggleSpin: PropTypes.func,
};

export default function GlobeSettings(props) {
  return (
    <div className="globeSettings">
        <label className="globeSettings__label">
            AutoSpin
            <input type="checkbox" onChange={props.toggleSpin} checked={props.autoSpin} />
        </label>
    </div>
  );
}

GlobeSettings.propTypes = propTypes;
GlobeSettings.defaultProps = defaultProps;
