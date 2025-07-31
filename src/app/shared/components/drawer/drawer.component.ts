import { ChangeDetectionStrategy, Component } from '@angular/core';
import { menu } from '../../data/menu';
import { CommonModule } from '@angular/common';
import { AngularIconComponent } from '../angular-icon/angular-icon.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-drawer',
  imports: [CommonModule, AngularIconComponent, RouterModule],
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DrawerComponent {
  drawerMenu = menu;
}
