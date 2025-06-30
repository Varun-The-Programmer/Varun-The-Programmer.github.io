import React from "react";

import styles from "./Awards.module.css";

import awards from "../../data/awards.json";
import { AwardCard } from "./AwardCard";

export const Awards = () => {
  return (
    <section className={styles.container} id="awards">
      <h2 className={styles.title}>Awards & Skills</h2>
      <div className={styles.awards}>
        {awards.map((award, id) => {
          return <AwardCard key={id} award={award} />;
        })}
      </div>
    </section>
  );
};