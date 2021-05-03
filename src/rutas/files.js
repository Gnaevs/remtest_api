const express = require('express');
const fileUpload = require('express-fileupload');
const archivo = express.Router();
archivo.use(fileUpload());
var uuid = require("node-uuid");

archivo.post('/subir_firma', (req,res) =>{
    let archivox = req.files.file;
    archivox.mv(`./archivos/${archivox.name}`,err =>{
        if(err) return res.status(500).send({ message : err })


        return res.status(200).send({message: 'Archivo subido'})
    })
});

archivo.post('/subir_video', (req,res) =>{
    let archivox = req.files.file;
    archivox.name = uuid.v1()+".webm";
    archivox.mv(`./videos/${archivox.name}`,err =>{
        if(err) return res.status(500).send({ message : err })


        return res.status(200).send({message: 'Archivo subido'})
    })
});

module.exports = archivo;