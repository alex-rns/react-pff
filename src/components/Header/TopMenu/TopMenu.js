import React from 'react'
import { NavLink } from 'react-router-dom';
import { bubble as Menu } from 'react-burger-menu'
import './TopMenu.css'

class TopMenu extends React.Component {

  constructor(){
    super();
    this.state = {
      isOpen : false
    }
  }
  isMenuOpen = () => {
    this.setState({
      isOpen : true,
      isOpen : false
    })
  };

  render(){
    return(
      <Menu
        width={ '30%' }
        isOpen={this.state.isOpen}
        className="top-menu "
        menuClassName={ "top-menu-wrap " + "d-none" && this.state.isOpen }>
        <NavLink
          onClick={this.isMenuOpen}
          className="menu-item"
          exact
          to="/">
          Home
        </NavLink>
        <NavLink
          className="menu-item"
          exact
          to="/glass">
          Роспись по стеклу
          </NavLink>
        <NavLink
          className="menu-item"
          exact
          to="/">
          Te234234st
        </NavLink>
      </Menu>
    )
  }
}
export default TopMenu