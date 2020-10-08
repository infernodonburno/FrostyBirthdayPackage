import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

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
import { FrostyBirthdayPersonComponent } from './components/frosty-birthday-person/frosty-birthday-person.component';
  


@NgModule({
  declarations: [
    AppComponent,
    FormCardComponent,
    BirthdayFormComponent,
    FrostyBirthdayPersonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    FormsModule,
    MatSliderModule,
    MatCardModule,
    MatRadioModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
