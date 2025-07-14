import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-icon-overview-example',
  imports: [MatIconModule],changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './icon-overview-example.component.html',
  styleUrl: './icon-overview-example.component.css'
})
export class IconOverviewExampleComponent {

}
