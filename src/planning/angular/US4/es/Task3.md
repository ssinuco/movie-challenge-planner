# Mejorar `formatMovie` y `getMovies` para soportar géneros

## Descripción

Modificar la función `formatMovie` para mejorar el modelo de negocio `Movie` agregando una clave de `genres` adicional. Esta clave debe ser un arreglo de _strings_ que contengan los nombres de los géneros de películas según la llave `genre_ids`.

La función `formatMovie`  debería recibir un parámetro adicional, el _Map_ de JavaScript generado por la función `formatGenresToMap` y usarlo para transformar la llave `genre_ids` a un un arreglo de _strings_.

Modificar el método `getMovies` para recibir como parámetro el _Map_ de JavaScript generado por la función `formatGenresToMap` y usarlo en el llamado de `formatMovie`.

## Criterios de aceptación

- [ ] Modificar el modelo de negocio `Movie` agregando una llave adicional denominada `genres`. La llave `genres` debe ser un arreglo de _strings_.

- [ ] Función `formatMovie`

    - [ ] Modificar la función `formatMovie` existente para aceptar un parámetro adicional, un _Map_ de JavaScript generado por `formatGenresToMap`.

    - [ ] La función `formatMovie` debe usar el nuevo parametro para reemplazar el ID de género en la llave `genere_ids` con su nombre de género correspondiente.
    
    - [ ] La función `formatMovie` debe agregar una nueva llave `genres` al resultado para contener un arreglo de nombres de géneros.
    
    Por ejemplo, si se llama la function `formatMovie` como sigue:

    ```js
        formatMovie(
            {
                id: 123,
                title: 'Example Movie',
                genre_ids: [28, 35],
                // other movie data...
            },
            new Map([
                [28, 'Action'],
                [35, 'Comedy'],
                // other genre data\...
            ])
        );
    ```

    debería retormar el siguiente resultado:

    ```js
        {
            id: 123,
            title: 'Example Movie',
            genres: ['Action', 'Comedy'],
            // other enhanced movie data...
        }
    ```

    Notese que en el resultado se ha agregado una llave `genres` con los nombres de los géneros correspondientes a los ids en `genre_ids`.

- [ ] Método `getMovies`

    - [ ] Modificar el método `getMovies` existente para aceptar un parámetro adicional, un _Map_ de JavaScript generado por `formatGenresToMap`.

    - [ ] Usar el nuevo parámetro al llamar la función `formatMovie`.

- [ ] Pruebas unitarias:

     - [ ] Modificar las pruebas unitarias existentes para la función `formatMovie`.

     - [ ] Modificar las pruebas unitarias existentes para la función `getMovies`.

     - [ ] Pruebe la función con varios tipos de datos de películas de API para garantizar una transformación correcta.

     - [ ] Incluir pruebas para casos extremos y posibles errores.

## Definición de Hecho:

- [ ] La función `formatMovie` se modifica para aceptar un parámetro adicional, un _Map_ de JavaScript generado por `formatGenresToMap`.

- [ ] El modelo de negocio de películas se mejora al agregar una llave adicional denominada `genres`.

- [ ] La llave `genres` es un arreglo de _strings_ que contienen los nombres de los géneros de películas según la clave `genre_ids`.

- [ ] La función `formatMovie` modificada produce con éxito el modelo de negocio de _Movie_.

- [ ] Las pruebas unitarias para la función `formatMovie` pasan exitosamente y cubren varios escenarios.

- [ ] El método `getMovies` se modifica para aceptar un parámetro adicional, un _Map_ de JavaScript generado por `formatGenresToMap`.

- [ ] La function `formatGenresToMap` es llamada en `getMovies` con el nuevo parámetro.

- [ ] Las pruebas unitarias para el metodo `getMovies` pasan exitosamente y cubren varios escenarios.
