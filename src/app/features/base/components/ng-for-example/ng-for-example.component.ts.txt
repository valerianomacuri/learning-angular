import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-ng-for-example',
  imports: [CommonModule],
  templateUrl: './ng-for-example.component.html',
  styleUrl: './ng-for-example.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgForExampleComponent {
  fruits = ['Manzana', 'Banana', 'Naranja', 'Pera'];

  trackByFruit(index: number, value: string) {
    return value;
  }
}
