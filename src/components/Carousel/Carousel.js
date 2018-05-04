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
    link: ""
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


class Carousel extends React.Component {
  render() {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
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
                <div className="slider__hover">
                  <img src={Logo} alt=""/>
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>
                  <Button/>
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