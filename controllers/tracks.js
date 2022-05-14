
const { matchedData } = require("express-validator");
const { tracksModel } = require("../models");
const { handleHttpError } = require("../utils/handleError");

/*CONECTAR*/
const getItems = async (req,res) =>{

    try{
        const data = await tracksModel.find({});
        res.send({data});}
    catch(e){
        handleHttpError(res,'ERROR_GET_ITEMS');
    }

    
};
/*OBTENER REGISTROS*/
const getItem = async (req,res) =>{
    try{
        req = matchedData(req);
        const {id}=req;
        const data = await tracksModel.findById(id);
        res.send({data});

    }catch(e)
    {
        handleHttpError(res,'ERROR_GET_ITEM');
    }

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
const updateItem = async (req,res) =>{
    try{
        const {id, ...body}=matchedData(req);
        const data = await tracksModel.findOneAndUpdate(id,body);
        res.send({data});
    }catch(e){
        handleHttpError(res,'ERROR_UPDATE_ITEM');
    }

};
/*ELIMINAR REGISTROS*/
const deleteItem = async(req,res) =>{
    try{
        req = matchedData(req);
        const {id}=req;
        const data = await tracksModel.delete({_id:id});
        res.send({data});

    }catch(e)
    {
        console.log(e)
        handleHttpError(res,'ERROR_DELETE_ITEM');
    }
};

module.exports = {getItems,getItem,createItem,updateItem,deleteItem};