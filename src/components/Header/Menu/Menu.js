import React from 'react'
import { stack as Menu } from 'react-burger-menu'

class TopMenu extends React.Component {
  render(){
    return(
      <Menu customBurgerIcon={ <img src="../../img/logo-1.svg" /> }>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>
    )
  }
}
export default TopMenu