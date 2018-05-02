import React from 'react'
import './WelcomePage.css'

//components
import Logo from '../../img/logo-1.svg'

class WelcomePage extends React.Component {
  render() {
    return (
      <div className="welcome-page">
        <img className="logo" src={Logo} alt="logo"/>

        <p>Welcome to the workshop of</p>
        <span>Olesia Bielodubrovska</span>

      </div>

    )
  }

}

export default WelcomePage