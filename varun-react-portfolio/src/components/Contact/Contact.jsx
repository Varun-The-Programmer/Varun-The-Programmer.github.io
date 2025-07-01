import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src="/assets/contact/emailIcon.png" alt="Email icon" />
          <a href="mailto:varungokul2009@hotmail.com">varungokul2009@hotmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src="/assets/contact/linkedinIcon.png"
            alt="LinkedIn icon"
          />
          <a target="_blank" href="https://www.linkedin.com/in/varun-gokul-828465349/">https://www.linkedin.com/varun-gokul</a>
        </li>
        <li className={styles.link}>
          <img src="/assets/contact/githubIcon.png" alt="Github icon" />
          <a target="_blank" href="https://github.com/Varun-The-Programmer">github.com/varuntheprogrammer</a>
        </li>
      </ul>
    </footer>
  );
};