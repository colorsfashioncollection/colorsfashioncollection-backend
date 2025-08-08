/* external imports */
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

/* create purchase schema */
const purchaseSchema = new mongoose.Schema(
  {
    // for customer
    customer: {
      type: ObjectId,
      ref: "User",
    },

    // for products
    products: [
      {
        product: {
          type: ObjectId,
          ref: "Product",
        },

        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],

    // for customer ID
    customerId: {
      type: String,
      required: true,
    },

    // for order ID
    orderId: {
      type: String,
      required: true,
    },

    // for total amount
    totalAmount: {
      type: Number,
      required: true,
    },

    // for shipping address
    shippingAddress: {
      type: String,
      default: "",
      trim: true,
      maxLength: [500, "Shipping address would be at most 500 characters"],
    },

    // for address difference
    diffAddr: {
      type: Boolean,
      default: false,
    },

    // for delivery type
    deliveryType: {
      type: String,
      enum: ["INSIDE_DHAKA", "OUTSIDE_DHAKA"],
      default: "INSIDE_DHAKA",
    },

    // for payment
    payment: {
      type: String,
      default: "CASH_ON_DELIVERY",
      trim: true,
      maxLength: [100, "Payment field would be at most 100 characters"],
    },

    // order status
    status: {
      type: String,
      enum: ["pending", "delivered"],
      default: "pending",
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

/* create purchase model */
const Purchase = mongoose.model("Purchase", purchaseSchema);

/* export purchase model */
module.exports = Purchase;
