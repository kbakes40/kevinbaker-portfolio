"use client";

import React from "react";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <span className={styles.brandName}>WiFi Kings</span>
          <span className={styles.brandSep}>·</span>
          <span className={styles.brandSub}>DaVinci Dynamics LLC</span>
        </div>
        <nav className={styles.nav}>
          <a href="#model" className={styles.navLink}>Dealer Model</a>
          <a href="#apply" className={styles.navLink}>Partner Program</a>
          <a href="#apply" className={styles.navCta}>Apply Now</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
