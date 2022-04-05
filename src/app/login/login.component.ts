import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from '../database.service';
import { Router } from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  signUpForm: FormGroup;
  submited = false;

  constructor(private fb: FormBuilder, private databaseService: DatabaseService, private router: Router) { 
    this.signUpForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required]],
    });
  }
  
  ngOnInit() {
  }

  onSubmit() {
    this.submited = true;
    if(this.signUpForm.valid) {
      this.databaseService.logIn(this.signUpForm.value).subscribe(response => {
        console.log(response)
        if(response) { // successful
          localStorage.setItem('secret', response.data?.login.secret)
          localStorage.setItem('username', this.signUpForm.value.username)
          localStorage.setItem('type', response.data.login.type)
          this.router.navigate(['/'])
        } else {
          alert("There was an error, check console for more details.")
        }
      });
    } else {
      alert("Form not valid, check errors.")
    }
  }
}
