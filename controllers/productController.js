const Product = require('./../models/productModel');

exports.getAllProducts = async function (req, res) {
  try {
    const products = await Product.find();
    res.status(200).json({
      status: 'success',
      data: products,
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err.message,
    });
  }
};

exports.getProductByID = async function (req, res) {
  try {
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err.message,
    });
  }
};

exports.createProduct = async function (req, res) {
  try {
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err.message,
    });
  }
};

exports.updateProduct = async function (req, res) {
  try {
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err.message,
    });
  }
};

exports.deleteProduct = async function (req, res) {
  try {
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err.message,
    });
  }
};