const express = require('express');
const router=express.Router();
const productController = require('../controller/brandController');
// Middleware to clean "add" prefix

router.param('id', (req, res, next, id) => {
    if (id.startsWith('add')) {
      req.params.id = id.substring(3); // Remove "add" prefix
    }
    next();
  });

  //Routes

  router.post('',async(req, res) => {
    const model=req.body;
    const result=await productController.addBrand(model);
    res.send(result);
  });
  router.get("", async (req, res) => {
    const result = await productController.getBrand();
    res.send(result);
  });

  router.get("/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const brand = await productController.getBrandById(id);
      res.status(200).json(brand);
    } catch (error) {
      res.status(error.message === "Invalid ObjectId" ? 400 : 404).json({ error: error.message });
    }
  });
  router.put("/:id", async (req, res) => {
    const model = req.body;
    const id = req.params.id;
    await productController.updateBrand(id, model);
    res.send({ message: "Updated" });
  });
  router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    await productController.deleteBrand(id);
    res.send({ message: "Deleted" });
  });
  
  module.exports = router;