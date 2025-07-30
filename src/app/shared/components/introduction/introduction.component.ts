import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AngularIconComponent } from '../angular-icon/angular-icon.component';

@Component({
  selector: 'app-introduction',
  imports: [AngularIconComponent],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IntroductionComponent {}
