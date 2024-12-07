"use client";
import { UseToggleProvider } from "@/contexts/ToggleProvider";
import { IFooterData } from "@/types/FooterMenu.types";
import Link from "next/link";
import React, { ReactNode, useState } from "react";
import styles from "./groupFooter.module.scss";
import { generateLink } from "@/utils/generateLink";
const GroupFooter = ({ item }: { item: IFooterData }) => {
  const { isToggled, toggleVisibility } = UseToggleProvider();

  const [isShowed, setIsShowed] = useState(-1);

  const isOpened = (id: number) => {
    toggleVisibility("show_footer_list");
    if (item.id === isShowed) {
      setIsShowed((prev) => -1);
    } else {
      setIsShowed(id);
    }
  };

  return (
    <div className={styles.footer_group} onClick={() => isOpened(item.id)}>
      <div
        key={item.id}
        className={`${styles.footer_list_title} ${
          isShowed === item.id ? styles.rotate : ""
        }`}
      >
        {item.label}
      </div>
      <ul
        className={`${styles.footer_group_list} ${
          isShowed === item.id ? styles.isOpened : ""
        }`}
      >
        {item.label === "alcrro" &&
          item.menuLink?.map((mLink, key) => (
            <Link
              href={`${mLink.link}`}
              className={`${styles[mLink.name]}`}
              key={key}
              target="_blank"
            ></Link>
          ))}
        {item.menu?.map((menu, key) => (
          <li key={key}>
            <Link href={`/help/${generateLink(menu)}`}>{menu}</Link>
            {item.label === "alcrro" && (
              <Link href={`/help/${generateLink(menu)}`}>{menu}</Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GroupFooter;
