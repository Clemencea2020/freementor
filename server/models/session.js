import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema({
    description:String,
        mentor:String,
        user:String,
        title:String,
        starttime:String,
        endtime:String,
        status:{
            type:String,
            enum: ["approve","appending","decline"],
            default:"pending"
        }
    
});

const sessionInfo = mongoose.model ('session',sessionSchema);

export default sessionInfo;












