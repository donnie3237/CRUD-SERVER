const express = require('express')
const Main_router = express.Router();
const path = require('path');
const controller = require('../Controller/main.controller.js');

Main_router.use(express.json());
Main_router.use(express.urlencoded({ extended: true }));

Main_router.get("/", (req ,res )=>{
    res.res.sendFile(path.join(__dirname,'./server.html'))
})
Main_router.get('/code',(req ,res )=>{
    res.res.sendFile(path.join(__dirname,'../index.js'))
})
Main_router.post('/add',(req ,res )=>{
    controller.add(req,res);
})
Main_router.get('/api',(req ,res )=>{
    controller.getdata(req,res);
})
Main_router.get('/see/:id',(req ,res )=>{
    controller.getOne(req,res);
})
Main_router.delete('/delete/:id',(req ,res )=>{
    controller.delete(req,res);
})
Main_router.put('/update/:id',(req ,res )=>{
    controller.update(req,res);
})

module.exports = Main_router ;