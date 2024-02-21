# 2.7 Desenvolver o Componente Angular `app-home` com Integração `app-movie-list`

## Descrição

Criar um componente Angular chamado `app-home` para integrar o componente `app-movie-list` com o método `getMovies` do serviço `APIService`. Exibir esse componente na rota "/". Mostrar um indicador de carregamento enquanto os dados da API estão sendo obtidos e uma notificação em caso de erro.

## Critérios de Aceitação:

- [ ] Criação do componente:

    - [ ] Criar um componente `app-home` dentro da pasta _src/layout_.

- [ ] Integração com `app-movie-list`:

    - [ ] Integre o componente `app-movie-list` dentro do componente `app-home`.

    - [ ] Utilize o método `getMovies` do serviço `APIService` para obter os dados dos filmes a serem exibidos.

- [ ] Visualização do indicador de carregamento:

    - [ ] Exibir um indicador de carregamento (por exemplo, um spinner ou uma mensagem de carregamento) enquanto os dados da API estão sendo obtidos.

    - [ ] Garantir que o indicador de carregamento seja mostrado ao usuário durante o processo de obtenção de dados.

- [ ] Notificação de erros:

    - [ ] Implementar um mecanismo para mostrar uma notificação em caso de erro durante a obtenção de dados da API.

    - [ ] A notificação deve transmitir uma mensagem de erro clara ao usuário.

- [ ] Roteamento:

    - [ ] Garantir que o componente `app-home` seja exibido quando o usuário navega para a rota "/".

## Definição de Pronto:

- [ ] O componente `app-home` foi criado dentro da pasta _src/layout_.

- [ ] O componente `app-movie-list` foi integrado corretamente dentro do componente `app-home`.

- [ ] Um indicador de carregamento é mostrado ao usuário enquanto os dados da API estão sendo obtidos.

- [ ] Uma notificação é mostrada em caso de erro ao obter dados da API.

- [ ] O componente `app-home` é exibido quando o usuário navega para a rota "/".