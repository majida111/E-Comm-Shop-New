const express = require('express');
const router=express.Router();
const {addBrand,
  getBrand,
  getBrandById,
  updateBrand,
  deleteBrand
} = require('../controller/brandController')

// Middleware to clean "add" prefix

router.param('id', (req, res, next, id) => {
    if (id.startsWith('add')) {
      req.params.id = id.substring(3); // Remove "add" prefix
    }
    next();
  });

  //Routes

  router.post("",async(req, res) => {
    const model=req.body;
    const result=await addBrand(model);
    res.send(result);
  });
  router.get("", async (req, res) => {
    const result = await getBrand();
    res.send(result);
  });

  router.get("/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const brand = await getBrandById(id);
      res.status(200).json(brand);
    } catch (error) {
      res.status(error.message === "Invalid ObjectId" ? 400 : 404).json({ error: error.message });
    }
  });
  router.put("/:id", async (req, res) => {
    const model = req.body;
    const id = req.params.id;
    await updateBrand(id, model);
    res.send({ message: "Updated" });
  });
  router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    await deleteBrand(id);
    res.send({ message: "Deleted" });
  });
  
  module.exports = router;