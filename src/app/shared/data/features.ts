import { Type } from '@angular/core';
import { SignalExampleComponent } from '../../features/base/components';
import singalExampleHtmlRaw from '../../features/base/components/signal-example/signal-example.component.html';
import singalExampleTsRaw from '../../features/base/components/signal-example/signal-example.component.ts.txt';
import { File } from '../interfaces';

interface Features {
  title: string;
  description: string;
  exampleComponent: Type<any>;
  exampleTitle: string;
  files: File[];
}

export const features: Features[] = [
  {
    title: 'signal',
    description: 'Lorem ipsum',
    exampleComponent: SignalExampleComponent,
    exampleTitle: 'Ejemplo interactivo: Actualizar un contador',
    files: [
      {
        code: singalExampleTsRaw,
        defaultIsOpen: true,
        lang: 'ts',
        name: 'signal-example.component.ts',
      },
      {
        code: singalExampleHtmlRaw,
        defaultIsOpen: false,
        lang: 'html',
        name: 'signal-example.component.html',
      },
    ],
  },
];
