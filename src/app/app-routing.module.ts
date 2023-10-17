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
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home',canActivate:[authentcationGuard], component: HomeComponent,title:'home' },
  { path: 'cart',canActivate:[authentcationGuard], component: CartComponent,title:'cart' },
  { path: 'products',canActivate:[authentcationGuard], component: ProductsComponent,title:'products'},

  { path: 'product/:id',canActivate:[authentcationGuard], component: ProductDetailsComponent,title:'product-details' },
  { path: 'category/:id',canActivate:[authentcationGuard], component: CategoryDetailsComponent ,title:'category-details'},
  { path: 'brand/:id',canActivate:[authentcationGuard], component: BrandDetailsComponent ,title:'brand-details' },
  { path: 'myorders/:id',canActivate:[authentcationGuard], component: UserOrdersComponent ,title:'user-orders' },
  { path: 'subcategory/:id',canActivate:[authentcationGuard], component: SubcategoriesDetailsComponent ,title:'subcategory' },
  { path: 'subcategoryforcategory/:id',canActivate:[authentcationGuard], component: SubcategotyOnCategoryComponent ,title:'subcategory' },
  { path: 'checkout/:id',canActivate:[authentcationGuard], component: CheckOutComponent ,title:'checkout' },


  { path: 'categories',canActivate:[authentcationGuard], component: CategoriesComponent ,title:'categories' },
  { path: 'subcategories',canActivate:[authentcationGuard], component: SubcategoriesComponent ,title:'subcategories' },
  { path: 'brands',canActivate:[authentcationGuard], component: BrandsComponent ,title:'brands' },
  { path: 'wishlist',canActivate:[authentcationGuard], component: WishlistComponent ,title:'wishlist' },
  { path: 'allorders',canActivate:[authentcationGuard], component: AllOrdersComponent ,title:'all-orders' },
  // { path: 'checkout',canActivate:[authentcationGuard], component: CheckOutComponent },

  { path: 'register', component: RegisterComponent ,title:'home' },
  { path: 'login', component: LoginComponent ,title:'home' },
  { path: 'forgetPassword', component: ForgetPasswordComponent ,title:'home' },

  { path: '**', component: NotFoundComponent ,title:'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
