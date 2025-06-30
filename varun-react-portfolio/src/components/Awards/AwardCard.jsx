import React from "react";

import styles from "./AwardCard.module.css";
import { getImageUrl } from "../../utils";

export const AwardCard = ({
  award: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className={styles.container}>
      <img
        src={imageSrc}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};