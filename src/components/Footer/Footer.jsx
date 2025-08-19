import React from "react";
import styles from "./Footer.module.css";

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
            >
              <i className={styles["fab fa-github"]}></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/cristianchiorescu/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className={styles["fab fa-linkedin"]}></i>
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