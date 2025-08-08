/* external imports */
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

/* create cart schema */
const cartSchema = new mongoose.Schema(
  {
    // for product
    product: {
      type: ObjectId,
      ref: "Product",
    },

    // for user
    user: {
      type: ObjectId,
      ref: "User",
    },

    // for quantity
    quantity: {
      type: Number,
      default: 1,
    },

    // for user account time stamps
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

/* create cart schema */
const Cart = mongoose.model("Cart", cartSchema);

/* export cart schema */
module.exports = Cart;
