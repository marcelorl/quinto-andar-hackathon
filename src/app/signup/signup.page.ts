import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {

  messageStatus = false;
  message = '';
  registerCredentials = {
      userName: '',
      userEmail: '',
      userBirthDate: '',
      userRole: '',
      userResidence: '',
      userGeneralRegistry: '',
      userDocumentNumber: '',
      userPassword: '',
      userPicture: 'base64'
  };

  constructor(
      private auth: AuthenticationService
  ) {}

  public register() {
      this.auth.register(this.registerCredentials).subscribe(success => {
              if (success) {
                  this.messageStatus = true;
                  this.message = 'Successo';
              } else {
                  this.message = 'Erro';
              }
          },
          error => {
              this.message = 'Erro';
          });
  }

}
