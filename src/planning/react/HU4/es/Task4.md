# Mejorar la función `formatMovie` para clave de géneros adicionales

## Descripción

Modifique la función "formatMovie" para mejorar el modelo de negocio de películas agregando una clave de géneros adicional. Esta clave debe ser una matriz de cadenas que contengan los nombres de los géneros de películas según la clave `genre_ids` de Movie Data API. La función `formatMovie` actualizada ahora debería recibir, como parámetro, el mapa de JavaScript generado por la función formatMovieGenre.

Modificar la función `formatMovie` para incluir nombres de géneros como una matriz garantiza que el modelo de negocio de películas mejorado refleje los géneros asociados según los `genre_ids` de Movie Data API. Esta mejora aumenta la riqueza del modelo de película.

## Criterios de aceptación

- [ ] Firma de función:

     - [] Modifique la función `formatMovie` existente para aceptar un parámetro adicional, un mapa JavaScript generado por formatMovieGenre.

- [] Clave de géneros adicionales:

     - [] Mejorar el modelo de negocio de películas agregando una clave adicional denominada géneros.

     - [] La clave de géneros debe ser una matriz de cadenas que contengan los nombres de los géneros de películas según la clave `genre_ids` de Movie Data API.

- [ ] Ejemplo de parámetro:

     - [] La función `formatMovie` actualizada debe recibir el mapa JavaScript generado por la función formatMovieGenre como parámetro.

- [ ] Ejemplo de entrada y salida:

     - [ ] Ejemplo de entrada:

         ```js
         formatoPelícula(
             {
                 identificación: 123,
                 título: 'Película de ejemplo',
                 género_ids: [28, 35],
                 // otros datos de la película...
             },
             nuevo mapa([
                 [28, 'Acción'],
                 [35, 'Comedia'],
                 // otros datos de género\...
             ])
         );
         ```
        
         Salida de ejemplo:

         ```js
         {
             identificación: 123,
             título: 'Película de ejemplo',
             géneros: ['Acción', 'Comedia'],
             // otros datos de película mejorados...
         }
         ```

- [ ] Examen de la unidad:

     - [] Modificar las pruebas unitarias existentes para la función `formatMovie` en `transformers.spec.ts`.

     - [] Pruebe la función con varios tipos de datos de películas API para garantizar una transformación correcta.

     - [ ] Incluir pruebas para casos extremos y posibles errores.

## Definición de Hecho:

- [] La función `formatMovie` se modifica para aceptar un parámetro adicional, un mapa JavaScript generado por formatMovieGenre.

- [] El modelo de negocio de películas se mejora al agregar una clave adicional denominada géneros.

- [] La clave de géneros es una matriz de cadenas que contienen los nombres de los géneros de películas según la clave `genre_ids` de Movie Data API.

- [ ] La función `formatMovie` modificada produce con éxito el modelo de negocio de Película mejorado.

- [ ] Las pruebas unitarias para la función `formatMovie` pasan exitosamente y cubren varios escenarios.