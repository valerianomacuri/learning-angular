import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgContentComponentComponent } from '../ng-content-component/ng-content-component.component';

@Component({
  selector: 'app-ng-content-example',
  imports: [NgContentComponentComponent],
  templateUrl: './ng-content-example.component.html',
  styleUrl: './ng-content-example.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgContentExampleComponent {}
