import React from "react";
import FiltersCategory from "./filter-category/FiltersCategory";

export default function HomePage() {
  return (
    <div className="page">
      <div className="container">
        <h1>Products</h1>
        <FiltersCategory />
      </div>
    </div>
  );
}
