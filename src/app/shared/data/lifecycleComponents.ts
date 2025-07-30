export const lifecycleComponents = {
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
};
