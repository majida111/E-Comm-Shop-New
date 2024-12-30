import { Component, inject } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../types/product';
import { ProductCardComponent } from '../product-card/product-card.component';
import { WishlistService } from '../../services/wishlist.service';
import {MatIconModule} from '@angular/material/icon';
@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [ProductCardComponent,MatIconModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
customerService=inject(CustomerService)
route=inject(ActivatedRoute);
product!:Product;
mainImage!:string;
similarProducts:Product[] = [];
ngOnInit(){
this.route.params.subscribe((x:any)=>{
  this.getProductDetails(x.id)
})

}

getProductDetails(id:string){
  this.customerService.getProductById(id).subscribe((result)=>{
    this.product = result;
    this.mainImage = this.product.images[0];
    console.log(result);
  
    this.customerService.getProducts('',this.product.categoryId,'',-1,'',1,4).subscribe((result)=>{
      this.similarProducts = result;
    });
    
  })
}
changeImage(url:string){
  this.mainImage = url;
}
get sellingPrice(){
  return Math.round(this.product.price-(this.product.price*this.product.discount)/100);
}
wishlistService=inject(WishlistService);
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
