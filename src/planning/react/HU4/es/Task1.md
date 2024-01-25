# Implementar la función de transformación de género de película

## Descripción:

Cree una función llamada `formatGenre` en el archivo `src/utils/transformers.ts` para transformar una matriz de modelos de datos de género API en un [_Map_] de JavaScript (https://developer.mozilla.org/en-US/docs/ Web/JavaScript/Referencia/Objetos_globales/Mapa). El [_Map_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) debe tener claves que representen los identificadores de género y valores que representen los nombres de los géneros.

Esta transformación mejora la usabilidad de los datos de género al proporcionar un mapeo de valores clave para búsquedas rápidas.

## Criterios de aceptación:

- [ ] Firma de función:

     - [] Cree una función llamada `formatGenre` en `src/utils/transformers.ts`.

- [ ] Parámetros:

     - [] La función debe aceptar una serie de modelos de datos de género API como entrada.

- [] Tipo de devolución:

     - [] La función debe devolver un [_Map_] de JavaScript (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map).

- [] Estructura del mapa:

     - [ ] Las claves del Mapa deben ser los ids de los géneros.

     - [ ] Los valores del Mapa deben ser los nombres de los géneros.

- [ ] Ejemplo:

     - [ ] Por ejemplo, dada la siguiente entrada:

         ```js
         [
             { id: 28, nombre: 'Acción' },
             { id: 35, nombre: 'Comedia' },
             { id: 18, nombre: 'Drama' },
         ]
         ```

         La función debería devolver un mapa:

         ```js
         nuevo mapa([
             [28, 'Acción'],
             [35, 'Comedia'],
             [18, 'Drama'],
         ]);
         ```
- [] Manejo de entradas vacías:

     - [] Asegúrese de que la función maneje correctamente una matriz de entrada vacía y devuelva un mapa vacío.

## Definición de Hecho:

- [] La función `formatGenre` se crea en `src/utils/transformers.ts`

- [] La función toma como entrada una serie de modelos de datos de género API.

- [] La función devuelve un mapa de JavaScript con claves que representan identificadores de género y valores que representan nombres de género.

- [] La función maneja la entrada vacía con elegancia y devuelve un mapa vacío.