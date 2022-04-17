import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";
const Order = ({ orderType }) => {
  const [orders, setOrders] = useState(0);
  const orderOne = () => {
    setOrders(() => orders + 1);
  };
  return (
    <tr>
      <td>{orderType}</td>
      <td>{orders}</td>
      <td>
        <RestaurantButton orderOne={orderOne} />
      </td>
    </tr>
  );
};

export default Order;
