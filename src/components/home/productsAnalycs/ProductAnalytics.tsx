import React from "react";
import styles from "./productsAnalytics.module.scss";
const ProductAnalytics = () => {
  return (
    <div className={styles.brands_analytics}>
      <div className="international-brands">
        <div className={`brands-numbers ${styles.analytics_numbers}`}>
          {Number(200).toLocaleString("US")}+
        </div>
        <span>international brands</span>
      </div>
      <div className="high-quality-products">
        <div className={`quality-products-numbers ${styles.analytics_numbers}`}>
          {Number(2000).toLocaleString("US")}+
        </div>
        <span>high-quality products</span>
      </div>
      <div className="happy-customers">
        <div className={`happy-customers-numbers ${styles.analytics_numbers}`}>
          {Number(30000).toLocaleString("US")}+
        </div>
        <span>happy customers</span>
      </div>
    </div>
  );
};

export default ProductAnalytics;
