
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
const createItem = async (req,res) =>{
    const body = req.body
    console.log(body)
    const data = await tracksModel.create(body)
    res.send({data})
};
/*ACTUALIZAR REGISTROS*/
const updateItem = (req,res) =>{};
/*ELIMINAR REGISTROS*/
const deleteItem = (req,res) =>{};

module.exports = {getItems,getItem,createItem,updateItem,deleteItem};