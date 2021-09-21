import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';
import { PlaceFitnessTrainerAppointmentComponent } from './place-fitness-trainer-appointment/place-fitness-trainer-appointment.component';
import { ViewAppointmentComponent } from './view-appointment/view-appointment.component';
import { EditAppointmentComponent } from './edit-appointment/edit-appointment.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactUsComponent,
    LandingPageComponent,
    PlaceFitnessTrainerAppointmentComponent,
    ViewAppointmentComponent,
    EditAppointmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  exports: [ViewAppointmentComponent,
    PlaceFitnessTrainerAppointmentComponent,
    ContactUsComponent,
    LandingPageComponent,
    EditAppointmentComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
