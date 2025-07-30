import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  Component,
  input,
  signal,
} from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-feature-highlight-file',
  imports: [CommonModule, Highlight],
  templateUrl: './feature-highlight-file.component.html',
  styleUrl: './feature-highlight-file.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureHighlightFileComponent {
  src = input('');
  lang = input('');
  code = signal<string>('');

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    if (this.src()) {
      this.http.get(this.src(), { responseType: 'text' }).subscribe({
        next: (content) => this.code.set(content),
        error: () => this.code.set('⚠️ Error al cargar el archivo'),
      });
    }
  }
}
