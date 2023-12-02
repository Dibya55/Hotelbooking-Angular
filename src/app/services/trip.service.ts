import { Injectable, OnInit } from '@angular/core';
import { Trip } from '../models/trip.model';
import { HttpClient } from '@angular/common/http';
import { Hotel } from '../models/hotel.model';

@Injectable({
  providedIn: 'root'
})
export class TripService implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }

  hotelLists: Hotel[] = [
    {
      hotelName: "Hotel Sambit Royale",
      imageUrl: "assets/bedroom-g637a90ec1_640.jpg",
      price: 1000,
      hotelContent: "This Bhubaneshwar Hotel is located in chandaka locality Rated 4.1/5 by 1877 guest, this is an" +
        "ultimate Hotel in Bhubaneshwar. Service Quality, Location and Amenities are the big factor of" +
        "this Bhubaneshwar Hotel. In terms of amenities, 70% guests like the Television, Parking and" +
        "Restaurant of this Bhubaneshwar Hotel. 55% of guest said that the Safety and Hygiene of this" +
        "Bhubaneshwar Hotel is good. This is a popular couple friendly hotel in Bhubaneshwar.",
      cancellationInfo: " Free Cancellation Till Checking",
      taxInfo: "+ ₹478 TAXES & FEES"
    },
    {
      hotelName: "CRYSTAL URBAN PARK",
      imageUrl: "assets/building-gbc124b6a6_640.jpg",
      price: 2000,
      hotelContent: "This Bhubaneshwar Hotel is located in prasanti vihar locality Rated 4.1/5 by 1877 guest, this is an" +
        "ultimate Hotel in Bhubaneshwar. Service Quality, Location and Amenities are the big factor of" +
        "this Bhubaneshwar Hotel. In terms of amenities, 70% guests like the Television, Parking and" +
        "Restaurant of this Bhubaneshwar Hotel. 55% of guest said that the Safety and Hygiene of this" +
        "Bhubaneshwar Hotel is good. This is a popular couple friendly hotel in Bhubaneshwar.",
      cancellationInfo: " Free Cancellation Till Checking",
      taxInfo: "+ ₹278 TAXES & FEES"
    },
    {
      hotelName: "Ratna Resort",
      imageUrl: "assets/hotel-g448b85acc_640.jpg",
      price: 3000,
      hotelContent: "Ratna Resort is a good choice for travellers looking for a budget accomodation in Bhubaneshwar. It is located in Near Bhubaneshwar Airport. Hotel is rated 3.7 out of 5, which is considered as good.",
      cancellationInfo: " Free Cancellation Till Checking",
      taxInfo: "+ ₹300 TAXES & FEES"
    },
    {
      hotelName: "SM Hives",
      imageUrl: "assets/hotel-room-ge4fcc62af_640.jpg",
      price: 4000,
      hotelContent: "SM Hives is a great choice for travellers looking for a budget accomodation in Bhubaneshwar. It is located in Mancheswar Industrial Estate.This Hotel stands out as one of the highly recommended hotel in Bhubaneshwar and is recommended by 91% of our guest Hotel is rated 3 out of 5",
      cancellationInfo: " Free Cancellation Till Checking",
      taxInfo: "₹675 TAXES & FEES"
    }
  ]

  recentTrips: Trip[] = [
    {
      hotelName: "Hotel Dalon",
      destination: 'Mumbai',
      startDate: new Date('2023-06-01'),
      endDate: new Date('2023-06-04')
    },
    {
      hotelName: "Lemon Tree Hotel, Kalina, Mumbai",
      destination: 'Mumbai',
      startDate: new Date('2023-06-06'),
      endDate: new Date('2023-07-12')
    },
  ];

  upcomingTrips: Trip[] = [
    {
      hotelName: "Hotel Beacon T2", 
      destination: 'Mumbai',
      startDate: new Date('2023-08-01'),
      endDate: new Date('2023-08-06')
    },
    {
      hotelName: "Hotel Leafion",
      destination: 'Mumbai',
      startDate: new Date('2023-08-02'),
      endDate: new Date('2023-08-06')
    },
  ];

}
