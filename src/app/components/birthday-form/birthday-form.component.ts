import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FrostyBirthdayPersonService } from '../../services/FrostyBirthdayPackage';

@Component({
  selector: 'app-birthday-form',
  templateUrl: './birthday-form.component.html',
  styleUrls: ['./birthday-form.component.css']
})
export class BirthdayFormComponent implements OnInit {

  frostyForm: FormGroup;

  validation_messages = {
    'name': [
      { type: 'required', message: 'Name is required.' }
    ],
    'email': [
      { type: 'required', message: 'Email is required.' }
    ],
    'age': [
      { type: 'required', message: 'Age is required.' },
    ],
    'date': [
      { type: 'required', message: 'Date is required.' },
    ]
  };
 
  constructor(
    private fb: FormBuilder,
    public firebaseService: FrostyBirthdayPersonService
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.frostyForm = this.fb.group({
      name: ['', Validators.required ],
      email: ['', Validators.required ],
      phone: ['', Validators.required ],
      date: ['', Validators.required ]
    });
  }
 
  onSubmit(value){
    this.firebaseService.createUser(value)
    .then(
      res => {
        this.resetFields();
        // this.router.navigate(['/home']);
      }
    )
  }
  resetFields(){
    this.frostyForm = this.fb.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required)
    });
  }

}
