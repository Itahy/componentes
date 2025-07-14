import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerDateClassComponent } from './datepicker-date-class.component';

describe('DatepickerDateClassComponent', () => {
  let component: DatepickerDateClassComponent;
  let fixture: ComponentFixture<DatepickerDateClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatepickerDateClassComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatepickerDateClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
