import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgContentChildExampleComponent } from '../ng-content-child-example/ng-content-child-example.component';

@Component({
  selector: 'app-ng-content-example',
  imports: [NgContentChildExampleComponent],
  templateUrl: './ng-content-example.component.html',
  styleUrl: './ng-content-example.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgContentExampleComponent {}
