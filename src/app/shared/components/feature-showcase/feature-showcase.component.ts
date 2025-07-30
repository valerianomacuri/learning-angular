import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MarkdownComponent } from 'ngx-markdown';

@Component({
  selector: 'app-feature-showcase',
  imports: [MarkdownComponent],
  templateUrl: './feature-showcase.component.html',
  styleUrl: './feature-showcase.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureShowcaseComponent {
  title = input<string>('');
  description = input<string | undefined>('');
  anchor = input<string>('');
}
