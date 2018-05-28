import React from 'react';
import Slider from "react-slick";
import './Carousel.css'

//components
import Logo from '../../img/logo-1.svg'
import Kanzashi from '../../img/works/lentavkosu.jpg'
import Kinusaiga from '../../img/works/kinusaiga.jpg'
import Rospis from '../../img/works/rospis.jpg'
import Button from "../Button/Button";


const dataSlider = [
  {
    id: 0,
    img: '../../img/works/lentavkosu.jpg',
    title: "Канзаши",
    desc: "Изделия, основанные на технике японского рукоделия канзаши ( складывание особым способом кусочков ткани, лент)",
    link: ""
  },
  {
    id: 1,
    img: '../../img/works/kinusaiga.jpg',
    title: "Кинусайга",
    desc: "Картины (подобия мозаики) из разноцветных кусочков ткани",
    link: ""
  },
  {
    id: 2,
    img: '../../img/works/rospis.jpg',
    title: "Роспись по стеклу",
    desc: "Картины по технологии точечной росписи по стеклу",
    link: "glass"
  },
  {
    id: 3,
    img: '../../img/works/kinusaiga.jpg',
    title: "Кинусайга",
    desc: "Картины (подобия мозаики) из разноцветных кусочков ткани",
    link: ""
  },
  {
    id: 4,
    img: '../../img/works/kinusaiga.jpg',
    title: "КинусайгаК инусайгаКинКинусайг аКиусайгаКинусайгсайга",
    desc: "Картины (подобия мозаики) из разноцветных кусочков тканиКартины (подобия мозаики) из разноцветных кусочков тканиКартины (подобия мозаики) из разноцветных кусочков ткани",
    link: ""
  }
];


function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    />
  );
}

class Carousel extends React.Component {
  render() {
    let settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true
          }
        }
      ]
    };
    return (
      <Slider className="slider" {...settings}>
        {
          dataSlider.map((item)=>{
            return(
              <div key={item.id} className="slider__wrap">
                <img src={item.img} alt={item.title}/>
                <h2>{item.title}</h2>
                <div className="slider__hover">
                  <p>{item.desc}</p>
                  <Button link={item.link}/>
                </div>


              </div>
            )
          })
        }

      </Slider>
    );
  }
}

export default Carousel