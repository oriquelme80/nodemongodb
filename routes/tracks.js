const express = require("express");
const router = express.Router();
const customHeader = require("../middleware/customHeader");
const {authMiddleware}  = require("../middleware/session");
const { validatorCreateItem, validatorGetItem } = require("../validators/tracks");
const { getItems, getItem, createItem, updateItem,deleteItem } = require("../controllers/tracks");



/*Obtener items*/
router.get("/", authMiddleware,getItems);

/*Obtener items*/
router.get("/:id", validatorGetItem, getItem);

/*Crear un item*/ 
router.post("/",validatorCreateItem, createItem);

/*Actualizar un registro*/ 
router.put("/:id",validatorGetItem, validatorCreateItem, updateItem);

/*Borrar un registro*/ 
router.delete("/:id",validatorGetItem, deleteItem);


module.exports = router;
