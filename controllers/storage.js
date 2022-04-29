
const { storageModel } = require("../models");
const PUBLIC_URL = process.env.PUBLIC_URL;

/*CONECTAR*/
const getItems = async (req,res) =>{
    const data = await storageModel.find({});
    res.send({data})
};
/*OBTENER REGISTROS*/
const getItem = (req,res) =>{
};
/*CREAR REGISTROS*/
const createItem = async (req,res) =>{
    const {body,file} = req
    console.log(file)
    const fileData = {
        filename: file.filename,
        url:`${PUBLIC_URL}/${file.filename}`
    }
    const data = await storageModel.create(fileData)
    res.send({data})
};
/*ACTUALIZAR REGISTROS*/
const updateItem = (req,res) =>{};
/*ELIMINAR REGISTROS*/
const deleteItem = (req,res) =>{};

module.exports = {getItems,getItem,createItem,updateItem,deleteItem};