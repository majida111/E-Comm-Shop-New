const express=require('express');
const router=express.Router();
const {
    getNewProducts,getFeaturedProducts
}=require("../controller/productController")

router.get("/newProducts",async (req, res)=>{
  const newProducts=await getNewProducts();
  res.send(newProducts);
    
});
router.get("/featuredProducts",async (req, res)=>{
    const featuredProducts=await getFeaturedProducts();
    res.send(featuredProducts);
    
});

module.exports=router;