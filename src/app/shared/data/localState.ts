export const localState = {
  name: 'Manejo del Estado Local', // Gestión del estado dentro de un componente.
  path: 'local-state',
  children: [
    {
      name: 'Estado del Componente', // Introducción al estado reactivo.
      children: [
        {
          name: 'Propiedades de Clase', // Variables que mantienen el estado en el componente.
          path: '#class-properties',
        },
        {
          name: 'Señales (@Signals)', // Mecanismo reactivo para la gestión de estado (nueva en versiones recientes).
          path: '#signals',
        },
        {
          name: 'RxJS (Observables)', // Librería para la programación reactiva y manejo de flujos de datos.
          path: '#rxjs-observables',
        },
        {
          name: 'Efectos (@Effects)', // Para ejecutar efectos secundarios basados en cambios de señales.
          path: '#effects-signals',
        },
      ],
    },
  ],
};
