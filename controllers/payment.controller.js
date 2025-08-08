/* internal import */
const paymentService = require("../services/payment.service");

// create payment
exports.createPayment = async (req, res, next) => {
  try {
    console.log("Payment request body:", req.body); // <-- Add this line
    await paymentService.createPayment(req, res);
  } catch (err) {
    next(err);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
};
