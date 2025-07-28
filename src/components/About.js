import React from "react";
import Links from "./Links";

class About extends React.Component{
  render(){
    return(
      <div id="about">
        <h1>{this.props.title}</h1>
        <p>{this.props.bio && this.props.bio.length > 1 ?(<p>{this.props.bio}</p>) : null}</p>
        <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
        <Links github={this.props.links.github} linkedin={this.props.links.linkedin} />
      </div>
    )
  }
}
export default About;

