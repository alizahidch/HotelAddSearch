import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HotelsComponent } from './hotels/hotels.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import {ApiService } from '../app/providers/api.service';
import { HttpClientModule } from '@angular/common/http';

let ROUTES =[

  {path:'', redirectTo:'landing', pathMatch:'full'},
  {path:'landing', component:DashboardComponent},
  {path:'hotels', component:HotelsComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    HotelsComponent,
   
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule,
    ReactiveFormsModule,FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAYCDvDJYdHYAArV3XBlKTkDoyY4UHARTQ',
      libraries: ['geometry', 'places']
    })
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
