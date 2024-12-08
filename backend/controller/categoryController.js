const mongoose = require('mongoose');
const Category = require('../model/category');

// Helper function to validate ObjectId
const isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id);


async function addCategory(model){
    let category=new Category({
        name:model.name,
    });
   await category.save();
    return category.toObject();

}
async function getCategory(model){
 let categories= await Category.find();
 return categories.map(c=>c.toObject());
}
// Example: Validate `id` in getCategoryById
async function getCategoryById(id) {
    if (!isValidObjectId(id)) {
        throw new Error('Invalid ObjectId'); // Or return an appropriate error response
    }

    const category = await Category.findById(id);
    if (!category) {
        throw new Error('Category not found');
    }
    return category.toObject();
}

// Validate in updateCategory
async function updateCategory(id, model) {
    if (!isValidObjectId(id)) {
        throw new Error('Invalid ObjectId');
    }

    const updatedCategory = await Category.findOneAndUpdate({ _id: id }, model, {
        new: true, // Return updated document
    });

    if (!updatedCategory) {
        throw new Error('Category not found');
    }

    return updatedCategory.toObject();
}

// Validate in deleteCategory
async function deleteCategory(id) {
    if (!isValidObjectId(id)) {
        throw new Error('Invalid ObjectId');
    }

    const deletedCategory = await Category.findByIdAndDelete(id);
    if (!deletedCategory) {
        throw new Error('Category not found');
    }

    return deletedCategory;
}
module.exports ={addCategory, updateCategory,deleteCategory,getCategory,getCategoryById};