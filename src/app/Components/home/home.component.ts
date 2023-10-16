import { Brand, Product } from 'src/app/Interfaces/product';

import { ProductsService } from './../../Services/products.service';
import { Component, OnDestroy, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
 

searchTerm:string=''


  constructor(private _ProductsService: ProductsService ) {}

  products: Product[] = [];


  ngOnInit(): void {
    this._ProductsService.getAllProducts().subscribe({
      next: (response) => {
        this.products = response.data;
      },
      error: (err) => {
        console.log(err);
      },
    });



  }
  ngOnDestroy(): void {}
}
