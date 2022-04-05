import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from '../database.service';
import { Router } from "@angular/router"

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers:[]
})
export class SignupComponent implements OnInit {

  signUpForm: FormGroup;
  submited = false;

  constructor(private fb: FormBuilder, private databaseService: DatabaseService, private router: Router) {
    this.signUpForm = this.fb.group({
      username: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      password: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      type: ['customer', [Validators.required]],
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.submited = true;
    if(this.signUpForm.valid) {
      this.databaseService.signUp(this.signUpForm.value).subscribe(data => {
        console.log(data)
        if(data.data) { // successful
          this.router.navigate(['/login'])
        } else {
          alert("There was an error, check console for more details.")
        }
      });
    } else {
      alert("Form not valid, check errors.")
    }
  }

}
