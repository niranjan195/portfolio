import React from "react";
import "./Resume.css";

export default function Resume() {
  return (
    <div id="resume" className="container">
      <div className="header education">
        <h1>
          <span>Education</span>
        </h1>
      </div>
      <div className="content-resume1">
        <div className="contents">
          <h1 className="content-header">
            <span>Sapthagiri College of Engineering</span>
          </h1>
          <p className="desg">B.E Information Science</p>
          <p className="place-year">Bangalore, 2016-20</p>
        </div>
      </div>
      <div className="content-resume2">
        <div className="contents">
          <h1 className="content-header">
            <span>Chaitanya PU College</span>
          </h1>
          <p className="desg">
            Higher Secondary Education (12th) Computer Science
          </p>
          <p className="place-year">Sirsi, 2015-16</p>
        </div>
      </div>
      <div className="header">
        <h1>
          <span>Experience</span>
        </h1>
      </div>
      <div className="content-resume3">
        <h1 className="content-header work">
          <span>Nouveau Labs</span>
        </h1>
        <p className="desg">Software Developer Intern</p>
        <p className="place-year">Bangalore, Jan 2020 -July 2020</p>
        <ul className="desc">
          <li>
            Created Asynchronous Server to handle the simultaneous connections
            of multiple clients
          </li>
          <li> Built an API to get the router information.</li>
          <li>Worked on Qtest API to get the test results.</li>
          <li>
            Developed Front End Application to visualize test reports using
            Char.js javascript library
          </li>
        </ul>
      </div>
      <div className="header">
        <h1>
          <span>Volunteer Experience</span>
        </h1>
      </div>
      <div className="content-resume4">
        <h1 className="content-header volunteer">
          <span>ISE Technical Club</span>
        </h1>
        <p className="place-year">Bangalore, 2019</p>
        <ul className="desc">
          <li>
            Co-Founded the programming club Sapthagiri College of Engineering.
          </li>
          <li>
            Held Training Sessions on helping the students to solve Data
            Structure Problems.
          </li>
          <li>Hosted various coding rounds for the student.</li>
        </ul>
      </div>
      <div className="header">
        <h1>
          <span>Skills</span>
        </h1>
      </div>
      <div>
        <div className="content-resume5">
          <div class="w3-light-grey w3-round">
            <div
              className="w3-container w3-blue w3-round"
              style={{ width: "95%" }}
            >
              HTML5
            </div>
          </div>
          <br />
          <div class="w3-light-grey w3-round">
            <div
              className="w3-container w3-blue w3-round"
              style={{ width: "70%" }}
            >
              CSS
            </div>
          </div>
          <br />
          <div class="w3-light-grey w3-round">
            <div
              className="w3-container w3-blue w3-round"
              style={{ width: "90%" }}
            >
              Python
            </div>
          </div>
          <br />
          <div class="w3-light-grey w3-round">
            <div
              className="w3-container w3-blue w3-round"
              style={{ width: "75%" }}
            >
              Java
            </div>
          </div>
          <br />
          <div class="w3-light-grey w3-round">
            <div
              className="w3-container w3-blue w3-round"
              style={{ width: "83%" }}
            >
              SQL
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
