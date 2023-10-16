import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private _HttpClient: HttpClient) { }
  _baseURL: string = 'https://ecommerce.routemisr.com/';

  // authHeaders: any = new HttpHeaders().set('token', '' + localStorage.getItem('userToken'))

  addtoWishlist(proId: string): Observable<any> {
    return this._HttpClient.post(`${this._baseURL}api/v1/wishlist`, { productId: proId, load: false })
  }

  removeFromWishlist(proId: string): Observable<any> {
    return this._HttpClient.delete(`${this._baseURL}api/v1/wishlist/${proId}`)
  }

  getUserWishList(): Observable<any> {
    return this._HttpClient.get(`${this._baseURL}api/v1/wishlist`)
  }
}
