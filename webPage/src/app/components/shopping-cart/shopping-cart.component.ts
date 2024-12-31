import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../types/product';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss',
})
export class ShoppingCartComponent {
  cartService = inject(CartService);

  ngOnInit() {
    return this.cartService.init();
  }
  get cartItems() {
    return this.cartService.items;
  }

  sellingPrice(product: Product){
    return Math.round(product.price-(product.price*product.discount)/100);
  }
  
  addToCart(productId: string,quantity: number){
    this.cartService.addToCart(productId,quantity).subscribe(()=>{
      this.cartService.init();
    });
  }

  get totalAmount(){
    let amount=0;
    for (let index = 0; index < this.cartItems.length; index++) {
      const element = this.cartItems[index];
      amount+=this.sellingPrice(element.product)*element.quantity;
      
    }
    return amount;
  }
}
