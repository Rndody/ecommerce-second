import { UserOrdersComponent } from './Components/user-orders/user-orders.component';
import { CategoryDetailsComponent } from './Components/category-details/category-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { CartComponent } from './Components/cart/cart.component';
import { ProductsComponent } from './Components/products/products.component';
import { CategoriesComponent } from './Components/categories/categories.component';
import { BrandsComponent } from './Components/brands/brands.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { WishlistComponent } from './Components/wishlist/wishlist.component';
import { AllOrdersComponent } from './Components/all-orders/all-orders.component';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { authentcationGuard } from './Guards/authentcation.guard';
import { BrandDetailsComponent } from './Components/brand-details/brand-details.component';
import { SubcategoriesComponent } from './Components/subcategories/subcategories.component';
import { SubcategoriesDetailsComponent } from './Components/subcategories-details/subcategories-details.component';
import { SubcategotyOnCategoryComponent } from './Components/subcategoty-on-category/subcategoty-on-category.component';
import { CheckOutComponent } from './Components/check-out/check-out.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home',canActivate:[authentcationGuard], component: HomeComponent },
  { path: 'cart',canActivate:[authentcationGuard], component: CartComponent },
  { path: 'products',canActivate:[authentcationGuard], component: ProductsComponent },

  { path: 'product/:id',canActivate:[authentcationGuard], component: ProductDetailsComponent },
  { path: 'category/:id',canActivate:[authentcationGuard], component: CategoryDetailsComponent },
  { path: 'brand/:id',canActivate:[authentcationGuard], component: BrandDetailsComponent },
  { path: 'myorders/:id',canActivate:[authentcationGuard], component: UserOrdersComponent },
  { path: 'subcategory/:id',canActivate:[authentcationGuard], component: SubcategoriesDetailsComponent },
  { path: 'subcategoryforcategory/:id',canActivate:[authentcationGuard], component: SubcategotyOnCategoryComponent },
  { path: 'checkout/:id',canActivate:[authentcationGuard], component: CheckOutComponent },


  { path: 'categories',canActivate:[authentcationGuard], component: CategoriesComponent },
  { path: 'subcategories',canActivate:[authentcationGuard], component: SubcategoriesComponent },
  { path: 'brands',canActivate:[authentcationGuard], component: BrandsComponent },
  { path: 'wishlist',canActivate:[authentcationGuard], component: WishlistComponent },
  { path: 'allorders',canActivate:[authentcationGuard], component: AllOrdersComponent },
  // { path: 'checkout',canActivate:[authentcationGuard], component: CheckOutComponent },

  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
