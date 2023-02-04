"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Datadase_URI = process.env.DATABASE_URI;
const chalk = require('chalk');
mongoose_1.default.set('strictQuery', true);
mongoose_1.default.connect(Datadase_URI, { dbName: 'DosE-CRUD' })
    .then(() => {
    console.log(chalk.bgGreen("  Connected to database  "));
}).catch(() => {
    console.log(chalk.bgRed("  Not connect to database  "));
});
// to set dbName you can change this in line 6 dbName: '<DB-NAme>'
