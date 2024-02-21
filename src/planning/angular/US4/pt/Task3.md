# 4.3 Melhorar `formatMovie` e `getMovies` para suportar gêneros

## Descrição

Modificar a função `formatMovie` para aprimorar o modelo de negócio `Movie` definindo-se uma chave `genres` adicional. Esta chave deve ser um array de _strings_ que contenham os nomes dos gêneros de filmes com base na chave `genre_ids`. A função `formatMovie` deve receber, como parâmetro, o _Map_ do JavaScript gerado pela função `formatGenresToMap` e usá-lo para transformar a chave `genre_ids` em um array de _strings_.

Modificar o método `getMovies` para receber como parâmetro o _Map_ do JavaScript gerado pela função `formatGenresToMap` e usá-lo na chamada de `formatMovie`.

## Critérios de aceitação

- [ ] Modificar o modelo de negócio `Movie` definindo-se uma chave adicional chamada `genres`. A chave `genres` deve ser um array de _strings_.

- [ ] Função `formatMovie`

    - [ ] Modificar a função `formatMovie` existente para aceitar um parâmetro adicional, um _Map_ do JavaScript gerado por `formatGenresToMap`.

    - [ ] A função `formatMovie` deve usar o novo parâmetro para substituir o ID do gênero na chave `genre_ids` pelo seu nome de gênero correspondente.

    - [ ] A função `formatMovie` deve adicionar uma nova chave `genres` ao resultado para conter um array de nomes de gêneros.
    
    Por exemplo, se a função `formatMovie` for chamada da seguinte maneira:

    ```js
        formatMovie(
            {
                id: 123,
                title: 'Filme Exemplo',
                genre_ids: [28, 35],
                // outros dados do filme...
            },
            new Map([
                [28, 'Ação'],
                [35, 'Comédia'],
                // outros dados de gênero...
            ])
        );
    ```

    Deveria retornar o seguinte resultado:

    ```js
        {
            id: 123,
            title: 'Filme Exemplo',
            genres: ['Ação', 'Comédia'],
            // outros dados aprimorados do filme...
        }
    ```

    Observe que na saída foi adicionada uma chave `genres` com os nomes dos gêneros correspondentes aos IDs em `genre_ids`.

- [ ] Método `getMovies`

    - [ ] Modificar o método `getMovies` existente para aceitar um parâmetro adicional, um _Map_ do JavaScript gerado por `formatGenresToMap`.

    - [ ] Usar o novo parâmetro ao chamar a função `formatMovie`.

- [ ] Testes unitários:

     - [ ] Modificar os testes unitários existentes para a função `formatMovie` em `transformers.spec.ts`.

     - [ ] Modificar os testes unitários existentes para a função `getMovies` em `api.service.spec.ts`.

     - [ ] Testar a função com vários tipos de dados de filmes da API para garantir uma transformação correta.

     - [ ] Incluir testes para casos extremos e possíveis erros.

## Definição de Pronto:

- [ ] A função `formatMovie` é modificada para aceitar um parâmetro adicional, um _Map_ do JavaScript gerado por `formatGenresToMap`.

- [ ] O modelo de negócio de filmes é aprimorado ao adicionar uma chave adicional chamada `genres`.

- [ ] A chave `genres` é um array de _strings_ que contêm os nomes dos gêneros de filmes de acordo com a chave `genre_ids`.

- [ ] A função `formatMovie` modificada gera com sucesso o modelo de negócio de _Movie_.

- [ ] Os testes unitários para a função `formatMovie` passam com sucesso e cobrem vários cenários.

- [ ] O método `getMovies` é modificado para aceitar um parâmetro adicional, um _Map_ do JavaScript gerado por `formatGenresToMap`.

- [ ] A função `formatGenresToMap` é chamada em `getMovies` com o novo parâmetro.

- [ ] Os testes unitários para o método `getMovies` passam com sucesso e cobrem vários cenários.
