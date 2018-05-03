import React from 'react';
import Slider from "react-slick";

//components
import Logo from '../../img/logo-1.svg'

class Carousel extends React.Component {
  render() {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false
    };
    return (
      <Slider {...settings}>
        <div>
          <img src={Logo} alt=""/>
        </div>
        <div>
          <img src={Logo} alt=""/>
        </div>
        <div>
          <img src={Logo} alt=""/>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    );
  }
}

export default Carousel