const Product = require("../../models/product")

const getAll = async (req, res) => {
  // res.json({
  //   status: "success",
  //   code: 200,
  //   data: {
  //     result: Product,
  //   },
  // });
  const result = await Product.find()
  res.json(result)
};

module.exports = getAll;
