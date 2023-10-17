import { CartService } from './../../Services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  constructor(private _CartService: CartService) {}

  cartProducts: any[] = [];//make interface
  totalCartPrice: number = 0;
  errorMessage: string = '';
  isLoading: boolean = false;
  updateProductCountTimeOut: any;
  cartId: string = '';

  ngOnInit(): void {
    this.getUserCartProducts();
  }

  getUserCartProducts() {
    this.isLoading = true;
    this._CartService.getUserCartProducts().subscribe({
      next: (response) => {
        console.log(response.data);
        this.cartProducts = response.data.products;
        this.totalCartPrice = response.data.totalCartPrice;
        this.isLoading = false;
       
        this.cartId = response.data._id;
      },
      error: (err) => {
        console.log(err);
        this.isLoading = false;

        if (err.error.message.includes('No cart exist for this user:')) {
          this.errorMessage = err.error.message;
        }
      },
    });
  }

  removeProductFromCart(productId: string) {
    this._CartService.removeCartProduct(productId).subscribe({
      next: (response) => {
        console.log(response);
        this.cartProducts = response.data.products;
        this.totalCartPrice = response.data.totalCartPrice;
        
        this._CartService.numOfCartItems.next(response.numOfCartItems);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  clearUserCart() {
    this._CartService.clearUserCart().subscribe({
      next: (response) => {
        console.log(response);
        if (response.message == 'success') {
          this.cartProducts = [];
          this.totalCartPrice = 0;
          this._CartService.numOfCartItems.next(0);
        }
      },
      error: (err) => {
        console.log(err);
  
      },
    });
  }

  updateProductCount(productId: string, count: number, index: number) {
    this.cartProducts[index].count = count;
    this.totalCartPrice += this.cartProducts[index].price;
    // console.log(this.cartProducts);
    clearTimeout(this.updateProductCountTimeOut);
    console.log('clearTimeout');

    this.updateProductCountTimeOut = setTimeout(() => {
      console.log('Request sent');

      this._CartService.updateProductCount(productId, count).subscribe({
        next: (response) => {
          console.log(response);
          this.cartProducts = response.data.products;
          this.totalCartPrice = response.data.totalCartPrice;
        },
        error: (err) => {
          console.log(err);

          this.getUserCartProducts();
        },
      });
    }, 500);
  }
}
