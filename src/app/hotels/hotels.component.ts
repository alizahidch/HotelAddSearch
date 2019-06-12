import { Component, OnInit } from '@angular/core';
import {ApiService} from '../providers/api.service';
import { Marker } from '@agm/core/services/google-maps-types';
interface marker {
	lat: number;
	lng: number;
  location:string;
  no:number;
  hotelName:string
}

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})



export class HotelsComponent implements OnInit {
  title: string = 'Hotels list';
  lat: number = 33;
  lng: number = 77;
  hotels:marker[]=[]
markers=[];

  constructor(private api:ApiService) { }

  ngOnInit() {
this.api.fetchHotel().subscribe((data: any) => {
this.hotels=data;
for(var key in this.hotels){
  
  this.markers.push(this.hotels[key])
  console.log(this.markers)
}
});



  }
  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
    alert(label)
  }

  
}
