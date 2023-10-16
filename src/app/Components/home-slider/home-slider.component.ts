import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.scss']
})
export class HomeSliderComponent implements OnInit {


  constructor(){}

 
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<', '>'],
    items: 1,
    autoplaySpeed:1000,
    autoplayTimeout:4000,
    nav: true,
    autoplay:true
  };



  ngOnInit(): void {
    

  }

}
