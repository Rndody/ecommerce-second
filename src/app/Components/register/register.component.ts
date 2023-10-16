import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
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

  registerForm: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\w{6,}$/),
    ]),
    rePassword: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\w{6,}$/),
    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern(/^01[0125][0-9]{8}$/),
    ]),
  });

  register(): void {
    this.errorMessage="";
    this.isLoading = true;
    if (this.registerForm.valid) {
      this._AuthenticationService
        .registerForm(this.registerForm.value)
        .subscribe({
          next: (response) => {
            // console.log(response);
            if (response.message === 'success') {
              this._Router.navigate(['/login']);
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
    else{
      this.registerForm.markAllAsTouched();
    }
  }
}
