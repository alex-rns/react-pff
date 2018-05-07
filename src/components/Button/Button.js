import React from 'react'
import './Button.css'

//components

class Button extends React.Component {
  render() {
    return (
      <button className={'button ' + this.props.welcome}>
        Подробнее
      </button>
    )
  }
}

export default Button