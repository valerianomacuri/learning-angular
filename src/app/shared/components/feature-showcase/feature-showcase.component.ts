import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MarkdownComponent } from 'ngx-markdown';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-feature-showcase',
  imports: [CommonModule, MarkdownComponent, RouterModule],
  templateUrl: './feature-showcase.component.html',
  styleUrl: './feature-showcase.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureShowcaseComponent {
  title = input<string>('');
  descriptionPath = input<string | undefined>('');
  anchor = input<string>('');
  path = input<string>('');
}
