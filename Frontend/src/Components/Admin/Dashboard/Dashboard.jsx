import React, { useEffect, useState } from "react";
import AdminHeader from "../Header/AdminHeader";
import DashboardCard from "./DashboardCard";
import axios from "axios";

const Dashboard = () => {
  const [user, setUser] = useState(0);
  const [foodItems, setFoodItems] = useState(0);
  const [orders, setOrders] = useState(0);

  useEffect(() => {
    const fetchAll = async () => {
      const users = axios.get("/api/user/all");
      const foodItems = axios.get("/api/food/get");
      const orders = axios.get("/api/order/admin");
      await Promise.all([users, foodItems, orders]).then((responses) => {
        setUser(responses[0].data.users.length);
        setFoodItems(responses[1].data.food.length);
        setOrders(responses[2].data.orders.length);
      });
    };
    fetchAll();
  }, []);

  return (
    <div className="flex flex-col max-h-screen">
      <AdminHeader pageTitle={"Dashboard"} />
      <div className="px-8 py-4 flex items-center justify-between gap-4 flex-wrap overflow-auto cartScrollbar">
        <DashboardCard title={"User"} value={user} />
        <DashboardCard title={"Food"} value={foodItems} />
        <DashboardCard title={"Order"} value={orders} />
      </div>
    </div>
  );
};

export default Dashboard;
