import React from "react";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brands}>
          <p className={styles.brand1}>WiFi Kings – Internet Made Easy</p>
          <p className={styles.brand2}>DaVinci Dynamics LLC</p>
          <p className={styles.tagline}>Dealer Infrastructure Built For Scale</p>
          <p className={styles.location}>Based in Michigan</p>
        </div>
        <div className={styles.contacts}>
          <div className={styles.contactGroup}>
            <span className={styles.contactLabel}>Dealer Applications</span>
            <a href="mailto:partnerships@davincidynamics.ai" className={styles.contactLink}>
              partnerships@davincidynamics.ai
            </a>
          </div>
          <div className={styles.contactGroup}>
            <span className={styles.contactLabel}>Sales Inquiries</span>
            <a href="mailto:sales@davincidynamics.ai" className={styles.contactLink}>
              sales@davincidynamics.ai
            </a>
          </div>
          <div className={styles.contactGroup}>
            <span className={styles.contactLabel}>Active Partners</span>
            <a href="mailto:projects@davincidynamics.ai" className={styles.contactLink}>
              projects@davincidynamics.ai
            </a>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>© {currentYear} DaVinci Dynamics LLC · WiFi Kings. All rights reserved.</p>
      </div>
    </footer>
  );
};
