const { v4 } = require("uuid");
const getAll = require("./getAll")

const add = async (req, res) => {
    const products = await getAll();
    const newProduct = { ...req.body, id: v4() };
    products.push(newProduct);
    res.status(201).json({
      status: "success",
      code: 201,
      data: {
        result: newProduct,
      },
    });
  }

  module.exports = add