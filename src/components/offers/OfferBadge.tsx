import React from "react";
import styles from "./offerBadge.module.scss";
import Link from "next/link";

const OfferBadge = () => {
  return (
    <div className={styles.offers_badge_container}>
      <div className={styles.text}>
        Sign up and get 20% off your first order.
      </div>
      <Link href={"/login"} className={styles.link}>
        Sign Up Now
      </Link>
    </div>
  );
};

export default OfferBadge;
