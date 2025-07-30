import { Type } from '@angular/core';
import { File } from '../interfaces';
import {
  ComponentExampleComponent,
  NgForExampleComponent,
  NgIfExampleComponent,
  SignalExampleComponent,
} from '../../features/base/components';

import componentExampleHtmlRaw from '../../features/base/components/component-example/component-example.component.html';
import singalExampleHtmlRaw from '../../features/base/components/signal-example/signal-example.component.html';
import ngIfExampleHtmlRaw from '../../features/base/components/ng-if-example/ng-if-example.component.html';
import ngForExampleHtmlRaw from '../../features/base/components/ng-for-example/ng-for-example.component.html';

import componentExampleTsRaw from '../../features/base/components/component-example/component-example.component.ts.txt';
import singalExampleTsRaw from '../../features/base/components/signal-example/signal-example.component.ts.txt';
import ngIfExampleTsRaw from '../../features/base/components/ng-if-example/ng-if-example.component.ts.txt';
import ngForExampleTsRaw from '../../features/base/components/ng-for-example/ng-for-example.component.ts.txt';

interface Features {
  title: string;
  description: string;
  anchor: string;
  component: Type<any>;
  files: File[];
}

const unproccesedFeatures = [
  {
    title: '@Component Decorator',
    anchor: 'component',
    description:
      'En **Angular**, un componente se declara con el decorador `@Component`, definiendo el `selector` (nombre del tag) y el `template`. La clase exportada representa el componente.',
    component: ComponentExampleComponent,
    files: [
      {
        code: componentExampleTsRaw,
        defaultIsOpen: true,
        lang: 'ts',
      },
      {
        code: componentExampleHtmlRaw,
        defaultIsOpen: false,
        lang: 'html',
      },
    ],
  },
  {
    title: 'signal',
    anchor: 'signal',
    description:
      'Este componente de Angular muestra un contador simple que puedes aumentar o disminuir haciendo clic en botones. Usa una nueva función llamada `signal`, que permite guardar y actualizar valores de forma reactiva (es decir, que la vista se actualiza automáticamente cuando cambia el valor). Por ejemplo, el valor del contador empieza en `0` y cambia cuando se presionan los botones. Además, se usa una opción llamada `OnPush` que hace que el componente sea más rápido, porque solo se actualiza cuando realmente cambian los datos.',
    component: SignalExampleComponent,
    files: [
      {
        code: singalExampleTsRaw,
        defaultIsOpen: true,
        lang: 'ts',
      },
      {
        code: singalExampleHtmlRaw,
        defaultIsOpen: false,
        lang: 'html',
      },
    ],
  },
  {
    title: '*ngIf',
    anchor: 'ng-if',
    description:
      '`*ngIf` es una instrucción que se usa en Angular para **mostrar u ocultar elementos en la pantalla** según una condición. Si la condición es verdadera, el elemento se muestra; si es falsa, no se muestra. Es muy útil para mostrar mensajes, botones o secciones solo cuando se necesitan.',
    component: NgIfExampleComponent,
    files: [
      {
        code: ngIfExampleTsRaw,
        defaultIsOpen: true,
        lang: 'ts',
      },
      {
        code: ngIfExampleHtmlRaw,
        defaultIsOpen: false,
        lang: 'html',
      },
    ],
  },
  {
    title: '*ngFor',
    anchor: 'ng-for',
    description: '',
    component: NgForExampleComponent,
    files: [
      {
        code: ngForExampleTsRaw,
        defaultIsOpen: true,
        lang: 'ts',
      },
      {
        code: ngForExampleHtmlRaw,
        defaultIsOpen: false,
        lang: 'html',
      },
    ],
  },
];

export const features: Features[] = (() => {
  return unproccesedFeatures.map((item) => {
    const proccesedFiles = item.files.map((file) => {
      if (file.lang === 'ts') {
        return { ...file, name: `${item.anchor}-example.ts` };
      }
      if (file.lang === 'html') {
        return { ...file, name: `${item.anchor}-example.html` };
      }
      return {
        ...file,
        name: 'unknown-file',
      };
    });
    return {
      ...item,
      files: [...proccesedFiles],
    };
  });
})();
