import { Component, OnInit } from '@angular/core';
import { TripService } from 'src/app/services/trip.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: any;
  showRecentTrips: boolean = true;
  showUpcomingtrips: boolean = true;
  cancelButton: boolean = false;
  upcomingTrips: any;

  constructor(
    public tripService: TripService
  ) {

  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("loggedInUser")!);
    this.upcomingTrips = this.tripService.upcomingTrips;
    if (this.tripService.upcomingTrips.length === 0){
      this.showUpcomingtrips = false;
    }
  }

  onToggle() {
    if (this.upcomingTrips.length > 0)
      this.showRecentTrips = !this.showRecentTrips;
      this.cancelButton = !this.cancelButton;
  }    

  deleteTrip(index: number) {
    this.tripService.upcomingTrips.splice(index, 1);
    console.log(this.tripService.upcomingTrips)
    if (this.tripService.upcomingTrips.length === 0) {
      this.showUpcomingtrips = false;
    }
  }
  showTrips() {
    this.showRecentTrips = true;
  }
}
