import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FeatureShowcaseComponent } from '../feature-showcase/feature-showcase.component';
import { features } from '../../data';
import { CommonModule, NgComponentOutlet } from '@angular/common';
import { FeatureExampleComponent } from '../feature-example/feature-example.component';
import { FeatureFileListComponent } from '../feature-file-list/feature-file-list.component';

@Component({
  selector: 'app-feature-showcase-list',
  imports: [
    CommonModule,
    NgComponentOutlet,
    FeatureShowcaseComponent,
    FeatureExampleComponent,
    FeatureFileListComponent,
  ],
  templateUrl: './feature-showcase-list.component.html',
  styleUrl: './feature-showcase-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureShowcaseListComponent {
  featureList = signal<typeof features>(features);

  trackByFeatureName(index: number, item: (typeof features)[0]): string {
    return item.title;
  }
}
