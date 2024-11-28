import React from "react";
import HomeTitle from "./title/HomeTItle";
import DescriptionTitle from "./descriptionTitle/DescriptionTitle";
import ShopNow from "@/components/buttons/shopNow/ShopNow";
import ImageTitle from "./imageTitle/ImageTitle";
import styles from "./titleSection.module.scss";
import ProductAnalytics from "@/components/home/productsAnalycs/ProductAnalytics";

const TitleSection = () => {
  return (
    <>
      <div className={styles.title_section}>
        <div className={styles.title_group}>
          <HomeTitle />
          <DescriptionTitle />
          <ShopNow />
          <ProductAnalytics />
        </div>
        <div className={styles.image_title_section}>
          <ImageTitle />
        </div>
      </div>
    </>
  );
};

export default TitleSection;
