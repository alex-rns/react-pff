import React from 'react'
import './HomePage.css'

//components
import Logo from '../../../img/logo-1.svg'
import Carousel from "../../Carousel/Carousel";
import Button from "../../Button/Button";

class HomePage extends React.Component {
  render() {
    return (
      <div className="home-page">
        <div className="welcome-page">
          <img className="logo" src={Logo} alt="logo"/>

          <p>Welcome to the workshop of</p>
          <span>Olesia Bielodubrovska</span>
          <Button welcome="button-welcome"/>

        </div>
        <Carousel/>

      </div>


    )
  }

}

export default HomePage