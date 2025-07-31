import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-ng-content-component',
  imports: [],
  templateUrl: './ng-content-component.component.html',
  styleUrl: './ng-content-component.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgContentComponentComponent { }
