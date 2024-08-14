const express = require("express");
const verifyUser = require("../Middleware/verifyUser");
const {
  getUserDetail,
  getAllUsers,
  deleteUser,
} = require("../Controllers/user.controller");
const isAdmin = require("../Middleware/isAdmin");

const router = express.Router();

router
  .get("/me", verifyUser, getUserDetail)
  .get("/all", verifyUser, isAdmin, getAllUsers)
  .delete("/:id", verifyUser, isAdmin, deleteUser);

module.exports = router;
