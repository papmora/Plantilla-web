import React, { Component } from "react";
import "./Navigation.css";

class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-black">
        <a className="navbar-brand" href="#">
          {this.props.projectname}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="#">
              {this.props.primero} <span className="sr-only">(current)</span>
            </a>
            <a className="nav-item nav-link" href="#">
              {this.props.segundo}
            </a>
            <a className="nav-item nav-link" href="#">
              {this.props.tercero}
            </a>
            <a
              className="nav-item nav-link disabled"
              href="#"
              tabIndex="-1"
              aria-disabled="true"
            >
              {this.props.cuarto}
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
