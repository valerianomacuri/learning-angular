export const menu = [
  {
    name: 'Fundamentos', // Sección principal: Conceptos básicos de Angular
    path: 'fundamentals',
    children: [
      {
        name: 'Instalación y Configuración', // Cómo configurar un proyecto Angular.
        children: [
          {
            name: 'Angular CLI', // Herramienta oficial para iniciar y gestionar proyectos Angular.
            path: '#angular-cli',
          },
        ],
      },
      {
        name: 'Estructura de Componentes', // Formas de definir componentes Angular.
        path: 'component-structure',
        children: [
          {
            name: '@Component Decorator', // Decorador para definir la lógica y vista del componente.
            path: '#component-decorator',
          },
          {
            name: 'Selector y Plantilla', // Cómo se identifica y renderiza un componente.
            path: '#selector-template',
          },
        ],
      },
      {
        name: 'Interpolación de Datos', // Mostrar texto y datos reactivos en la vista.
        children: [
          {
            name: '{{ }} (Interpolación)', // Insertar valores de propiedades de componente en el template.
            path: '#interpolation',
          },
          {
            name: '[innerHTML] (Property Binding)', // Renderizar HTML sin sanitizar (¡usar con precaución!).
            path: '#innerhtml-binding',
          },
        ],
      },
      {
        name: 'Estilos', // Cómo aplicar estilos a los componentes.
        path: 'styles',
        children: [
          {
            name: 'Estilos por Componente', // Estilos que se aplican solo al componente actual.
            path: '#component-styles',
          },
          {
            name: 'View Encapsulation', // Controlar el aislamiento de estilos.
            path: '#view-encapsulation',
          },
          {
            name: '[ngClass] (Class Binding)', // Cómo aplicar clases CSS condicionalmente.
            path: '#ngclass-binding',
          },
          {
            name: '[ngStyle] (Style Binding)', // Cómo aplicar estilos CSS directamente en el HTML.
            path: '#ngstyle-binding',
          },
        ],
      },
    ],
  },
  {
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
  },
  {
    name: 'Visualización de Datos', // Cómo mostrar datos en la interfaz.
    path: 'data-display',
    children: [
      {
        name: 'Condicionales', // Mostrar u ocultar elementos basados en condiciones.
        children: [
          {
            name: '*ngIf', // Renderizado condicional de elementos (alterna el DOM).
            path: '#ngif',
          },
          {
            name: '*ngSwitch', // Alternativa para múltiples condiciones.
            path: '#ngswitch',
          },
          {
            name: '[hidden] (Property Binding)', // Muestra u oculta elementos con CSS (siempre en el DOM).
            path: '#hidden-binding',
          },
        ],
      },
      {
        name: 'Listas', // Renderizar colecciones de datos.
        children: [
          {
            name: '*ngFor', // Directiva para renderizar una lista de elementos.
            path: '#ngfor',
          },
          {
            name: 'TrackBy Function', // Función para el seguimiento eficiente de listas.
            path: '#trackby-function',
          },
        ],
      },
    ],
  },
  {
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
  },
  {
    name: 'Ciclo de Vida del Componente', // Ganchos (hooks) que se ejecutan en diferentes fases de un componente.
    path: 'lifecycle',
    children: [
      {
        name: 'Inicialización y Destrucción', // Ganchos antes y después de que el componente sea añadido/removido del DOM.
        children: [
          {
            name: 'ngOnInit()', // Se ejecuta después del constructor y de que las propiedades de entrada sean inicializadas.
            path: '#ngoninit',
          },
          {
            name: 'ngOnDestroy()', // Se ejecuta justo antes de que el componente sea destruido.
            path: '#ngondestroy',
          },
        ],
      },
      {
        name: 'Detección y Actualización de Cambios', // Ganchos antes y después de que el componente se actualice.
        children: [
          {
            name: 'ngOnChanges()', // Se ejecuta cuando los valores de las propiedades de entrada cambian.
            path: '#ngonchanges',
          },
          {
            name: 'ngDoCheck()', // Se ejecuta durante cada ciclo de detección de cambios (para lógica de cambio personalizada).
            path: '#ngdocheck',
          },
          {
            name: 'ngAfterContentInit() / ngAfterContentChecked()', // Ganchos para el contenido proyectado.
            path: '#ngaftercontent',
          },
          {
            name: 'ngAfterViewInit() / ngAfterViewChecked()', // Ganchos para la vista del componente y sus vistas hijas.
            path: '#ngafterview',
          },
        ],
      },
      {
        name: 'Manejo de Errores', // Ganchos para depurar o manejar errores.
        children: [
          {
            name: 'ErrorHandler (Global)', // Servicio global para capturar errores.
            path: '#errorhandler',
          },
        ],
      },
    ],
  },
  {
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
  },
  {
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
  },
  {
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
  },
];
