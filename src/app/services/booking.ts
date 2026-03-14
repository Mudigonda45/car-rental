import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Booking } from '../model/booking';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private api="https://car-rental-backend-aszs.onrender.com/booking/create"

  constructor(private http:HttpClient) { }

  createBooking(data:Booking):Observable<any>{
    return this.http.post(this.api,data)
  }

}