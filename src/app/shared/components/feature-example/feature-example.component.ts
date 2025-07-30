import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-feature-example',
  imports: [],
  templateUrl: './feature-example.component.html',
  styleUrl: './feature-example.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureExampleComponent {}
