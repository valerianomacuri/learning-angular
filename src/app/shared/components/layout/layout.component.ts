import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SignalShowcaseComponent } from '../../../features/signal/components';

@Component({
  selector: 'app-layout',
  imports: [SignalShowcaseComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {}
