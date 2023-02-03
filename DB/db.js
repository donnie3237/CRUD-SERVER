const mongoose = require('mongoose')
const Datadase_URI = process.env.DATABASE_URI;
const chalk = require('chalk')

mongoose.set('strictQuery', true)
mongoose.connect(Datadase_URI , {dbName: 'DosE-CRUD'},)
    .then(()=>{
        console.log(chalk.bgGreen("  Connected to database  "))
        }
    ).catch(()=>{
    console.log(chalk.bgRed("  Not connect to database  "))
    }
)
// to set dbName you can change this in line 6 dbName: '<DB-NAme>'