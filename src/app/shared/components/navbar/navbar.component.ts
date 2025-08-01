import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AngularIconComponent } from '../angular-icon/angular-icon.component';

@Component({
  selector: 'app-navbar',
  imports: [AngularIconComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.navbar]': 'true',
    '[class.bg-base-100]': 'true',
  },
})
export class NavbarComponent {}
