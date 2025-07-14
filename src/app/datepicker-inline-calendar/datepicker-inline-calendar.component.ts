import {ChangeDetectionStrategy, Component, model} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';


@Component({
  selector: 'app-datepicker-inline-calendar',
  providers: [provideNativeDateAdapter()],
  imports: [MatCardModule, MatDatepickerModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './datepicker-inline-calendar.component.html',
  styleUrl: './datepicker-inline-calendar.component.css'
})
export class DatepickerInlineCalendarComponent {
  selected = model<Date | null>(null);
}
