import express from 'express';

exports.getVersion = (req:express.Request,res:express.Response)=>{
    res.send("1.0.0")
}