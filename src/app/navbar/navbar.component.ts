import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isAdmin: boolean;
  isLoggedIn: boolean;
  username: string | null;

  constructor() {
    this.isAdmin = localStorage.getItem('type') == 'admin';
    this.isLoggedIn = localStorage.getItem('secret') ? true : false;
    this.username = localStorage.getItem('username')
  }

  ngOnInit(): void {
    
  }

}
