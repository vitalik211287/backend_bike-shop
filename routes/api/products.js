const express = require("express");
const ctrl = require("../../controllers/products");
const { validateBody, isValidId } = require("../../middlewares");
const { schema } = require("../../models/product");

const router = express.Router();

router.get("/", ctrl.getAll);

router.get("/:id", isValidId, ctrl.getById);

router.post("/", validateBody(schema.addSchema), ctrl.add);

router.delete("/:id", isValidId, ctrl.removeById);

router.put("/:id", isValidId, validateBody(schema.addSchema), ctrl.updateById);

router.patch("/:id/favorite", isValidId, validateBody(schema.updateFavoriteSchema), ctrl.updateFavorite);

module.exports = router;
