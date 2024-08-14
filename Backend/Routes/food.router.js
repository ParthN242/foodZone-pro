const express = require("express");
const {
  createFoodItem,
  getAllFoodItem,
  updateFoodItem,
  deleteFoodItem,
} = require("../Controllers/food.controller");
const verifyUser = require("../Middleware/verifyUser");
const isAdmin = require("../Middleware/isAdmin");

const router = express.Router();

router
  .post("/create", verifyUser, isAdmin, createFoodItem)
  .get("/get", verifyUser, getAllFoodItem)
  .patch("/update/:id", verifyUser, isAdmin, updateFoodItem)
  .delete("/delete/:id", verifyUser, isAdmin, deleteFoodItem);
module.exports = router;
