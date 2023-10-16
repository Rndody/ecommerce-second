import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategiriesService {
  constructor(private _HttpClient: HttpClient) {}

  baseUrl: string = 'https://ecommerce.routemisr.com/api/v1/';
  getAllCategories(): Observable<any> {
    return this._HttpClient.get(this.baseUrl + 'categories');
  }

  getCategoryDetails(categoryId: string): Observable<any> {
    return this._HttpClient.get(this.baseUrl + 'categories' + categoryId);
  }
}
