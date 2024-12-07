import React from "react";
import styles from "./footerMenu.module.scss";
import { fetchFooterData } from "@/api/fetchFooterData";

import GroupFooter from "./groupFooter/GroupFooter";

const FooterMenu = async () => {
  const footerData = await fetchFooterData();

  return (
    <div className={styles.footer_menu}>
      <div className={styles.footer_list}>
        {footerData.map((item) => (
          <GroupFooter item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FooterMenu;
