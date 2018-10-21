import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  loginCredentials = {
    cpf: '',
    password: ''
  };

  constructor(
      private auth: AuthenticationService,
      private router: Router
  ) { }

  public login() {
    this.auth.login(this.loginCredentials).subscribe(success => {
        this.router.navigate(['/procurar']);
    });
  }

}
