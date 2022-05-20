import React from "react";
import styles from "./Profile.module.css";
import SideMenu from "./Layout/SideMenu/index";
import { Outlet } from "react-router-dom";
import ProfileNav from "./components/ProfileNav";

const Profile = () => {
  return (
    <div className={styles.profile}>
      <aside className={styles.aside}>
        <SideMenu />
      </aside>
      <section className={styles.content}>
        <ProfileNav />
        <Outlet />
      </section>
    </div>
  );
};

export default Profile;
