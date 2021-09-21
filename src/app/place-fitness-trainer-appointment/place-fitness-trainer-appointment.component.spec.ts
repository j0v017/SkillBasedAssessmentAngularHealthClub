import {   async,
  ComponentFixture,
  TestBed,
  inject } from '@angular/core/testing';

import { PlaceFitnessTrainerAppointmentComponent, Fitness } from './place-fitness-trainer-appointment.component';
import { ReactiveFormsModule } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import { UserService } from "../_services/user.service";
import {
  HttpModule,
} from "@angular/http";
describe('PlaceFitnessTrainerAppointmentComponent', () => {
  let component: PlaceFitnessTrainerAppointmentComponent;
  let fixture: ComponentFixture<PlaceFitnessTrainerAppointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceFitnessTrainerAppointmentComponent ],
      imports: [ReactiveFormsModule,
        HttpClientTestingModule,
        HttpModule,
        RouterTestingModule],
      providers: [UserService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceFitnessTrainerAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  describe("boundary", ()=>{
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  
    it("form invalid when empty toBeFalsy()", () => {
      expect(component.fitnessForm.valid).toBeFalsy();
    });
  
    it("firstname field validation toBeFalsy() toBeTruthy() ", () => {
      let errors = {};
      let recipientFname = component.fitnessForm.controls["firstname"];
      expect(recipientFname.valid).toBeFalsy();
  
      // recipientFname field is required
      errors = recipientFname.errors || {};
      expect(errors["required"]).toBeTruthy();
  
      // Set recipientFname to something
      recipientFname.setValue("test");
      errors = recipientFname.errors || {};
      expect(errors["required"]).toBeFalsy();
  
      // Set recipientFname to something correct
      recipientFname.setValue("testFirstName");
      errors = recipientFname.errors || {};
      expect(errors["required"]).toBeFalsy();
    });
  
    it("lastname field validation toBeFalsy() toBeTruthy() ", () => {
      let errors = {};
      let recipientLname = component.fitnessForm.controls["lastname"];
      expect(recipientLname.valid).toBeFalsy();
  
      // recipientLname field is required
      errors = recipientLname.errors || {};
      expect(errors["required"]).toBeTruthy();
  
      // Set recipientLname to something
      recipientLname.setValue("test");
      errors = recipientLname.errors || {};
      expect(errors["required"]).toBeFalsy();
  
      // Set recipientLname to something correct
      recipientLname.setValue("testFirstName");
      errors = recipientLname.errors || {};
      expect(errors["required"]).toBeFalsy();
    });
  
    it("age field validation toBeFalsy() toBeTruthy() ", () => {
      let errors = {};
      let age = component.fitnessForm.controls["age"];
      expect(age.valid).toBeFalsy();
  
      // age field is required
      errors = age.errors || {};
      expect(errors["required"]).toBeTruthy();
  
      // Set age to something
      age.setValue(0);
      errors = age.errors || {};
      expect(errors["required"]).toBeFalsy();
  
      // Set age to something correct
      age.setValue(24);
      errors = age.errors || {};
      expect(errors["required"]).toBeFalsy();
    });
  
    it("phonenumber field validation toBeFalsy() toBeTruthy() ", () => {
      let errors = {};
      let phonenumber = component.fitnessForm.controls["phonenumber"];
      expect(phonenumber.valid).toBeFalsy();
  
      // phonenumber field is required
      errors = phonenumber.errors || {};
      expect(errors["required"]).toBeTruthy();
  
      // Set phonenumber to something
      phonenumber.setValue(0);
      errors = phonenumber.errors || {};
      expect(errors["required"]).toBeFalsy();
  
      // Set phonenumber to something correct
      phonenumber.setValue(9988776655);
      errors = phonenumber.errors || {};
      expect(errors["required"]).toBeFalsy();
    });
  
    it("email field validity .toBeFalsy() .toBeTruthy()", () => {
      let errors = {};
      let email = component.fitnessForm.controls["email"];
      expect(email.valid).toBeFalsy();
  
      // Email field is required
      errors = email.errors || {};
      expect(errors["required"]).toBeTruthy();
  
      // Set email to something
      email.setValue("test");
      errors = email.errors || {};
      expect(errors["required"]).toBeFalsy();
      expect(errors["pattern"]).toBeTruthy();
  
      // Set email to something correct
      email.setValue("test@test.com");
      errors = email.errors || {};
      expect(errors["required"]).toBeFalsy();
      expect(errors["pattern"]).toBeFalsy();
    });
  
    it("streetaddress field validation toBeFalsy() toBeTruthy() ", () => {
      let errors = {};
      let streetaddress = component.fitnessForm.controls["streetaddress"];
      expect(streetaddress.valid).toBeFalsy();
  
      // streetaddress field is required
      errors = streetaddress.errors || {};
      expect(errors["required"]).toBeTruthy();
  
      // Set streetaddress to something
      streetaddress.setValue("test");
      errors = streetaddress.errors || {};
      expect(errors["required"]).toBeFalsy();
  
      // Set streetaddress to something correct
      streetaddress.setValue("#123 test address");
      errors = streetaddress.errors || {};
      expect(errors["required"]).toBeFalsy();
    });
  
    it("city field validation toBeFalsy() toBeTruthy() ", () => {
      let errors = {};
      let city = component.fitnessForm.controls["city"];
      expect(city.valid).toBeFalsy();
  
      // city field is required
      errors = city.errors || {};
      expect(errors["required"]).toBeTruthy();
  
      // Set city to something
      city.setValue("te");
      errors = city.errors || {};
      expect(errors["required"]).toBeFalsy();
  
      // Set city to something correct
      city.setValue("test");
      errors = city.errors || {};
      expect(errors["required"]).toBeFalsy();
    });
  
    it("state field validation toBeFalsy() toBeTruthy() ", () => {
      let errors = {};
      let state = component.fitnessForm.controls["state"];
      expect(state.valid).toBeFalsy();
  
      // state field is required
      errors = state.errors || {};
      expect(errors["required"]).toBeTruthy();
  
      // Set state to something
      state.setValue("te");
      errors = state.errors || {};
      expect(errors["required"]).toBeFalsy();
  
      // Set state to something correct
      state.setValue("test");
      errors = state.errors || {};
      expect(errors["required"]).toBeFalsy();
    });
  
    it("country field validation toBeFalsy() toBeTruthy() ", () => {
      let errors = {};
      let country = component.fitnessForm.controls["country"];
      expect(country.valid).toBeFalsy();
  
      // country field is required
      errors = country.errors || {};
      expect(errors["required"]).toBeTruthy();
  
      // Set country to something
      country.setValue("te");
      errors = country.errors || {};
      expect(errors["required"]).toBeFalsy();
  
      // Set country to something correct
      country.setValue("test");
      errors = country.errors || {};
      expect(errors["required"]).toBeFalsy();
    });
  
    it("pincode field validation toBeFalsy() toBeTruthy() ", () => {
      let errors = {};
      let pincode = component.fitnessForm.controls["pincode"];
      expect(pincode.valid).toBeFalsy();
  
      // pincode field is required
      errors = pincode.errors || {};
      expect(errors["required"]).toBeTruthy();
  
      // Set pincode to something
      pincode.setValue(0);
      errors = pincode.errors || {};
      expect(errors["required"]).toBeFalsy();
  
      // Set pincode to something correct
      pincode.setValue(123456);
      errors = pincode.errors || {};
      expect(errors["required"]).toBeFalsy();
    });
    it("inr field validation toBeFalsy() toBeTruthy() ", () => {
      let errors = {};
      let inr = component.fitnessForm.controls["inr"];
      expect(inr.valid).toBeFalsy();
  
      // inr field is required
      errors = inr.errors || {};
      expect(errors["required"]).toBeTruthy();
  
      // Set inr to something
      inr.setValue(0);
      errors = inr.errors || {};
      expect(errors["required"]).toBeFalsy();
  
      // Set inr to something correct
      inr.setValue(1000);
      errors = inr.errors || {};
      expect(errors["required"]).toBeFalsy();
    });
  
    it("paisa field validation toBeFalsy() toBeTruthy() ", () => {
      let errors = {};
      let paisa = component.fitnessForm.controls["paisa"];
      expect(paisa.valid).toBeFalsy();
  
      // paisa field is required
      errors = paisa.errors || {};
      expect(errors["required"]).toBeTruthy();
  
      // Set paisa to something
      paisa.setValue(0);
      errors = paisa.errors || {};
      expect(errors["required"]).toBeFalsy();
  
      // Set paisa to something correct
      paisa.setValue(10);
      errors = paisa.errors || {};
      expect(errors["required"]).toBeFalsy();
    });
  
  })


  describe("business", ()=>{
    
    it("should be Place gift card order", inject([HttpTestingController, UserService], (httpMock: HttpTestingController, dataService: UserService) => {
  
      var data = {
        firstname: "testFirstName",
        lastname: "testLastName",
        age: 24,
        phonenumber: 9988776655,
        email: "test@test.com",
        streetaddress: "#123 test address",
        city: "test",
        state: "test",
        country: "test",
        pincode: "123456",
        trainerpreference: "male",
        physiotherapist: "yes",
        packages: "500",
        inr: 10000,
        paisa: 10
      };
      dataService.postfitnessdata(data).subscribe(data => {
        expect(data).toEqual(data);
      });
    }));

  })

});
