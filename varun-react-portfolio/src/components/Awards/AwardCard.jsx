import React from "react";

import styles from "./AwardCard.module.css";

export const AwardCard = ({ award: { title, imageSrc, description } }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <img
          src={imageSrc}
          alt={`${title} badge`}
          className={styles.image}
        />
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};