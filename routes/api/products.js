const express = require("express");
const productsOperation = require("../../controllers/products");
const router = express.Router();

router.get("/", productsOperation.getAll);

router.get("/:id", productsOperation.getById);

router.post("/", productsOperation.add);
router.delete("/:id", productsOperation.removeById);
router.put("/:id", productsOperation.updateById);

module.exports = router;
