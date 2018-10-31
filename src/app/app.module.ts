import { OrderDetailsPage } from './../pages/order-details/order-details';
import { PaymentPage } from './../pages/payment/payment';
import { CartPage } from './../pages/cart/cart';
import { OrderLocationPage } from './../pages/order-location/order-location';
import { LoginPage } from './../pages/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OrderPage } from '../pages/order/order';
import { GoogleMaps } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';
import { ProfilePage } from '../pages/profile/profile';
import { OrderHistoryPage } from '../pages/order-history/order-history';
import { ContactUsPage } from '../pages/contact-us/contact-us';
import { OrderHistoryDetailPage } from '../pages/order-history-detail/order-history-detail';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpModule, Http } from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    OrderPage,
    OrderLocationPage,
    CartPage,
    PaymentPage,
    ProfilePage,
    OrderHistoryPage,
    ContactUsPage,
    OrderDetailsPage,
    OrderHistoryDetailPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    OrderPage,
    OrderLocationPage,
    CartPage,
    ProfilePage,
    PaymentPage,
    OrderHistoryPage,
    ContactUsPage,
    OrderDetailsPage,
    OrderHistoryDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleMaps,
    Geolocation,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
