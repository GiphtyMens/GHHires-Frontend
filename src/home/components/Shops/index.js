import React from "react";
import styles from "./Shops.module.css";

const Shops = () => {
  return (
    <section className={styles.shops}>
      <h1>Featured shops available</h1>
      <div className={styles.shops_cards}>
        <div className={styles.shops_card1}></div>
        <div className={styles.shops_card2}></div>
        <div className={styles.shops_card3}></div>
        <div className={styles.shops_card4}></div>
      </div>
    </section>
  );
};

export default Shops;
