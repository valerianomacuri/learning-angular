import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';
import { File } from '../../interfaces';
import { FeatureHighlightFileComponent } from '../feature-highlight-file/feature-highlight-file.component';

@Component({
  selector: 'app-feature-file-list',
  imports: [CommonModule, FeatureHighlightFileComponent],
  templateUrl: './feature-file-list.component.html',
  styleUrl: './feature-file-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureFileListComponent {
  files = input<File[]>([]);
  name = input.required<string>();

  trackByFileName(index: number, item: File): string {
    return item.name;
  }
}
