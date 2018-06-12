import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import {KashtaApi} from '../../app/shared/shared';
import { SignupPage } from '../signup/signup';
import { TabsPage } from '../tabs/tabs';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  name: string;
  password: string; 
  flag: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams,private kApi: KashtaApi, public toastCtrl:ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  goBackWelcomePage() {
    this.navCtrl.pop();
  }

  goToSignupPage() {
    this.navCtrl.push(SignupPage);
  }

  login(){    
    this.flag = false; 
    this.kApi.GetLogin(this.name, this.password).subscribe(response => {
       if(response == true){
         this.flag = true;
        this.navCtrl.push(TabsPage)
       }
       else{
         this.flag = false;
         this.toastCtrl.create({
          message: "Credentials Invalid, Please try again with correct credentials",
          showCloseButton: true
        }).present();
       }
      })
      return this.flag;
  }
  logOut(){
    this.kApi.GetLogout().subscribe(response => {
      // console.log(response);
      this.flag = false;
    })
  }

}
