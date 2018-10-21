import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import {Router} from '@angular/router';

interface Response {
    success: boolean;
    message: string;
    id?: string;
}

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
      userPassword: '',
      userPicture: 'base64'
  };

  constructor(
      private auth: AuthenticationService,
      private router: Router
  ) {}

  public register() {
      this.auth.register(this.registerCredentials).subscribe((res: Response) => {
          if (res.success) {
              this.router.navigate(['/procurar']);
          }
      });
  }

}
