import React from "react";


class Links extends React.Component{
  render(){
    return(
      <div>
        <h3>{Links.title}</h3>
        <a href={this.props.github}>{this.props.github}</a>
        <a href={this.props.linkedin}>{this.props.linked}</a>
      </div>
    );
  }
}

export default Links;

