import { Routes } from '@angular/router';
import { FormCardComponent } from './components/form-card/form-card.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';


export const rootRouterConfig: Routes = [
  { path: '', component: FormCardComponent },
  { path: 'sign-up', component: FormCardComponent },
  { path: 'thank-you', component: ThankYouComponent }
];