# Desenvolver o Componente Angular `app-movie-list`

## Descrição: 

Criar um componente Angular chamado `app-movie-list` para exibir o catálogo de filmes em formato de grade (Grid Layout). O componente deve receber um array de modelos de negócios _Movie_ como _Input_ e mostrar cada filme usando o componente `app-movie-card`.

## Critérios de Aceitação:

- [ ] Criação do componente:

    - [ ] Criar um componente chamado `app-movie-list` dentro da pasta _src/layout_.

- [ ] _Inputs_:

    - [ ] Definir um _Input_ chamado `movies` do tipo `Movie[]` que represente um array de modelos de negócios _Movie_.

- [ ] Renderização de Cartões de Filme:

    - [ ] Utilizar o componente `app-movie-card` para renderizar cada filme do _Input_ `movies`.

- [ ] Testes unitários:

    - [ ] Escrever testes unitários para o componente `app-movie-list` para garantir que seja renderizado corretamente com várias listas de filmes.

    - [ ] Incluir testes para diferentes cenários, como listas de filmes vazias ou diferentes tipos de informações de filmes.

## Definição de Pronto:

- [ ] O componente app-movie-list foi criado dentro da pasta src/layout.

- [ ] O componente recebe um _Input_ chamado `movies` do tipo `Movie[]`.

- [ ] O componente renderiza cada filme utilizando o componente `app-movie-card`.

- [ ] Os testes unitários do componente `app-movie-list` são bem-sucedidos, cobrindo vários cenários.
