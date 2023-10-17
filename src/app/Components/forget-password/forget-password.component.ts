import { Router } from '@angular/router';
import { ForgetPasswordService } from './../../Services/forget-password.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss'],
})
export class ForgetPasswordComponent {
  email: boolean = true;
  code: boolean = false;
  newPassword: boolean = false;

  userEmail: string = '';

  userMsg: string = '';

  constructor(
    private _ForgetPasswordService: ForgetPasswordService,
    private _Router: Router
  ) {}

  forgetForm: FormGroup = new FormGroup({
    email: new FormControl(''),
  });

  forgerPassword(): void {
    let emailUser = this.forgetForm.value;
    this.userEmail = emailUser.email;

    this._ForgetPasswordService.forgetPassword(emailUser).subscribe({
      next: (response) => {
        this.userMsg = response.message;
        this.email = false;
        this.code = true;
      },
      error: (err) => {
        this.userMsg = err.error.message;
      },
    });
  }

  //*================================================================================================================

  codeVerificationForm: FormGroup = new FormGroup({
    resetCode: new FormControl(''),
  });

  verificationCode(): void {
    let resetCode = this.codeVerificationForm.value;
    this._ForgetPasswordService.verificationCode(resetCode).subscribe({
      next: (response) => {
        this.userMsg = 'write your new password';
        this.code = false;
        this.newPassword = true;
      },
      error: (err) => {
        this.userMsg = err.error.message;
      },
    });
  }

  //*================================================================================================================

  newPasswordForm: FormGroup = new FormGroup({
    newPassword: new FormControl(''),
  });

  sendNewPassword(): void {
    let resetPassword = this.newPasswordForm.value;
    resetPassword.email = this.userEmail;

    this._ForgetPasswordService.sendNewPassword(resetPassword).subscribe({
      next: (response) => {
        if (response.token) {
          localStorage.setItem('userToken', response.token);
          this._Router.navigate(['/home'])
        }
      },
      error: (err) => {
        this.userMsg = err.error.message;
      },
    });
  }
}
