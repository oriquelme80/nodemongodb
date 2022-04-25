
const { tracksModel } = require("../models");

/*CONECTAR*/
const getItems = async (req,res) =>{
    const data = await tracksModel.find({});
    res.send({data})
};
/*OBTENER REGISTROS*/
const getItem = (req,res) =>{
};
/*CREAR REGISTROS*/
const createItem = (req,res) =>{};
/*ACTUALIZAR REGISTROS*/
const updateItem = (req,res) =>{};
/*ELIMINAR REGISTROS*/
const deleteItem = (req,res) =>{};

module.exports = {getItems,getItem,createItem,updateItem,deleteItem};