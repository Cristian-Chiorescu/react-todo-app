import React from "react";
import styles from "./Footer.module.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () =>{

    const currentYear = new Date().getFullYear()

    return(
        <footer id="footer">
      <div className={styles["footer-content"]}>
        <ul className={styles["social-links"]}>
          <li>
            <a
              href="https://github.com/Cristian-Chiorescu"
              target="_blank"
              aria-label="GitHub"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub}/>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/cristianchiorescu/"
              target="_blank"
              aria-label="LinkedIn"
            rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin}/>
            </a>
          </li>
        </ul>
        <p className={styles["copyright-text"]}>
          &copy; <span id="current-year">{currentYear}</span> Cristian Chiorescu. All
          Rights Reserved.
        </p>
      </div>
    </footer>
    )
}

export default Footer