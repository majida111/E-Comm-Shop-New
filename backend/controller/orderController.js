const Order=require('./../model/order');


async function addOrder(userId, orderModel){
    let order=new Order({
        ...orderModel,
        userId: userId,
        status: 'InProgress',
    })
   await order.save();
}

async function getCustomerOrders(userId){
    let orders=await Order.find({userId: userId});
    return orders.map((x)=>x.toObject());
}
module.exports ={ addOrder, getCustomerOrders}