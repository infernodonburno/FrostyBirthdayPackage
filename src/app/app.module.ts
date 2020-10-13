import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';

import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {MatRadioModule} from '@angular/material/radio';
import { FormCardComponent } from './components/form-card/form-card.component';
import { BirthdayFormComponent } from './components/birthday-form/birthday-form.component';
import { MatDatepickerModule}  from '@angular/material/datepicker';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { ReactiveFormsModule } from "@angular/forms";
import { ThankYouComponent } from './components/thank-you/thank-you.component';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';


  


@NgModule({
  declarations: [
    AppComponent,
    FormCardComponent,
    BirthdayFormComponent,
    ThankYouComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false }),
    MatSliderModule,
    FormsModule,
    MatSliderModule,
    MatCardModule,
    MatRadioModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatButtonModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'FrostyPackage'),
    AngularFirestoreModule, // Only required for database features
    AngularFireAuthModule, // Only required for auth features,
    AngularFireStorageModule, // Only required for storage features,
    ReactiveFormsModule,
    RxReactiveFormsModule
    // MatDialog
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
