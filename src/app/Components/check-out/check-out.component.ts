import { PaymentService } from './../../Services/payment.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss'],
})
export class CheckOutComponent {
  constructor(
    private _PaymentService: PaymentService,
    private _ActivatedRoute: ActivatedRoute
  ) {
    this._ActivatedRoute.params.subscribe({
      next: (params) => {
        this.cartId = params['cartId'];
      },
      error: (err) => {},
    });
  }

  cartId: string = '';

  shippingAddress: FormGroup = new FormGroup({
    details: new FormControl(''),
    phone: new FormControl(''),
    city: new FormControl(''),
  });

  checkout(shippingAddress: FormGroup) {
    console.log(shippingAddress.value);

    this._PaymentService
      .creatCashOrder(this.cartId, shippingAddress.value)
      .subscribe({
        next: (response) => {
          console.log(response.session.url);
          location.href=response.session.url
        },
        error: (err) => {},
      });
  }
}
