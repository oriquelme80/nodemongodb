
const { matchedData } = require("express-validator");
const { tracksModel } = require("../models");
const { handleHttpError } = require("../utils/handleError");

/*CONECTAR*/
const getItems = async (req,res) =>{

    try{
        const data = await tracksModel.find({});
        res.send({data});}
    catch(e){
        handleHttpError(res,'ERROR_GET_ITEM');
    }

    
};
/*OBTENER REGISTROS*/
const getItem = (req,res) =>{
};
/*CREAR REGISTROS*/
const createItem = async (req,res) =>{
    
    try{
        const body=matchedData(req);
        const data = await tracksModel.create(body);
        res.send({data});
    }catch(e){
        handleHttpError(res,'ERROR_CREATE_ITEM');
    }

    
    
    
};
/*ACTUALIZAR REGISTROS*/
const updateItem = (req,res) =>{};
/*ELIMINAR REGISTROS*/
const deleteItem = (req,res) =>{};

module.exports = {getItems,getItem,createItem,updateItem,deleteItem};