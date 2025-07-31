import {
  NgForExampleComponent,
  NgIfExampleComponent,
  NgSwitchExampleComponent,
} from '../../features/base/components';
import { Topic } from '../interfaces';

import ngIfExampleHtmlRaw from '../../features/base/components/ng-if-example/ng-if-example.component.html';
import ngForExampleHtmlRaw from '../../features/base/components/ng-for-example/ng-for-example.component.html';
import ngSwitchExampleHtmlRaw from '../../features/base/components/ng-switch-example/ng-switch-example.component.html';

import ngIfExampleTsRaw from '../../features/base/components/ng-if-example/ng-if-example.component.ts.txt';
import ngForExampleTsRaw from '../../features/base/components/ng-for-example/ng-for-example.component.ts.txt';
import ngSwitchExampleTsRaw from '../../features/base/components/ng-switch-example/ng-switch-example.component.ts.txt';

export const dataDisplay: Topic = {
  name: 'Visualización de Datos', // Cómo mostrar datos en la interfaz.
  path: 'data-display',
  features: [
    {
      name: 'Condicionales', // Mostrar u ocultar elementos basados en condiciones.
      path: 'conditionals',
      showcases: [
        {
          name: '*ngIf',
          anchor: 'ng-if',
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
          name: '*ngSwitch',
          anchor: 'ng-switch',
          component: NgSwitchExampleComponent,
          files: [
            {
              code: ngSwitchExampleTsRaw,
              defaultIsOpen: true,
              lang: 'ts',
            },
            {
              code: ngSwitchExampleHtmlRaw,
              defaultIsOpen: false,
              lang: 'html',
            },
          ],
        },
        // {
        //   name: '[hidden] (Property Binding)', // Muestra u oculta elementos con CSS (siempre en el DOM).
        //   path: '#hidden-binding',
        // },
      ],
    },
    {
      name: 'Listas', // Renderizar colecciones de datos.
      path: 'lists',
      showcases: [
        {
          name: '*ngFor', // Directiva para renderizar una lista de elementos.
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
      ],
    },
  ],
};
