import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OrdersPage } from '../orders/orders';
import { CardsPage } from '../cards/cards';
import { ProfilePage } from '../profile/profile';

/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }

  goToOrdersPage() {
    this.navCtrl.push(OrdersPage);
  }

  goToCardsPage() {
    this.navCtrl.push(CardsPage);
  }

  goToProfilePage() {
    this.navCtrl.push(ProfilePage);
  }

}
