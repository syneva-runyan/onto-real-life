import React, { Component } from "react";
import PropTypes from "prop-types";
import { map } from "lodash";

const propTypes = {
  aniDuration: PropTypes.number,
  slides: PropTypes.array,
};

const defaultProps = {
  aniDuration: 3000,
  slides: [],
};

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.slideTimer = null;

    this.state = {
      active: 0,
    };

    this.boundMoveSlide = this.moveSlide.bind(this);
  }

  componentDidMount() {
    this.slideTimer = setInterval(this.boundMoveSlide, this.props.aniDuration);
  }

  componentWillUnmount() {
    clearInterval(this.slideTimer);
  }

  moveSlide() {
    const activeSlideIndex = (this.state.active + 1) % this.props.slides.length;
    this.setState({
      active: activeSlideIndex,
    });
  }

  render() {
    return (
      <ul className="carousel">
        {map(this.props.slides, (slide, index) => {
          let slideClassNames = "carousel__slide";
          if (index === this.state.active) {
            slideClassNames += " carousel__slide--active";
          } else if (
            // make sure the previously shown slide is identifiable
            // for any animation purposes
            index === this.state.active - 1 ||
            (index === this.props.slides.length - 1 && this.state.active === 0)
          ) {
            slideClassNames += " carousel__slide--prev";
          } else if (
            // make sure the next shown slide is identifiable
            // for any animation purposes
            index === this.state.active + 1 ||
            (index === 0 && this.state.active === this.props.slides.length - 1)
          ) {
            slideClassNames += " carouesl__slide--next";
          }
          return (
            <li className={slideClassNames} key={`slide-${index}`}>
              {slide}
            </li>
          );
        })}
      </ul>
    );
  }
}

Carousel.propTypes = propTypes;
Carousel.defaultProps = defaultProps;
