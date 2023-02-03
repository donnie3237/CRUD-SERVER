require('dotenv').config();
require('./DB/db.js')
const express = require('express') 
const app = express();
const PORT = process.env.PORT;
const cors = require('cors')
const Main_router = require('./Routes/main.route');
// use Router
app.use("/",Main_router)

// middle ware
app.use(express.json())
app.use(cors());
app.use(express.urlencoded({ extended : true}))

//listan port
app.listen(PORT,()=>{
    console.log(`listining on port ${PORT}`)
})