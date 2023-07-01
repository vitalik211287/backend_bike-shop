const products = require("../../data/velo.json");
const { HttpError } = require("../../helpers");

const removeById = async (req, res, next) => {
  try {
    const removepPoducts = await products.find(({ id }) => id === req.params.id);
    if (!removepPoducts) {
      throw HttpError(404, `Product with id=${req.params.id} not found`);
    }
    res.status(200).json({
      status: "Delete success",
      code: 200,
      data: removepPoducts,
    });
  } catch (error) {
    next(error);
  }
};
module.exports = removeById;
