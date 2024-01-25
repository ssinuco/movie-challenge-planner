# Integrar el componente `Home` con el componente `MovieDetail`

## Descripción:

Integre el componente `Home` con el componente `MovieDetail` para que cuando un usuario haga clic en una película, la aplicación lo redirija a la URL `/movie/:id` para mostrar información detallada sobre la película seleccionada. Utilice el hook de React Router `useNavigate` para lograr esto. Configure correctamente el accesorio `onClick` del componente `MovieCard` para la navegación.

Esta tarea garantiza la integración perfecta del componente "Inicio" con el componente "MovieDetail", lo que permite a los usuarios navegar a información detallada sobre una película seleccionada cuando se hace clic en ella. El uso de `useNavigate` y la configuración adecuada del accesorio `onClick` facilitan una experiencia de usuario fluida.

## Criterios de aceptación:

- [ ] Configuración de navegación:

     - [] Utilice el hook de React Router `useNavigate` en el componente `Home` para habilitar la navegación.

- [] Configuración de la propiedad `onClick`:

     - [] Configure la propiedad `onClick` del componente `MovieCard` en el componente `Home` para activar la navegación a la URL `/movie/:id`.

- [ ] Examen de la unidad:

     - [] Escriba pruebas unitarias para el componente `Home` para garantizar que al hacer clic en una película se active la navegación correcta y se muestre el componente `MovieDetail`.

## Definición de Hecho:

- [] El hook `useNavigate` se utiliza en el componente `Home` para habilitar la navegación.

- [ ] El accesorio `onClick` del componente `MovieCard` en el componente `Home` está configurado para activar la navegación a la URL \"`/movie/:id`\".

- [ ] El componente `MovieDetail` está integrado en la ruta \"`/movie/:id`\" para mostrar información detallada sobre la película seleccionada.

- [ ] Las pruebas unitarias para el componente `Home` pasan con éxito y cubren varios escenarios.