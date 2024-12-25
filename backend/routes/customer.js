const express=require('express');
const router=express.Router();
const {
    getNewProducts,getFeaturedProducts
}=require("../controller/productController");
const { getCategory } = require('../controller/categoryController');

router.get("/newProducts",async (req, res)=>{
  const newProducts=await getNewProducts();
  res.send(newProducts);
    
});
router.get("/featuredProducts",async (req, res)=>{
    const featuredProducts=await getFeaturedProducts();
    res.send(featuredProducts);
    
});
router.get("/categories", async (req, res)=>{
  const categories=await getCategory();
  res.send(categories);
  
});
module.exports=router;