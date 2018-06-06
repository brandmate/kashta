import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CategoriesPage } from '../categories/categories';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  goToCategoriesPage() {
    console.log('shbalo');
    this.navCtrl.push(CategoriesPage);
  }
}
