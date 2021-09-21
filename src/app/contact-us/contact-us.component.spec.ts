import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsComponent,Contact } from './contact-us.component';
import { ReactiveFormsModule } from "@angular/forms";

describe('ContactUsComponent', () => {
  let component: ContactUsComponent;
  let fixture: ComponentFixture<ContactUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactUsComponent ],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();
  }));
   
  beforeEach(() => {
    fixture = TestBed.createComponent(ContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  describe('business', () => {
    it("should submit form", () => {
      expect(component.contactForm.valid).toBeFalsy();
      component.contactForm.controls["firstname"].setValue("testname");
      component.contactForm.controls["lastname"].setValue("test");
      component.contactForm.controls["phonenumber"].setValue(9988776655);
      component.contactForm.controls["email"].setValue("test@test.com");
      component.contactForm.controls["message"].setValue("test message");
  
      expect(component.contactForm.valid).toBeTruthy();
  
      let Contact: Contact;
      // Subscribe to the Observable and store the user in a local variable.
      component.contactdata.subscribe(value => (Contact = value));
  
      // Trigger the signin function
      component.onSubmit();
      // Now we can check to make sure the emitted value is correct
      expect(Contact.firstname).toBe("testname");
      expect(Contact.lastname).toBe("test");
      expect(Contact.phonenumber).toBe(9988776655);
      expect(Contact.email).toBe("test@test.com");
      expect(Contact.message).toBe("test message");
    });
  
  });
  describe('boundary', () => {
  it("should create toBeTruthy()", () => {
    expect(component).toBeTruthy();
  });

  it("form invalid when empty toBeFalsy()", () => {
    expect(component.contactForm.valid).toBeFalsy();
  });
  it("firstname field validation", () => {
    let errors = {};
    let firstname = component.contactForm.controls["firstname"];
    expect(firstname.valid).toBeFalsy();

    // firstname field is required
    errors = firstname.errors || {};
    expect(errors["required"]).toBeTruthy();

    // Set firstname to something
    firstname.setValue("te");
    errors = firstname.errors || {};
    expect(errors["required"]).toBeFalsy();

    // Set firstname to something correct
    firstname.setValue("testname");
    errors = firstname.errors || {};
    expect(errors["required"]).toBeFalsy();
  });

  it("lastname field validation toBeFalsy() toBeTruthy()", () => {
    let errors = {};
    let lastname = component.contactForm.controls["lastname"];
    expect(lastname.valid).toBeFalsy();

    // lastname field is required
    errors = lastname.errors || {};
    expect(errors["required"]).toBeTruthy();

    // Set lastname to something
    lastname.setValue("te");
    errors = lastname.errors || {};
    expect(errors["required"]).toBeFalsy();

    // Set lastname to something correct
    lastname.setValue("test");
    errors = lastname.errors || {};
    expect(errors["required"]).toBeFalsy();
  });

  it("phonenumber field validation toBeFalsy() toBeTruthy()", () => {
    let errors = {};
    let phonenumber = component.contactForm.controls["phonenumber"];
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
    let email = component.contactForm.controls["email"];
    expect(email.valid).toBeFalsy();

    // Email field is required
    errors = email.errors || {};
    expect(errors["required"]).toBeTruthy();

    // Set email to something
    email.setValue("testname");
    errors = email.errors || {};
    expect(errors["required"]).toBeFalsy();

    // Set email to something correct
    email.setValue("test@test.com");
    errors = email.errors || {};
    expect(errors["required"]).toBeFalsy();
    expect(errors["pattern"]).toBeFalsy();
  });

  it("message field validation toBeFalsy() toBeTruthy()", () => {
    let errors = {};
    let message = component.contactForm.controls["message"];
    expect(message.valid).toBeFalsy();

    // message field is required
    errors = message.errors || {};
    expect(errors["required"]).toBeTruthy();

    // Set message to something
    message.setValue("te");
    errors = message.errors || {};
    expect(errors["required"]).toBeFalsy();

    // Set message to something correct
    message.setValue("test massage");
    errors = message.errors || {};
    expect(errors["required"]).toBeFalsy();
  });

});
});
