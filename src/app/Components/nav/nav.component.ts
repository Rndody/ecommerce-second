import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  constructor(private _AuthenticationService: AuthenticationService) {}

  isLoggedIn: boolean = false;

  ngOnInit(): void {
    this._AuthenticationService.isUserLoggedIn.subscribe({
      next: (response) => {
        this.isLoggedIn = response;
      },
    });
  }

  logOut() {
    this._AuthenticationService.logOut();
  }
}
