import { Component, OnInit,ViewChild,ElementRef,NgZone } from '@angular/core';
import {FormControl} from "@angular/forms";
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import {ApiService} from '../providers/api.service';


import { MapsAPILoader } from '@agm/core';

declare var google: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;


  @ViewChild("search")
  public searchElementRef: ElementRef;

;
private booking:FormGroup;
submitted = false;


  constructor(private formBuilder: FormBuilder,private api:ApiService,private ngZone: NgZone,   private mapsAPILoader: MapsAPILoader) {
    this.booking = this.formBuilder.group({
      hotelname: ['', Validators.required],
      number: ['',Validators.required],
      location:['',Validators.required],
     
    });


   }

  ngOnInit() {
    this.zoom = 4;
    this.latitude = 39.8282;
    this.longitude = -98.5795;

    //create search FormControl
    this.searchControl = new FormControl();

    //set current position
    this.setCurrentPosition();

    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let nativeHomeInputBox = this.searchElementRef.nativeElement as HTMLInputElement;
      let autocomplete = new google.maps.places.Autocomplete(nativeHomeInputBox, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.booking.value.location=place.formatted_address;

          this.zoom = 12;
        });
      });
    });
  }

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }
  async registerHotel(){
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("waiting"), 3000)
    });
  
let lat=this.latitude;
let lon=this.longitude;
    this.api.registerHotel(this.booking.value,lat,lon)
  }
}
