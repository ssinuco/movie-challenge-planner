# Mejorar el componente `Home` para integrar componentes `ListOptions`

## Descripción:

Mejore el componente `Home` para integrar dos instancias del componente `ListOptions`. Una instancia mostrará una lista de géneros de películas usando el servicio `getMovieGenreData` y la otra mostrará una lista estática de dos opciones de clasificación: asc y desc. Al seleccionar una opción de cada componente `ListOptions`, se debe llamar apropiadamente al servicio `getMovies` para filtrar y ordenar la lista de películas. Considere definir dos estados adicionales para rastrear el género seleccionado y las opciones de clasificación.

Esta tarea garantiza que el componente "Inicio" se mejore para proporcionar una experiencia de usuario más interactiva y dinámica al integrar dos instancias del componente "ListOptions" para filtrar y ordenar películas según géneros y opciones de clasificación. El estado se actualiza adecuadamente para manejar las opciones seleccionadas.

## Criterios de aceptación:

- [ ] Estructura estatal:

     - [] Actualice la estructura del estado en el componente `Inicio` para mantener las opciones de filtrado y clasificación seleccionadas.

     - [] Defina dos estados adicionales, `selectedGenre` y `selectedSort`, para rastrear el género seleccionado y las opciones de clasificación.

- [] Integración con `ListOptions`:

     - [] Integrar dos instancias del componente `ListOptions` dentro del componente `Home`.

     - [] Una instancia debería mostrar una lista de géneros de películas utilizando el servicio `getMovieGenreData`.

     - [] La otra instancia debería mostrar una lista estática de dos opciones de clasificación: asc y desc.

- [] Accesorios `ListOptions`:

     - [] Pase los accesorios necesarios a cada instancia de `ListOptions`:

         - [] Para las opciones de género, use el servicio `getMovieGenreData` y pase la devolución de llamada onChange para manejar la selección de género.

         - [] Para las opciones de clasificación, pase una matriz estática de opciones (asc y desc) y la devolución de llamada onChange para manejar la selección de clasificación.

- [ ] Llamadas de servicio:

     - [] Actualice las llamadas al servicio `getMovies` en el componente `Home` para incluir el filtro seleccionado y las opciones de clasificación.

     - [] Llame al servicio apropiadamente cuando el usuario seleccione opciones de los componentes `ListOptions`.

- [ ] Examen de la unidad:

     - [] Escribir pruebas unitarias para el componente "Inicio" actualizado, que abarquen escenarios como la selección de géneros, la selección de opciones de clasificación y la validación de llamadas de servicio.

## Definición de Hecho:

- [] La estructura de estado en el componente "Inicio" se actualiza para contener las opciones de filtrado y clasificación seleccionadas.

- [] Dos instancias del componente `ListOptions` están integradas dentro del componente `Home`.

- [] Los accesorios se pasan a cada instancia de `ListOptions`, incluidas las opciones y las devoluciones de llamada.

- [] Las llamadas de servicio en el componente "Inicio" se actualizan para incluir opciones de filtrado y clasificación seleccionadas.

- [ ] Las pruebas unitarias para el componente `Home` actualizado se superan con éxito y cubren varios escenarios.

- [] El código está bien documentado, cumple con los estándares de codificación e incluye comentarios cuando es necesario.