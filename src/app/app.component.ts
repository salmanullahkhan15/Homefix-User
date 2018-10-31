import { OrderDetailsPage } from './../pages/order-details/order-details';
import { ContactUsPage } from './../pages/contact-us/contact-us';
import { LoginPage } from './../pages/login/login';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CartPage } from '../pages/cart/cart';
import { PaymentPage } from '../pages/payment/payment';
import { ProfilePage } from '../pages/profile/profile';
import { OrderHistoryPage } from '../pages/order-history/order-history';
import { TranslateService } from '@ngx-translate/core';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // rootPage: any = PaymentPage;
  // rootPage: any = HomePage;
  rootPage: any = LoginPage;
  // rootPage: any = ContactUsPage;
  // rootPage: any = OrderDetailsPage;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,translate: TranslateService) {
    this.initializeApp();
    
    translate.setDefaultLang('en');
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Order History', component: OrderHistoryPage },
      { title: 'Profile', component: ProfilePage },
      { title: 'Services', component: HomePage },
      { title: 'About Us', component: HomePage },
      { title: 'Contact Us', component: ContactUsPage },
      { title: 'Logout', component: HomePage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
