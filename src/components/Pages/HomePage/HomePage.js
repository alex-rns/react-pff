import React from 'react'
import './HomePage.css'
import {Grid, Row, Col} from 'react-bootstrap'

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

          <Grid className="welcome">
            <Row>
              <Col md={7}>
                <p><span>Вас приветствует</span></p>
                <h2>творческая мастерская</h2>
                <h1>Олеси Белодубровской</h1>
                <Button link="about" welcome="button-welcome"/>
              </Col>

            </Row>

          </Grid>


        </div>
        <Carousel/>




      </div>


    )
  }

}

export default HomePage