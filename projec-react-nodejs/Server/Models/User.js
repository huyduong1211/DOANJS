const { Int32 } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema =  new Schema({
    UPhone:{type:String,required:true},
    UName:{type: String, required:true},
    UPass:{type:String,required:true},
    UBirthDay:{type:Date},
    UAddress:{type:String,required:true},
    },
    {timestamp:true});

module.exports= mongoose.model('Product',ProductSchema);