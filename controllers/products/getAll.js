const { Product } = require("../../models/product");
// const products = require("../../data/velo.json");

const getAll = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 10 } = req.query;
  const skip = (page - 1) * limit;
  // res.json({
  //   status: "success",
  //   code: 200,
  //   data: {
  //     result: await JSON.stringify(Product.find()),
  //   },
  // });
  const result = await Product.find({ owner }, "-createdAt -updatedAt", {
    skip,
    limit,
  }).populate("owner", "name email");
  res.json(result);
};

module.exports = getAll;
