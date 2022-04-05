import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  listing_id: string;
  bookingForm: FormGroup;

  constructor(private route: ActivatedRoute, 
              private fb: FormBuilder, 
              private databaseService: DatabaseService, 
              private router: Router) {
    this.listing_id = this.route.snapshot.params['listing_id']

    this.bookingForm = this.fb.group({
      listing_id: [this.listing_id],
      booking_id: ['', Validators.required],
      booking_date: [new Date().toString()],
      booking_start: ['', Validators.required],
      booking_end: ['', Validators.required],
      username: [localStorage.getItem('username')],
      secret: [localStorage.getItem('secret')]
    })
  }

  onSubmit() {
    if(this.bookingForm.valid) {
      this.databaseService.createBooking(this.bookingForm.value).subscribe(response => {
        console.log(response)
        alert(`Booking ID ${response.data.createBooking.id} created`)
        this.router.navigate(['/my_bookings'])
      })
    } else {
      alert("Fix errors in form.")
      console.log(this.bookingForm)
    }
  }

  ngOnInit(): void {
    
  }

}
