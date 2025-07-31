import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { FeatureShowcaseComponent } from '../feature-showcase/feature-showcase.component';
import { CommonModule, NgComponentOutlet } from '@angular/common';
import { FeatureExampleComponent } from '../feature-example/feature-example.component';
import { FeatureFileListComponent } from '../feature-file-list/feature-file-list.component';
import { Feature, ShowCase } from '../../interfaces';
import { baseFeatures } from '../../data';
import { ActivatedRoute } from '@angular/router';
import { AppConfig } from '../../../../config/app.config';

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
  allBaseFeatures = baseFeatures;
  featureList = signal<Feature[]>([]);
  private activatedRoute = inject(ActivatedRoute);

  constructor() {
    this.activatedRoute.paramMap.subscribe((params) => {
      let selectedFeatureList: Feature[] = [];
      const topic = params.get('topic');
      console.log({ topic });
      switch (topic) {
        case AppConfig.paths.fundamentals:
        case AppConfig.paths.dataDisplay:
        case AppConfig.paths.localState:
          selectedFeatureList = this.allBaseFeatures[topic];
          break;
        default:
          break;
      }
      console.log({ selectedFeatureList });
      this.featureList.set(selectedFeatureList);
    });
  }

  trackByFeatureName(index: number, item: Feature): string {
    return item.name;
  }

  trackByShowcaseName(index: number, item: ShowCase): string {
    return item.name;
  }
}
