import React from "react";
import styles from "./Career.module.css";

const Career = () => {
  return (
    <section className={styles.career}>
      <div className={styles.career_left}>
        <h1>Get 10x job offers with your skills</h1>
        <p>
          We get you connected to over 20,000 customers! Join our global mission
          to connect artisans to their respective customers.
        </p>
        <div className={styles.r1}>
          <h2>Accra, East Legon</h2>
          <span>36,000 jobs</span>
        </div>
        <div className={styles.r2}>
          <h2>Tema, Oasis</h2>
          <span>26,000 jobs</span>
        </div>
        <div className={styles.r3}>
          <h2>Cape Coast, Ayifua Estate</h2>
          <span>10,000 jobs</span>
        </div>
        <div className={styles.r4}>
          <h2>Takoradi, Anaji</h2>
          <span>20,000 jobs</span>
        </div>
        <button>Learn more</button>
      </div>
      <div className={styles.career_right}>
        <div className={styles.cr_first}>
          <div className={styles.cr_img1}></div>
          <div className={styles.cr_img2}></div>
        </div>
        <div className={styles.cr_second}>
          <div className={styles.cl_img1}></div>
          <div className={styles.cl_img2}></div>
        </div>
      </div>
    </section>
  );
};

export default Career;
