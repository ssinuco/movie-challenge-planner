# Desarrollar la función `getMovieDetail`

## Descripción:

Desarrollar un método `getMovieDetail` en el servicio `APIService` para recuperar información de una sola película por identificación desde el endpoint `/movie/{movie_id}` de The Movie DB. Em método debe recibir un parámetro _id_ y devolver un _Observer_ que emita un modelo de negocio _Movie_. Se debe usar la función `formatMovie` para transformar la API al modelo de negocio _Movie_.

## Criterios de aceptación:

- [ ] Firma de función:

     - [] Crear un método llamado `getMovieDetail` dentro del servicio `APIService`.

- [ ] Parámetro:

     - [] El método debe recibir un parámetro llamado `id` que represente la identificación de la película a buscar.

- [] Tipo de devolución:

     - [] La función debe devolver un _Observer_ que emita un modelo de negocio _Movie_.

- [] Solicitud de API:

     - [ ] Utilizar el cliente HTTP de Angular para realizar una solicitud GET a `/movie/{movie_id}` de The Movie DB.

     - [] Incluir el token API en los encabezados de solicitud, recuperados del cargador de configuración.

- [ ] Transformación de datos:

     - [] Utilizar la función `formatMovie` para transformar los datos de la película API al modelo de negocio _Movie_.

- [ ] Examen de la unidad:

     - [] Escribir las pruebas unitarias para el método `getMovieDetail` para garantizar la solicitud de API, el manejo de parámetros y la transformación de datos correctos.

## Definición de Hecho:

- [] El método `getMovieDetail` está implementada y reside dentro del archivo de servicio apropiado.

- [] El método recibe un parámetro llamado _id_ que representa la identificación de la película y devuelve un _Observer_ que emite un modelo de negocio _Movie_.

- [] El método realiza con éxito una solicitud GET al endpoint `/movie/{movie_id}` de The Movie DB con el token API.

- [] Las respuestas de la API se manejan adecuadamente, incluidos los escenarios de error.

- [] La función `formatMovie` se utiliza para transformar los datos de la película API al modelo de negocio _Movie_.

- [ ] Las pruebas unitarias para la función `getMovieDetail` se pasan con éxito y cubren varios escenarios.
