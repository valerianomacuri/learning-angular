import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-feature-showcase',
  imports: [],
  templateUrl: './feature-showcase.component.html',
  styleUrl: './feature-showcase.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureShowcaseComponent {
  title = input<string>('');
  description = input<string>('');
}
