const products = require("../../data/velo.json"); // const fs = require('fs/promises')

const getAll = async (req, res, next) => {
  try {
    res.json({
      status: "success",
      code: 200,
      data: {
        result: products,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      code: 500,
      message: "Server error"
    });
  }
};

module.exports = getAll;
