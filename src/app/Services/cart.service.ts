import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

// import { Environment } from '../enviroment';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private _HttpClient: HttpClient) {}

  baseUrl: string = 'https://ecommerce.routemisr.com/api/v1/';

  addProductID(productId: string): Observable<any> {
    return this._HttpClient.post(
      this.baseUrl + 'cart',
      {
        productId,
      },
      { headers: { token: localStorage.getItem('userToken') || '' } }
    );
  }

  getUserCartProducts(): Observable<any> {
    return this._HttpClient.get(this.baseUrl + 'cart', {
      headers: { token: localStorage.getItem('userToken') || '' },
    });
  }

  numOfCartItems: BehaviorSubject<number> = new BehaviorSubject(0);

  removeCartProduct(productId: string): Observable<any> {
    return this._HttpClient.delete(this.baseUrl + 'cart/' + productId, {
      headers: { token: localStorage.getItem('userToken') || '' },
    });
  }

  clearUserCart(): Observable<any> {
    return this._HttpClient.delete(this.baseUrl + 'cart', {
      headers: { token: localStorage.getItem('userToken') || '' },
    });
  }

  updateProductCount(productId: string, count: number): Observable<any> {
    return this._HttpClient.put(this.baseUrl + 'cart/' + productId, {
      count,
    },
    {
      headers: { token: localStorage.getItem('userToken') || '' },
    });
  }
}
