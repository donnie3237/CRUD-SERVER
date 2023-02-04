//This file to make Controller process
import express from 'express';
const { ObjectID , ObjectId} = require('bson');
const users = require('../model/main.model')

exports.getdata =(req:express.Request,res:express.Response)=>{
    const User = users
    User.find({}, function(err:any, users:any) {
        if (err) {res.send("error")}
        res.send(users)
    });
}

exports.getOne =(req:express.Request,res:express.Response)=>{
    const User = users
    User.find({_id : ObjectId(req.params['id'])}, function(err:any, users:any) {
        if (err) {res.send("err")}
        res.send(users)
    });
}

exports.delete = (req:express.Request,res:express.Response)=>{
    const User = users
    User.deleteOne({_id : ObjectId(req.params['id'])}, function (err:any) {
        if(err){console.log("error")}
        console.log("finished")
      });
}

exports.update = (req:express.Request,res:express.Response)=>{
    const User = users
    const { name, age, height, weight, desc } = req.body;
    User.updateOne({_id : ObjectId(req.params['id'])},
        {$set : { name, age, height, weight, desc }}
    ).then(res.send("updated"));
}

exports.add = (req:express.Request,res:express.Response) => {
    const { name, age, height, weight, desc } = req.body;
    const new_user = new users({
        name,age,height,weight,desc
    })
    new_user.save((err:any, result:any) => {
        if (err) {
            console.log(err);
            res.send("error")
        } else {
            console.log(result)
            res.send("success")
        }
    })
};  
  
  
  
  