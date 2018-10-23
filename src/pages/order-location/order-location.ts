import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  CameraPosition,
  LatLng,
  GoogleMapsEvent,
  Marker,
  MarkerOptions
} from '@ionic-native/google-maps';
import { HttpModule, Http, Response } from '@angular/http';
import { Geolocation } from '@ionic-native/geolocation'
import { Observable } from 'rxjs/Observable';

// CameraPosition: new Observable < Response >

/**
 * Generated class for the OrderLocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-order-location',
  templateUrl: 'order-location.html',
})
export class OrderLocationPage {
  @ViewChild('map') mapElement: ElementRef;
  map: GoogleMap;

  // CameraPosition: Observable<any>;
  constructor(public navCtrl: NavController,
    private _googleMaps: GoogleMaps,
    private _geoLoc: Geolocation,
    public platform: Platform) {
    this.platform.ready().then(() => {
      // this.initMap();

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
    });
  }

  ionViewDidLoad() {
    let loc: LatLng;
    this.initMap();


    //once the map is ready move
    //camera into position
    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
      //Get User location
      this.getLocation().then(res => {
        //Once location is gotten, we set the location on the camera.
        loc = new LatLng(res.coords.latitude, res.coords.longitude);
        this.moveCamera(loc);

        this.createMarker(loc, "Me").then((marker: Marker) => {
          marker.showInfoWindow();
        }).catch(err => {
          console.log(err);
        });

      }).catch(err => {
        console.log(err);
      });

    });
  }

  //Load the map 
  initMap() {
    console.log("Here");
    let element = this.mapElement.nativeElement;
    this.map = GoogleMaps.create(element)
    console.log(element)
  }

  //Get current user location
  //Returns promise
  getLocation() {
    return this._geoLoc.getCurrentPosition();
  }


  //Moves the camera to any location
  moveCamera(loc: LatLng) {
    let cameraPosition: CameraPosition<any> = {
      //specify center of map
      target: loc,
      zoom: 15,
      tilt: 10
    }
    this.map.moveCamera(cameraPosition)
  }

  //Adds a marker to the map
  createMarker(loc: LatLng, title: string) {
    let markerOptions: MarkerOptions = {
      position: loc,
      title: title
    };

    return this.map.addMarker(markerOptions);
  }



}
