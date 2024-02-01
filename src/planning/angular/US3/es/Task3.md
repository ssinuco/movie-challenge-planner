# Mejorar el componente `app-home` para soporte de paginación

## Descripción:

Mejorar el componente `app-home` para admitir la paginación utilizando el componente `app-pagination`. Integre el componente `app-pagination` usando el _Output_ `onSelectPage`. Cada vez que el usuario hace clic en un botón de página, actualice el valor del _query param_ `currentPage` de la URL a la nueva página. Además, llame al método `getMovies` cada vez que cambie el parámetro de consulta `currentPage` suscribiendose al _Observable_ `queryParams` del servicio `ActivatedRoute`.

## Criterios de aceptación:

- [ ] Integración de componentes de paginación:

     - [ ] Integre el componente `app-pagination` dentro del componente `app-home` usando el _Output_ `onSelectPage`.

- [ ] _Observable_ `queryParams`:

     - [ ] Utilice el _Observable_ `queryParams` del servicio `ActivatedRoute` para extraer y rastrear los _query params_ de la URL.

- [ ] Manejo de clicks en los botones de página:

     - [ ] Cuando el usuario haga clic en un botón de página, cambie el _query param_ `currentPage` de la URL a la nueva página.

     - [ ] Llame el método `getMovies` cada vez que cambie el parámetro de consulta `currentPage` suscribiendose al _Observable_ `queryParams` del servicio `ActivatedRoute`.

- [ ] Pruebas unitarias:

     - [ ] Escriba pruebas unitarias para el componente `app-home` mejorado, que abarquen escenarios como clics en botones de página, cambios de parámetros de URL y llamadas de servicio exitosas.

## Definición de Hecho:

- [ ] El componente `app-pagination` está integrado dentro del componente `app-home` usando el _Output_ `onSelectPage`.

- [ ] El _Observable_ `queryParams` del servicio `ActivatedRoute` se utiliza para extraer y rastrear los parámetros de consulta de la URL.

- [ ] Los clics en el botón de página cambian el _query param_ `currentPage`de la URL a la nueva página y activan llamadas al servicio `getMovies`.

- [ ] Las pruebas unitarias para el componente `app-home` mejorado se superan con éxito y cubren varios escenarios de paginación.
