import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router"
import { DatabaseService } from '../database.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  secret: string | null;
  username: string | null;
  listings: any[] = [];
  filteredListings: any[] = [];
  bookingForms: FormGroup[] = [];
  search: string = "";
  

  constructor(private router: Router, private databaseService: DatabaseService, private fb: FormBuilder) {
    this.secret = localStorage.getItem('secret');
    this.username = localStorage.getItem('username');
  }
    
  getAllAdminListings() {
    this.databaseService.getAllAdminListings().subscribe(response => {
      this.listings = response.data.getAllAdminListings 
      this.filteredListings = response.data.getAllAdminListings 
    })
  }

  ngOnInit(): void {
    this.getAllAdminListings()
  }

  searchEvent() {
    if (this.search) {
      this.filteredListings = this.listings.filter(l => {
        return ((l.listing_title.toLowerCase().includes(this.search.toLowerCase()) || 
            l.city.toLowerCase().includes(this.search.toLowerCase()) || 
            l.postal_code.toLowerCase().includes(this.search.toLowerCase()))
          )
      })
    } else {
      this.filteredListings = this.listings;
    }

  }

}
