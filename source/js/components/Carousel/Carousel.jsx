import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { map } from "lodash";

const propTypes = {
  aniDuration: PropTypes.number,
  slides: PropTypes.array,
  className: PropTypes.string,
  allowNavigation: PropTypes.bool,
};

const defaultProps = {
  className: '',
  aniDuration: 3000,
  slides: [],
  allowNavigation: false,
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
      <Fragment>
        {(this.props.slides.length > 1 && this.props.allowNavigation) ? <button onClick={this.prevSlide} className="carousel__prev carousel__nav">Prev</button> : null }
        <ul className={`carousel ${this.props.className}`}>
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
        {(this.props.slides.length > 1 && this.props.allowNavigation) ? <button onClick={this.nextSlide} className="carousel__next carousel__nav">Next</button> : null }
      </Fragment>
    );
  }
}

Carousel.propTypes = propTypes;
Carousel.defaultProps = defaultProps;
