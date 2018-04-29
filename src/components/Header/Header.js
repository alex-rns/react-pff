import React from 'react'
import './Header.css'

//components
import TopMenu from "./Menu/Menu";


class Header extends React.Component {
  render(){
    return(
      <div className="Header">

        <TopMenu/>

        <p>tel</p>

      </div>

    )
  }

}

export default Header