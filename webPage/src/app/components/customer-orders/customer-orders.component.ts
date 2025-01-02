import { Component, inject } from '@angular/core';
import { Order } from '../../types/order';
import { OrderService } from '../../services/order.service';
import { Product } from '../../types/product';
import { CartService } from '../../services/cart.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-customer-orders',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './customer-orders.component.html',
  styleUrl: './customer-orders.component.scss'
})
export class CustomerOrdersComponent {
orders:Order[] = [];
orderService=inject(OrderService);
cartService=inject(CartService);

ngOnInit() {
  this.orderService.getCustomerOrder().subscribe((result)=>{
     this.orders = result;
     console.log(this.orders);  
     
  })
};
sellingPrice(product: Product){
    return Math.round(product.price-(product.price*product.discount)/100);
  }
  addToCart(productId: string,quantity: number){
    this.cartService.addToCart(productId,quantity).subscribe(()=>{
      this.cartService.init();
    });
  }

}
