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
          <h3>Grade 12 Student</h3>
          <p className={styles.randomLine}>
            Grade 12 student at Holy Trinity Catholic High School, planning to pursue Computer or Electrical Engineering. Active on Student Council as Secretary/Treasurer (and Grade 11 Rep last year) while helping start and run a couple of student clubs.
          </p>
        </div>
      </li>
      <li className={styles.aboutItem}>
        <img className={styles.infoItem} src="/assets/about/programmingIcon.png" alt="Programming Icon" />
        <div className={styles.aboutItemsText}>
          <h3>Developer & Builder</h3>
          <p>
          I love coding and tinkering with electronics, always curious to figure out how things work. Passionate about learning new technologies and building projects across both software and hardware.
          </p>
        </div>
      </li>
      <li className={styles.aboutItem}>
        <img className={styles.infoItem} src="/assets/about/techIcon.png" alt="Tech Icon" />
        <div className={styles.aboutItemsText}>
          <h3>Technology Enthusiast</h3>
          <p>
          I love staying up to date with the newest technology, whether it be new cellphones or self-driving cars. Some of my favourite channels are MrWhoseTheBoss and MKBHD!
          </p>
        </div>
      </li>
      <li className={styles.aboutItem}>
        <img className={styles.infoItem} src="/assets/about/badmintonicon.png" alt="Badminton Icon" />
        <div className={styles.aboutItemsText}>
          <h3>Badminton Lover</h3>
          <p>
          I love to play badminton during my free time. In the past, I have trained professionally and participated in amny compeititons. I have won a few and made a lot of new friends along the way!
          </p>
          
        </div>
      </li>
    </ul>
  </section>
}