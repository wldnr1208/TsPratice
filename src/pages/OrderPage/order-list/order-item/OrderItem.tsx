import React from "react";
import styles from "./OrderItem.module.scss";
import { Link } from "react-router-dom";
import { IProduct } from "../../../../store/products/products.type";

// 주문 아이템 속성 정의
type OrderItemProps = {
  order: IProduct;
};

// 주문 아이템 컴포넌트
export default function OrderItem({ order }: OrderItemProps) {
  return (
    <li className={styles.order_item}>
      <Link to={`/product/${order.id}`}>
        <img src={order.image} alt="제품 카드" />
      </Link>
      <div className={styles.order_description}>
        <h4>{order.category}</h4>
        <h3>{order.title}</h3>
      </div>
      <div className={styles.order_price}>
        <h4>가격:</h4>
        <span>
          $ {order.price} x {order.quantity}
        </span>
      </div>
      <div className={styles.order_total}>
        <h4>합계:</h4>
        <span>$ {order.total}</span>
      </div>
    </li>
  );
}
