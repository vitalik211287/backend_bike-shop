const Product = require("../../models/product");
// const products = require("../../data/velo.json");

const getAll = async (req, res) => {
  // res.json({
  //   status: "success",
  //   code: 200,
  //   data: {
  //     result: Product.find(),
  //   },
  // });
  const result = await Product.find();
  res.json(result);
};

module.exports = getAll;
