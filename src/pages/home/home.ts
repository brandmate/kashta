import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {KashtaApi} from '../../app/shared/shared';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  info : any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private kApi:KashtaApi) {

  }
  GetJson()
  {
    this.kApi.GetFeaturedProducts().subscribe(response => {
    console.log(response);
     this.info = response;
    })
  }
  ngOnInit()
  {
    this.GetJson();
  }

}
