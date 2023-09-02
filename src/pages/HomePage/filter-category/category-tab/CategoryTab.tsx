import { FC } from "react";
import styles from "./CategoryTab.module.scss";
import { setActiveCategory } from "../../../../store/caregories/categories.slice";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import { CategoriesName } from "../../../../store/caregories/categories.type";

type CategoryTabProps = {
  text: string;
  categoryName: CategoriesName;
};

const CategoryTab: FC<CategoryTabProps> = ({ text, categoryName }) => {
  const dispatch = useAppDispatch();
  const category = useAppSelector((state) => state.categoriesSlice);
  console.log(category);

  const getActiveCategory = () => {
    dispatch(setActiveCategory(categoryName));
  };

  return (
    <button
      className={
        categoryName === category
          ? styles.active_category
          : styles.category_button
      }
      onClick={getActiveCategory}
    >
      {text}
    </button>
  );
};
export default CategoryTab;
