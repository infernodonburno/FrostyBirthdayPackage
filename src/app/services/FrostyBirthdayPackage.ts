import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
    providedIn: 'root'
  })
export class FrostyBirthdayPersonService {

  constructor(public db: AngularFirestore) {}

  createUser(value){
    return this.db.collection('users').add({
      name: value.name,
      email: value.email,
      phone: value.phone,
      date: value.date
    });
  }
}
