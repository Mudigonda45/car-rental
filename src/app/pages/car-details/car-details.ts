import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CarService } from '../../services/car';
import { Car } from '../../model/car';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-car-details',
  imports: [CommonModule, RouterModule],
  templateUrl: './car-details.html',
  styleUrl: './car-details.css',
})
/* export class CarDetailsComponent implements OnInit{

car!:Car

constructor(
private route:ActivatedRoute,
private carService:CarService
){}

ngOnInit(){

let id=this.route.snapshot.params['id']

this.carService.getCarById(id)
.subscribe(data=>{
this.car=data
})

} */
export class CarDetailsComponent implements OnInit {

  car:any;

  constructor(
    private route:ActivatedRoute,
    private carService:CarService
  ){}

  ngOnInit(){

    const id=this.route.snapshot.params['id'];

    this.carService.getCarById(id).subscribe(data=>{
      this.car=data;
    })

  }

}