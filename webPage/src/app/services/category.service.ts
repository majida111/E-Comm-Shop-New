import { HttpClient } from '@angular/common/http';
import { inject, Inject, Injectable } from '@angular/core';
import { Category } from '../types/category';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
   http=inject(HttpClient)
  constructor() { }
  getCategories(){
    return this.http.get<Category[]>(environment.apiUrl+"/category")
  }
  getCategoryById(id:string){
    return this.http.get<Category>(environment.apiUrl+"/category/"+id);
  }
  addCategory(name:string){
    return this.http.post(environment.apiUrl+"/category",{
      name:name
    })
  }
  updateCategory(id:string,name:string){
    return this.http.put(environment.apiUrl+"/category/"+id,{
      name:name
    })
  }
  deleteCategory(id: string) {
        if (!this.isValidObjectId(id)) {
          throw new Error('Invalid ObjectId');
        }
        return this.http.delete(environment.apiUrl+'/category/'+id);
      }
  private isValidObjectId(id: string): boolean {
        return /^[a-fA-F0-9]{24}$/.test(id); // Regular expression for MongoDB ObjectId
      }

}
// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Category } from '../types/category';

// @Injectable({
//   providedIn: 'root',
// })
// export class CategoryService {
//   private baseUrl = 'http://localhost:3000/category';

//   constructor(private http: HttpClient) {}

//   getCategories() {
//     return this.http.get<Category[]>(this.baseUrl);
//   }

//   getCategoryById(id: string) {
//     if (!this.isValidObjectId(id)) {
//       throw new Error('Invalid ObjectId');
//     }
//     return this.http.get<Category>(`${this.baseUrl}/${id}`);
//   }

//   addCategory(name: string) {
//     return this.http.post(this.baseUrl, { name });
//   }

//   updateCategory(id: string, name: string) {
//     if (!this.isValidObjectId(id)) {
//       throw new Error('Invalid ObjectId');
//     }
//     return this.http.put(`${this.baseUrl}/${id}`, { name });
//   }

//   deleteCategory(id: string) {
//     if (!this.isValidObjectId(id)) {
//       throw new Error('Invalid ObjectId');
//     }
//     return this.http.delete(`${this.baseUrl}/${id}`);
//   }

//   private isValidObjectId(id: string): boolean {
//     return /^[a-fA-F0-9]{24}$/.test(id); // Regular expression for MongoDB ObjectId
//   }
// }
