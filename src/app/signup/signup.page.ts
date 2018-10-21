import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {

  registerCredentials = {
      userName: '',
      userEmail: '',
      userBirthDate: '',
      userRole: '',
      userResidence: '',
      userGeneralRegistry: '',
      userDocumentNumber: '',
      userPassword: ''
  };

  constructor(
      private auth: AuthenticationService
  ) {}

  public register() {
      this.auth.register(this.registerCredentials).subscribe();
  }

}
