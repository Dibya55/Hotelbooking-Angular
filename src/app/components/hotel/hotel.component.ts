import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TripService } from 'src/app/services/trip.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
  constructor(
    public data: TripService,
    private router: Router
  ) {

  }

  ngOnInit(): void {

  }

  navigateTo(hotelName: any) {
    console.log(hotelName)
    this.router.navigate(["payment"],{queryParams:{hotelName:hotelName}});
  }

}
