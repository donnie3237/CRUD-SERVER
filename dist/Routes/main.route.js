"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Main_router = express_1.default.Router();
const path = require('path');
const controller = require('../Controller/main.controller');
Main_router.use(express_1.default.json());
Main_router.use(express_1.default.urlencoded({ extended: true }));
Main_router.get('/', (req, res) => {
    controller.getdata(req, res);
});
Main_router.post('/add', (req, res) => {
    controller.add(req, res);
});
Main_router.get('/api', (req, res) => {
    controller.getdata(req, res);
});
Main_router.get('/see/:id', (req, res) => {
    controller.getOne(req, res);
});
Main_router.delete('/delete/:id', (req, res) => {
    controller.delete(req, res);
});
Main_router.put('/update/:id', (req, res) => {
    controller.update(req, res);
});
module.exports = Main_router;
