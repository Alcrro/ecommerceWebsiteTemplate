import React from "react";
import styles from "./brands.module.scss";
import { ckFont, gucci, prada, versace, zara } from "@/utils/fonts/LocalFonts";

const Brands = () => {
  return (
    <>
      <div className={styles.brands_container}>
        <ul>
          <li className={versace.className}>versace</li>
          <li className={zara.className}>zara</li>
          <li className={gucci.className}>gucci</li>
          <li className={prada.className}>prada</li>
          <li className={ckFont.className}>calvin klein</li>
        </ul>
      </div>
    </>
  );
};

export default Brands;
