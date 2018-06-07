import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CategoriesPage } from '../categories/categories';
import { PlpPage } from '../plp/plp';
import { CartPage } from '../cart/cart';
import { AccountPage } from '../account/account';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab3Root = PlpPage;
  tab4Root = AccountPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  goToCategoriesPage() {
    console.log('shbalo');
    this.navCtrl.push(CategoriesPage);
  }

  goToCartPage() {
    console.log('shbalo');
    this.navCtrl.push(CartPage);
  }
}
