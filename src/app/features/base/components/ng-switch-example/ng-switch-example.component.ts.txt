import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChangeDetectionStrategy, Component } from '@angular/core';
@Component({
  selector: 'app-ng-switch-example',
  imports: [CommonModule, FormsModule],
  templateUrl: './ng-switch-example.component.html',
  styleUrl: './ng-switch-example.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgSwitchExampleComponent {
  userType = 'admin';
}
