# 2.7 Desarrollar componente React `Home` con integración `MovieList`

## Descripción

Crear un componente React llamado `Home` para integrar el componente `MovieList` con el servicio `getMovies`. Mostrar este componente en la ruta "/". Mostrar un cargador mientras se obtienen datos de la API y mostrar una notificación en caso de error.

## Criterios de aceptación:

- [ ] Creación del componente:

    - [ ] Crear un archivo llamado `Home.tsx` dentro de la carpeta _components_.

- [ ] Integración con `MovieList`:

    - [ ] Integrar el componente `MovieList` dentro del componente `Home`.

    - [ ] Utilizar el servicio `getMovies` para obtener los datos de las películas a mostrar.

- [ ] Visualización del cargador:

    - [ ] Mostrar un cargador (por ejemplo, un spinner o un mensaje de carga) mientras se obtienen datos de la API.

    - [ ] Asegúrese de que el cargador se muestra al usuario durante el proceso de obtención de datos.

- [ ] Notificación de errores:

    - [ ] Implemente un mecanismo para mostrar una notificación en caso de error durante la obtención de datos de la API.

    - [ ] La notificación debe transmitir un mensaje de error claro al usuario.

- [ ] Enrutamiento:

    - [ ] Asegúrese de que el componente `Home` se muestra cuando el usuario navega a la ruta "/".

    - [ ] Utilice un React Router o el mecanismo de enrutamiento de su elección para manejar la ruta.

## Definición de Hecho:

- [ ] El archivo `Home.tsx` se crea dentro de la carpeta _components_.

- [ ] El componente `MovieList` se integra correctamente dentro del componente `Home`.

- [ ] Se muestra un cargador al usuario mientras se obtienen datos de la API.

- [ ] Se muestra una notificación en caso de error al obtener datos de la API.

- [ ] El componente `Home` se muestra cuando el usuario navega a la ruta "/".

## Consejo:

Considere definir los siguientes estados usando el hook _useState_:

```js
const [isLoading, setIsLoading] = useState(false);

const [movies, setMovies] = useState<Movie[]>([]);

const [error, setError] = useState(false);
```

Utilice estos estados para gestionar el estado de carga, almacenar los datos de las películas obtenidas y gestionar los errores durante el proceso de obtención de datos. Actualice estos estados en función de las diferentes etapas del ciclo de vida del componente, como cuando se inicia la obtención de datos, cuando los datos se obtienen correctamente o cuando se produce un error. El hook _useEffect_ puede ser útil para gestionar efectos secundarios, como peticiones API, en componentes funcionales.
