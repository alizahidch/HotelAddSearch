import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://ali:<ali123>@infiniti-xghvb.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  uri = 'http://localhost:4000/hotel';
  

  constructor(private http:HttpClient) { }

  registerHotel(data:any,lat,lon){
    const obj = {
     hotel_name: data.hotelname,
      number_of_rooms: data.number,
    location: data.location,
    lat:lat,
    lon:lon
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }
  

  fetchHotel(){
    return this
    .http
    .get(`${this.uri}`);
  }
}
