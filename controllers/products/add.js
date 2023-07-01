const { v4 } = require("uuid");
const products = require("../../data/velo.json");
// const { HttpError } = require("../../helpers");
// const { addSchema } = require("../../middlewares");

const add = async (req, res) => {
  const newProduct = { ...req.body, id: v4() };
  products.push(newProduct);
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      result: newProduct,
    },
  });
};

module.exports = add;
