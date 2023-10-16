import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { WishlistService } from 'src/app/Services/wishlist.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent {
  constructor(private _WishlistService: WishlistService, private _CartService: CartService, private _ToastrService: ToastrService) { }
  myWishList: any[] = [];
  wishlistempty: boolean = true;
  ngOnInit(): void {
    this.comGetWishlist();
  }

  comGetWishlist() {
    this._WishlistService.getUserWishList().subscribe({
      next: (response) => {
        this.myWishList = response.data;
        if (response.count !== 0) {
          this.wishlistempty = false;
        } else {
          this.wishlistempty = true;
        }
      },
      error: () => { },
      complete: () => { }
    })
  }

  addPro(pro_Id: string) {
    this._CartService.addProductID(pro_Id).subscribe({
      next: () => { },
      error: () => { },
      complete: () => { }
    })
  }

  removeWishList(pro_Id: string) {
    this._WishlistService.removeFromWishlist(pro_Id).subscribe({
      next: (response) => {
        if (response.data !== 0) {
          this.wishlistempty = false;
        } else {
          this.wishlistempty = true;
        }
      },
      error: () => { },
      complete: () => {
        this._ToastrService.success('Item removed from wishlist', 'Success')
        this.comGetWishlist();
      }
    })
  }
}
