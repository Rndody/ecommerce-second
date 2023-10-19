import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { WishlistService } from 'src/app/Services/wishlist.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
})
export class WishlistComponent  implements OnInit {
  constructor(
    private _WishlistService: WishlistService,
    private _CartService: CartService,
    private _ToastrService: ToastrService
  ) {}
  wishListProducts: any[] = [];
  // wishlistempty: boolean = true;
  errorMessage: string = '';
  isLoading: boolean = false;
  wishListId: string = '';

  ngOnInit(): void {
    this.getUserWishListProducts();
    console.log(this.wishListProducts)
  }

 getUserWishListProducts() {
    this.isLoading = true;
    this._WishlistService.getUserWishListProducts().subscribe({
      next: (response) => {
        console.log(response.data);

        this.wishListProducts = response.data;
        this.isLoading = false;
        this.wishListId = response.data._id;
      },
      error: (err) => {
        console.log(err);
        this.isLoading = false;

        if (err.error.message.includes('No wishlist exist for this user:')) {
          this.errorMessage = err.error.message;
        }
      },
    });
  }







}
