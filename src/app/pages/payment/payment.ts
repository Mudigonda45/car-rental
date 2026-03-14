import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payment.html',
  styleUrls: ['./payment.css']
})
export class Payment {

  selectedFile!: File;
  isUploaded = false;
  successMessage = "Thanks for booking the car. Have a safe ride ";

  constructor(private http: HttpClient){}

  onFileSelected(event:any){

    const file = event.target.files[0];

    if(file){
      this.selectedFile = file;
      this.isUploaded = true;
    }

  }

  confirmPayment(){

    const formData = new FormData();
    formData.append("file", this.selectedFile);

    this.http.post("https://car-rental-backend-aszs.onrender.com/booking/uploadPayment",formData)
    .subscribe(res => {

      this.successMessage = "Thanks for booking the car. Have a safe ride 🚗";

    });

  }

}