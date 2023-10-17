import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private _HttpClient: HttpClient) { }
  baseUrl: string = 'https://ecommerce.routemisr.com/api/v1/';

  // authHeaders: any = new HttpHeaders().set('token', '' + localStorage.getItem('userToken'))

  // addtoWishlist(id: string): Observable<any> {
  //   return this._HttpClient.post(this.baseUrl, { productId: id })
  // }

  // removeFromWishlist(id: string): Observable<any> {
  //   return this._HttpClient.delete(this.baseUrl+ id)
  // }

  // getUserWishList(): Observable<any> {
  //   return this._HttpClient.get(this.baseUrl)
  // }
addProductID(productId: string): Observable<any> {
    return this._HttpClient.post(
      this.baseUrl + 'wishlist',
      {
        productId,
      },
      { headers: { token: localStorage.getItem('userToken') || '' } }
    );
  }


  getUserWishListProducts(): Observable<any> {
    return this._HttpClient.get(this.baseUrl + 'wishlist', {
      headers: { token: localStorage.getItem('userToken') || '' },
    });
  }



  numOfWishListItems: BehaviorSubject<number> = new BehaviorSubject(0);

  removeWishListProduct(productId: string): Observable<any> {
    return this._HttpClient.delete(this.baseUrl + 'wishlist/' + productId, {
      headers: { token: localStorage.getItem('userToken') || '' },
    });
  }




}










