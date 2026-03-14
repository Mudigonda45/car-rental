import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { Home } from './pages/home/home';
import { CarsComponent } from './pages/cars/cars';
import { CarDetailsComponent } from './pages/car-details/car-details';
import { BookingComponent } from './pages/booking/booking';
import { Payment } from './pages/payment/payment';
import { BookingSuccess } from './pages/booking-success/booking-success';

export const routes: Routes = [
 /*  { path: '', component: Home }, */
  { path: 'cars', component: CarsComponent },
  { path: 'car/:id', component: CarDetailsComponent },
  { path: 'booking/:id', component: BookingComponent },
  { path: 'payment', component: Payment },
  { path: 'success', component: BookingSuccess }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}