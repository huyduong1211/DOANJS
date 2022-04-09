const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CartSchema = new Schema(
    {
        UserId:{
            type: String,
            required:true
        },
        Products:[
            {
                productId: {
                    type: String,
                    required: true
                },
                ProductQuantity: {
                    type: Number,
                    default: 0
                }
            }
        ],
    },
    {timestamp:true});

module.exports= mongoose.model('Cart',CartSchema);