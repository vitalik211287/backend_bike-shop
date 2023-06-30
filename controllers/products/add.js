const { v4 } = require("uuid");
const products = require("../../data/velo.json");
const { HttpError } = require("../../helpers");
const { addSchema } = require("../../middlewares");



const add = async (req, res, next) => {
  try {
    const { error } = addSchema.validate(req.body);
    console.log(error);
    if(error){
      throw HttpError(400, error.message);
    }
    const newProduct = { ...req.body, id: v4() };
    products.push(newProduct);
    res.status(201).json({
      status: "success",
      code: 201,
      data: {
        result: newProduct,
      },
    });
  } catch (error) {
    next(error);
  }
};
 
module.exports = add;
