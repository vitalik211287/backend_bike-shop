// const getAll = require("./getAll");
// const products =  getAll();
const products = require("../../data/velo.json");
const { HttpError } = require("../../helpers");
// const { addSchema } = require("../../middlewares");

const updateById = async (req, res) => {
  const { id } = req.params;
  const idx = await products.find((product) => product.id === id);
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
};
module.exports = updateById;
