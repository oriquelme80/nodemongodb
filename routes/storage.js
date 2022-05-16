const express = require("express");
const router = express.Router();
const uploadMiddleware = require("../utils/handleStorage")
const {validatorGetItem} = require("../validators/storage");
const {createItem,getItem,getItems,updateItem,deleteItem} = require("../controllers/storage")

/*Lista de items*/
router.get("/",getItems);

/*Detalle de item*/
router.get("/:id",validatorGetItem,getItem);

/*Eliminar un item*/
router.delete("/:id",validatorGetItem,deleteItem);

router.post("/",uploadMiddleware.single("myfile"),createItem);

module.exports = router;