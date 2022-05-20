import React from "react";
import styles from "./Nav.module.css";
import { ImLocation2 } from "react-icons/im";
import { shopUserState } from "../../store/shopStore";

const Nav = () => {
  const shop = shopUserState((state) => state.shop.shop);
  // console.log(shop);
  return (
    <section className={styles.admin_nav}>
      <div className={styles.ad_img}>
        <img src={shop.photo} alt="" />
      </div>
      <div className={styles.ad_info}>
        <h1>{shop.name}</h1>
        <p>Tel: 0{shop.phone}</p>
        <p>
          <ImLocation2 />
          {shop.address}, {shop.city}
        </p>
      </div>
    </section>
  );
};

export default Nav;
