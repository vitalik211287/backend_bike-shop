const { Schema, model } = require("mongoose");
const { hendlerMongooseError } = require("../helpers");
const Joi = require("joi");

const productSchema = new Schema(
  {
    brend: { type: String, required: true },
    model: { type: String, required: true },
    img: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    color: { type: String, required: true },
    size: {
      type: String,
      required: true,
    },
    favorite: { type: Boolean, default: false },
  },
  { versionKey: false, timestamps: true }
);

productSchema.post("save", hendlerMongooseError);

const addSchema = Joi.object({
  brend: Joi.string().required(),
  model: Joi.string().required(),
  img: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.string().required(),
  color: Joi.string().required(),
  size: Joi.string().required(),
  favorite: Joi.boolean().truthy("yes").falsy("no").sensitive(),
  id: Joi.string(),
});

const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().truthy("yes").falsy("no").sensitive().required(),
});

const schemas = {
  addSchema,
  updateFavoriteSchema,
};

const Product = model("product", productSchema);

module.exports = {
  Product,
  schemas,
};
