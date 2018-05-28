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
      isOpen : false
    })
  };

  render(){
    return(
      <Menu width={ '20%' } isOpen={this.state.isOpen} className="top-menu" >
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