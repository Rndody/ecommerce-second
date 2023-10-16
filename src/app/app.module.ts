import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { NavComponent } from './Components/nav/nav.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ProductsComponent } from './Components/products/products.component';
import { ProductComponent } from './Components/product/product.component';
import { CartComponent } from './Components/cart/cart.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { BrandsComponent } from './Components/brands/brands.component';
import { CategoriesComponent } from './Components/categories/categories.component';
import { AllOrdersComponent } from './Components/all-orders/all-orders.component';
import { CategorySliderComponent } from './Components/category-slider/category-slider.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { CheckOutComponent } from './Components/check-out/check-out.component';
import { WishlistComponent } from './Components/wishlist/wishlist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SplitTextPipe } from './Pipes/split-text.pipe'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HomeSliderComponent } from './Components/home-slider/home-slider.component';
import { CategoryDetailsComponent } from './Components/category-details/category-details.component';
import { BrandDetailsComponent } from './Components/brand-details/brand-details.component';
import { UserOrdersComponent } from './Components/user-orders/user-orders.component';
import { SubcategoriesComponent } from './Components/subcategories/subcategories.component';
import { SubcategoriesDetailsComponent } from './Components/subcategories-details/subcategories-details.component';
import { SubcategotyOnCategoryComponent } from './Components/subcategoty-on-category/subcategoty-on-category.component';
import { SearchPipe } from './Pipes/search.pipe';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    ProductsComponent,
    ProductComponent,
    CartComponent,
    LoginComponent,
    RegisterComponent,
    BrandsComponent,
    CategoriesComponent,
    AllOrdersComponent,
    CategorySliderComponent,
    ProductDetailsComponent,
    NotFoundComponent,
    CheckOutComponent,
    WishlistComponent,
    SplitTextPipe,
    HomeSliderComponent,
    CategoryDetailsComponent,
    BrandDetailsComponent,
    UserOrdersComponent,
    SubcategoriesComponent,
    SubcategoriesDetailsComponent,
    SubcategotyOnCategoryComponent,
    SearchPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
     ReactiveFormsModule,
    HttpClientModule,
    CarouselModule,
    BrowserAnimationsModule,
    RouterModule, 
    FormsModule,
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
