import React from 'react'
import './Header.css'
import Logo from '../../img/logo-1.svg'

//components
import TopMenu from "./TopMenu/TopMenu";


class Header extends React.Component {

  constructor() {
    super();
    this.state = {
      isTop: false
    }
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY >= 80;
      if (isTop !== this.state.isTop) {
        this.setState({isTop})
      }
    });
  }


  render() {

    return (
      <div className={this.state.isTop ? "header header-scroll" : "header"}>
        <div className="header-left-side">
          <TopMenu/>
          <div className="logo">
            <img src={Logo} alt="logo"/>
          </div>

        </div>


        <p>38(093) 914-03-55</p>

      </div>

    )
  }

}

export default Header