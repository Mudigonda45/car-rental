import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../model/car';

@Injectable({
  providedIn: 'root',
})
export class CarService {

  private api = "https://car-rental-backend-aszs.onrender.com/cars";

  constructor(private http: HttpClient) {}

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.api);
  }

  getCarById(id: number): Observable<Car> {
    return this.http.get<Car>(`${this.api}/${id}`);
  }
}