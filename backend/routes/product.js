const express = require('express');
const router = express.Router();
const {
    addProduct,
    updateProduct,
    deleteProduct,
    getAllProducts,
    getProduct}= require('./../controller/productController');
// Middleware to clean "add" prefix
    router.param('id', (req, res, next, id) => {
        if (id.startsWith('add')) {
          req.params.id = id.substring(3); // Remove "add" prefix
        }
        next();
      });
    // router.post("/", async (req, res) => {
    //     let model=req.body;
    //     let product=await addProduct(model);
    //     res.send(product);
    // })
    router.post("/", async (req, res) => {
        console.log("Request received:", req.body); // Log incoming request
        try {
            let model = req.body;
            let product = await addProduct(model);
            res.send(product);
        } catch (error) {
            console.error(error); // Log any error
            res.status(500).send({ error: "An error occurred" });
        }
    });
    
    router.put("/:id", async (req, res) => {
        let model=req.body;
        let id=req.params.id;
        await updateProduct(id,model);
        res.send({message:"Product updated successfully"});
    })
    router.delete("/:id", async (req, res) => {
        let id=req.params.id;
        await deleteProduct(id);
        res.send({message:"Product deleted successfully"});
    })
    router.get("/", async (req, res) => {
        let model=req.body;
        let products=await getAllProducts(model);
        res.send(products);
    })
    router.get("/:id", async (req, res) => {
        let id=req.params.id;
        let product=await getProduct(id);
        console.log("Hello",product);
        res.send(product);
    })
module.exports = router;