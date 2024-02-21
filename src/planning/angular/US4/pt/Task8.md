# 4.8 Melhoria do componente `app-home` para integrar componentes `app-list-options`

## Descrição:

Melhorar o componente `app-home` para integrar duas instâncias do componente `app-list-options`. Uma instância mostrará uma lista de gêneros de filmes usando o método `getMovieGenres` e a função `formatGenresToOptions`. A outra instância mostrará uma lista estática das opções de ordenação do endpoint `/discover/movie`.

Cada vez que o usuário selecionar uma opção da lista de gêneros, o valor do parâmetro de consulta `generId` da URL deve ser atualizado com o `value` da opção selecionada.

Cada vez que o usuário selecionar uma opção da lista de ordenação, o valor do parâmetro de consulta `sortBy` da URL deve ser atualizado com o `value` da opção selecionada.

Cada vez que os parâmetros de consulta `generId` e `sortBy` mudarem, chame o método `getMovies` apropriadamente para filtrar e ordenar a lista de filmes.

## Critérios de aceitação:

- [ ] Integração com `app-list-options`:

     - [ ] Integrar duas instâncias do componente `app-list-options` dentro do componente `app-home`.

     - [ ] Uma instância deve mostrar uma lista de gêneros de filmes usando a função `getMovieGenres`, do serviço de API e a função `formatGenresToOptions`.

     - [ ] A outra instância deve mostrar uma lista estática das opções de ordenação do endpoint `/discover/movie`.

- [ ] Atualização de parâmetros de consulta:

     - [ ] Quando o usuário selecionar uma opção da lista de gêneros, atualizar o valor do parâmetro de consulta `generId` da URL com o `value` da opção selecionada.

     - [ ] Quando o usuário selecionar uma opção da lista de ordenação, atualizar o valor do parâmetro de consulta `sortBy` da URL com o `value` da opção selecionada.

- [ ] Chamadas de serviço:

     - [ ] Executar o método `getMovies` apropriadamente sempre que os parâmetros de consulta `generId` e `sortBy` mudarem, usando a inscrição no _Observable_ `queryParams` do serviço `ActivatedRoute`.

- [ ] Testes unitários:

     - [ ] Escrever testes unitários para o componente `app-home` atualizado, cobrindo cenários como seleção de gêneros, seleção de ordenação e validação de chamadas de serviço.

## Definição de Pronto:

- [ ] Duas instâncias do componente `app-list-options` estão integradas dentro do componente `app-home`.

- [ ] A seleção de uma opção da lista de gêneros altera o parâmetro de consulta `genreId` da URL e aciona chamadas para o serviço `getMovies` para incluir a opção de filtragem selecionada.

- [ ] A seleção de uma opção da lista de ordenação altera o parâmetro de consulta `sortBy` da URL e aciona chamadas para o serviço `getMovies` para incluir a opção de ordenação selecionada.

- [ ] Os testes unitários para o componente `app-home` atualizado são aprovados com sucesso e cobrem vários cenários.
