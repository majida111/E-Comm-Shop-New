import { Component, inject, Input } from '@angular/core';
import { Product } from '../../types/product';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import { WishlistService } from '../../services/wishlist.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [MatButtonModule,RouterLink,MatIconModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
@Input() product!:Product;
wishlistService=inject(WishlistService);

get sellingPrice(){
  return Math.round(this.product.price-(this.product.price*this.product.discount)/100);
}

addToWishList(product:Product){
console.log("Hello product",product);
if(this.isInWishList(product)){
  this.wishlistService.removeFromWishlists(product._id!).subscribe((result)=>{
    this.wishlistService.init();
  });
}else{
  this.wishlistService.addInWishlist(product._id!).subscribe((result)=>{
    this.wishlistService.init();

  })
}
}

 isInWishList(product:Product){
 let isExists= this.wishlistService.wishlists.find((x)=>x._id==product._id);
 if(isExists)
  return true;
 else
  return false;
 
}

}
