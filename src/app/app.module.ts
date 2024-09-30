import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SeatBookingComponent } from './seat-booking/seat-booking.component';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, SeatBookingComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
