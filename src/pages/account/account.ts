import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {

  constructor(public navCtrl: NavController, public auth: AuthService) {
  }
 
}
