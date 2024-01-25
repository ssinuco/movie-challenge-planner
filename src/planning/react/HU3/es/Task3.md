# Mejorar el componente "Inicio" para soporte de paginación

## Descripción:

Mejore el componente "Inicio" para admitir la paginación utilizando el componente "Paginación". Integre el componente `Paginación` usando el accesorio `onSelectPage`. Cada vez que el usuario hace clic en un botón de página, cambie el parámetro de consulta `currentPage` a la nueva página. Además, llame al servicio `getMovies` cada vez que cambie el parámetro de consulta `currentPage`. Utilice el hook `useQuery` y considere definir dos estados adicionales para rastrear la página real y el número total de páginas.

Esta tarea garantiza que el componente "Inicio" se mejore para brindar soporte de paginación, lo que permite a los usuarios navegar a través de diferentes páginas del catálogo de películas. La integración con el componente `Pagination`, el uso del hook `useQuery` y los estados adicionales brindan una experiencia responsiva y fácil de usar.

## Criterios de aceptación:

- [] Integración de componentes de paginación:

     - [] Integre el componente `Paginación` dentro del componente `Inicio` usando la propiedad `onSelectPage`.

- [] UseQuery Hook:

     - [] Utilice el hook `useQuery` para extraer y rastrear los parámetros de consulta de la URL.

- [ ] Estados adicionales:
     - [] Defina dos estados adicionales, `actualPage` y `totalPages`, para realizar un seguimiento de la página actual y del número total de páginas.

- [ ] Botón de página Manejo de clics:

     - [] Cambie el parámetro de consulta `currentPage` a la nueva página.

     - [] Llame al servicio `getMovies` cada vez que cambie el parámetro de consulta `currentPage`.

- [ ] Visualización de páginas reales y totales de páginas:

     - [] Muestra la página real y el total de páginas dentro del componente "Paginación" u otro elemento relevante de la interfaz de usuario.

- [ ] Examen de la unidad:

     - [] Escriba pruebas unitarias para el componente "Inicio" mejorado, que abarquen escenarios como clics en botones de página, cambios de parámetros de URL y llamadas de servicio exitosas.

## Definición de Hecho:

- [] El componente `Paginación` está integrado dentro del componente `Inicio` usando el accesorio `onSelectPage`.

- [] El hook `useQuery` se utiliza para extraer y rastrear los parámetros de consulta de la URL.

- [] Se definen dos estados adicionales, `actualPage` y `totalPages`, para realizar un seguimiento de la página actual y del número total de páginas.

- [] Los clics en el botón de página cambian el parámetro de consulta `currentPage` a la nueva página y activan llamadas al servicio `getMovies`.

- [] La página real y el total de páginas se muestran dentro del componente "Paginación" u otro elemento relevante de la interfaz de usuario.

- [ ] Las pruebas unitarias para el componente `Home` mejorado se superan con éxito y cubren varios escenarios de paginación.