require('dotenv').config();
require('./DB/db')
import express from 'express';
const app = express();
const PORT:string | number | undefined = process.env.PORT;
import cors from 'cors'
const Main_router = require('./Routes/main.route');

// middle ware
app.use(express.json())
app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
app.use(cors());
app.use(express.urlencoded({ extended : true}))

//listan port
app.listen(PORT,()=>{
    console.log(`listining on port ${PORT}`)
})

// use Router
app.use("/",Main_router)
