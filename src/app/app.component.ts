import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { WelcomePage } from '../pages/welcome/welcome';
<<<<<<< HEAD
=======
import { AccountPage } from '../pages/account/account';
import { TutorialPage } from '../pages/tutorial/tutorial';
>>>>>>> 59d3a9db650c72c2d8a49da6b982796288c057c1


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
<<<<<<< HEAD
  rootPage:any = WelcomePage;
=======
  rootPage:any = TutorialPage;
>>>>>>> 59d3a9db650c72c2d8a49da6b982796288c057c1

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
