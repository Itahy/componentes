import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatChipsModule} from '@angular/material/chips';

@Component({
  selector: 'app-chips-avatar',
  imports: [MatChipsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './chips-avatar.component.html',
  styleUrl: './chips-avatar.component.css'
})
export class ChipsAvatarComponent {

}
