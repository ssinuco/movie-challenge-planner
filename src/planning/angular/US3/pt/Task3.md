# Melhorar o componente `app-home` para suporte de paginação

## Descrição:

Melhore o componente `app-home` para suportar a paginação utilizando o componente `app-pagination`. Integre o componente `app-pagination` usando o _Output_ `onSelectPage`. Sempre que o usuário clicar em um botão de página, atualize o valor do _query param_ `currentPage` da URL para a nova página. Além disso, chame o método `getMovies` sempre que alterar o parâmetro de consulta `currentPage` inscrevendo-se no _Observable_ `queryParams` do serviço `ActivatedRoute`.

## Critérios de aceitação:

- [] Integração de componentes de paginação:

     - [] Integre o componente `app-pagination` dentro do componente `app-home` usando o _Output_ `onSelectPage`.

- [] _Observable_ `queryParams`:

     - [] Use o _Observable_ `queryParams` do serviço `ActivatedRoute` para extrair e rastrear os _query params_ da URL.

- [ ] Manipulação de cliques nos botões de página:

     - [] Quando o usuário clicar em um botão de página, altere o _query param_ `currentPage` da URL para a nova página.

     - [] Chame o método `getMovies` sempre que o parâmetro de consulta `currentPage` mudar, inscrevendo-se no _Observable_ `queryParams` do serviço `ActivatedRoute`.

- [ ] Testes unitários:

     - [] Escreva testes unitários para o componente `app-home` aprimorado, abrangendo cenários como cliques em botões de página, alterações nos parâmetros de URL e chamadas bem-sucedidas ao serviço.

## Definição de Pronto:

- [] O componente `app-pagination` está integrado dentro do componente `app-home` usando o _Output_ `onSelectPage`.

- [] O _Observable_ `queryParams` do serviço `ActivatedRoute` foi utilizado para extrair e rastrear os parâmetros de consulta da URL.

- [] Os cliques no botão de página alteram o _query param_ `currentPage` da URL para a nova página e acionam chamadas ao serviço `getMovies`.

- [ ] Os testes unitários para o componente `app-home` aprimorado foram bem-sucedidos e cobrem vários cenários de paginação.
