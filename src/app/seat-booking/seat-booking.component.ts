// src/app/seat-booking/seat-booking.component.ts
import { Component } from '@angular/core';

interface Seat {
  id: number;
  row: number;
  seatNumber: number;
  isBooked: boolean;
}

@Component({
  selector: 'app-seat-booking',
  templateUrl: './seat-booking.component.html',
  styleUrls: ['./seat-booking.component.css'],
})
export class SeatBookingComponent {
  totalSeats = 80;
  rows = 12;
  seatsPerRow = 7;
  seats: Seat[] = [];
  seatsToBook: number = 1; // Number of seats user wants to book

  constructor() {
    this.initializeSeats();
  }

  // Initialize the seats array with 80 seats
  initializeSeats() {
    let seatId = 1;
    for (let row = 1; row <= this.rows; row++) {
      let seatsInThisRow = row === this.rows ? 3 : this.seatsPerRow;
      for (let seatNumber = 1; seatNumber <= seatsInThisRow; seatNumber++) {
        this.seats.push({ id: seatId++, row, seatNumber, isBooked: false });
      }
    }
  }

  // Book seats based on user input
  bookSeats(numSeats: number) {
    if (numSeats > 7) {
      alert('You can only book up to 7 seats at a time.');
      return;
    }

    let availableSeats = this.seats.filter((seat) => !seat.isBooked);
    let bookedSeats: Seat[] = [];

    // Check if there are enough seats available in a row
    for (let row = 1; row <= this.rows; row++) {
      let seatsInRow = availableSeats.filter((seat) => seat.row === row);
      if (seatsInRow.length >= numSeats) {
        bookedSeats = seatsInRow.slice(0, numSeats);
        break;
      }
    }

    // If not, book nearby seats
    if (bookedSeats.length === 0) {
      bookedSeats = availableSeats.slice(0, numSeats);
    }

    if (bookedSeats.length < numSeats) {
      alert('Not enough seats available.');
    } else {
      bookedSeats.forEach((seat) => (seat.isBooked = true));
      alert(`Seats booked: ${bookedSeats.map((seat) => seat.id).join(', ')}`);
    }
  }

  // Display all seats
  displaySeats() {
    return this.seats;
  }
}
