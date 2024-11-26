import React from "react";
import styles from "./brands.module.scss";

const Brands = () => {
  return (
    <>
      <div className={styles.brands_container}>
        <ul>
          <li className={styles.versace}>versace</li>
          <li className={styles.zara}>zara</li>
          <li className={styles.gucci}>gucci</li>
          <li className={styles.prada}>prada</li>
          <li className={styles.calvin_klein}>calvin klein</li>
        </ul>
      </div>
    </>
  );
};

export default Brands;
