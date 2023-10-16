import { AuthenticationService } from 'src/app/Services/authentication.service';
import { CartService } from './../../Services/cart.service';
import { Component, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() product: any;

  constructor(
    private _CartService: CartService,
    private _AuthenticationService: AuthenticationService,
    private toastr: ToastrService
  ) {}

  addProductID(productId: string) {
    this._CartService.addProductID(productId).subscribe({
      next: (response) => {
        // this._CartService.numOfCartItems.next(response.numOfCartItems)

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
}
