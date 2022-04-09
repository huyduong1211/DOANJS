const express = require("express");
const bodyPaser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require('path')
const multer = require('multer')
require("dotenv").config({path: ".env"});
const app = express();
const port = process.env.PORT || 5000;
//upload file
const storage = multer.diskStorage({
    destination: (req,file,callback) => {
        callback(null, "images");
    },filename: (req,file,callback) => {
        callback(null, req.body.name);
    }
})
const upload = multer({storage: storage});
app.post("/upload", upload.single("file"), (req,res) => {
    res.status(200).json("File uploaded");
})

app.use(cors());
app.use(bodyPaser.json());
app.use(express.json());

//use images folder
app.use('/images', express.static(path.join(__dirname, "/images")));
const uri = process.env.ATLAS_URI; // "mongodb+srv://DBconnection123:0965871743@cluster0.jxrwh.mongodb.net/WDM_React?retryWrites=true&w=majority";
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once("open",()=>{console.log("MongoDB connection established successfully")});
const productRouter = require("./Routes/ProductRT");
const categoryRouter = require("./Routes/CategoryRT")
const CartRouter = require("./Routes/CartRT")
app.use("/ProductRT",productRouter);
app.use("/CategoryRT",categoryRouter);
app.use("/CartRT", CartRouter);

app.listen(port,()=>{
    console.log("server is running port"+ port);
});

