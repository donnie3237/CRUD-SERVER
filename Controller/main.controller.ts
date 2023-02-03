//This file to make Controller process
import express from 'express';
const { ObjectID , ObjectId} = require('bson');
const users = require('../model/main.model.ts')
type action = {
    req:express.Request,
    res:express.Response
}

exports.getdata =(req:action,res:action)=>{
    const User = users
    User.find({}, function(err:any, users:any) {
        if (err) {res.res.send("err")}
        res.res.send(users)
    });
}

exports.getOne =(req:action,res:action)=>{
    const User = users
    User.find({_id : ObjectId(req.req.params['id'])}, function(err:any, users:any) {
        if (err) {res.res.send("err")}
        res.res.send(users)
    });
}

exports.delete = (req:action,res:action)=>{
    const User = users
    User.deleteOne({_id : ObjectId(req.req.params['id'])}, function (err:any) {
        if(err){console.log("error")}
        console.log("finished")
      });
}

exports.update = (req:action,res:action)=>{
    const User = users
    const { name, age, height, weight, desc } = req.req.body;
    User.updateOne({_id : ObjectId(req.req.params['id'])},
        {$set : { name, age, height, weight, desc }}
    ).then(res.res.send("updated"));
}

exports.add = (req:action,res:action) => {
    const { name, age, height, weight, desc } = req.req.body;
    const new_user = new users({
        name,age,height,weight,desc
    })
    new_user.save((err:any, result:any) => {
        if (err) {
            console.log(err);
        } else {
            console.log(result)
            res.res.send("hello")
        }
    })
};  
  
  
  
  