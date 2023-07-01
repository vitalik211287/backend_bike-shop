// const getAll = require("./getAll");
// const products =  getAll();
const products = require("../../data/velo.json");
const { HttpError } = require("../../helpers");
const { addSchema } = require("../../middlewares");

const updateById = async (req, res, next) => {
  try {
    const { error } = addSchema.validate(req.body);
    if (error) {
      throw HttpError(400, error.message);
    }
    const { id } = req.params;
    const idx = products.find((product) => product.id === id);
    if (!idx) {
      throw HttpError(404, `Product with id=${id} not found`);
    }
    res.status(200).json({
      status: "success",
      code: 200,
      data: {
        result: { ...req.body },
      },
    });
  } catch (error) {
    next(error);
  }
};
module.exports = updateById;
