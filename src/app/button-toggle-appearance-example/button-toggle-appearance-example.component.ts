import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

@Component({
  selector: 'app-button-toggle-appearance-example',
  imports: [MatButtonToggleModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './button-toggle-appearance-example.component.html',
  styleUrl: './button-toggle-appearance-example.component.css'
})
export class ButtonToggleAppearanceExampleComponent {}
