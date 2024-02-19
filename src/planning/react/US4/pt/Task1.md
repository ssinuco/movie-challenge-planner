# 4.1 Implementar método para a obtenção de gêneros de filmes

## Descrição:

Implementar uma função `getMovieGenres` para obter uma lista de gêneros de filmes a partir do endpoint `/genre/movie/list` do _The Movie DB_. A função `getMovieGenres` não deve receber nenhum parâmetro e deve retornar uma _Promise_ que resolve um array de objetos como `[{id: number, name: string}]`.

## Critérios de aceitação:

- [ ] Implementar uma função chamada `getMovieGenres` dentro do arquivo de serviço apropriado (por exemplo, `movieService.ts`).

- [ ] A função não deve receber nenhum parâmetro.

- [ ] A função deve fazer uma solicitação API para recuperar os gêneros de filmes do endpoint `/genre/movie/list`.

- [ ] A função deve retornar uma _Promise_ que resolve um array de objetos como `[{id: number, name: string}]`.

- [ ] Escrever testes unitários para o método `getMovieGenres`, incluindo casos de teste para uma solicitação API bem-sucedida e tratamento de erros.

## Definição de Pronto:

- [ ] A função `getMovieGenres` está implementada e reside dentro do arquivo de serviço apropriado.

- [ ] A função faz uma solicitação API para recuperar dados do endpoint `/genre/movie/list`.

- [ ] As respostas da API são tratadas adequadamente, incluindo cenários de erro.
