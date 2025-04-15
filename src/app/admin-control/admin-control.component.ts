import { Component } from '@angular/core';
import { MaterialModule } from '../material.module';

import {MatTabsModule} from '@angular/material/tabs';
@Component({
  selector: 'app-admin-control',
  standalone: true,
  imports: [MaterialModule,MatTabsModule ],
  templateUrl: './admin-control.component.html',
  styleUrl: './admin-control.component.scss'
})
export class AdminControlComponent {

}
