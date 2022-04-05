import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  username: string | null;
  secret: string | null;
  bookings: any[] = [];

  constructor(private route: ActivatedRoute, 
    private fb: FormBuilder, 
    private databaseService: DatabaseService, 
    private router: Router) { 
      this.username = localStorage.getItem('username');
      this.secret = localStorage.getItem('secret');

      this.databaseService.getAllUserBooking(this.secret, this.username).subscribe(response => {
        this.bookings = response.data.getAllUserBooking //.filter(b => b.username == this.username)
      })
    } 

  ngOnInit(): void {
  }

}
