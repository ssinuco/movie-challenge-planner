# Implementar la función de transformación de género de película a un listado de opciones

## Descripción:

Crear una función llamada `formatGenresToOptions` en el archivo `src/utils/transformers.ts` para transformar una matriz de modelos de datos de género API en un array de un arreglo de objetos como `[{value: string, label: string}]`.

## Criterios de aceptación:

- [ ] Firma de función:

     - [ ] Crear una función llamada `formatGenresToOptions` en `src/utils/transformers.ts`.

- [ ] Parámetros:

     - [ ] La función debe aceptar un arreglo de modelos de datos de género del API como entrada.

- [ ] Tipo de devolución:

     - [ ] La función debe devolver un arreglo de objetos como `[{value: string, label: string}]`.Cada objeto resultante tiene una propiedad `value` que corresponde al `id` del género convertido en _string_ y una propiedad `label` que corresponde al `name` del género.

    - [ ] Manejar cualquier conversión o transformación de datos necesaria para garantizar la coherencia.

    Por ejemplo, dado el siguiente arreglo de modelos de datos de género del API:

        ```js
        [
            { id: 28, name: 'Acción' },
            { id: 35, name: 'Comedia' },
            { id: 18, name: 'Drama' },
        ]
        ```

     La función debería devolver un arreglo:

        ```js
        [
            { value: '28', label: 'Acción' },
            { value: '35', label: 'Comedia' },
            { value: '18', label: 'Drama' },
        ]
        ```
- [ ] Manejo de entradas vacías:

     - [ ] Asegurar de que la función maneje correctamente el caso en que el arreglo de entrada es vacío para que devuelva un arreglo vacío.

## Definición de Hecho:

- [ ] La función `formatGenresToOptions` se crea en `src/utils/transformers.ts`

- [ ] La función toma como entrada un arreglo de modelos de datos de género del API.

- [ ] La función devuelve un arreglo de objetos como `[{value: string, label: string}]`.

- [ ] La función maneja el caso en que el arreglo de entrada es vacío devolviendo un arreglo vacío.
