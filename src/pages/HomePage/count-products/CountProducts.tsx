import React from "react";
import { useAppSelector } from "../../../hooks/redux";
import styles from "./CountProducts.module.scss";

export default function CountProducts() {
  const { products, isLoading } = useAppSelector(
    (state) => state.productsSlice
  );

  return (
    <div className={styles.count_products}>
      {!isLoading && <p>Showing: {products.length} items</p>}
    </div>
  );
}
