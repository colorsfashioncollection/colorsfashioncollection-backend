const Cart = require("../models/cart.model");
const Product = require("../models/product.model");
const Purchase = require("../models/purchase.model");
const User = require("../models/user.model");

/* external import */
require("dotenv").config();

// create payment (COD only)
exports.createPayment = async (req, res) => {
  const items = req.body.cart;

  // create purchase for user
  const purchase = await Purchase.create({
    customer: req.user._id,
    customerId: Date.now().toString(),
    orderId: Date.now().toString(),
    totalAmount: req.body.total,
    products: items.map((item) => ({
      product: item.product._id || item.product,
      quantity: item.quantity,
    })),
    payment: "CASH_ON_DELIVERY",
    shippingAddress: req.body.shippingAddress || "",
    diffAddr: req.body.diffAddr || false,
    deliveryType: req.body.deliveryType || "INSIDE_DHAKA",
  });

  await User.findByIdAndUpdate(req.user._id, {
    $push: { purchases: purchase._id },
    $set: { cart: [] },
  });

  items.forEach(async (item) => {
    await User.findByIdAndUpdate(req.user._id, {
      $push: { products: item.product._id || item.product },
    });
  });

  items.forEach(async (cart) => {
    await Cart.findByIdAndDelete(cart._id);
  });

  items.forEach(async (product) => {
    await Product.findByIdAndUpdate(product.product._id || product.product, {
      $push: { buyers: req.user._id },
    });
  });

  res.status(201).json({
    acknowledgement: true,
    message: "Ok",
    description: "Purchase created successfully (COD)",
    purchase,
  });
};
