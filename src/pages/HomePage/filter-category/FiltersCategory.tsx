import React from "react";
import styles from "./FiltersCategory.module.scss";
import CategoryTab from "./category-tab/CategoryTab";
import { CategoriesName } from "../../../store/caregories/categories.type";

export default function FiltersCategory() {
  return (
    <div className={styles.fliter_category}>
      <CategoryTab text={"모두"} categoryName={CategoriesName.All} />
      <CategoryTab
        text={"전자기기"}
        categoryName={CategoriesName.Electronics}
      />
      <CategoryTab text={"쥬얼리"} categoryName={CategoriesName.Jewelry} />
      <CategoryTab
        text={"남성의류"}
        categoryName={CategoriesName.MensClothing}
      />

      <CategoryTab
        text={"여성의류"}
        categoryName={CategoriesName.WomensClothing}
      />
    </div>
  );
}
