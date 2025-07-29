import { ChangeDetectionStrategy, Component } from '@angular/core';
import { menu } from '../../data/menu';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-drawer',
  imports: [CommonModule],
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DrawerComponent {
  drawerMenu = menu;
}
