import React from "react";
import PropTypes from "prop-types";
import { map } from "lodash";

const propTypes = {
    aniDuration: PropTypes.string,
    slides: PropTypes.array
}

const defaultProps = {
    aniDuration: "1s",
    slides: [],
}

export default function Carousel(props) {
    const carouselWidth = 100*props.slides.length;
    const slideWidth = 100 / props.slides.length; 

    return (
        <div className="carousel__viewer">
            <ul
                className="carousel"
                style={{
                    "animationDuration": props.aniDuration,
                    "width": carouselWidth + "%"
                }}
            >
                {map(props.slides, (slide, index) => {
                    return ( 
                    <li 
                        className="carousel__slide"
                        key={`slide-${index}`}
                        style={{
                            "width": slideWidth  + "%"
                        }}
                    >
                        {slide}
                    </li>)
                })}
            </ul>
        </div>
    )
}