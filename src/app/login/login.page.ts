import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  messageStatus = false;
  message = '';
  loginCredentials = {
    cpf: '',
    password: ''
  };

  constructor(
      private auth: AuthenticationService
  ) { }

  public login() {
    this.auth.login(this.loginCredentials).subscribe(success => {
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
