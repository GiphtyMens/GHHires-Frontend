import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import {
  FaTypo3,
  FaAlignJustify,
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.first_row}>
        <h1>
          NA
          <FaTypo3 />
          NA
        </h1>
        <div className={styles.fir_row}>
          <ul>
            <li>
              <FaFacebookF />
            </li>
            <li>
              <FaTwitter />
            </li>
            <li>
              <FaLinkedin />
            </li>
            <li>
              <FaInstagram />
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.second_row}>
        <ul>
          <li className={styles.sr_list}>About Naana</li>
          <li>Careers at Naana</li>
          <li>Customer Support</li>
          <li>Blog</li>
        </ul>
      </div>
      <div className={styles.third_row}>
        <ul>
          <li className={styles.tr_list}>For business</li>
          <li><Link to="/d">For Partners</Link></li>
          <li>Pricing</li>
          <li>Support for Partners</li>
        </ul>
      </div>
      <div className={styles.forth_row}>
        <ul>
          <li className={styles.fr_list}>Legal</li>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
          <li>Terms of Use</li>
        </ul>
      </div>
      <div className={styles.fifth_row}>
        <h1>Free mobile app</h1>
        <button>Download App</button>
      </div>
    </footer>
  );
};

export default Footer;
