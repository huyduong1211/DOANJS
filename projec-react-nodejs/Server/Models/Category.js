
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema =  new Schema({
    CName:{type: String, required:true},
    CStatus:{type:Boolean,required:true,default:true},
    },
    {timestamp:true});

module.exports= mongoose.model('Category',CategorySchema);