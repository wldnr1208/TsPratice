import React from "react";
import { useAuth } from "../../hooks/useAuth";
import { Navigate } from "react-router-dom";
import OrderList from "./order-list/OrderList";

export default function OrderPage() {
  const { isAuth } = useAuth();

  if (!isAuth) return <Navigate to="/" />;
  return (
    <div className="page">
      <div className="container">
        <h1>주문히스토리</h1>
        <OrderList />
      </div>
    </div>
  );
}
