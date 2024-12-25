import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../types/product';
import { environment } from '../../environments/environment';
import { Category } from '../types/category';

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
}