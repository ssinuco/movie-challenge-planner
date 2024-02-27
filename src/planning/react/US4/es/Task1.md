# 4.1 Implementar método para la obtención de géneros de películas

## Descripción:

Implementar una función `getMovieGenres` para obtener una lista de géneros de películas desde el endpoint `/genre/movie/list` de _The Movie DB_. La función `getMovieGenres` no debería recibir ningún parámetro y debería devolver una _Promise_ que resuelva un array de objetos como `[{id: number, name: string}]`.

## Criterios de aceptación:

- [ ] Implementar una función denominado `getMovieGenres` dentro del archivo de servicio apropiado (por ejemplo, `movieService.ts`).

- [ ]  La función no debería recibir ningún parámetro.

- [ ] La función debería hacer una solicitud API para recuperar los géneros de películas del endpoint `/genre/movie/list`.

- [ ] La función debe devolver una _Promise_ que resuelva un array de objetos como `[{id: number, name: string}]`.

- [ ] Escribir pruebas unitarias para el método `getMovieGenres`, incluidos casos de prueba para una solicitud API exitosa y manejo de errores.

## Definición de Hecho:

- [ ] La función `getMovieGenres` está implementado y reside dentro del archivo de servicio apropiado.

- [ ] La función realiza una solicitud API para recuperar datos del endpoint `/genre/movie/list`.

- [ ] Las respuestas de la API se manejan adecuadamente, incluidos los escenarios de error.

