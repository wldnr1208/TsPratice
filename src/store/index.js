import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/user.slice";
import categoriesSlice from "./caregories/categories.slice";

export const store = configureStore({
  reducer: {
    userSlice,
    categoriesSlice,
  },
});
