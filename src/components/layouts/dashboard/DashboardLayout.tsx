import OfferBadge from "@/components/offers/OfferBadge";
import React, { ReactNode } from "react";
import Navbar from "../navbar/Navbar";
import styles from "./dashboardLayout.module.scss";
import Footer from "../footer/Footer";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <OfferBadge />
      <main>
        <Navbar />
        <div className={styles.main}>{children}</div>
        <Footer />
      </main>
    </>
  );
};

export default DashboardLayout;
