import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./server/router/userRouter.js";
import bodyParser from "body-parser";
import sessionRouter from "./server/controllers/sessionController.js";


dotenv.config({path:'./.env'});
const app = express();
app.use(bodyParser.json());
app.use("/freemrntor/v1/user",userRouter);
app.use("/freemrntor/v1/session",sessionRouter);
app.use('/',(req,res)=>{
    res.status(404).send({
    status:404,
    message:"this routes doesn't exist"
    })
})

const databaseUrl=process.env.DATABASE;
mongoose.connect(databaseUrl,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true,useFindAndModify:false}).then(()=>console.log("Database Connected successfully"));

//port:4040
const port= process.env.PORT;
app.listen(4040, ()=>{

console.log(`server is running on ${port}`);
});


export default app;