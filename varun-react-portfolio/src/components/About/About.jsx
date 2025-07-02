import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return <section className={styles.container} id="about">
    <h2 className={styles.title}>About</h2>
    <div className={styles.content}>
      <p>
        _________________
      </p>
    </div>
    <ul className={styles.aboutItems}>
      <li className={styles.aboutItem}>
        <img className={styles.infoItem} src="/assets/about/schoolIcon.png" alt="School Icon" />
        <div className={styles.aboutItemsText}>
          <h3>High-school Student</h3>
          <p className={styles.randomLine}>
          I'm a high school student in Grade 10 at Holy Trinity Catholic High School.
          </p>
        </div>
      </li>
      <li className={styles.aboutItem}>
        <img className={styles.infoItem} src="/assets/about/programmingIcon.png" alt="Programming Icon" />
        <div className={styles.aboutItemsText}>
          <h3>Competitive Programmer</h3>
          <p>
          I have experience coding many websites, games, and programs.
          </p>
        </div>
      </li>
      <li className={styles.aboutItem}>
        <img className={styles.infoItem} src="/assets/about/techicon.png" alt="Tech Icon" />
        <div className={styles.aboutItemsText}>
          <h3>Tech Enthusiasist</h3>
          <p>
          I love staying up to date with the newest technology.
          </p>
        </div>
      </li>
      <li className={styles.aboutItem}>
        <img className={styles.infoItem} src="/assets/about/badmintonicon.png" alt="Badminton Icon" />
        <div className={styles.aboutItemsText}>
          <h3>Badminton Lover</h3>
          <p>
          I love to play badminton and have won many awards for this game.
          </p>
          
        </div>
      </li>
      <li className={styles.aboutItem}>
        <img className={styles.infoItem} src="/assets/about/readingIcon.png" alt="Reading Icon" />
        <div className={styles.aboutItemsText}>
          <h3>Avid Reader</h3>
          <p>
          I love reading books on physics and chemistry. I love fantasy and mystery novels.          </p>
        </div>
      </li>
    </ul>
  </section>
}