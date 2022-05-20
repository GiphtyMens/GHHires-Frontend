import React from "react";
import styles from "./Category.module.css";

const Category = () => {
  return (
    <section className={styles.category}>
      <div className={styles.category_text}>
        <h3>Our welders offer quality handwork</h3>
        {/* <br /> */}
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
          molestiae nisi nostrum minima sed repellendus delectus eveniet, eaque
          ex temporibus porro? Quod qui aut, dignissimos ipsa ratione repellat
          vero.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
          molestiae nisi nostrum minima sed repellendus delectus eveniet, eaque
          ex temporibus porro? Quod qui aut, dignissimos ipsa ratione repellat
          vero.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
          molestiae nisi nostrum minima sed repellendus delectus eveniet, eaque
          ex temporibus porro? Quod qui aut, dignissimos ipsa ratione repellat
          vero.
        </p>
      </div>
      <div className={styles.category_img}></div>
    </section>
  );
};

export default Category;
