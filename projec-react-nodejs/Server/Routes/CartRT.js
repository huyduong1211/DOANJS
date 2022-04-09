const router = require('express').Router();
const Cart = require('../Models/Cart')
router.post('/all', async (req, res) => {
    const userId = req.body.userId;
    try{
        const cart = await Cart.find({UserId: userId});
        res.status(200).json(cart)
    }
    catch(err){
        res.status(500).json(err);
    }
})
router.post('/create', async (req,res) => {
    try{
        const userId = req.body.userId;
        const newCart = new Cart({
            UserId: userId,
            Products: []
        })
        const cart = await newCart.save();
        res.status(200).json(cart);
    }catch(err){
        res.status(500).json(err);
    }
})
router.post('/add', async (req,res) => {
    const userId = req.body.userId;
    const product = req.body.product;
    try{
        const updatedCart = await Cart.updateOne({UserId: userId}, {$push: {Products: product}})
        res.status(200).json(updatedCart)
    }catch(err){
        res.status(500).json(err);
    }
})
router.post('/set', async (req,res) => {
    const userId = req.body.userId;
    const product = req.body.product;
    try{
        const updatedCart = await Cart.updateOne({UserId: userId}, {$set: {Products: product}})
        res.status(200).json(updatedCart)
    }catch(err){
        res.status(500).json(err);
    }
})
module.exports = router;