# Implementar a função de transformação de gênero de filme para uma lista de opções

## Descrição:

Criar uma função chamada `formatGenresToOptions` no arquivo `src/utils/transformers.ts` para transformar um array de modelos de dados de gênero da API em um array de objetos como `[{value: string, label: string}]`.

## Critérios de aceitação:

- [ ] Assinatura da função:

     - [ ] Criar uma função chamada `formatGenresToOptions` em `src/utils/transformers.ts`.

- [ ] Parâmetros:

     - [ ] A função deve aceitar um array de modelos de dados de gênero da API como entrada.

- [ ] Tipo de retorno:

     - [ ] A função deve retornar um array de objetos como `[{value: string, label: string}]`. Cada objeto resultante tem uma propriedade `value` correspondente ao `id` do gênero convertido em _string_ e uma propriedade `label` correspondente ao `name` do gênero.

     - [ ] Manipular qualquer conversão ou transformação de dados necessária para garantir a coerência.

    Por exemplo, dado o seguinte array de modelos de dados de gênero da API:

        ```js
        [
            { id: 28, name: 'Ação' },
            { id: 35, name: 'Comédia' },
            { id: 18, name: 'Drama' },
        ]
        ```

     A função deveria retornar um array:

        ```js
        [
            { value: '28', label: 'Ação' },
            { value: '35', label: 'Comédia' },
            { value: '18', label: 'Drama' },
        ]
        ```

- [ ] Tratamento de entradas vazias:

     - [ ] Garantir que a função lide corretamente com o caso em que o array de entrada está vazio, retornando um array vazio.

## Definição de Pronto:

- [ ] A função `formatGenresToOptions` é criada em `src/utils/transformers.ts`

- [ ] A função aceita como entrada um array de modelos de dados de gênero da API.

- [ ] A função retorna um array de objetos como `[{value: string, label: string}]`.

- [ ] A função trata o caso em que o array de entrada está vazio, retornando um array vazio.
