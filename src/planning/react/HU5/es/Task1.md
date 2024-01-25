# Desarrollar la función `getMovieDetail`

## Descripción:

Desarrolle una función llamada `getMovieDetail` para recuperar datos de una sola película por identificación desde el punto final `/movie/{movie_id}` de The Movie DB. La función debe recibir un parámetro "id" y devolver una "Promesa" que se resuelva en una película de modelo de negocio. Además, utilice la función "formatMovie" para transformar los datos de la película API al modelo de negocio Película.

Esta tarea garantiza el desarrollo de la función `getMovieDetail`, lo que permite a la aplicación obtener información detallada sobre una sola película por identificación de la API de The Movie DB. La integración de la función "formatMovie" garantiza una transformación de datos consistente para el modelo de negocio.

## Criterios de aceptación:

- [ ] Firma de función:

     - [] Cree una función llamada `getMovieDetail` dentro del archivo de servicio apropiado (por ejemplo, movieService.ts).

- [ ] Parámetro:

     - [] La función debe recibir un parámetro llamado `id` que represente la identificación de la película a buscar.

- [] Tipo de devolución:

     - [] La función debe devolver una "Promesa" que se resuelva en una película de modelo de negocio.

- [] Solicitud de API:

     - [] Utilice una biblioteca de cliente HTTP para realizar una solicitud GET al punto final `/movie/{movie_id}` de The Movie DB.

     - [] Incluir el token API en los encabezados de solicitud, recuperados del cargador de configuración.

- [ ] Transformación de datos:

     - [] Utilice la función `formatMovie` para transformar los datos de la película API al modelo de negocio Película.

- [ ] Examen de la unidad:

     - [] Escriba pruebas unitarias para la función `getMovieDetail` para garantizar la solicitud de API, el manejo de parámetros y la transformación de datos correctos.

## Definición de Hecho:

- [] La función `getMovieDetail` está implementada y reside dentro del archivo de servicio apropiado.

- [] La función recibe un parámetro llamado "id" que representa la identificación de la película y devuelve una "Promesa" que se resuelve en un modelo de negocio Película.

- [] La función realiza con éxito una solicitud GET al punto final `/movie/{movie_id}` de The Movie DB con el token API.

- [] Las respuestas de la API se manejan adecuadamente, incluidos los escenarios de error.

- [] La función `formatMovie` se utiliza para transformar los datos de la película API al modelo de negocio Película.

- [ ] Las pruebas unitarias para la función `getMovieDetail` se pasan con éxito y cubren varios escenarios.