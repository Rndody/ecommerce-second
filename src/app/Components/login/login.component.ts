import { AuthenticationService } from 'src/app/Services/authentication.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private _AuthenticationService: AuthenticationService,
    private _Router: Router
  ) {

    if(localStorage.getItem('userToken')!=null){
      _Router.navigate(['/home'])
    }
  }
  isLoading: boolean = false;
  errorMessage: string = '';

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),

    password: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\w{6,}$/),
    ]),
  });

  login(): void {
    this.isLoading = true;
    if (this.loginForm.valid) {
      this._AuthenticationService.loginForm(this.loginForm.value).subscribe({
        next: (response) => {
          // console.log(response);
          if (response.message === 'success') {
            this._Router.navigate(['/home']);
            localStorage.setItem('userToken', response.token);
            this._AuthenticationService.isUserLoggedIn.next(true)
          }
          this.isLoading = false;
        },
        error: (err) => {
          // console.log(err);

          this.errorMessage = err.error.message;

          this.isLoading = false;
        },
        complete: () => {
          console.log('done form registration');
        },
      });
    }
  }
}
