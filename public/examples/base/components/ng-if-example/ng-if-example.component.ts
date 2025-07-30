import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-ng-if-example',
  imports: [CommonModule],
  templateUrl: './ng-if-example.component.html',
  styleUrl: './ng-if-example.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgIfExampleComponent {
  isLoggedIn = signal<boolean>(false);

  toggleLoggedIn() {
    this.isLoggedIn.update((isLoggedIn) => !isLoggedIn);
  }
}
