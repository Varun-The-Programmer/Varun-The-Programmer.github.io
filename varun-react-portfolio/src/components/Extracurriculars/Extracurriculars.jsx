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
          September 2024 - April 2026
          </p>
          <p className={styles.randomLine}>
          Mathlink is a math enrichment program at Carleton University for higher level maths. Helped to imporve my critical thinking skills and taught me to always bring a critical lens to any problem.
          </p>
        </div>
      </li>
      <li className={styles.aboutItem}>
        <img className={styles.infoItem} src="/assets/extracurriculars/lifeguarding.png" alt="Lifeguarding Icon" />
        <div className={styles.aboutItemsText}>
          <h3>Trained Lifeguard</h3>
          <p className={styles.randomLine}>
          January 2025 - June 2026
          </p>
          <p className={styles.randomLine}>
          Completed several consecutive course (Bronze Medallion, Bronze Cross, Standard First Aid, Emergency First Aid, National Lifeguard), mastering emergency-response skills and clear team communication under stressful conditions.
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
          Played flute in the school repertoire band, rehearsing arrangements and collaborating closely other musicians to prepare for seasonal concerts. 
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
          Trained professionally with a club for two years. Participated in several local torunaments and was part of the school team for three consecutive years, where I learned to work better with other people.
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
          Participated in leadership events and other workshops to improve Ottawa with experts in the field and other youth.
          </p>
        </div>
      </li>
      <li className={styles.aboutItem}>
        <img className={styles.infoItem} src="/assets/extracurriculars/crosscountry.png" alt="Cross Country Icon" />
        <div className={styles.aboutItemsText}>
          <h3>Cross Country</h3>
          <p className={styles.randomLine}>
          September 2024 - November 2025
          </p>
          <p className={styles.randomLine}>
          Was on the school cross country team for two consecutive years where I trained multiple times a week after school to participate in local school meets.
          </p>
        </div>
      </li>
    </ul>
  </section>
}