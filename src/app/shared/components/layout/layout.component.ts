import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FeatureShowcaseListComponent } from '../feature-showcase-list/feature-showcase-list.component';

@Component({
  selector: 'app-layout',
  imports: [FeatureShowcaseListComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {}
