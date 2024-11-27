const mongoose = require('mongoose');
const Brand = require('../model/brand');

// Helper function to validate ObjectId
const isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id);


async function addBrand(model){
    let brand=new Brand({
        name:model.name,
    });
    brand.save();
    return brand.toObject();

}
async function getBrand(model){
 let brands= await Brand.find();
 return brands.map(x=>x.toObject());
}
// Example: Validate `id` in getCategoryById
async function getBrandById(id) {
    if (!isValidObjectId(id)) {
        throw new Error('Invalid ObjectId'); // Or return an appropriate error response
    }

    const brand = await Brand.findById(id);
    if (!brand) {
        throw new Error('Product not found');
    }
    return brand.toObject();
}

// Validate in updateCategory
async function updateBrand(id, model) {
    if (!isValidObjectId(id)) {
        throw new Error('Invalid ObjectId');
    }

    const updatedBrand = await Brand.findOneAndUpdate({ _id: id }, model, {
        new: true, // Return updated document
    });

    if (!updatedBrand) {
        throw new Error('Product not found');
    }

    return updatedBrand.toObject();
}

// Validate in deleteCategory
async function deleteBrand(id) {
    if (!isValidObjectId(id)) {
        throw new Error('Invalid ObjectId');
    }

    const deletedBrand = await Brand.findByIdAndDelete(id);
    if (!deletedBrand) {
        throw new Error('Brand not found');
    }

    return deletedBrand;
}
module.exports ={addBrand,updateBrand,deleteBrand,getBrand,getBrandById};