import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products:any[] = []
  constructor(private _ProductsService:ProductsService ){}
  ngOnInit(): void {
    this._ProductsService.getProducts().subscribe({
      next:(response)=> {this.products = response.data
      }
    })

  }

}
