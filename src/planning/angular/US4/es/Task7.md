# Mejorar del médoto `getMovies` para que soporte de filtrado y ordenamiento

## Descripción:

Mejorar el médoto `getMovies` para admitir el filtrado por género y ordenamiento por diferentes criterios al recibir un objeto como parámetro. La nueva estructura del parámetro debería ser `{ filters: { page: number, genreId: number | null, sortBy: string | null } }`.

## Criterios de aceptación:

- [ ] Estructura de parámetros:

     - [ ] Modificar el parámetro del método `getMovies` para que además de la propiedad `page` tenga las siguientes propiedades:

         - [ ] `genreId`: una propiedad de tipo _number_ o _null_ que representa el Id del género por el cual se quieren filtra las películas. Si es _null_, no se aplica ningún filtrado de género.

         - [ ] `sortBy`: una propiedad de _string_ o _null_ que el criterio de ordenamiento. Si es _null_, no se aplica ningún ordenamiento.

- [ ] Modificación de solicitud de API:

     - [ ] Ajustar la solicitud de API dentro del método `getMovies` para incluir filtrado y ordenamiento según los parámetros proporcionados.

- [ ] Valores predeterminados:

     - [ ] Implementar valores predeterminados para `genreId` y `sortBy` en caso de que no se proporcionen. Por ejemplo, establezca valores predeterminados de _null_ para ambos.

- [ ] Pruebas unitarias:

     - [ ] Escribir pruebas unitarias para el método `getMovies` para garantizar que maneja correctamente los escenarios de filtrado y ordenamiento.

     - [ ] Incluir casos de prueba para proporcionar diferentes números de página, filtros de género y ordenamiento clasificación.

## Definición de Hecho:

- [ ] La función `getMovies` está mejorada para aceptar un parámetro de objeto con la estructura `{ filters: { page: number, genreId: number | null, sortBy: string | null } }`.

- [ ] La solicitud de API dentro de la función se ajusta para incluir filtrado y clasificación según los parámetros proporcionados.

- [ ] Se implementan los valores predeterminados para `genreId` y `sortBy`.

- [ ] Las pruebas unitarias para la función `getMovies` modificada se pasan con éxito y cubren varios escenarios de filtrado y clasificación.
