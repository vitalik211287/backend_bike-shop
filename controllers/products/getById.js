// const getAll = require("./getAll");
const products = require("../../data/velo.json");
const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = products.find((item) => item.id === id);
    if (!result) {
      res.status(404).json({
        status: "error",
        code: 404,
        message: `Product with id=${id} not found`,
      });
    }
    res.json({
      status: "success",
      code: 200,
      data: {
        result: result,
      },
    });
  } catch (error) {}
};

module.exports = getById;
