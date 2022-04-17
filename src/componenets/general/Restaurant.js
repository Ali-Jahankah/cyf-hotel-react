import React from "react";
import "../../styles/retaurant.css";
import Order from "./Order";
const Restaurant = () => {
  return (
    <div className="restaurant_cont">
      <h3>Restaurant Orders</h3>
      <div className="orders_div">
        <table>
          <tbody>
            <Order orderType="Pizza" />
            <Order orderType="Salads" />
            <Order orderType="Chocolate Cake" />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Restaurant;
