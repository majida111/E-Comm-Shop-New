import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../types/product';
import { environment } from '../../environments/environment';
import { Category } from '../types/category';
import { Brand } from '../types/brand';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  http=inject(HttpClient);
  constructor() { }

  getNewProducts(){
      return this.http.get<Product[]>(environment.apiUrl+'/customer/newProducts')
  }
  getFeaturedProducts(){
    return this.http.get<Product[]>(environment.apiUrl+'/customer/featuredProducts')
  }
  getCategories(){
    return this.http.get<Category[]>(environment.apiUrl+'/customer/categories')
  }
  getBrands(){
    return this.http.get<Brand[]>(environment.apiUrl+'/customer/brands')
  }
  getProducts(searchTerm:string,categoryId:string,sortBy:string,sortOrder:number,brandId:string,page:number,pageSize:number){
    return this.http.get<Product[]>(environment.apiUrl+`/customer/products?searchTerm=${searchTerm}&categoryId=${categoryId}&
      sortBy=${sortBy}&sortOrder=${sortOrder}&brandId=${brandId}&page=${page}&pageSize=${pageSize}`)
  }
}
