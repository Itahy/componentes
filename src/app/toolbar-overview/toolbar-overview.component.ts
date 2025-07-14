import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';


@Component({
  selector: 'app-toolbar-overview',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './toolbar-overview.component.html',
  styleUrl: './toolbar-overview.component.css'
})
export class ToolbarOverviewComponent {

}
