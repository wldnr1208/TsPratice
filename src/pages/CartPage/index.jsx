import React from "react";
import { useAppSelector } from "../../hooks/redux";
import CartEmpty from "../../components/cart-empty/CartEmpty";
import Checkout from "./checkout/Checkout";
import CartList from "../CartPage/cart-list/CartList";
export default function CartPage() {
  const { products } = useAppSelector((state) => state.cartSlice);
  return (
    <div className="page">
      {!products.length ? (
        <CartEmpty title="Cart" />
      ) : (
        <div className="container">
          <h1>장바구니</h1>
          <CartList />
          <Checkout />
        </div>
      )}
    </div>
  );
}
