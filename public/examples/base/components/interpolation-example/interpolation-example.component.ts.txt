import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-interpolation-example',
  imports: [],
  templateUrl: './interpolation-example.component.html',
  styleUrl: './interpolation-example.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InterpolationExampleComponent {
  framework = 'Angular';
}
