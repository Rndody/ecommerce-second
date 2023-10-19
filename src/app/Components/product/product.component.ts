import { AuthenticationService } from 'src/app/Services/authentication.service';
import { CartService } from './../../Services/cart.service';
import { Component, Input,OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { WishlistService } from 'src/app/Services/wishlist.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
}) 
export class ProductComponent  implements OnInit {
  @Input() product: any;



  constructor(
    private _CartService: CartService,
    private _AuthenticationService: AuthenticationService,
    private toastr: ToastrService,
    private _WishlistService:WishlistService
  ) {}


  ngOnInit(): void {
  // getUserWishListProducts();
    console.log(this.wishListProducts)
    this.addProductIDWishList(this.productId)
  }
  wishListProducts: any[] = [];



  addProductIDCart(productId: string) {
    this._CartService.addProductID(productId).subscribe({
      next: (response) => {
        this._CartService.numOfCartItems.next(response.numOfCartItems)

        this.toastr.success('Product added to cart', 'Success');
      },
      error: (err) => {
        console.log(err.error.message);

        if (err.error.message == 'Invalid Token. please login again') {
          this._AuthenticationService.logOut();
        }
      },


    });
  }
  productId:string=""
isInWishlist:boolean=false;

  addProductIDWishList(productId: string) {
    this._WishlistService.addProductID(productId).subscribe({
      next: (response) => {

        productId
        this._WishlistService.numOfWishListItems.next(response.numOfWishListItems)

        this.toastr.success('Product added to wishlist', 'Success');
        this.isInWishlist=true;
      },
      error: (err) => {
        console.log(err.error.message);

        if (err.error.message == 'Invalid Token. please login again') {
          this._AuthenticationService.logOut();
        }
      },


    });
  }

  removeProductFromCart(productId: string) {
    this._WishlistService.removeWishListProduct(productId).subscribe({
      next: (response) => {
        console.log(response);
        this.wishListProducts = response.data.products;
        this.isInWishlist=false;
        this._WishlistService.numOfWishListItems.next(response.numOfCartItems);

      },
      error: (err) => {
        console.log(err);
      },
    });
  }

}
