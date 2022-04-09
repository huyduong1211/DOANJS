
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema =  new Schema({
    ProductCode:{type: Number , required: true},
    PName:{type: String, required:true},
    PPrice:{type:Number,required:true},
    PQuantity:{type:Number,required:true,default:0},
    PWarranty:{type:Number,required:true,default:0},
    PImage:{type:String,required:true},
    PDiscount:{type:Number,default:0},
    PSell:{type:Boolean,required:true,default:true},
    PCategory:{type:mongoose.Types.ObjectId,ref:"Category"}
    },
    {timestamp:true});

module.exports= mongoose.model('Product',ProductSchema);