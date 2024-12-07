import React from "react";
import styles from "./newsLetter.module.scss";
import { nwFont } from "@/utils/fonts/LocalFonts";
const NewsLetter = () => {
  return (
    <div className={styles.news_letter}>
      <div className={`${styles.news_letter_title} ${nwFont.className}`}>
        stay upto date about our latest offers
      </div>
      <div className={styles.news_letter_form}>
        <div className={styles.news_letter_form_container}>
          <div className={styles.news_letter_input_container}>
            <input
              type="email"
              className={styles.news_letter_input}
              placeholder="Enter your email address"
            />
          </div>
          <div className={styles.news_letter_btn_container}>
            <button>Subscribe to Newsletter</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
