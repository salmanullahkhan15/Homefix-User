import { CartPage } from './../cart/cart';
import { OrderLocationPage } from './../order-location/order-location';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

/**
 * Generated class for the OrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {
  imagesArray: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPage');

    this.imagesArray = [
      {
        id: 0,
        image: "upload_image_1.png"
      },
      {
        id: 1,
        image: "upload_image_1.png"
      },
      {
        id: 2,
        image: "upload_image_1.png"
      },
      {
        id: 3,
        image: "upload_image_1.png"
      },
      {
        id: 3,
        image: "upload_image_1.png"
      },
      {
        id: 3,
        image: "upload_image_1.png"
      },
      {
        id: 3,
        image: "upload_image_1.png"
      },
      {
        id: 3,
        image: "upload_image_1.png"
      },
      {
        id: 3,
        image: "upload_image_1.png"
      }
    ]
    console.log(this.imagesArray);
  }


  openLocation() {
    let locationModal = this.modalCtrl.create(OrderLocationPage);
    locationModal.present();
  }

  gotoCartPage(){
    this.navCtrl.push(CartPage)
  }

}
