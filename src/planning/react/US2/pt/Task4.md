# 2.4 Implementar função de obtenção de dados de filmes

## Descrição:

Desenvolver uma função `getMovies` para obter dados de filmes do endpoint `/discover/movie` do _The Movie DB_. A função não deve receber nenhum parâmetro e deve retornar uma _Promise_ que resolva um array de objetos do tipo _Movie_. Além disso, utilize a função `formatMovie` para transformar os dados de filmes da API para o modelo de negócios _Movie_.

## Critérios de Aceitação:

- [ ] Confirmação do método:

    - [ ] Criar um método chamado `getMovies` dentro de um serviço `APIService` no diretório _src/services_.

- [ ] Parâmetros:

    - [ ] Garantir que o método `getMovies` não recebe parâmetros.

- [ ] Tipo de retorno

    - [ ] O método deve retornar uma _Promise_ que resolva um array de objetos de filme do modelo de negócios (`Promise<Movie[]>`).

- [ ] Requisição da API:

    - [ ] Utilizar fetch para realizar uma requisição GET para `/discover/movie` do The Movie DB.

    - [ ]  Incluir o token da API nos cabeçalhos da requisição, recuperado do carregador de configuração de ambiente.

- [ ] Transformação de dados:

    - [ ] Aplicar a função `formatMovie` para transformar os dados de filmes da API para o modelo de negócios dentro do método `getMovies`.

- [ ] Testes unitários:

    - [ ] Escrever testes unitários para o método `getMovies` do serviço `APIService`, incluindo casos de teste para uma requisição de API bem-sucedida, tratamento de erros e transformação correta de dados.

## Definição de Pronto:

- [ ] O método `getMovies` está implementado no arquivo de serviço apropriado.

- [ ] O método não recebe parâmetros e retorna uma _Promise_ que resolva um array de objetos Movie do modelo de negócios (`Promise<Movie[]>`).

- [ ] A função realiza corretamente uma requisição GET para `/discover/movie` do The Movie DB com o token da API.

- [ ] As respostas da API são tratadas corretamente, incluindo casos de erro.

- [ ] A função `formatMovie` é utilizada para transformar os dados de filmes da API para o modelo de negócios _Movie_.

- [ ] Os testes unitários do método `getMovies` foram bem-sucedidos, cobrindo vários cenários.
