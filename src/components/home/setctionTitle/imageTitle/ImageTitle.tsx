import React from "react";
import Image from "next/image";
import styles from "./imagesTitle.module.scss";
const ImageTitle = () => {
  return (
    <>
      <Image
        src={"/assets/images/homeTitle/dog.png"}
        alt=""
        width={1000}
        height={1000}
        className={styles.portrait}
      />

      <Image
        src={"/assets/images/homeTitle/ball.png"}
        alt=""
        width={1000}
        height={1000}
        className={styles.ball}
      />
    </>
  );
};

export default ImageTitle;
