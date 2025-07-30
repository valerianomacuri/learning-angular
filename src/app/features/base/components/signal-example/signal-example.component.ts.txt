import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal-example',
  imports: [],
  templateUrl: './signal-example.component.html',
  styleUrl: './signal-example.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalExampleComponent {
  counter = signal<number>(0);

  increment() {
    this.counter.update((counter) => counter + 1);
  }

  decrement() {
    this.counter.update((counter) => counter - 1);
  }
}
