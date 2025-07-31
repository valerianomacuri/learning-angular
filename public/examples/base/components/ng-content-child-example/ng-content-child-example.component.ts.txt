import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-ng-content-child-example',
  imports: [],
  templateUrl: './ng-content-child-example.component.html',
  styleUrl: './ng-content-child-example.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgContentChildExampleComponent {}
