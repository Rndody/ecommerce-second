import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories:any[]=[]
  constructor(private _ProductsService:ProductsService){}
  ngOnInit(): void {
      this._ProductsService.getProductCategories().subscribe({
        next:(response)=>{
          this.categories= response.data
        }
      })
  }
}
