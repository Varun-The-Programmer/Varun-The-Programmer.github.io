import React from "react";

import styles from "./Extracurriculars.module.css";
import { getImageUrl } from "../../utils";

export const Extracurriculars = () => {
  return <section className={styles.container} id="extracurriculars">
    <h2 className={styles.title}>Extracurriculars</h2>
    <div className={styles.content}>
      <p>
        _________________
      </p>
    </div>
    <ul className={styles.aboutItems}>
      <li className={styles.aboutItem}>
        <img className={styles.infoItem} src="/assets/extracurriculars/mathlink.png" alt="Math Icon" />
        <div className={styles.aboutItemsText}>
          <h3>Mathlink</h3>
          <p className={styles.randomLine}>
          September 2024 - Present
          </p>
          <p className={styles.randomLine}>
          Mathlink is a math enrichment program at Carleton University for higher level maths. 
          </p>
        </div>
      </li>
      <li className={styles.aboutItem}>
        <img className={styles.infoItem} src="/assets/extracurriculars/band.png" alt="Band Icon" />
        <div className={styles.aboutItemsText}>
          <h3>Concert Band Member</h3>
          <p className={styles.randomLine}>
          September 2023 - June 2025
          </p>
          <p className={styles.randomLine}>
          I was a member of the repertoire band at my school where I played the flute. 
          </p>
        </div>
      </li>
      <li className={styles.aboutItem}>
        <img className={styles.infoItem} src="/assets/extracurriculars/badmintonicon.png" alt="Badminton Icon" />
        <div className={styles.aboutItemsText}>
          <h3>Badminton</h3>
          <p className={styles.randomLine}>
          September 2023 - Present
          </p>
          <p className={styles.randomLine}>
          I have been training badminton at an academy and playing recreationally. I also participate in many tournaments. I was also part of my school team.
          </p>
        </div>
      </li>
      <li className={styles.aboutItem}>
        <img className={styles.infoItem} src="/assets/extracurriculars/oyc.png" alt="OYC Icon" />
        <div className={styles.aboutItemsText}>
          <h3>Ottawa Youth Council Member</h3>
          <p className={styles.randomLine}>
          May 2025 - Present
          </p>
          <p className={styles.randomLine}>
          As a member, I participate in leadership events and other workshops to improve Ottawa with experts in the field and other youth.
          </p>
        </div>
      </li>
      <li className={styles.aboutItem}>
        <img className={styles.infoItem} src="/assets/extracurriculars/crosscountry.png" alt="Cross Country Icon" />
        <div className={styles.aboutItemsText}>
          <h3>Cross Country</h3>
          <p className={styles.randomLine}>
          September 2024 - November 2024
          </p>
          <p className={styles.randomLine}>
          I was on the school cross country team, where I participated in meets. 
          </p>
        </div>
      </li>
      <li className={styles.aboutItem}>
        <img className={styles.infoItem} src="/assets/extracurriculars/lifeguarding.png" alt="Lifeguarding Icon" />
        <div className={styles.aboutItemsText}>
          <h3>Lifeguarding Training</h3>
          <p className={styles.randomLine}>
          January 2025 - Present
          </p>
          <p className={styles.randomLine}>
          I am training to be a lifeguard and have completed the first two courses. 
          </p>
        </div>
      </li>
    </ul>
  </section>
}