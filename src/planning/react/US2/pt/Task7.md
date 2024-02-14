# 2.7 Desenvolver o Componente React `Home` com Integração `MovieList`

## Descrição:

Criar um componente React chamado `Home` para integrar o componente `MovieList` com o serviço `getMovies`. Mostrar este componente na rota "/". Mostrar um carregador enquanto se obtém dados da API e mostrar uma notificação em caso de erro.

## Critérios de Aceitação:

- [ ] Criação do componente:

    - [ ] Criar um arquivo chamado `Home.tsx` dentro da pasta _components_.

- [ ] Integração com `MovieList`:

    - [ ] Integrar o componente `MovieList` dentro do componente `Home`.

    - [ ] Utilizar o serviço `getMovies` para obter os dados dos filmes a serem mostrados.

- [ ] Visualização do carregador:

    - [ ] Mostrar um carregador (por exemplo, um spinner ou uma mensagem de carregamento) enquanto se obtém dados da API.

    - [ ] Assegurar que o carregador seja mostrado ao usuário durante o processo de obtenção de dados.

- [ ] Notificação de erros:

    - [ ] Implementar um mecanismo para mostrar uma notificação em caso de erro durante a obtenção de dados da API.

    - [ ] A notificação deve transmitir uma mensagem de erro clara ao usuário.

- [ ] Roteamento:

    - [ ] Assegurar que o componente `Home` seja mostrado quando o usuário navega para a rota "/".

    - [ ] Utilizar um React Router ou o mecanismo de roteamento de sua escolha para manejar a rota.

## Definição de Pronto:

- [ ] O arquivo `Home.tsx` é criado dentro da pasta _components_.  

- [ ] O componente `MovieList` se integra corretamente dentro do componente `Home`.

- [ ] Se mostra um carregador ao usuário enquanto se obtém dados da API.

- [ ] Se mostra uma notificação em caso de erro ao obter dados da API.

- [ ] O componente `Home` se mostra quando o usuário navega para a rota "/".

## Dica:

Considere definir os seguintes estados usando o hook _useState_:

```js
const [isLoading, setIsLoading] = useState(false);

const [movies, setMovies] = useState<Movie[]>([]);

const [error, setError] = useState(false);
```

Utilize estes estados para gerenciar o estado de carga, armazenar os dados dos filmes obtidos e gerenciar os erros durante o processo de obtenção de dados. Atualize estes estados em função das diferentes etapas do ciclo de vida do componente, como quando se inicia a obtenção de dados, quando os dados se obtém corretamente ou quando se produz um erro. O hook _useEffect_ pode ser útil para gerenciar efeitos secundários, como requisições à API, em componentes funcionais.

