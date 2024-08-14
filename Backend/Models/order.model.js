const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    userEmail: String,
    phone: String,
    address: String,
    postalCode: String,
    city: String,
    country: String,
    cartItems: Object,
    subTotal: Number,
    paid: { type: Boolean, default: true },
  },
  { timestamps: true }
);
const Order = mongoose.models?.Order || mongoose.model("Order", OrderSchema);

module.exports = Order;
