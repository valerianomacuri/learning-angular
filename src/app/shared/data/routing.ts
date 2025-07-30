export const routing = {
  name: 'Enrutamiento', // Navegación dentro de la aplicación con Angular Router.
  path: 'routing',
  children: [
    {
      name: 'Configuración del Módulo de Rutas', // Cómo configurar el enrutador en tu aplicación.
      path: 'router-module-config',
    },
    {
      name: 'Rutas Hijas (Child Routes)', // Definir rutas que son hijos de otras rutas.
      path: 'child-routes',
    },
    {
      name: 'Navegación Declarativa', // Usar el componente `<router-link>` (o `routerLink` directiva) para la navegación.
      path: 'declarative-navigation',
    },
    {
      name: 'Navegación Programática', // Usar el servicio `Router` (ej., `router.navigate()`) para navegar.
      path: 'programmatic-navigation',
    },
    {
      name: 'Parámetros de Ruta y Query Params', // Capturar valores de la URL como parámetros.
      path: 'route-params-query',
    },
    {
      name: 'Guards de Ruta (Route Guards)', // Proteger rutas con lógica de autorización o redirección.
      path: 'route-guards',
    },
  ],
};
