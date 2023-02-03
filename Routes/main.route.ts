import express from 'express';
const Main_router : any = express.Router();
const path = require('path');
const controller = require('../Controller/main.controller.ts');
type Action = {
    req: express.Request;
    res: express.Response;
};

Main_router.use(express.json());
Main_router.use(express.urlencoded({ extended: true }));

Main_router.get('/',(req : Action,res : Action)=>{
    controller.getdata(req,res);
})
Main_router.post('/add',(req : Action,res : Action)=>{
    controller.add(req,res);
})
Main_router.get('/api',(req : Action,res : Action)=>{
    controller.getdata(req,res);
})
Main_router.get('/see/:id',(req : Action,res : Action)=>{
    controller.getOne(req,res);
})
Main_router.delete('/delete/:id',(req : Action,res : Action)=>{
    controller.delete(req,res);
})
Main_router.put('/update/:id',(req : Action,res : Action)=>{
    controller.update(req,res);
})

module.exports = Main_router ;