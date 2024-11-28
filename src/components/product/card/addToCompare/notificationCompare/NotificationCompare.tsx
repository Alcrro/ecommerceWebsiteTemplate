"use client";
import React from "react";
import styles from "./notificationCompare.module.scss";
import { useAddToContext } from "@/contexts/AddToProvider";
import Link from "next/link";
import Image from "next/image";
const NotificationCompare = () => {
  const { state, dispatch } = useAddToContext();
  console.log(state.compare.length > 0);

  return (
    <div
      className={`${
        state.compare.length > 0 ? styles.product_compare_notification : ""
      }`}
    >
      <ul>
        {state.compare.map((item) => (
          <li key={item.id} className={styles.product_compare_notification_li}>
            <Link href={""}>
              <Image
                src={`/assets/images/products/${item.image}`}
                alt=""
                width={1000}
                height={1000}
              />
            </Link>
            <div
              className={styles.remove_button_from_compare}
              onClick={() =>
                dispatch({ type: "TOGGLE_COMPARE", payload: item })
              }
            ></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationCompare;
