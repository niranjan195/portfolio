import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase, faDownload } from "@fortawesome/free-solid-svg-icons";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faBootstrap,
  faPython,
  faNodeJs,
  faReact,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import "./About.css";

export class About extends Component {
  render() {
    return (
      <div id="about" className="about-container">
        <div className="content">
          <div className="content-image">
            <img src={require("../profile3.png")} alt="profile" id="profile" />
            <h1>About Me: </h1>
            <p>
              Information Science Graduate looking to obtain the position as a
              Software developer. I have experience working as part of a team
              and individually and use a creative approach to solve problem.
            </p>
            <a
              href="https://drive.google.com/file/d/10WwJtfZvDeGgpfVmKOJNnM4tVZXKCzoh/view"
              id="download-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faDownload} size="0.5x" id="icon" />
              Download Resume
            </a>
          </div>
          <div className="content-text">
            <h1>What I Do:</h1>
            <ul className="dev-icons">
              <li className="dev-icon">
                <FontAwesomeIcon
                  icon={faHtml5}
                  size="2x"
                  className="font-awesome-icon"
                />
                <p>HTML5</p>
              </li>
              <li className="dev-icon">
                <FontAwesomeIcon
                  icon={faCss3Alt}
                  size="2x"
                  className="font-awesome-icon"
                />
                <p>CSS3</p>
              </li>
              <li className="dev-icon">
                <FontAwesomeIcon
                  icon={faJs}
                  size="2x"
                  className="font-awesome-icon"
                />
                <p>JavaScript</p>
              </li>
              <li className="dev-icon">
                <FontAwesomeIcon
                  icon={faBootstrap}
                  size="2x"
                  className="font-awesome-icon"
                />
                <p>Bootstrap</p>
              </li>
              <li className="dev-icon">
                <FontAwesomeIcon
                  icon={faPython}
                  size="2x"
                  className="font-awesome-icon"
                />
                <p>Python</p>
              </li>
              <li className="dev-icon">
                <FontAwesomeIcon
                  icon={faNodeJs}
                  size="2x"
                  className="font-awesome-icon"
                />
                <p>NodeJS</p>
              </li>
              <li className="dev-icon">
                <FontAwesomeIcon
                  icon={faReact}
                  size="2x"
                  className="font-awesome-icon"
                />
                <p>ReactJS</p>
              </li>
              <li className="dev-icon">
                <FontAwesomeIcon
                  icon={faGithub}
                  size="2x"
                  className="font-awesome-icon"
                />
                <p>GitHub</p>
              </li>
              <li className="dev-icon">
                <FontAwesomeIcon
                  icon={faDatabase}
                  size="2x"
                  className="font-awesome-icon"
                />
                <p>SQL</p>
              </li>
            </ul>
            <p>⚡ Create Server Side Web Apps with interactive UI</p>
            <p>⚡ Create Simple CRUD RESTful APIs </p>
            <p>⚡ Great Knowlage of SQL and No-SQL Databases</p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
