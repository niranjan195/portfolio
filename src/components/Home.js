import React, { Component } from "react";
import { Link } from "react-scroll";
import { NavBar } from "./NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTwitter,
  faGoogle,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import "./Home.css";

export class Home extends Component {
  render() {
    return (
      <div id="home">
        <NavBar />
        <div className="home-content">
          <h1>
            Hello, I'm Niranjan
            <span id="wave">
              <img
                alt="👋"
                draggable="false"
                src="https://twemoji.maxcdn.com/2/72x72/1f44b.png"
                style={{
                  height: "1em",
                  width: "1em",
                  margin: "0px 0.05em 0px 0.1em",
                  "vertical-align": "-0.1em",
                }}
              />
            </span>
          </h1>
          <p>
            A passionate Developer 🚀 building Web applications with Python /
            JavaScript / Reactjs / Nodejs / and some other cool libraries and
            frameworks.
          </p>
          <div className="social-links">
            <a
              href="https://twitter.com/hegdeniranjan14"
              target="_blank"
              rel="noreferrer noopener nofollow"
            >
              <FontAwesomeIcon
                icon={faTwitter}
                className="twitter fa"
                size="2x"
                style={{
                  backgroundColor: "inherit",
                  color: "inherit",
                }}
              />
            </a>

            <a
              href="https://www.linkedin.com/in/niranjan-hegde-692456134/"
              target="_blank"
              rel="noreferrer noopener nofollow"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="linkedin fa"
                size="2x"
                style={{
                  backgroundColor: "inherit",
                  color: "inherit",
                }}
              />
            </a>
            <a
              href="mailto:hegdeniranjan144@gmail.com"
              target="_blank"
              rel="noreferrer noopener nofollow"
            >
              <FontAwesomeIcon
                icon={faGoogle}
                className="google fa"
                size="2x"
                style={{
                  backgroundColor: "inherit",
                  color: "inherit",
                }}
              />
            </a>
            <a
              href="https://github.com/niranjanhegde144"
              target="_blank"
              rel="noreferrer noopener nofollow"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="github fa"
                size="2x"
                style={{
                  backgroundColor: "inherit",
                  color: "inherit",
                }}
              />
            </a>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="fa fa-arrow-down"
              id="arrow-down"
            ></Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
