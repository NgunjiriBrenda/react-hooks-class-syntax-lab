import React from "react";


class Home extends React.Component{
  render(){
    return(
      <div id="home">
        <h1 style={this.props.color}> <p>{this.props.username}is a Web Developer from{this.props.city}</p>
        </h1>
      
      </div>
    )
  }
}
export default Home;


