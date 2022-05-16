const fs = require ("fs");
const { matchedData } = require("express-validator");
const { storageModel } = require("../models");
const {handleHttpError}= require("../utils/handleError");
const PUBLIC_URL = process.env.PUBLIC_URL;
const MEDIA_PATH = `${__dirname}/../storage`;

/*CONECTAR*/
const getItems = async (req,res) =>{
    try{
        const data = await storageModel.find({});
        res.send({data})
    }catch(e){
        handleHttpError(res,'ERROR_GET_ITEMS');
    }
    
};
/*OBTENER REGISTROS*/
const getItem = async (req,res) =>{
    try{
        const {id}=matchedData(req);
        const data = await storageModel.findById(id);
        res.send({data});

    }catch(e)
    {
        handleHttpError(res,'ERROR_DETALLE_ITEM');
    }
};
/*CREAR REGISTROS*/
const createItem = async (req,res) =>{
    try{
        const {file} = req
        console.log(file)
        const fileData = {
            filename: file.filename,
            url:`${PUBLIC_URL}/${file.filename}`
            }
        const data = await storageModel.create(fileData)
        res.send({data})

    }catch(e){
        handleHttpError(res,'ERROR_DELETE_ITEM');
    }
  
};

/*ELIMINAR REGISTROS*/
const deleteItem = async (req,res) =>{
    try{
        const {id}=matchedData(req);
        const dataFile = await storageModel.findById(id);
        await storageModel.deleteOne({_id:id});
        const {filename} = dataFile;
        const filePath = `${MEDIA_PATH}/${filename}`; 
        //fs.unlinkSync(filePath);
        const data = {
            filePath,
            deleteItem:1
        }
        res.send({data});

    }catch(e)
    {
        handleHttpError(res,'ERROR_DELETE_ITEM');
    }
};

module.exports = {getItems,getItem,createItem,deleteItem};