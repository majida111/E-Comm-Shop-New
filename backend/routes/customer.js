const express=require('express');
const router=express.Router();
const {
    getNewProducts,getFeaturedProducts,getProductForListing,getProduct
}=require("../controller/productController");
const { getCategory } = require('../controller/categoryController');
const {getBrand } = require('../controller/brandController');

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
router.get("/brands", async (req, res)=>{
  const brands=await getBrand();
  res.send(brands);
  
});
router.get("/products", async (req, res)=>{
  const{searchTerm,categoryId,sortBy,sortOrder,brandId,pageSize,page}=req.query;
  const products=await getProductForListing(searchTerm,categoryId,page,pageSize,sortBy,sortOrder,brandId);
  res.send(products);
});

router.get("/product/:id", async (req, res)=>{
  const id=req.params["id"];
  const product=await getProduct(id);
  res.send(product);
});


module.exports=router;