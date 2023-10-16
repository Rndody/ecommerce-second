import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private _HttpClient:HttpClient) { }
  baseUrl: string = 'https://ecommerce.routemisr.com/api/v1/';

  creatCashOrder(cartId:string, shippingAddress:any):Observable<any>  {
    return this._HttpClient.post( this.baseUrl + 'orders/checkout-session'+cartId,
    {
     shippingAddress,
    },
    { headers: { token: localStorage.getItem('userToken') || '' } })
  }
}
