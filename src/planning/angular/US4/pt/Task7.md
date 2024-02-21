# 4.7 Melhora do método `getMovies` para suporte a filtragem e ordenação

## Descrição:

Melhorar o método `getMovies` para suportar a filtragem por gênero e a ordenação por diferentes critérios ao receber um objeto como parâmetro. A nova estrutura do parâmetro deve ser `{ filters: { page: number, genreId: number | null, sortBy: string | null } }`.

## Critérios de aceitação:

- [ ] Estrutura de parâmetros:

     - [ ] Modificar o parâmetro do método `getMovies` para que, além da propriedade `page`, tenha as seguintes propriedades:

         - [ ] `genreId`: uma propriedade do tipo _number_ ou _null_ que representa o ID do gênero pelo qual deseja-se filtrar os filmes. Se for _null_, nenhum filtro de gênero é aplicado.

         - [ ] `sortBy`: uma propriedade do tipo _string_ ou _null_ que representa o critério de ordenação. Se for _null_, nenhuma ordenação é aplicada.

- [ ] Modificação da solicitação da API:

     - [ ] Ajustar a solicitação da API dentro do método `getMovies` para incluir filtragem e ordenação conforme os parâmetros fornecidos.

- [ ] Valores padrão:

     - [ ] Implementar valores padrão para `genreId` e `sortBy` caso não sejam fornecidos. Por exemplo, definir valores padrão como _null_ para ambos.

- [ ] Testes unitários:

     - [ ] Escrever testes unitários para o método `getMovies` para garantir que lida corretamente com cenários de filtragem e ordenação.

     - [ ] Incluir casos de teste para fornecer diferentes números de página, filtros de gênero e ordenação.

## Definição de Pronto:

- [ ] O método `getMovies` foi aprimorado para aceitar um parâmetro de objeto com a estrutura `{ filters: { page: number, genreId: number | null, sortBy: string | null } }`.

- [ ] A solicitação da API dentro da função foi ajustada para incluir filtragem e ordenação conforme os parâmetros fornecidos.

- [ ] Valores padrão foram implementados para `genreId` e `sortBy`.

- [ ] Os testes unitários para o método `getMovies` modificado passam com sucesso e cobrem vários cenários de filtragem e ordenação.
