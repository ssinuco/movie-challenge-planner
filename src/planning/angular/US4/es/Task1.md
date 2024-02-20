# Implementar método para la obtención de géneros de películas

## Descripción:

Implementar un método llamado `getMovieGenres` en el servicio `APIService` para obtener una lista de géneros de películas desde el endpoint `/genre/movie/list`. El método `getMovieGenres` no debería recibir ningún parámetro y debería devolver un _Observable_ que emita un array de objetos como `[{id: number, name: string}]`.

## Criterios de aceptación:

- [ ] Implementar un método denominado `getMovieGenres` dentro del servicio `APIService`.

- [ ] El método no debería recibir ningún parámetro.

- [ ] El método debería hacer una solicitud API para recuperar los géneros de películas del endpoint `/genre/movie/list`.

- [ ] El método debe devolver un _Observable_ que emita un array de objetos como `[{id: number, name: string}]`.

- [ ] Escribir pruebas unitarias para el método `getMovieGenres`, incluidos casos de prueba para una solicitud API exitosa y manejo de errores.

## Definición de Hecho:

- [ ] El método `getMovieGenres` está implementado y reside dentro del archivo de servicio apropiado.

- [ ] El método realiza una solicitud API para recuperar datos del endpoint `/genre/movie/list`.

- [ ] Las respuestas de la API se manejan adecuadamente, incluidos los escenarios de error.
