import express from 'express';
var Main_router : any = express.Router();
const path = require('path');
const controller = require('../Controller/main.controller');
import cors from 'cors';

//add your routes

//enable pre-flight
Main_router.use(cors(
    {
        origin:['http://localhost:33331', 'https://dose-crud.netlify.app/']
    }
))
Main_router.use(express.json());
Main_router.use(express.urlencoded({ extended: true }));

Main_router.get('/',(req :express.Request,res : express.Response)=>{
    controller.getdata(req,res);
})
Main_router.get('/test',(req :express.Request,res : express.Response)=>{
    res.send("connected")
})
Main_router.post('/add',(req :express.Request,res : express.Response)=>{
    controller.add(req,res);
})
Main_router.get('/api',(req :express.Request,res : express.Response)=>{
    controller.getdata(req,res);
})
Main_router.get('/see/:id',(req :express.Request,res : express.Response)=>{
    controller.getOne(req,res);
})
Main_router.delete('/delete/:id',(req :express.Request,res : express.Response)=>{
    controller.delete(req,res);
})
Main_router.put('/update/:id',(req :express.Request,res : express.Response)=>{
    controller.update(req,res);
})

module.exports = Main_router ;