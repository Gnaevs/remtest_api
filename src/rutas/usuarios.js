const express = require('express');
const router = express.Router();
const mysqlConnection = require('../database');

//metodo get simple
router.get('/', (req,res)=>{
    mysqlConnection.query('SELECT * From rem_test', (err,rows,fields) =>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
})
//metodo get con id como parametro

router.get('/:id',(req,res) =>{
    const id = req.params.id;
    mysqlConnection.query('SELECT * FROM rem_test WHERE id = ?', [id] , (err,rows, fields)=>{
        if (!err) {
            res.json(rows[0]);
        }else{
            console.log(err);
        }
    });
});


//metodo post

router.post('/', (req, res) =>{
    const user ={
        nombre: req.body.nombre,
        fecha_nacimiento: req.body.fecha_nacimiento,
        email: req.body.email,
        num_telefono: req.body.num_telefono
    }
    mysqlConnection.query('INSERT INTO rem_test SET ?', user, error =>{
        if (error) { throw error;
            
        }else
        res.send('usuario creado');
    });
});


module.exports = router;