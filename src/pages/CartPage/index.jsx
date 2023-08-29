import React from "react";
import { useAppSelector } from "../../hooks/redux";
import CartEmpty from "../../components/cart-empty/CartEmpty";
import CardList from "../HomePage/card-list/CardList";
import Checkout from "./checkout/Checkout";

export default function CartPage() {
  const { products } = useAppSelector((state) => state.cartSlice);
  return (
    <div className="page">
      {!products.length ? (
        <CartEmpty title="Cart" />
      ) : (
        <div className="container">
          <h1>장바구니</h1>
          <CardList />
          <Checkout />
        </div>
      )}
    </div>
  );
}
