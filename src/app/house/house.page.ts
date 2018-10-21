import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-house',
  templateUrl: './house.page.html',
  styleUrls: ['./house.page.scss'],
})
export class HousePage {

  form = {
    dateStart: '',
    dateEnd: ''
  };

  constructor(
      private router: Router
  ) { }

  sendProposal () {
    this.router.navigate(['/proposta-enviada']);
  }
}
