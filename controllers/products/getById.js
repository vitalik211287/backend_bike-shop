const { HttpError } = require("../../helpers");
// const products = require("../../data/velo.json");
const Product = require("../../models/product");

const getById = async (req, res) => {
  const { id } = req.params;
  const result = await Product.find((item) => item.id === id);
  if (!result) {
    throw HttpError(404, `Product with id=${id} not found`);
  }
  res.json({
    status: "success",
    code: 200,
    data: {
      result: result,
    },
  });
};

module.exports = getById;
