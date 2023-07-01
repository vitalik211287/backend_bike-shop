const products = require("../../data/velo.json"); // const fs = require('fs/promises')

const getAll = async (req, res) => {
  res.json({
    status: "success",
    code: 200,
    data: {
      result: products,
    },
  });
};

module.exports = getAll;
