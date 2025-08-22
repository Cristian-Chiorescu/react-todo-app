import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <div className={styles.logo}>
        <p>
          <a href="#outer-container">CristianChiorescu</a>
        </p>
      </div>
      <div className={styles["portfolio-link"]}>
        <a
          href="https://cristianchiorescu.com/"
          className={styles["back-to-portfolio-link"]}
          rel="noopener noreferrer"
        >
          ← Back to Portfolio
        </a>
      </div>
      <div className={styles.title}>
        <p>To-Do List</p>
      </div>
    </header>
  );
};

export default Header
