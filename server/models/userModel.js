import mongoose from "mongoose";


const userSchema=new mongoose.Schema({
firstName:{
    type:String,
    required:[true,"first-name is required"]
},
lastName:String,
email:{
    type:String,
    unique:true
},
password:{ 
    type: String,
    default: ["@78904326"]},
phone:String,
gender:{
    type:String,
    enum: ["male","female"]
},
age:Number,
role: {
    type:String,
    enum:["admin","mentor","user"],
    default:"user"
}

})

 const userInfo = mongoose.model("User", userSchema);


 export default userInfo;




