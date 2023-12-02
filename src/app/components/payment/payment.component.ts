import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TripService } from 'src/app/services/trip.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  signupForm: any = {}
  @ViewChild('paymentForm') paymentForm!: NgForm;
  constructor
    (
      private router: Router,
      private tripService: TripService,
      private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {

      this.signupForm.hotelName = params['hotelName'];
    })

  }

  onSubmit(signupForm?: any) {
    if (!this.paymentForm.valid) {
      alert("please fill all mandatory fields")
    }
    else {
      this.tripService.upcomingTrips.push(signupForm);
      this.router.navigate(["home"]);
    }
  }
}
