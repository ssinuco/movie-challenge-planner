# Implementar la función de transformación de género de película a un Map

## Descripción:

Crear una función llamada `formatGenresToMap` en el archivo `src/utils/transformers.ts` para transformar una matriz de modelos de datos de género API en un [_Map_ de JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Referencia/Objetos_globales/Mapa). El _Map_ debe tener claves que representen los identificadores de género y valores que representen los nombres de los géneros.

Esta transformación mejora la usabilidad de los datos de género al proporcionar un mapeo de valores clave para búsquedas rápidas.

## Criterios de aceptación:

- [ ] Firma de función:

     - [ ] Crear una función llamada `formatGenresToMap` en `src/utils/transformers.ts`.

- [ ] Parámetros:

     - [ ] La función debe aceptar un arreglo de modelos de datos de género del API como entrada.

- [ ] Tipo de devolución:

     - [ ] La función debe devolver un _Map_ de JavaScript.

     - [ ] Las claves del _Map_ deben ser los ids de los géneros.

     - [ ] Los valores del _Map_ deben ser los nombres de los géneros.

     Por ejemplo, dado el siguiente arreglo de modelos de datos de género del API:

         ```js
         [
             { id: 28, name: 'Acción' },
             { id: 35, name: 'Comedia' },
             { id: 18, name: 'Drama' },
         ]
         ```

     La función debería devolver un _Map_:

         ```js
         new Map([
             [28, 'Acción'],
             [35, 'Comedia'],
             [18, 'Drama'],
         ]);
         ```
- [ ] Manejo de entradas vacías:

     - [ ] Asegurar de que la función maneje correctamente el caso en que el arreglo de entrada es vacío para que devuelva un _Map_ vacío.

## Definición de Hecho:

- [ ] La función `formatGenresToMap` se crea en `src/utils/transformers.ts`

- [ ] La función toma como entrada un arreglo de modelos de datos de género del API.

- [ ] La función devuelve un _Map_ de JavaScript con claves los ids de los géneros y con valores los nombres de los géneros.

- [ ] La función maneja el caso en que el arreglo de entrada es vacío devolviendo un _Map_ vacío.