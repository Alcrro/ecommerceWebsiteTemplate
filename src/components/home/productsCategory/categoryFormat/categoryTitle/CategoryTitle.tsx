import React from "react";
import style from "./categoryTitle.module.scss";

const CategoryTitle = ({
  description,
  font,
}: {
  description: string;
  font: any;
}) => {
  return (
    <div className={`${style.category_title} ${font.className}`}>
      {description}
    </div>
  );
};

export default CategoryTitle;
