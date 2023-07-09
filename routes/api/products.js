const express = require("express");
const ctrl = require("../../controllers/products");
const { validateBody, isValidId, authenticate } = require("../../middlewares");
const { schemas } = require("../../models/product");

const router = express.Router();

router.get("/", authenticate, ctrl.getAll);

router.get("/:id",authenticate,  isValidId, ctrl.getById);

router.post("/", authenticate, validateBody(schemas.addSchema), ctrl.add);

router.delete("/:id", authenticate, isValidId, ctrl.removeById);

router.put("/:id", authenticate, isValidId, validateBody(schemas.addSchema), ctrl.updateById);

router.patch("/:id/favorite", authenticate, isValidId, validateBody(schemas.updateFavoriteSchema), ctrl.updateFavorite);

module.exports = router;
