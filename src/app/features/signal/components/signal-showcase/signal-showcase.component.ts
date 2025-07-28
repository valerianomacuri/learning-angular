import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FeatureExampleComponent,
  FeatureFileListComponent,
  FeatureShowcaseComponent,
} from '../../../../shared/components';
import { SignalExampleComponent } from '../signal-example/signal-example.component';
import { CodeHighlightService } from '../../../../shared/services/code-highlight.service';
import { File } from '../../../../shared/interfaces';
// import signalExampleTsRaw from '../signal-example/signal-example.component.ts?raw';
// import signalExampleHtmlRaw from '../signal-example/signal-example.component.html?raw';

@Component({
  selector: 'app-signal-showcase',
  imports: [
    CommonModule,
    FeatureExampleComponent,
    FeatureFileListComponent,
    FeatureShowcaseComponent,
    SignalExampleComponent,
  ],
  templateUrl: './signal-showcase.component.html',
  styleUrl: './signal-showcase.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalShowcaseComponent {
  tabsName = 'signal-showcase';
  files: File[] = [
    {
      name: 'signal-example.component.ts',
      code: 'const value = 1;',
      lang: 'angular-ts',
      defaultIsOpen: true,
    },
    { name: 'signal-example.component.html', code: '', lang: 'angular-html' },
  ];

  constructor(private codeHighlightService: CodeHighlightService) {}

  async ngOnInit() {
    // const angularTs = await this.codeHighlightService.angularTsToHtml(
    //   signalExampleTsRaw
    // );
    // const angularHtml = await this.codeHighlightService.angularHtmlToHtml(
    //   signalExampleHtmlRaw
    // );
    // this.angularHtml.set(angularHtml);
    // this.angularTs.set(angularTs);
  }
}
