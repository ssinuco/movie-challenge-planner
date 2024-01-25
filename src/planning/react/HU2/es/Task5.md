# Implementar función de obtención de datos de películas

## Descripción:

Desarrollar una función `getMovies` para obtener datos de películas desde el endpoint `/discover/movie` de The Movie DB. La función no debería recibir ningún parámetro y devolver una Promise que resuelva un array de objetos de tipo Movie. Además, utiliza la función `formatMovie` para transformar los datos de películas de la API al modelo de negocio Movie.

Esta tarea garantiza la implementación de una función sólida para obtener datos de películas, incorporar la transformación de datos mediante la función `formatMovie` y gestionar las respuestas de la API de forma eficaz. Las pruebas unitarias validan además la corrección de la implementación.

## Criterios de aceptación:

- [ ] Firma de la función:

    - [ ] Crear una función llamada `getMovies` dentro del archivo de servicio apropiado (por ejemplo, movieService.ts).

- [ ] Parámetros:

    - [ ] Asegúrese de que la función `getMovies` no recibe parámetros.

- Tipo de retorno

    - [ ] La función debe devolver una Promise que resuelva una matriz de objetos de película del modelo de negocio (`Promise<Movie[]>`).

- [ ] Solicitud de API:

    - [ ] Utilizar una biblioteca cliente HTTP para realizar una solicitud GET al punto final `/discover/movie` de The Movie DB.

    - [ ] Incluir el token de la API en las cabeceras de la solicitud, recuperado del cargador de configuración.

- [ ] Transformación de datos:

    - [ ] Aplicar la función `formatMovie` para transformar los datos de películas de la API al modelo de negocio dentro de la función `getMovies`.

- [ ] Pruebas unitarias:

    - [ ] Escribir pruebas unitarias para la función `getMovies`, incluyendo casos de prueba para una solicitud de API exitosa, manejo de errores y transformación de datos correcta.

## Definición de Hecho:

- [ ] La función `getMovies` está implementada y reside dentro del archivo de servicio apropiado.

- [ ] La función no toma parámetros y devuelve una Promise que resuelve un array de objetos `Movie` del modelo de negocio (`Promise<Movie[]>`).

- [ ] La función realiza correctamente una solicitud GET al punto final `/discover/movie` de The Movie DB con el token de la API.

- [ ] Las respuestas de la API se gestionan correctamente, incluidos los casos de error.

- [ ] La función `formatMovie` se aplica para transformar los datos de películas de la API al modelo de negocio `Movie`.

- [ ] Las pruebas unitarias de la función `getMovies` se superan con éxito, cubriendo varios escenarios.