import { AuthenticationService } from 'src/app/Services/authentication.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ecommerce-second';

  constructor(private _AuthenticationService: AuthenticationService) {
    if (localStorage.getItem('userToken') != null) {
      this._AuthenticationService.isUserLoggedIn.next(true);
    }
  }
  top(): void {
    scrollTo(0, 0);
  }
}
