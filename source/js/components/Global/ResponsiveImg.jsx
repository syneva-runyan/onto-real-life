import React from "react";
import { PropTypes } from "prop-types"

const propTypes = {
    alt: PropTypes.string,
    className: PropTypes.string,
    imgRootPath: PropTypes.string,
    imgPrefix: PropTypes.string,
};

const defaultProps = {
    alt: "",
    className: "",
    imgRootPath: "",
    imgPrefix: "notFound",
};

export default function ResponsiveImg(props) {
  return (
        <img 
            className={`lazyload blur-up ${props.className}`}
            alt={props.alt}
            data-sizes="auto"
            src = {`${props.imgRootPath}/${props.imgPrefix}--md.jpg`}
            data-srcset={`${props.imgRootPath}/${props.imgPrefix}--sm.jpg 400w,
                    ${props.imgRootPath}/${props.imgPrefix}--md.jpg  725w,
                  ${props.imgRootPath}/${props.imgPrefix}--lg.jpg 1025w,
                  ${props.imgRootPath}/${props.imgPrefix}.jpg 2050w`}
        />
  )
}

ResponsiveImg.propTypes = propTypes;
ResponsiveImg.defaultProps = defaultProps;
