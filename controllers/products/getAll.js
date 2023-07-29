const {Product} = require("../../models/product");
// const products = require("../../data/velo.json");

const getAll = async (req, res) => {
  const {_id: owner} = req.user
  // res.json({
  //   status: "success",
  //   code: 200,
  //   data: {
  //     result: await JSON.stringify(Product.find()),
  //   },
  // });
  const result = await Product.find({owner}, "-createdAt -updatedAt").populate("owner", "name email");
  res.json(result);
};

module.exports = getAll;
