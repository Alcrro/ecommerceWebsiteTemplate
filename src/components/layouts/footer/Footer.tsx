import React from "react";
import styles from "./footer.module.scss";
import FooterMenu from "./footerMenu/FooterMenu";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <FooterMenu />
    </footer>
  );
};

export default Footer;
