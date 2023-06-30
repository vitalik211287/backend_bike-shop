const {HttpError} = require('../../helpers')
const products = require("../../data/velo.json");


const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = products.find((item) => item.id === id);
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
  } catch (error) {
   next(error)
  }
};

module.exports = getById;
