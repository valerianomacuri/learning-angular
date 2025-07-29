import { SignalExampleComponent } from '../../features/signal/components';
import singalExampleRaw from '../../features/signal/components/signal-example/signal-example.component.html';

export const features = [
  {
    title: 'signal',
    description: 'Lorem ipsum',
    exampleComponent: SignalExampleComponent,
    exampleTitle: 'Ejemplo interactivo: Actualizar un contador',
    files: [
      {
        code: singalExampleRaw,
        prettyCode: '',
        defaultIsOpen: true,
        lang: 'angular-html',
        name: 'signal-example.component.html',
      },
    ],
  },
];
