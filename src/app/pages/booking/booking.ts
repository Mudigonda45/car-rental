import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from '../../services/booking';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './booking.html',
  styleUrl: './booking.css'
})
export class BookingComponent {

  booking: any = {};
car: any;

  constructor(
    private bookingService: BookingService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  bookCar() {

    this.booking.carId = this.route.snapshot.params['id'];

    console.log("Booking Data:", this.booking);

    this.bookingService.createBooking(this.booking)
      .subscribe({
        next: (res) => {
          console.log("Booking success", res);
          this.router.navigate(['/payment']);
        },
        error: (err) => {
          console.error("Booking failed", err);
        }
      });

  }
}