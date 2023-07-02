const express = require("express");
const ctrl = require("../../controllers/products");
// const { validateBody } = require("../../middlewares");
// const { addSchema } = require("../../schema");
const router = express.Router();

router.get("/", ctrl.getAll);

// router.get("/:id", ctrl.getById);

// router.post("/", validateBody(addSchema), ctrl.add);

// router.delete("/:id", ctrl.removeById);

// router.put("/:id", validateBody(addSchema), ctrl.updateById);

module.exports = router;
