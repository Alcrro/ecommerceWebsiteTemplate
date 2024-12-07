"use client";
import { useAddToContext } from "@/contexts/AddToProvider";
import styles from "./favoriteNotification.module.scss";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const FavoriteNotification = () => {
  const { state } = useAddToContext();
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY === 0); // Check if the page is at the top
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup on component unmount
    };
  }, []);

  return (
    <>
      {state.favorites.length > 0 && (
        <Link
          href={"/favorite"}
          className={`${styles.favorites_products} ${
            isTop ? styles.down : styles.up
          }`}
        >
          <div>
            <div className={styles.jewel}>{state.favorites.length}</div>
          </div>
        </Link>
      )}
    </>
  );
};

export default FavoriteNotification;
