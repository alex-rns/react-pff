import React from 'react'
import './Button.css'
import { NavLink } from 'react-router-dom';
//components

class Button extends React.Component {
  render() {
    return (
      <NavLink to={'/' + this.props.link}>
        <button className={'button ' + this.props.welcome}>
          Подробнее
        </button>
      </NavLink>
    )
  }
}

export default Button