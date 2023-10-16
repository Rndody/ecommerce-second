import { ProductsService } from './../../Services/products.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/Interfaces/product';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent {
  productID: string = '';
  productDetails!: Product;
  // ! means it can be undefied

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1,
      },
    },
    nav: true,
  };

  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _ProductsService: ProductsService
  ) {
    // this._ActivatedRoute.params.subscribe((params)=>{
    //   params['id']  }    )

    // this._ActivatedRoute.paramMap.subscribe({
    //   next: (p) => {
    //     this.productID = p.get('id') || '';
    //     this._ProductsService.getProductDetails(this.productID).subscribe({
    //       next: (response) => {
    //         console.log(response.data)
    //         this.productDetails = response.data;
    //       },
    //     });
    //   },
    // });

    _ActivatedRoute.paramMap.subscribe((params) => {
      this.productID = params.get('id') || '';

      _ProductsService
        .getProductDetails(this.productID)
        .subscribe((response) => {
          this.productDetails = response.data;
          console.log(response.data);
        });
    });
  }
}
