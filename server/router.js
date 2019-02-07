const router = require("express").Router();
const controller = require("./controller.js");

router.get("/products/:id", controller.getProductInfo);
router.get("/products/:id/colors", controller.getColorOptions);
router.get("/products/:id/size", controller.getSizeOptions);

module.exports = router;
