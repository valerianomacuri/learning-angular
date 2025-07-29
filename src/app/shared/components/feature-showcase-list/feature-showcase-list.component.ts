import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FeatureShowcaseComponent } from '../feature-showcase/feature-showcase.component';
import { features } from '../../data';
import { CommonModule, NgComponentOutlet } from '@angular/common';
import { FeatureExampleComponent } from '../feature-example/feature-example.component';
import { FeatureFileListComponent } from '../feature-file-list/feature-file-list.component';
import { CodeHighlightService } from '../../services/code-highlight.service';

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

  constructor(private codeHighlightService: CodeHighlightService) {}

  ngOnInit() {
    this.angularHtmlToHtml();
  }

  async angularHtmlToHtml() {
    const newFeatureList = await Promise.all(
      [...this.featureList()].map(async (feature) => {
        const processedFiles = await Promise.all(
          feature.files.map(async (file) => {
            const html = await this.codeHighlightService.angularHtmlToHtml(
              file.code
            );
            return {
              ...file,
              prettyCode: html,
            };
          })
        );
        return { ...feature, files: processedFiles };
      })
    );
    this.featureList.set(newFeatureList);
  }

  trackByFeatureName(index: number, item: (typeof features)[0]): string {
    return item.title;
  }
}
