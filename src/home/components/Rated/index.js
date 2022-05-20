import React from "react";
import styles from "./Rated.module.css";

const Rated = () => {
  return (
    <section className={styles.rated}>
      <div className={styles.rated_left}>
        <h1>The top-rated</h1>
        <h1>destination for quality service</h1>
        <h1>and wellness</h1>
        <p>
          One solution, one software. Trusted by the best in the artisans and
          the handwork industry.
        </p>
      </div>
      <div className={styles.rated_right}>
        <div className={styles.rr_}>
          <h1>60,000+</h1>
          <p>partner businesses</p>
        </div>
        <div className={styles.rr_}>
          <h1>150,000+</h1>
          <p>stylists and professionals</p>
        </div>
        <div className={styles.rr_}>
          <h1>400 million+</h1>
          <p>appointments booked</p>
        </div>
        <div className={styles.rr_}>
          <h1>120+ countries</h1>
          <p>with Fresha available</p>
        </div>
      </div>
    </section>
  );
};

export default Rated;
