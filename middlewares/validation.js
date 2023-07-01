const Joi = require("joi");

const addSchema = Joi.object({
    brend: Joi.string().required(),
    model: Joi.string().required(),
    img: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.string().required(),
    color: Joi.string().required(),
    size: Joi.string().required(),
    favorite: Joi.boolean().truthy("yes").falsy("no").sensitive(),
    id: Joi.string().required(),
  });

  module.exports = addSchema