import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {KashtaApi} from '../../app/shared/shared';
import { LoginPage } from '../login/login';
import { TabsPage } from '../tabs/tabs';
import { SignupPage } from '../signup/signup';

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  goToLoginPage() {
    this.navCtrl.push(LoginPage);
  }

  goToHomePage() {
    this.navCtrl.push(TabsPage);
  }

  goToSignupPage() {
    this.navCtrl.push(SignupPage);
  }

}
