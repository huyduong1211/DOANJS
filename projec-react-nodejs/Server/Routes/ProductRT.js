const express = require("express");
const { default: mongoose } = require("mongoose");
const { schema } = require("../Models/Product");
const router = express.Router();
let Product = require("../Models/Product");

router.get("/getproduct",async (req, res) => {
   await Product.find()
        .then(Product => res.status(200).json(Product))
        .catch(err => res.status(400).json("Err" + err));
}); 
router.route("/addproduct").post((req,res)=>{
    const  ProductCode= Number( req.body.ProductCode);
   const PName= req.body.PName;
   const PPrice = Number(req.body.PPrice);
   const PQuantity= Number(req.body.PQuantity);
   const PWarranty = Number (req.body.PWarranty);
   const PImage= req.body.PImage;
   const PDiscount = Number(req.body.PDiscount);
   const PSell= Boolean(req.body.PSell);
   const PCategory = mongoose.Types.ObjectId(req.body.PCategory);

   const newProduct = new Product({
        ProductCode,
        PName,
        PPrice,
        PQuantity,
        PWarranty,
        PImage,
        PDiscount,
        PSell,
        PCategory,
   });
   newProduct.save().then(()=>res.json('added done')).catch(err=>res.status(400).json("error"+err));
});
// router.get('/single/:id', async (req,res) => {
//      try{
//           const product = await Product.findById(req.params.id);
//           res.status(200).json(product);
//      }catch(err){
//           res.status(500).json(err);
//      }
// })

//xóa sản phẩm
router.delete('/delete/:id', async (req,res) => {
     try{
          const productID = req.params.id;
          await Product.findByIdAndDelete(productID);
          res.status(200).json("Deleted");
     }catch(err){
          res.status(500).json(err);
     }
})
router.post('/update', async (req,res) => {
     try{
          const newUpdateProduct = req.body.newUpdateProduct;
          const id = req.body._id;
          const xx = await Product.findOneAndUpdate({_id: id},{
               ProductCode: newUpdateProduct.ProductCode,
               PName: newUpdateProduct.PName,
               PPrice: newUpdateProduct.PPrice,
               PQuantity: newUpdateProduct.PQuantity,
               PWarranty: newUpdateProduct.PWarranty,
               PImage: newUpdateProduct.PImage,
               PDiscount: newUpdateProduct.PDiscount,
               PSell: newUpdateProduct.PSell,
               PCategory: newUpdateProduct.PCategory
          });
          res.status(200).json('Update conpleted');
          console.log(xx)
     }catch(err){
          console.log(err)
     }
})
module.exports= router;