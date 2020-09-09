import React from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobile, faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faTwitter,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

import "./Contact.css";
export default function Contact() {
  return (
    <div id="contact" className="contact-container">
      <h1>
        Contact Me <FontAwesomeIcon id="mobile" icon={faMobile} />
      </h1>
      <p>
        Feel free to get in touch with me. I am always open to discussing new
        projects, ideas or opportunities to be part of your visions.
      </p>
      <div className="contact-icons">
        <a
          href="https://www.linkedin.com/in/niranjan-hegde-692456134/"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          <FontAwesomeIcon icon={faLinkedin} className="linkedin" size="2x" />
        </a>
        <a
          href="https://twitter.com/hegdeniranjan14"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          <FontAwesomeIcon icon={faTwitter} className="twitter" size="2x" />
        </a>
        <a
          href="mailto:hegdeniranjan144@gmail.com"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          <FontAwesomeIcon icon={faGoogle} className="google" size="2x" />
        </a>
      </div>
      <Link
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        duration={1000}
      >
        <FontAwesomeIcon
          icon={faArrowCircleUp}
          size="2x"
          style={{
            backgroundColor: "#ebeeee",
            color: "black",
            marginTop: "2em",
            cursor: "pointer",
          }}
        />
      </Link>
    </div>
  );
}
