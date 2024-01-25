# Implementar la función `getMovieGenreData` para buscar géneros de películas

## Descripción:

Implemente una nueva función llamada `getMovieGenreData` para obtener una lista de géneros de películas desde el punto final `/genre/movie/list`. Esta función debe utilizar la función `formatMovieGenre` para transformar los datos de género de películas API en un mapa JavaScript. La función `getMovieGenreData` no debería recibir ningún parámetro y debería devolver una Promesa que se resuelva en el Mapa de JavaScript.

La implementación de `getMovieGenreData` permite la recuperación de datos de géneros de películas desde la API, y el uso de `formatMovieGenre` garantiza un formato estructurado y utilizable para los géneros en forma de un mapa JavaScript.

## Criterios de aceptación:

- [ ] Firma de función:

     - [] Implemente una función denominada `getMovieGenreData` dentro del archivo de servicio apropiado (por ejemplo, movieService.ts).

- [ ] Sin parámetros:

     - [] La función no debería recibir ningún parámetro.

- [] Tipo de devolución

     - [] La función debe devolver una Promesa que se resuelva en el Mapa JavaScript creado usando `formatMovieGenre`.

- [] Solicitud de API:

     - [] Utilice una solicitud API para recuperar datos del punto final `/genre/movie/list`.

- [ ] Transformación de datos:

     - [] Utilice la función `formatMovieGenre` para transformar los datos de género de película API obtenidos en un mapa JavaScript.

- [ ] Examen de la unidad:

     - [] Escriba pruebas unitarias para la función `getMovieGenreData` en el archivo `transformers.spec.ts` en la carpeta `src/utils`, incluidos casos de prueba para una solicitud API exitosa, manejo de errores y transformación de datos correcta.

## Definición de Hecho:

- [] La función `getMovieGenreData` está implementada y reside dentro del archivo de servicio apropiado.

- [] La función utiliza una solicitud API para recuperar datos del punto final `/genre/movie/list`.

- [] Los datos de género de película API obtenidos se transforman en un mapa JavaScript utilizando la función `formatMovieGenre`.

- [] Las respuestas de la API se manejan adecuadamente, incluidos los escenarios de error.

- [] La función `formatMovieGenre` se aplica para transformar datos de género de películas API en un mapa JavaScript.

- [ ] Las pruebas unitarias para la función `formatMovieGenre` pasan exitosamente y cubren varios escenarios.
