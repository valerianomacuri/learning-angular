import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DrawerComponent } from '../drawer/drawer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { IntroductionComponent } from '../introduction/introduction.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [
    DrawerComponent,
    IntroductionComponent,
    NavbarComponent,
    RouterOutlet,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {}
