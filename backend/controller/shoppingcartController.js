const Cart=require("./../model/cart");


async function addToCart(userId,productId,quantity){
    let product=await Cart.findOne({userId:userId,productId:productId});
    if(product){
        if(product.quantity+quantity<=0){
            await removeFromCart(userId,productId);
        }else{
      await Cart.findByIdAndUpdate(product._id,{
        quantity:product.quantity+quantity,
       });
    }
    }
    else{
        product=new Cart({
            userId:userId,
            productId:productId,
            quantity:quantity,
        });
        await product.save();   
    }
}


async function removeFromCart(userId,productId){
   await Cart.findOneAndDelete({userId:userId,productId:productId});
    
}

async function getCartItems(userId){
    const products=await Cart.find({userId:userId}).populate("productId");
    return products.map((x)=>{
        return { quantity:x.quantity,product:x.productId}
    });
}

module.exports = { getCartItems,removeFromCart,addToCart}