import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { CategoriesPage } from '../pages/categories/categories';
import { PlpPage } from '../pages/plp/plp';
import { CartPage } from '../pages/cart/cart';
import { AccountPage } from '../pages/account/account';
import { OrdersPage } from '../pages/orders/orders';
import { CardsPage } from '../pages/cards/cards';
import { ProfilePage } from '../pages/profile/profile';
import { PdpPage } from '../pages/pdp/pdp';
import { SearchPage } from '../pages/search/search';
import { CheckoutPage } from '../pages/checkout/checkout';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    TutorialPage,
    WelcomePage,
    LoginPage,
    SignupPage,
    CategoriesPage,
    PlpPage,
    CartPage,
    AccountPage,
    OrdersPage,
    CardsPage,
    ProfilePage,
    PdpPage,
    SearchPage,
    CheckoutPage,
    PdpPage,
    PdpPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    TutorialPage,
    WelcomePage,
    LoginPage,
    SignupPage,
    CategoriesPage,
    PlpPage,
    CartPage,
    AccountPage,
    OrdersPage,
    CardsPage,
    ProfilePage,
    PdpPage,
    SearchPage,
    CheckoutPage,
    PdpPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
