import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CategiriesService } from './../../Services/categiries.service';
import { Brand, Product } from 'src/app/Interfaces/product';

@Component({
  selector: 'app-category-slider',
  templateUrl: './category-slider.component.html',
  styleUrls: ['./category-slider.component.scss'],
})
export class CategorySliderComponent implements OnInit {
  constructor(private _CategiriesService: CategiriesService) {}
  categories: Brand[] = [];

  categoryCustomOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<', '>'],
    autoplaySpeed:1000,
    autoplayTimeout:4000,
    items: 7,

    nav: true,
    autoplay: true,
  };

  ngOnInit(): void {
    this._CategiriesService.getAllCategories().subscribe({
      next: (response) => {
        this.categories = response.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
