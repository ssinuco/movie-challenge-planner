# 4.6 Desarrollar el componente de React `ListOptions`

## Descripción:

Crear un componente de React llamado `ListOptions` que permita al usuario seleccionar un elemento de una lista de opciones y borrar la selección.

## Criterios de aceptación:

- [ ] Creación del componente:

     - [ ] Crear el componente React `ListOptions` dentro de la carpeta _components_.

- [ ] Props:

     - [ ] Definir un _prop_ llamado `options` para almacenar las opciones a listar. El tipo de este _prop_ será un arreglo de objetos como `[{value: string, label: string}]`.

     - [ ] Definir un _prop_ llamado `selectedOption` para almacenar la opción elegida. El tipo de este _prop_ será un objeto como `{value: string, label: string}`. Puede ser _null_ si no se selecciona ninguna opción.

     - [ ] Definir un _prop_ llamado `onChange` para ser ejecutado cuando el usuario selecciones una opción.
     
     - [ ] Definir un _prop_ llamado `onClear` para ser ejecutado cuando el usuario borre la selección.

- [ ] UI desplegable:

     - [ ] Mostrar una [_<select>_](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select) para listar opciones proporcionadas.

     - [ ] Resaltar la opción seleccionada en el _<select>_.

- [ ] Selección de opción:

     - [ ] Ejecutar `onChange` cuando el usuario seleccione una opcion del _<select>_.

- [ ] Borrar selección:

     - [ ] Incluir un botón o icono para borrar la selección actual.

     - [ ] Ejecutar `onClear` cuando el usuario haga clic para eliminar la selección.

- [ ] Prueba unitaria:

     - [ ] Escribir pruebas unitarias para el componente `ListOptions`, que cubran escenarios como seleccionar una opción, borrar la selección y validar cambios en la interfaz de usuario.

## Definición de Hecho:

- [ ] La interfaz de usuario desplegable se muestra con el resaltado correcto para la opción seleccionada.

- [ ] Se implementa la capacidad de seleccionar una opción y borrar la selección.

- [ ] Las pruebas unitarias para el componente `ListOptions` pasan exitosamente y cubren varios escenarios.
