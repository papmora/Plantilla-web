import React, { Component } from "react";
import "./Image.css";

class Image extends Component {
  render() {
    return (
      <div className="blockImage">
        <img
          src={this.props.source}
          alt={this.props.detalle}
          width={this.props.width}
          height={this.props.height}
        />
        <div className="textContainer">
          <p className="font-weight-bold">{this.props.detalle}</p>
        </div>
      </div>
    );
  }
}

export default Image;
