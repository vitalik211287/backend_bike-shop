const Product = require("../../models/product")
const { v4 } = require("uuid");

// const { HttpError } = require("../../helpers");
// const { addSchema } = require("../../middlewares");

const add = async (req, res) => {
  const newProduct = { ...req.body, id: v4() };
  Product.push(newProduct);
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      result: newProduct,
    },
  });
};

module.exports = add;
