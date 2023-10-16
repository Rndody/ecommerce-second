import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
 baseUrl:string="https://ecommerce.routemisr.com/api/v1/"

  constructor(private _HttpClient: HttpClient) {}

  getAllProducts(): Observable<any> {
    return this._HttpClient.get(this.baseUrl+'products');
  }

  getProductDetails(productId:string):Observable<any>{
    return this._HttpClient.get(this.baseUrl+'products/'+productId)
  }

  getBrands():Observable<any> {
    return this._HttpClient.get(`https://route-ecommerce.onrender.com/api/v1/brands`)
   }


   getProducts():Observable<any> {
    return this._HttpClient.get('https://route-ecommerce.onrender.com/api/v1/products')
   }
   getCatDetailes(id:string):Observable<any> {
    return this._HttpClient.get(`https://route-ecommerce.onrender.com/api/v1/subcategories/${id}`)
   }

   getProductCategories():Observable<any> {
    return this._HttpClient.get(`https://route-ecommerce.onrender.com/api/v1/categories`)
   }
}
