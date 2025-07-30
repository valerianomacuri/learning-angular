import {
  ComponentExampleComponent,
  InterpolationExampleComponent,
} from '../../features/base/components';

import componentExampleHtmlRaw from '../../features/base/components/component-example/component-example.component.html';
import interpolationExampleHtmlRaw from '../../features/base/components/interpolation-example/interpolation-example.component.html';

import componentExampleTsRaw from '../../features/base/components/component-example/component-example.component.ts.txt';
import interpolationExampleTsRaw from '../../features/base/components/interpolation-example/interpolation-example.component.ts.txt';
import { Topic } from '../interfaces';

export const fundamentals: Topic = {
  name: 'Fundamentos', // Sección principal: Conceptos básicos de Angular
  path: 'fundamentals',
  features: [
    // {
    //   name: 'Instalación y Configuración', // Cómo configurar un proyecto Angular.
    //   showcases: [
    //     {
    //       name: 'Angular CLI', // Herramienta oficial para iniciar y gestionar proyectos Angular.
    //       anchor: 'angular-cli',
    //     },
    //   ],
    // },
    {
      name: 'Declaración de componentes', // Formas de definir componentes Angular.
      path: 'declaration',
      showcases: [
        {
          name: '@Component Decorator',
          anchor: 'component',
          description:
            'En **Angular**, un componente se declara con el decorador `@Component`, definiendo el `selector` (nombre del tag) y el `template`. La clase exportada representa el componente.',
          component: ComponentExampleComponent,
          files: [
            {
              code: componentExampleTsRaw,
              defaultIsOpen: true,
              lang: 'ts',
              name: '',
            },
            {
              code: componentExampleHtmlRaw,
              defaultIsOpen: false,
              lang: 'html',
              name: '',
            },
          ],
        },
      ],
    },
    {
      name: 'Interpolación de Datos', // Mostrar texto y datos reactivos en la vista.
      path: 'interpolation',
      showcases: [
        {
          name: '{{ }} (Interpolación)', // Insertar valores de propiedades de componente en el template.
          anchor: 'interpolation',
          description: '',
          component: InterpolationExampleComponent,
          files: [
            {
              code: interpolationExampleTsRaw,
              defaultIsOpen: true,
              lang: 'ts',
              name: '',
            },
            {
              code: interpolationExampleHtmlRaw,
              defaultIsOpen: false,
              lang: 'html',
              name: '',
            },
          ],
        },
        // {
        //   name: '[innerHTML] (Property Binding)', // Renderizar HTML sin sanitizar (¡usar con precaución!).
        //   anchor: 'innerhtml-binding',
        // },
      ],
    },
    // {
    //   name: 'Estilos', // Cómo aplicar estilos a los componentes.
    //   path: 'styles',
    //   showcases: [
    //     {
    //       name: 'Estilos por Componente', // Estilos que se aplican solo al componente actual.
    //       anchor: '#component-styles',
    //     },
    //     {
    //       name: 'View Encapsulation', // Controlar el aislamiento de estilos.
    //       anchor: '#view-encapsulation',
    //     },
    //     {
    //       name: '[ngClass] (Class Binding)', // Cómo aplicar clases CSS condicionalmente.
    //       anchor: '#ngclass-binding',
    //     },
    //     {
    //       name: '[ngStyle] (Style Binding)', // Cómo aplicar estilos CSS directamente en el HTML.
    //       anchor: '#ngstyle-binding',
    //     },
    //   ],
    // },
  ],
};
