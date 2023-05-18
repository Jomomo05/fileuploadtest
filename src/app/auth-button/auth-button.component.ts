import { Component } from '@angular/core';
// Import the AuthService type from the SDK
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-auth-button',
  //templateUrl: './auth-button.component.html',
  //styleUrls: ['./auth-button.component.css']
  template: '<button (click)="auth.loginWithRedirect()">Log in</button>'
})
export class AuthButtonComponent {
  constructor(public auth: AuthService) {}
}
