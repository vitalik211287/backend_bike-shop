// const Product = require("../../models/product")
const products = require("../../data/velo.json");

const getAll = async (req, res) => {
  res.json({
    status: "success",
    code: 200,
    data: {
      result: products,
    },
  });
};

module.exports = getAll;
