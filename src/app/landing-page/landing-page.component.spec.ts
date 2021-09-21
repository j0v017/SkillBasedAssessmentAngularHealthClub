import { TestBed, async, ComponentFixture, fakeAsync, tick, inject } from '@angular/core/testing';
import { By, BrowserModule } from '@angular/platform-browser';
import { LandingPageComponent } from './landing-page.component';
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from '@angular/router'
import { ReactiveFormsModule } from "@angular/forms";
import { PlaceFitnessTrainerAppointmentComponent } from '../place-fitness-trainer-appointment/place-fitness-trainer-appointment.component';
import {
  HttpModule,
} from "@angular/http";
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import { DebugElement } from "@angular/core";

describe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;
  let debugElement: DebugElement;
  let location, router: Router;
  let mockRouter = {
    navigate: jasmine.createSpy('navigate'),
    myMethod: () => { navigate: jasmine.createSpy('navigate') }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LandingPageComponent, PlaceFitnessTrainerAppointmentComponent],
      imports: [ReactiveFormsModule, HttpClientTestingModule,
        HttpModule, RouterTestingModule.withRoutes([
          { path: "place-fitness-trainer-appointment", component: PlaceFitnessTrainerAppointmentComponent }
        ]),],
      providers: [
        { provide: Router, useValue: mockRouter },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
  });

  describe("boundary", ()=>{
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  
    it(" should have a header h1 (Intro text)", async(() => {
      let fixture = TestBed.createComponent(LandingPageComponent);
      let element = fixture.nativeElement;
  
      fixture.detectChanges();
      expect(element.querySelector('h1').innerHTML).toBe('Intro text');
  
    }));
    // getting error
    // it('should navigate', async(() => {
    //   fixture.detectChanges();
    //   component.navpage();
    //   expect(mockRouter.navigate).toHaveBeenCalledWith(['/place-fitness-trainer-appointment']);
    // }));
  })

});
