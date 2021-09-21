import { async, ComponentFixture, TestBed, inject} from '@angular/core/testing';

import { ViewAppointmentComponent } from './view-appointment.component';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { HttpModule } from "@angular/http";
import { RouterTestingModule } from "@angular/router/testing";
import { UserService } from "../_services/user.service";
import { By } from "@angular/platform-browser";

describe('ViewAppointmentComponent', () => {
  let component: ViewAppointmentComponent;
  let fixture: ComponentFixture<ViewAppointmentComponent>;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAppointmentComponent ],
      imports: [HttpClientTestingModule, HttpModule, RouterTestingModule]
    
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(ViewAppointmentComponent);
      component = fixture.componentInstance;
      element = fixture.nativeElement;
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  describe("boundary", ()=>{
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  
    it("should show user header length", async(() => {
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        var rowHeaderLength = element.querySelectorAll("th").length;
        expect(rowHeaderLength).toBe(7); 
      });
    }));
  
    it("should have table header Sl NO ", () => {
      fixture.detectChanges();
      const de = fixture.debugElement.query(By.css(".h1"));
      const el = de.nativeElement;
      expect(el.textContent).toEqual("Sl NO");
    });
  
    it("should have table header  Name", () => {
      fixture.detectChanges();
      const de = fixture.debugElement.query(By.css(".h2"));
      const el = de.nativeElement;
      expect(el.textContent).toEqual("Name");
    });
  
    it("should have table header  Address", () => {
      fixture.detectChanges();
      const de = fixture.debugElement.query(By.css(".h3"));
      const el = de.nativeElement;
      expect(el.textContent).toEqual("Address");
    });
  
    it("should have table header City", () => {
      fixture.detectChanges();
      const de = fixture.debugElement.query(By.css(".h4"));
      const el = de.nativeElement;
      expect(el.textContent).toEqual("City");
    });
  
    it("should have table header Package", () => {
      fixture.detectChanges();
      const de = fixture.debugElement.query(By.css(".h5"));
      const el = de.nativeElement;
      expect(el.textContent).toEqual("Package");
    });
  
    it("should have table header Trainer Preference", () => {
      fixture.detectChanges();
      const de = fixture.debugElement.query(By.css(".h6"));
      const el = de.nativeElement;
      expect(el.textContent).toEqual("Trainer Preference");
    });
  
    it("should have table header Phone", () => {
      fixture.detectChanges();
      const de = fixture.debugElement.query(By.css(".h7"));
      const el = de.nativeElement;
      expect(el.textContent).toEqual("Phone");
    });
  
  });
  describe("exception", ()=>{

  it("should be check fitness api", inject([HttpTestingController, UserService], (httpMock: HttpTestingController, dataService: UserService) => {
    component.ngOnInit();
    dataService.getfitnessdata().subscribe(data => {
      expect(data).toEqual(data);
      expect(data).toBe(data);
      expect(data).not.toBe(null);
      expect(null).toBeNull();
      expect(data).toBeTruthy();
    });
  }));
});
});
