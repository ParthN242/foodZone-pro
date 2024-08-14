import React, { useEffect, useState } from "react";
import AdminHeader from "../Header/AdminHeader";
import OrderItems from "./OrderItems";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const { data } = await axios.get("/api/order/admin");
        setOrders(data.orders);
      } catch (error) {
        console.error(error);
      }
    };
    fetchOrders();
  }, []);
  console.log(orders);

  return (
    <section>
      <AdminHeader pageTitle={"Orders"} />
      <div className="box-content m-6">
        <table className="min-w-full">
          <thead>
            <tr className=" border-b border-gray-500 p-2 px-4 text-center">
              <th className="text-left p-4 ">Id</th>
              <th className="p-4">Email</th>
              <th className="p-4">Address</th>
              <th className="p-4">Items</th>
              <th className="p-4">Price</th>
              <th className="text-right p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((item) => (
              <OrderItems item={item} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Orders;
