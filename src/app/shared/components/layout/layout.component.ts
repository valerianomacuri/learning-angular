import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FeatureShowcaseListComponent } from '../feature-showcase-list/feature-showcase-list.component';
import { DrawerComponent } from '../drawer/drawer.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-layout',
  imports: [FeatureShowcaseListComponent, DrawerComponent, NavbarComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {}
