/* internal import */
const productService = require("../services/product.service");

/* add new product */
exports.addProduct = async (req, res, next) => {
  try {
    await productService.addProduct(req, res);
  } catch (error) {
    next(error);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
};

/* get all products */
exports.getProducts = async (req, res, next) => {
  try {
    await productService.getProducts(res);
  } catch (error) {
    next(error);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
};

/* update product */
exports.updateProduct = async (req, res, next) => {
  try {
    await productService.updateProduct(req, res);
  } catch (error) {
    next(error);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
};

/* get a single product */
exports.getProduct = async (req, res, next) => {
  try {
    await productService.getProduct(req, res);
  } catch (error) {
    next(error);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
};

/* filtered products */
exports.getFilteredProducts = async (req, res, next) => {
  try {
    await productService.getFilteredProducts(req, res);
  } catch (error) {
    next(error);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
};

/* delete product */
exports.deleteProduct = async (req, res, next) => {
  try {
    await productService.deleteProduct(req, res);
  } catch (error) {
    next(error);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
};
