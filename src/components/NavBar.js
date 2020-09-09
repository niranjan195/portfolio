import React, { Component } from "react";
import { Link } from "react-scroll";
import "./NavBar.css";

const responsiveIcons = ["fa fa-bars", "fa fa-times"];

export class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      responsiveIconIndex: 0,
      display: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      responsiveIconIndex: 1 - this.state.responsiveIconIndex,
      display: !this.state.display,
    });
  }
  render() {
    return (
      <div className={this.state.display ? "nav-bar display" : "nav-bar"}>
        <ul>
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            duration={1500}
          >
            <li className="nav-item">Home</li>
          </Link>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={1500}
          >
            <li className="nav-item">About</li>
          </Link>
          <Link
            activeClass="active"
            to="resume"
            spy={true}
            smooth={true}
            duration={1500}
          >
            <li className="nav-item">Resume</li>
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={1500}
          >
            <li className="nav-item">Contact</li>
          </Link>
          <li className="nav-item icon">
            <i
              className={responsiveIcons[this.state.responsiveIconIndex]}
              onClick={this.handleClick}
            ></i>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
