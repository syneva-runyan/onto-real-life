import React from "react";
import { PropTypes } from "prop-types";

const propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
  imgRootPath: PropTypes.string,
  imgPrefix: PropTypes.string,
  fileExtension: PropTypes.string,
};

const defaultProps = {
  alt: "",
  className: "",
  imgRootPath: "",
  imgPrefix: "notFound",
  fileExtension: "jpg"
};

export default function ResponsiveImg({fileExtension, className, alt, imgRootPath, imgPrefix}) {
  return (
    <img
      className={`lazyload blur-up ${className}`}
      alt={alt}
      data-sizes="auto"
      src={`${imgRootPath}/${imgPrefix}--md.${fileExtension}`}
      data-srcset={`${imgRootPath}/${imgPrefix}--sm.${fileExtension} 400w,
                    ${imgRootPath}/${imgPrefix}--md.${fileExtension}  725w,
                  ${imgRootPath}/${imgPrefix}--lg.${fileExtension} 1025w,
                  ${imgRootPath}/${imgPrefix}.${fileExtension} 2050w`}
    />
  );
}

ResponsiveImg.propTypes = propTypes;
ResponsiveImg.defaultProps = defaultProps;
