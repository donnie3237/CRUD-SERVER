//This file to make Controller process
const { ObjectID , ObjectId} = require('bson');
const users = require('../model/main.model.js')

exports.getdata =(req,res)=>{
    const User = users
    User.find({}, function(err, users) {
        if (err) {res.send("err")}
        res.send(users)
    });
}

exports.getOne =(req,res)=>{
    const User = users
    User.find({_id : ObjectId(req.params['id'])}, function(err, users) {
        if (err) {res.send("err")}
        res.send(users)
    });
}

exports.delete = (req,res)=>{
    const User = users
    User.deleteOne({_id : ObjectId(req.params['id'])}, function (err) {
        if (err) return handleError(err);
        console.log("finished")
      });
}

exports.update = (req,res)=>{
    const User = users
    const { name, age, height, weight, desc } = req.body;
    User.updateOne({_id : ObjectId(req.params['id'])},
        {$set : { name, age, height, weight, desc }}
    ).then(res.send("updated"));
}

exports.add = (req,res) => {
    const { name, age, height, weight, desc } = req.body;
    const new_user = new users({
        name,age,height,weight,desc
    })
    new_user.save((err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log(result)
            res.send("hello")
        }
    })
};  
  
  
  
  