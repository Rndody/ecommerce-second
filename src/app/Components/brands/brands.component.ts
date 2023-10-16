import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';


@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {
  brands:any[]=[]
  constructor(private ProductsService: ProductsService){}
  ngOnInit(): void {
    this.ProductsService.getBrands().subscribe({
      next:(response)=>{
        this.brands= response.data
      }
    })
  }
}

