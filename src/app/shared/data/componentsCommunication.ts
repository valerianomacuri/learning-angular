export const componentsCommunication = {
  name: 'Comunicación entre Componentes', // Formas en que los componentes interactúan.
  path: 'communication',
  children: [
    {
      name: 'Padre → Hijo', // Pasar datos del componente padre al hijo.
      children: [
        {
          name: '@Input() Decorator', // Declarar las propiedades de entrada esperadas de un componente.
          path: '#input-decorator',
        },
      ],
    },
    {
      name: 'Hijo → Padre', // Enviar eventos y datos del componente hijo al padre.
      children: [
        {
          name: '@Output() Decorator y EventEmitter', // Emitir eventos personalizados desde el hijo.
          path: '#output-eventemitter',
        },
      ],
    },
    {
      name: 'Entre Hermanos o no Relacionados', // Compartir estado o comunicación entre componentes del mismo nivel o sin relación directa.
      children: [
        {
          name: 'Servicios (Services)', // Clases inyectables para lógica de negocio y estado compartido.
          path: '#services',
        },
        {
          name: 'RxJS Subject / BehaviorSubject', // Patrones de Observables para comunicación entre componentes.
          path: '#rxjs-subjects',
        },
      ],
    },
    {
      name: 'Proyección de Contenido', // Cómo los componentes pueden aceptar y renderizar contenido pasado desde el padre.
      path: 'content-projection',
      children: [
        {
          name: '<ng-content>', // Punto de inserción de contenido para el componente.
          path: '#ng-content',
        },
        {
          name: 'Selectores de Contenido', // Proyección de contenido en ubicaciones específicas con selectores.
          path: '#content-selectors',
        },
      ],
    },
  ],
};
