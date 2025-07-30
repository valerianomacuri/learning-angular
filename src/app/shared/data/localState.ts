import { SignalExampleComponent } from '../../features/base/components';

import singalExampleHtmlRaw from '../../features/base/components/signal-example/signal-example.component.html';

import singalExampleTsRaw from '../../features/base/components/signal-example/signal-example.component.ts.txt';
import { Topic } from '../interfaces';

export const localState: Topic = {
  name: 'Manejo del Estado Local', // Gestión del estado dentro de un componente.
  path: 'local-state',
  features: [
    {
      name: 'Reactividad',
      path: 'reactivity',
      showcases: [
        // {
        //   name: 'Propiedades de Clase', // Variables que mantienen el estado en el componente.
        //   path: '#class-properties',
        // },
        {
          name: 'signal',
          anchor: 'signal',
          description:
            'Este componente de Angular muestra un contador simple que puedes aumentar o disminuir haciendo clic en botones. Usa una nueva función llamada `signal`, que permite guardar y actualizar valores de forma reactiva (es decir, que la vista se actualiza automáticamente cuando cambia el valor). Por ejemplo, el valor del contador empieza en `0` y cambia cuando se presionan los botones. Además, se usa una opción llamada `OnPush` que hace que el componente sea más rápido, porque solo se actualiza cuando realmente cambian los datos.',
          component: SignalExampleComponent,
          files: [
            {
              code: singalExampleTsRaw,
              defaultIsOpen: true,
              lang: 'ts',
              name: '',
            },
            {
              code: singalExampleHtmlRaw,
              defaultIsOpen: false,
              lang: 'html',
              name: '',
            },
          ],
        },
        // {
        //   name: 'RxJS (Observables)', // Librería para la programación reactiva y manejo de flujos de datos.
        //   path: '#rxjs-observables',
        // },
        // {
        //   name: 'Efectos (@Effects)', // Para ejecutar efectos secundarios basados en cambios de señales.
        //   path: '#effects-signals',
        // },
      ],
    },
  ],
};
