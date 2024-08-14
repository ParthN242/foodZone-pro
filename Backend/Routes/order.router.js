const express = require("express");
const verifyUser = require("../Middleware/verifyUser");
const {
  getOrder,
  createOrder,
  getOrderItem,
  getAdminOrder,
} = require("../Controllers/order.controller");
const isAdmin = require("../Middleware/isAdmin");

const router = express.Router();

router
  .get("/", verifyUser, getOrder)
  .post("/", verifyUser, createOrder)
  .get("/admin", verifyUser, isAdmin, getAdminOrder)
  .get("/:id", verifyUser, getOrderItem);

module.exports = router;
