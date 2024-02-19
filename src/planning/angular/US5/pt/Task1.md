# Desenvolver a função `getMovieDetail`

## Descrição:

Desenvolver um método `getMovieDetail` no serviço `APIService` para recuperar informações de um único filme por identificação a partir do endpoint `/movie/{movie_id}` do The Movie DB. O método deve receber um parâmetro _id_ e retornar um _Observable_ que retorna um modelo de negócio _Movie_. Deve-se utilizar a função `formatMovie` para transformar a API no modelo de negócio _Movie_.

## Critérios de aceitação:

- [ ] Assinatura da função:

     - [ ] Criar um método chamado `getMovieDetail` dentro do serviço `APIService`.

- [ ] Parâmetro:

     - [ ] O método deve receber um parâmetro chamado `id` que represente a identificação do filme a ser buscado.

- [ ] Tipo de retorno:

     - [ ] A função deve retornar um _Observable_ que retorne um modelo de negócio _Movie_.

- [ ] Requisição da API:

     - [ ] Utilizar o cliente HTTP do Angular para realizar uma solicitação GET para `/movie/{movie_id}` do The Movie DB.

     - [ ] Incluir o token API nos cabeçalhos da solicitação, obtido do arquivo de configuração do ambiente.

- [ ] Transformação de dados:

     - [ ] Utilizar a função `formatMovie` para transformar os dados do filme da API no modelo de negócio _Movie_.

- [ ] Teste unitário:

     - [ ] Escrever testes unitários para o método `getMovieDetail` para garantir a solicitação da API, o tratamento de parâmetros e a transformação de dados corretos.

## Definição de Pronto:

- [ ] O método `getMovieDetail` está implementado no arquivo de serviço apropriado.

- [ ] O método recebe um parâmetro chamado _id_ que representa a identificação do filme e retorna um _Observable_ que devolve um modelo de negócio _Movie_.

- [ ] O método realiza com sucesso uma solicitação GET para o endpoint `/movie/{movie_id}` do The Movie DB com o token API.

- [ ] As respostas da API são tratadas adequadamente, incluindo cenários de erro.

- [ ] A função `formatMovie` é utilizada para transformar os dados do filme da API no modelo de negócio _Movie_.

- [ ] Os testes unitários para a função `getMovieDetail` foram aprovados com sucesso e cobrem diversos cenários.
