const express = require("express");
const ctrl = require("../../controllers/products");
const { validateBody, isValidId } = require("../../middlewares");
const { schemas } = require("../../models/product");

const router = express.Router();

router.get("/", ctrl.getAll);

router.get("/:id", isValidId, ctrl.getById);

router.post("/", validateBody(schemas.addSchema), ctrl.add);

router.delete("/:id", isValidId, ctrl.removeById);

router.put("/:id", isValidId, validateBody(schemas.addSchema), ctrl.updateById);

router.patch("/:id/favorite", isValidId, validateBody(schemas.updateFavoriteSchema), ctrl.updateFavorite);

module.exports = router;
