const { HttpError } = require("../../helpers");
const { Product } = require("../../models/product");

const updateFavorite = async (req, res) => {
  const { id } = req.params;
  const result = await Product.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    throw HttpError(404, `Product with id=${id} not found`);
  }
  res.status(200).json({
    status: "success",
    code: 200,
    result,
  });
};
module.exports = updateFavorite;
