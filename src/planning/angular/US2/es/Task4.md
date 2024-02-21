# 2.4 Implementar función de obtención de datos de películas

## Descripción:

Desarrollar un servicio `APIService`, en el directorio _src/shared/services_, con el método `getMovies` para obtener datos de películas desde el endpoint `/discover/movie` de _The Movie DB_. La función no debería recibir ningún parámetro y devolver una _Observable_ que emita un array de objetos de tipo _Movie_. Además, utiliza la función `formatMovie` para transformar los datos de películas de la API al modelo de negocio _Movie_.

## Criterios de aceptación:

- [ ] Firma del método:

    - [ ] Crear un método llamado `getMovies` dentro de un servicio `APIService` en el directorio _src/shared/services_.

- [ ] Parámetros:

    - [ ] Asegúrese de que el método `getMovies` no recibe parámetros.

- [ ] Tipo de retorno

    - El método debe devolver un _Observable_ que emita un arreglo de objetos de película del modelo de negocio (`Observable<Movie[]>`).

- [ ] Solicitud de API:

    - [ ] Utilizar el cliente HTTP de Angular para realizar una solicitud GET a `/discover/movie` de The Movie DB.

    - [ ] Incluir el token de la API en las cabeceras de la solicitud, recuperado del cargador de configuración de ambiente.

- [ ] Transformación de datos:

    - [ ] Aplicar la función `formatMovie` para transformar los datos de películas de la API al modelo de negocio dentro del método `getMovies`.

- [ ] Pruebas unitarias:

    - [ ] Escribir pruebas unitarias para el método `getMovies` del servicio `APIService`, incluyendo casos de prueba para una solicitud de API exitosa, manejo de errores y transformación de datos correcta.

## Definición de Hecho:

- [ ] El método `getMovies` está implementada y reside dentro del archivo de servicio apropiado.

- [ ] El método no toma parámetros y devuelve una _Observable_ que emite un array de objetos `Movie` del modelo de negocio (`Observable<Movie[]>`).

- [ ] La función realiza correctamente una solicitud GET a `/discover/movie` de The Movie DB con el token de la API.

- [ ] Las respuestas de la API se gestionan correctamente, incluidos los casos de error.

- [ ] La función `formatMovie` se aplica para transformar los datos de películas de la API al modelo de negocio _Movie_.

- [ ] Las pruebas unitarias del método `getMovies` se superan con éxito, cubriendo varios escenarios.
