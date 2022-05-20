import React, { useState, useEffect } from "react";
import styles from "./shops.module.css";
import Navbar from "../../components/Navbar";

const Shops = () => {
  const [shops, setShops] = useState([]);

  useEffect(() => {
    getShops();
  });

  const getShops = async () => {
    const res = await fetch("https://expensive-fish-dress.cyclic.app/api/shop");
    const data = await res.json();
    console.log(data[0].shops);
    // const allShops = await data.shops;
    // console.log(allShops);
    setShops([...shops, data]);
  };

  if (!shops) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  // console.log(shops);

  return (
    <>
      <Navbar />
      <div className={styles.main_page}>
        <div className={styles.first_row}>
          {shops.map((shop, idx) => (
            <div className={styles.fr_fb} key={idx}>
              <img src={shop.photo} alt="" />
              <h3>{shop.name}</h3>
              <p>{shop.address}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Shops;
