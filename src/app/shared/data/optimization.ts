export const optimization = {
  name: 'Performance y Optimización', // Técnicas para mejorar el rendimiento de la aplicación.
  path: 'performance',
  children: [
    {
      name: 'Lazy Loading de Módulos', // Carga de módulos (y sus componentes) solo cuando son necesarios.
      path: 'lazy-loading-modules',
    },
    {
      name: 'Change Detection Strategy (OnPush)', // Estrategia para optimizar la detección de cambios.
      path: 'change-detection-onpush',
    },
    {
      name: 'Pure Pipes', // Pipes que solo se recalculan si sus entradas cambian.
      path: 'pure-pipes',
    },
    {
      name: 'Memoización con Pipes Puros / Componentes Puros', // Caché de valores computados o resultados de componentes.
      path: 'memoization-pure-pipes-components',
    },
    {
      name: 'SSR (Server-Side Rendering) / Hydration', // Renderizado en el servidor para mejorar el rendimiento inicial.
      path: 'ssr-hydration',
    },
  ],
};
