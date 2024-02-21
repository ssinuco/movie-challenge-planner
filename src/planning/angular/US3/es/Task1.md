# 3.1 Mejora el método `getMovies` del servicio `APIService` para la paginación

## Descripción:

Mejorar el método `getMovies` del servicio `APIService` para soportar la paginación mediante la recepción de un objeto como parámetro con la estructura `{ filters: { page: number } }`.  Esto permite obtener datos de la API con parámetros de paginación.

Ahora, la función debe devolver un _Observer_ que resuelva un objeto con la estructura `{metaData: { pagination:{currentPage:number, totalPages:number}}, movies: Movie[]}`. Esto es necesario para incluir en la salida no sólo el array de películas sino también el número total de páginas.

## Criterios de aceptación:

- [ ] Estructura de parámetros:

    - [ ] Modificar el método `getMovies` para que acepte un parámetro objeto.

    - [ ] El parámetro debe tener una propiedad llamada `filters` con la estructura `{ filters: { page: number } }`.

- [ ] Modificación de la petición API:

    - [ ] Ajustar la petición API dentro del método `getMovies` para incluir el parámetro `page`.

- [ ] Paginación por defecto:
    
    - [ ] Implementar un valor predeterminado para el parámetro de página en caso de que no se proporcione. Por ejemplo, establezca un valor por defecto de 1.

- [ ] Modificación de la estructura de retorno:

    - [ ] Modificar el retorno del método `getMovies` a un _Observable_ que resuelva un objeto con la estructura `{metaData: { pagination:{currentPage:number, totalPages:number}}, movies: Movie[]}`.

- [ ] Pruebas unitarias:
    
    - [ ] Escribir pruebas unitarias para el método modificado `getMovies` para asegurar que maneja la paginación correctamente.
    
    - [ ] Incluir casos de prueba para proporcionar diferentes números de página y probar el comportamiento de paginación por defecto.

## Definición de Hecho:

- [ ] Se modifica el método `getMovies` para que acepte un parámetro objeto con la estructura `{ filters: { page: number } }`.

- [ ] La petición API dentro del método se ajusta para incluir el parámetro de `page`.

- [ ] Se implementa un valor por defecto para el parámetro `page`.

- [ ] El retorno del método `getMovies` se modifica a un _Observable_ que resuelve un objeto con la estructura `{metaData: { pagination:{currentPage:number, totalPages:number}}, movies: Movie[]}`.
`.
- [ ] Las pruebas unitarias del método `getMovies` modificada se superan con éxito, cubriendo varios escenarios de paginación.
