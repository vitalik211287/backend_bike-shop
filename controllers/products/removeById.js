const {Product} = require("../../models/product");
const { HttpError } = require("../../helpers");

const removeById = async (req, res) => {
  const { id } = req.params;
  const result = await Product.findByIdAndRemove(id);
  if (!result) {
    throw HttpError(404, `Product with id=${req.params.id} not found`);
  }
  res.status(200).json({
    status: "Delete success",
    code: 200,
    result
  });
};
module.exports = removeById;
