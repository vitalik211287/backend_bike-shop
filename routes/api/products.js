const express = require("express");
const ctrl = require("../../controllers/products");
const { validateBody } = require("../../middlewares");
const { schema } = require("../../models/product");

const router = express.Router();

router.get("/", ctrl.getAll);

router.get("/:id", ctrl.getById);

router.post("/", validateBody(schema.addSchema), ctrl.add);

router.delete("/:id", ctrl.removeById);

router.put("/:id", validateBody(schema.expressaddSchema), ctrl.updateById);

module.exports = router;
