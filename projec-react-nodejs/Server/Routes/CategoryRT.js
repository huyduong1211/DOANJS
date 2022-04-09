const express = require("express");
const { Double } = require("mongodb");
const { default: mongoose } = require("mongoose");
const { schema } = require("../Models/Category");
const router = express.Router();
let Category = require("../Models/Category")


router.get("/getcategory", async(req, res) => {
    await Category.find()
        .then(Category => res.json(Category))
        .catch(err => res.status(400).json("Err" + err));
});
router.post("/addcategory", (req, res) => {
    const CName = req.body.CName;
    const CStatus = Boolean(req.body.CStatus);
    const newCategory = new Category({
        CName,
        CStatus,
    });
    newCategory.save().then(() => res.json('added done')).catch(err => res.status(400).json("error" + err));
});
module.exports = router;