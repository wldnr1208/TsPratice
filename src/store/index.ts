import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/user.slice";
import categoriesSlice from "./caregories/categories.slice";
import productsSlice from "./products/products.slice";
import cartSlice from "./cart/cart.slice";
import productSlice from "./products/product.slice";
import orderSlice from "./order/order.slice";

export const store = configureStore({
  reducer: {
    userSlice,
    categoriesSlice,
    productsSlice,
    cartSlice,
    productSlice,
    orderSlice,
  },
});

//const dispatch = useAppDispatch();

//const { product, isLoading } = useAppSelector((state) => state.productSlice);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
