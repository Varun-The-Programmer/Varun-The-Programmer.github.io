import React from "react";

import styles from "./Skills.module.css";
import skills from "../../data/skills.json";

const categories = [...new Set(skills.map((skill) => skill.category))];

export const Skills = () => {
  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.categories}>
        {categories.map((category) => (
          <div key={category} className={styles.category}>
            <h3 className={styles.categoryTitle}>{category}</h3>
            <div className={styles.skillGrid}>
              {skills.filter((skill) => skill.category === category).map((skill, id) => (
                  <div key={id} className={styles.skill}>
                    <div className={styles.skillImageContainer}>
                      <img src={skill.image} alt={skill.name} />
                    </div>
                    <p>{skill.name}</p>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};