import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatAutocompleteComponent } from "./mat-autocomplete/mat-autocomplete.component";
import { ButtonToggleAppearanceExampleComponent } from './button-toggle-appearance-example/button-toggle-appearance-example.component';
import { FormFieldPrefixSuffixExampleComponent } from './form-field-prefix-suffix-example/form-field-prefix-suffix-example.component';
import { IconOverviewExampleComponent } from './icon-overview-example/icon-overview-example.component';
import {CardFooterComponent} from './card-footer/card-footer.component';
import {ChipsAvatarComponent} from './chips-avatar/chips-avatar.component';
import {DatepickerDateClassComponent} from './datepicker-date-class/datepicker-date-class.component';
import {DatepickerInlineCalendarComponent} from './datepicker-inline-calendar/datepicker-inline-calendar.component';
import {TabGroupAlignComponent} from './tab-group-align/tab-group-align.component';
import {ToolbarOverviewComponent} from './toolbar-overview/toolbar-overview.component';
import {MenuPositionComponent} from './menu-position/menu-position.component';
import {ExpansionExpandCollapseAllComponent} from './expansion-expand-collapse-all/expansion-expand-collapse-all.component';
import {TableBasicComponent} from './table-basic/table-basic.component';
import {SnackBarPositionComponent} from './snack-bar-position/snack-bar-position.component';
import { ProgressSpinnerOverviewComponent } from './progress-spinner-overview/progress-spinner-overview.component';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatAutocompleteComponent,ButtonToggleAppearanceExampleComponent,FormFieldPrefixSuffixExampleComponent,
     IconOverviewExampleComponent, CardFooterComponent, ChipsAvatarComponent, DatepickerDateClassComponent,
    DatepickerInlineCalendarComponent, TabGroupAlignComponent, ToolbarOverviewComponent, MenuPositionComponent,
  ExpansionExpandCollapseAllComponent, TableBasicComponent, SnackBarPositionComponent, ProgressSpinnerOverviewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projectmaterial';
}
