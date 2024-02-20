# Implementar método para obtenção de gêneros de filmes

## Descrição:

Implementar um método chamado `getMovieGenres` no serviço `APIService` para obter uma lista de gêneros de filmes a partir do endpoint `/genre/movie/list`. O método `getMovieGenres` não deve receber nenhum parâmetro e deve retornar um _Observable_ que retorne um array de objetos como `[{id: number, name: string}]`.

## Critérios de aceitação:

- [ ] Implementar um método chamado `getMovieGenres` dentro do serviço `APIService`.

- [ ] O método não deve receber nenhum parâmetro.

- [ ] O método deve fazer uma solicitação API para recuperar os gêneros de filmes do endpoint `/genre/movie/list`.

- [ ] O método deve retornar um _Observable_ que retorne um array de objetos como `[{id: number, name: string}]`.

- [ ] Escrever testes unitários para o método `getMovieGenres`, incluindo casos de teste para uma solicitação API bem-sucedida e tratamento de erros.

## Definição de Pronto:

- [ ] O método `getMovieGenres` está implementado e reside dentro do arquivo de serviço apropriado.

- [ ] O método realiza uma solicitação API para recuperar dados do endpoint `/genre/movie/list`.

- [ ] As respostas da API são tratadas adequadamente, incluindo cenários de erro.
