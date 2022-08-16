import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, VirtualTimeScheduler } from 'rxjs';
import { AuthResponseData, AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  isLoginMode = true;
  isLoading: boolean = false;
  error: string = null;
  authObs: Observable<AuthResponseData>;

  constructor(private authService: AuthService, private router: Router) {}

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
      this.authObs = this.authService.login(email, password);
    } else {
      this.authObs = this.authService.signUp(email, password);
    }
    this.authObs.subscribe(
      (response) => {
        console.log(response);
        this.isLoading = false;
        this.error = null;
        this.router.navigate(['./recipes']);
      },
      (errorMessage) => {
        this.error = errorMessage;
        this.isLoading = false;
      }
    );
    authForm.reset();
  }
}
