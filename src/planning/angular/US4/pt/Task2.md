# Implementar a função de transformação de gênero de filme utilizando Map

## Descrição:

Criar uma função chamada `formatGenresToMap` no arquivo `src/utils/transformers.ts` para transformar uma matriz de modelos de dados de gênero da API em um [_Map_ do JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Map). O _Map_ deve ter chaves que representam os identificadores de gênero e valores que representam os nomes dos gêneros.

Essa transformação melhora a usabilidade dos dados de gênero ao fornecer um mapeamento de chaves e valores para buscas rápidas.

## Critérios de aceitação:

- [ ] Assinatura da função:

     - [ ] Criar uma função chamada `formatGenresToMap` em `src/utils/transformers.ts`.

- [ ] Parâmetros:

     - [ ] A função deve aceitar um array de modelos de dados de gênero da API como entrada.

- [ ] Tipo de retorno:

     - [ ] A função deve retornar um _Map_ do JavaScript.

     - [ ] As chaves do _Map_ devem ser os IDs dos gêneros.

     - [ ] Os valores do _Map_ devem ser os nomes dos gêneros.

     Por exemplo, dado o seguinte array de modelos de dados de gênero da API:

         ```js
         [
             { id: 28, name: 'Ação' },
             { id: 35, name: 'Comédia' },
             { id: 18, name: 'Drama' },
         ]
         ```

     A função deveria retornar um _Map_:

         ```js
         new Map([
             [28, 'Ação'],
             [35, 'Comédia'],
             [18, 'Drama'],
         ]);
         ```

- [ ] Tratamento de entradas vazias:

     - [ ] Garantir que a função lide corretamente com o caso em que o array de entrada está vazio, retornando um _Map_ vazio.

## Definição de Pronto:

- [ ] A função `formatGenresToMap` foi criada em `src/utils/transformers.ts`

- [ ] A função aceita como entrada um array de modelos de dados de gênero da API.

- [ ] A função retorna um _Map_ do JavaScript com as chaves sendo os IDs dos gêneros e os valores sendo os nomes dos gêneros.

- [ ] A função trata o caso em que o array de entrada está vazio, retornando um _Map_ vazio.
