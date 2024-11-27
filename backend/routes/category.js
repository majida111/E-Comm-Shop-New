const express = require('express');
const router = express.Router();
const {
  addCategory,
  updateCategory,
  deleteCategory,
  getCategory,
  getCategoryById,
} = require('../controller/categoryController');

// Middleware to clean "add" prefix
router.param('id', (req, res, next, id) => {
  if (id.startsWith('add')) {
    req.params.id = id.substring(3); // Remove "add" prefix
  }
  next();
});

// Routes
router.post("", async (req, res) => {
  const model = req.body;
  const result = await addCategory(model);
  res.send(result);
});

router.get("", async (req, res) => {
  const result = await getCategory();
  res.send(result);
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const category = await getCategoryById(id);
    res.status(200).json(category);
  } catch (error) {
    res.status(error.message === "Invalid ObjectId" ? 400 : 404).json({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  const model = req.body;
  const id = req.params.id;
  await updateCategory(id, model);
  res.send({ message: "Updated" });
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  await deleteCategory(id);
  res.send({ message: "Deleted" });
});

module.exports = router;
