import React from 'react'

//components
import Gall from "../../Gallery/Gallery";




class Glass extends React.Component {
  render(){
    return(
      <div className="test-page second-page-welcome">

        <div className="second-page-info">
          <h2>Роспись по стеклу</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi architecto debitis delectus dolor ea expedita illo rem sed? Alias assumenda, deserunt dolorem ducimus eligendi enim error, esse exercitationem odio omnis provident quibusdam quis recusandae sit suscipit tempora unde voluptate. Assumenda dolore ea eius repudiandae ut. Delectus placeat ut voluptatibus. Aliquid incidunt molestias odio provident qui quisquam, quo voluptas voluptatibus! Accusantium ad aliquam blanditiis.</p>
        </div>

        <Gall/>


      </div>
    )
  }

}

export default Glass