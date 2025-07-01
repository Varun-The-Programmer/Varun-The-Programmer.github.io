import React from "react";

import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I’m Varun Gokul</h1>
        <p className={styles.description}>
          I'm a high school student who loves programming and technology. I've made many games and projects, always working to improve my coding and electronics skills. 
        </p>
        <a href="#" className={styles.resumeBtn}>
          Download Resume
        </a>
      </div>
      <img
        src="/assets/hero/heroImage.png"
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};