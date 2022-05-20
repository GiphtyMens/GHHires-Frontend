import React from "react";
import { useUserState } from "../../../store/userStore";
import styles from "../../../Admin/Nav/index";
import { ImLocation2 } from "react-icons/im";

const ProfileNav = () => {
  const user = useUserState((state) => state.user);
  console.log(user);
  return (
    <section className={styles.admin_nav}>
      {/* <div className={styles.ad_img}>
        <img src={shop.photo} alt="" />
      </div> */}
      <div className={styles.ad_info}>
        <h1>{user.name}</h1>
        <p>Tel: 0{user.phone}</p>
        <p>
          <ImLocation2 />
          {user.address}, {user.city}
        </p>
      </div>
    </section>
  );
};

export default ProfileNav;
