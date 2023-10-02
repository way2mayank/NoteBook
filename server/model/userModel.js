import mongoose from "mongoose"


export const userSchema = new mongoose.Schema({
    email:{
        type:String,
        Trim:true,
        unique: true,
        required: true
    },
    password:{
        type:String,
        Trim:true,
        required: true
    }
})



export default mongoose.model("user", userSchema)