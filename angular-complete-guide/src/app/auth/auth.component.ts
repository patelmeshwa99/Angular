import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { VirtualTimeScheduler } from 'rxjs';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  isLoginMode = true;
  isLoading: boolean = false;
  error: string = null;

  constructor(private authService: AuthService) {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(authForm: NgForm) {
    const email = authForm.value.email;
    const password = authForm.value.password;

    if (!authForm.valid) {
      return;
    }

    this.isLoading = true;
    if (this.isLoginMode) {
      // ...
    } else {
      this.authService.signUp(email, password).subscribe(
        (response) => {
          console.log(response);
          this.isLoading = false;
        },
        (errorMessage) => {
          this.error = errorMessage;
          this.isLoading = false;
        }
      );
    }
    authForm.reset();
  }
}
