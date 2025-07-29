import { Type } from '@angular/core';
import { File } from '../interfaces';
import {
  ComponentExampleComponent,
  SignalExampleComponent,
} from '../../features/base/components';

import componentExampleHtmlRaw from '../../features/base/components/component-example/component-example.component.html';
import componentExampleTsRaw from '../../features/base/components/component-example/component-example.component.ts.txt';
import singalExampleHtmlRaw from '../../features/base/components/signal-example/signal-example.component.html';
import singalExampleTsRaw from '../../features/base/components/signal-example/signal-example.component.ts.txt';

interface Features {
  title: string;
  description: string;
  anchor: string;
  exampleComponent: Type<any>;
  exampleTitle: string;
  files: File[];
}

export const features: Features[] = [
  {
    title: '@Component Decorator',
    anchor: 'component-decorator',
    description:
      'En **Angular**, un componente se declara con el decorador `@Component`, definiendo el `selector` (nombre del tag) y el `template`. La clase exportada representa el componente.',
    exampleComponent: ComponentExampleComponent,
    exampleTitle: 'Componente Angular: Hello World',
    files: [
      {
        code: componentExampleTsRaw,
        defaultIsOpen: true,
        lang: 'ts',
        name: 'component-example.component.ts',
      },
      {
        code: componentExampleHtmlRaw,
        defaultIsOpen: false,
        lang: 'html',
        name: 'component-example.component.html',
      },
    ],
  },
  {
    title: 'signal',
    anchor: 'signal',
    description:
      'Este componente de Angular muestra un contador simple que puedes aumentar o disminuir haciendo clic en botones. Usa una nueva función llamada `signal`, que permite guardar y actualizar valores de forma reactiva (es decir, que la vista se actualiza automáticamente cuando cambia el valor). Por ejemplo, el valor del contador empieza en `0` y cambia cuando se presionan los botones. Además, se usa una opción llamada `OnPush` que hace que el componente sea más rápido, porque solo se actualiza cuando realmente cambian los datos.',
    exampleComponent: SignalExampleComponent,
    exampleTitle: 'Actualizar un contador',
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
