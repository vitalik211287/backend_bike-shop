const Product = require("../../models/product")

const getAll = async (req, res) => {
  res.json({
    status: "success",
    code: 200,
    data: {
      result: Product,
    },
  });
};

module.exports = getAll;
