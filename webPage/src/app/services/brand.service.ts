import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Brand } from '../types/brand';
import { environment } from '../../environments/environment';
import { catchError, tap, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BrandService {
     
    constructor() { }
    http=inject(HttpClient);
    getBrands(){
      return this.http.get<Brand[]>(environment.apiUrl+"/brand")
    }
    getBrandById(id:string){
      return this.http.get<Brand>(environment.apiUrl+ "/brand/"+id);
    }
    addBrand(name:string){
      return this.http.post(environment.apiUrl+ '/brand',{
        name:name,
      });
    }
    updateBrand(id:string,name:string){
      return this.http.put(environment.apiUrl+'/brand/'+id,{
       name:name,
      });

    }
  deleteBrandById(id:string){
    return this.http.delete(environment.apiUrl+'/brand/'+id);
  }



  // getBrands() {
  //   return this.http.get<Brand[]>(environment.apiUrl+ '/brand');
  // }
  // getBrands() {
  //   console.log('Fetching brands...');
  //   return this.http.get<Brand[]>(environment.apiUrl + '/brand').pipe(
  //     tap((response) => console.log('API Response:', response)),
  //     catchError((error) => {
  //       console.error('Error fetching brands:', error);
  //       return throwError(() => new Error('Failed to fetch brands'));
  //     })
  //   );
  // }

  // getBrandById(id: string) {
  //   if (!this.isValidObjectId(id)) {
  //     throw new Error('Invalid ObjectId');
  //   }
  //   return this.http.get<Brand>(`${environment.apiUrl+'/brand'}/${id}`);
  // }

  // addBrand(name: string) {
  //   return this.http.post(`${environment.apiUrl+'/brand'}/${ name }`);
  // }

  // updateBrand(id: string, name: string) {
  //   if (!this.isValidObjectId(id)) {
  //     throw new Error('Invalid ObjectId');
  //   }
  //   return this.http.put(`${environment.apiUrl+'/brand'}/${id}`, { name });
  // }

  // deleteBrand(id: string) {
  //   if (!this.isValidObjectId(id)) {
  //     throw new Error('Invalid ObjectId');
  //   }
  //   return this.http.delete(`${environment.apiUrl+'/brand'}/${id}`);
  // }

  private isValidObjectId(id: string): boolean {
    return /^[a-fA-F0-9]{24}$/.test(id); // Regular expression for MongoDB ObjectId
  }
}
