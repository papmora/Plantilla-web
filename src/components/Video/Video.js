import React, { Component } from "react";
import "./Video.css";

class Video extends Component {
  render() {
    return (
      <div className="blockVideo">
        <iframe
          className="frameVideo"
          title={this.props.title}
          width={this.props.width}
          height={this.props.height}
          //no olvidar poner /embed/ en el link del video
          src={this.props.source}
          allowFullScreen
        ></iframe>
      </div>
    );
  }
}

export default Video;
