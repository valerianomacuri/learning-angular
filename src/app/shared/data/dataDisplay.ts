import {
  NgForExampleComponent,
  NgIfExampleComponent,
} from '../../features/base/components';
import { Topic } from '../interfaces';

import ngIfExampleHtmlRaw from '../../features/base/components/ng-if-example/ng-if-example.component.html';
import ngForExampleHtmlRaw from '../../features/base/components/ng-for-example/ng-for-example.component.html';

import ngIfExampleTsRaw from '../../features/base/components/ng-if-example/ng-if-example.component.ts.txt';
import ngForExampleTsRaw from '../../features/base/components/ng-for-example/ng-for-example.component.ts.txt';

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
          description:
            '`*ngIf` es una instrucción que se usa en Angular para **mostrar u ocultar elementos en la pantalla** según una condición. Si la condición es verdadera, el elemento se muestra; si es falsa, no se muestra. Es muy útil para mostrar mensajes, botones o secciones solo cuando se necesitan.',
          component: NgIfExampleComponent,
          files: [
            {
              code: ngIfExampleTsRaw,
              defaultIsOpen: true,
              lang: 'ts',
              name: '',
            },
            {
              code: ngIfExampleHtmlRaw,
              defaultIsOpen: false,
              lang: 'html',
              name: '',
            },
          ],
        },
        // {
        //   name: '*ngSwitch', // Alternativa para múltiples condiciones.
        //   path: '#ngswitch',
        // },
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
              name: '',
            },
            {
              code: ngForExampleHtmlRaw,
              defaultIsOpen: false,
              lang: 'html',
              name: '',
            },
          ],
        },
        // {
        //   name: 'TrackBy Function', // Función para el seguimiento eficiente de listas.
        //   path: '#trackby-function',
        // },
      ],
    },
  ],
};
