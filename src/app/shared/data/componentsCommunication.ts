import { NgContentComponentComponent } from '../../features/base/components/ng-content-component/ng-content-component.component';
import { NgContentExampleComponent } from '../../features/base/components/ng-content-example/ng-content-example.component';
import { Topic } from '../interfaces';

export const componentsCommunication: Topic = {
  name: 'Comunicación entre Componentes', // Formas en que los componentes interactúan.
  path: 'communication',
  features: [
    // {
    //   name: 'Padre → Hijo', // Pasar datos del componente padre al hijo.
    //   showcases: [
    //     {
    //       name: 'input()', // Declarar las propiedades de entrada esperadas de un componente.
    //       anchor: 'input',
    //     },
    //   ],
    // },
    // {
    //   name: 'Hijo → Padre', // Enviar eventos y datos del componente hijo al padre.
    //   showcases: [
    //     {
    //       name: 'output()', // Emitir eventos personalizados desde el hijo.
    //       anchor: 'output',
    //     },
    //   ],
    // },
    // {
    //   name: 'Entre Hermanos o no Relacionados', // Compartir estado o comunicación entre componentes del mismo nivel o sin relación directa.
    //   showcases: [
    //     {
    //       name: 'Servicios (Services)', // Clases inyectables para lógica de negocio y estado compartido.
    //       anchor: 'services',
    //     },
    //     {
    //       name: 'RxJS Subject / BehaviorSubject', // Patrones de Observables para comunicación entre componentes.
    //       anchor: 'rxjs-subjects',
    //     },
    //   ],
    // },
    {
      name: 'Slots / Children', // Cómo los componentes pueden aceptar y renderizar contenido pasado desde el padre.
      path: 'slots-children',
      showcases: [
        {
          name: '<ng-content>', // Punto de inserción de contenido para el componente.
          anchor: 'ng-content',
          component: NgContentExampleComponent,
          files: [
            {
              lang: 'ts',
              defaultIsOpen: true,
            },
            {
              lang: 'html',
            },
          ],
          imports: [
            {
              name: 'ng-content-component',
              files: [
                {
                  lang: 'ts',
                },
                {
                  lang: 'html',
                },
              ],
            },
          ],
        },
        // {
        //   name: 'Selectores de Contenido', // Proyección de contenido en ubicaciones específicas con selectores.
        //   path: 'content-selectors',
        // },
      ],
    },
  ],
};
