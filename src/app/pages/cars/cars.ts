import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car';
import { Car } from '../../model/car';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cars.html',
  styleUrls: ['./cars.css'],
})
export class CarsComponent implements OnInit {

  cars: Car[] = [];
  loading = true;

  constructor(private carService: CarService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
  this.carService.getCars().subscribe({
    next: (data) => {
      console.log("Cars:", data);
      this.cars = data;
      this.loading = false;
      this.cdr.detectChanges();
    },
    error: (err) => {
      console.error("Error loading cars:", err);
      this.loading = false;
    }
  });
}
}