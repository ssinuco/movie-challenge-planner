# Melhore o método `getMovies` do serviço `APIService` para paginação

## Descrição:

Melhore o método `getMovies` do serviço `APIService` para suportar a paginação, recebendo um objeto como parâmetro com a estrutura `{ filters: { page: number } }`. Isso permite obter dados da API com parâmetros de paginação.

Agora, a função deve retornar um _Observer_ que resolve um objeto com a estrutura `{metaData: { pagination:{currentPage:number, totalPages:number}}, movies: Movie[]}`. Isso é necessário para incluir na saída não apenas o array de filmes, mas também a página atual em exibição e o número total de páginas disponíveis.

## Critérios de Aceitação:

- [ ] Estrutura de parâmetros:

    - [ ] Modificar o método `getMovies` para aceitar um objeto como parâmetro.

    - [ ] O parâmetro deve ter uma propriedade chamada `filters` com a estrutura `{ filters: { page: number } }`.

- [ ] Modificação da requisição API:

    - [ ] Ajustar a requisição API dentro do método `getMovies` para incluir o parâmetro `page`.

- [ ] Paginação padrão:
    
    - [ ] Implementar um valor padrão para o parâmetro de `page`, caso não seja fornecido. Por exemplo, definir um valor padrão de 1.

- [ ] Modificação da estrutura de retorno:

    - [ ] Modificar o retorno do método `getMovies` para um _Observable_ que resolve um objeto com a estrutura `{metaData: { pagination:{currentPage:number, totalPages:number}}, movies: Movie[]}`.

- [ ] Testes unitários:
    
    - [ ] Escrever testes unitários para o método modificado `getMovies` para garantir que ele manipula a paginação corretamente.
    
    - [ ] Incluir casos de teste para fornecer diferentes números de página e testar o comportamento de paginação padrão.

## Definição de Pronto:

- [ ] O método `getMovies` foi modificado para aceitar um objeto como parâmetro, com a estrutura `{ filters: { page: number } }`.

- [ ] A solicitação da API dentro do método foi ajustada para incluir o parâmetro `page`

- [ ] Um valor padrão está implementado para o parâmetro `page`.

- [ ] O retorno do método `getMovies` foi modificado para um _Observable_ que resolve um objeto com a estrutura `{metaData: { pagination:{currentPage:number, totalPages:number}}, movies: Movie[]}`.

- [ ] Os testes unitários do método `getMovies` modificado foram aprovados com sucesso, cobrindo vários cenários de paginação.

