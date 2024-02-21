# 4.6 Desarrollar el componente de Angular `app-list-options`

## Descripción:

Crear un componente de Angular llamado `app-list-options` que permita al usuario seleccionar un elemento de una lista de opciones y borrar la selección.

## Criterios de aceptación:

- [ ] Creación del componente:

     - [ ] Crear el componente Angular `app-list-options` dentro de la carpeta _src/layout_.

- [ ] Inputs:

     - [ ] Definir un _Input_ llamado `options` para almacenar las opciones a listar. El tipo de este input será un arreglo de objetos como `[{value: string, label: string}]`.

     - [ ] Definir un _Input_ llamado `selectedOption` para almacenar la opcion elegida. El tipo de este input será un objetos como `{value: string, label: string}`. Puede ser _null_ si no se selecciona ninguna opción.

- [ ] Outputs:

     - [ ] Definir un _Output_ llamado `onChange` de tipo _EventEmitter<{value: string, label: string}>_ para emitir un evento cuando el usuario selecciones una opción.
     
     - [ ] Definir un _Output_ llamado `onClear` de tipo _EventEmitter_ para emitir un evento cuando el usuario borre la selección.

- [ ] UI desplegable:

     - [ ] Usar un [_<select>_](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select) para listar opciones proporcionadas.

     - [ ] Resaltar la opción seleccionada en el _<select>_.

- [ ] Selección de opción:

     - [ ] Emitir el evento `onChange` cuando el usuario seleccione una opcion del _<select>_.

- [ ] Borrar selección:

     - [ ] Incluir un botón o icono para borrar la selección actual.

     - [ ] Emitir el evento `onClear` cuando el usuario haga clic para eliminar la selección.

- [ ] Prueba unitaria:

     - [ ] Escribir pruebas unitarias para el componente `app-list-options`, que cubran escenarios como seleccionar una opción, borrar la selección y validar cambios en la interfaz de usuario.

## Definición de Hecho:

- [ ] La interfaz de usuario desplegable se muestra con el resaltado correcto para la opción seleccionada.

- [ ] Se implementa la capacidad de seleccionar una opción y borrar la selección.

- [ ] Las pruebas unitarias para el componente `app-list-options` pasan exitosamente y cubren varios escenarios.
