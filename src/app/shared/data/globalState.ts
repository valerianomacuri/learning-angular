export const globalState = {
  name: 'Manejo del Estado Global', // Gestión del estado compartido entre múltiples componentes.
  path: 'global-state',
  children: [
    {
      name: 'Servicios e Inyección de Dependencias', // Patrón fundamental en Angular para compartir lógica y estado.
      path: 'services-dependency-injection',
    },
    {
      name: 'Ngrx (o librerías similares)', // Librería popular para la gestión de estado de forma reactiva (Redux-like).
      path: 'ngrx',
    },
  ],
};
