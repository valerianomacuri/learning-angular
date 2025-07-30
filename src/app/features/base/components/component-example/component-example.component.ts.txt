import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-component-example',
  imports: [],
  templateUrl: './component-example.component.html',
  styleUrl: './component-example.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentExampleComponent {}
