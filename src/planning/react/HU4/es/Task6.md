# Desarrollar el componente de reacción `ListOptions`

## Descripción:

Cree un componente de React llamado "ListOptions" que permita al usuario seleccionar un elemento de una lista de "opciones" y borrar la selección.

Esta tarea garantiza la creación de un componente "ListOptions" reutilizable que permite a los usuarios seleccionar una opción de un menú desplegable y borrar la selección cuando sea necesario. El comportamiento del componente está diseñado para manejar las interacciones del usuario y proporcionar una experiencia de usuario perfecta.

## Criterios de aceptación:

- [ ] Creación de componentes:

     - [] Cree un archivo llamado `ListOptions.tsx` dentro de la carpeta de componentes.

- [ ] Accesorios: El componente debe recibir los siguientes accesorios:

     - [ ] `opciones`:

         - Tipo: Matriz de objetos {valor: cadena, etiqueta: cadena}

         - Descripción: una matriz de opciones donde cada opción es un objeto con propiedades de valor y etiqueta.

     - [ ] `onChange`:

         - Tipo: Función

         - Descripción: una función de devolución de llamada que se llamará al seleccionar una opción. Debería recibir la opción seleccionada como parámetro.

     - [ ] `Opción seleccionada`:

         - Tipo: Objeto {valor: cadena, etiqueta: cadena} o nulo

         - Descripción: Representa la opción actualmente seleccionada. Puede ser nulo si no se selecciona ninguna opción.

     - [] `onClear`:

         - Tipo: Función

         - Descripción: una función de devolución de llamada que se llamará cuando el usuario elimine la selección.

- [] UI desplegable:

     - [] Muestra una entrada desplegable/seleccionada que contiene las "opciones" proporcionadas.

     - [ ] Resalte la opción seleccionada en el menú desplegable.

- [ ] Selección de opciones:

     - [] Implementar la capacidad de seleccionar una opción del menú desplegable.

     - [] Llame a la devolución de llamada `onChange` con la opción seleccionada.

- [ ] Selección clara:

     - [ ] Incluye un botón o icono para borrar la selección actual.

     - [] Llame a la devolución de llamada `onClear` cuando el usuario haga clic para eliminar la selección.

- [ ] Examen de la unidad:

     - [] Escribir pruebas unitarias para el componente `ListOptions`, que cubran escenarios como seleccionar una opción, borrar la selección y validar cambios en la interfaz de usuario.

## Definición de Hecho:

- [ ] El archivo `ListOptions.tsx` se crea dentro de la carpeta de componentes.

- [] La interfaz de usuario desplegable se muestra con el resaltado correcto para la opción seleccionada.

- [] Se implementa la capacidad de seleccionar una opción y borrar la selección.

- [ ] Las pruebas unitarias para el componente `ListOptions` pasan exitosamente y cubren varios escenarios.