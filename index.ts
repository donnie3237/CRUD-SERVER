require('dotenv').config();
require('./DB/db')
import express from 'express';
const app = express();
const PORT:string | number | undefined = process.env.PORT;
import cors from 'cors'
const Main_router = require('./Routes/main.route');

// middle ware
app.use(express.json())

app.use(cors(
    {
        origin:'*',
        credentials: true,
    }
));
app.use(express.urlencoded({ extended : true}))

//listan port
app.listen(PORT,()=>{
    console.log(`listining on port ${PORT}`)
})

// use Router
app.use("/",Main_router)
