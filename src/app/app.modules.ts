import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser'
//import {  } from './app-routing.module'
import { AppRoutingModule } from './app.routes'
imports:[
BrowserModule,
FormsModule,
HttpClientModule,
AppRoutingModule
]
export class AppModule { }