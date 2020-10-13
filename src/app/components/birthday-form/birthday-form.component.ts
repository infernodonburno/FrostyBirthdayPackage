import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FrostyBirthdayPersonService } from '../../services/FrostyBirthdayPackage';

import { RxwebValidators } from "@rxweb/reactive-form-validators";

@Component({
  selector: 'app-birthday-form',
  templateUrl: './birthday-form.component.html',
  styleUrls: ['./birthday-form.component.css']
})
export class BirthdayFormComponent implements OnInit {

  frostyForm: FormGroup;
  item: any;

  validation_messages = {
    'name': [
      { type: 'required', message: 'Name is required.' }
    ],
    'email': [
      { type: 'required', message: 'Email is required.' }
    ],
    'emailConfirm': [
      { type: 'required', message: 'Emails must match.' }
    ],
    'phone': [
      { type: 'required', message: 'phone is required.' },
    ],
    'date': [
      { type: 'required', message: 'Date is required.' },
    ]
  };
 
  constructor(
    private fb: FormBuilder,
    private router: Router,
    public firebaseService: FrostyBirthdayPersonService

  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.frostyForm = this.fb.group({
      name: ['', Validators.required ],
      email: ['', Validators.required ],
      emailConfirm: ['', RxwebValidators.compare({fieldName: 'email'}) ],
      phone: ['', Validators.required ],
      date: ['', Validators.required ]
    });
  }
 
  onSubmit(value){
    this.firebaseService.createUser(value)
    .then(
      res => {
        this.resetFields();
        this.router.navigate(['/thank-you']);
      }
    )
  }

  resetFields(){
    this.frostyForm = this.fb.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      emailConfirm: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required)
    });
  }

  delete(){
    this.firebaseService.deleteUser(this.item.id)
    .then(
      res => {
        // this.router.navigate(['/home']);
      },
      err => {
        console.log(err);
      }
    )
  }

}
