const { HttpError } = require("../../helpers");
const {Product} = require("../../models/product");
// const products = require("../../data/velo.json");

const getById = async (req, res) => {
  const { id } = req.params;
  const result = await Product.findById(id);
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
