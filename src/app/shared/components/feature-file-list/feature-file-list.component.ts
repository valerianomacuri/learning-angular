import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { File } from '../../interfaces';

@Component({
  selector: 'app-feature-file-list',
  imports: [CommonModule],
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
