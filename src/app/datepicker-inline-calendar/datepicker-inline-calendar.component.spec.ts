import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerInlineCalendarComponent } from './datepicker-inline-calendar.component';

describe('DatepickerInlineCalendarComponent', () => {
  let component: DatepickerInlineCalendarComponent;
  let fixture: ComponentFixture<DatepickerInlineCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatepickerInlineCalendarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatepickerInlineCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
