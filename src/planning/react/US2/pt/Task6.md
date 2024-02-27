# 2.6 Desenvolver o Componente React `MovieList`

## Descrição:

Criar um componente React chamado `MovieList` para mostrar o catálogo de filmes em formato de tabela. O componente deve receber um array de modelos de negócio _Movie_ como _prop_ e mostrar cada filme usando o componente `MovieCard`. Certifique-se de que o erro _"Warning: Each child in a list should have a unique "key" prop"_ seja evitado.

## Critérios de Aceitação:

- [ ] Criação do componente:

    - [ ] Criar um arquivo chamado `MovieList.tsx` dentro da pasta _components_.

- [ ] Props:

    - [ ] Definir uma prop chamada `movies` do tipo `Movie[]` que represente um array de modelos de negócio de filmes.

- [ ] Renderização de Cartões de Filme:

    - [ ] Utilizar o componente `MovieCard` para renderizar cada filme da prop `movies`.

    - [ ] Passar os dados relevantes da película como props a cada instância de `MovieCard`.

- [ ] Chave única:

    - [ ] Implementar uma chave única para cada componente `MovieCard` para evitar o erro _"Warning: Cada filho de uma lista deve ter uma "chave" única"_.

    - [ ] Assegurar que a chave se deriva de propriedades únicas de cada filme.

- [ ] Testes unitários:

    - [ ] Escrever testes unitários para o componente `MovieList` para garantir que se renderiza corretamente com várias listas de filmes.

    - [ ] Incluir testes para diferentes cenários, como listas de filmes vazias ou diferentes tipos de informação de filmes.

## Definição de Pronto:

- [ ] O arquivo `MovieList.tsx` se cria dentro da pasta _components_.

- [ ] O componente recebe um _prop_ chamado `movies` do tipo `Movie[]`.

- O componente renderiza cada filme utilizando o componente `MovieCard`.

- [ ] Cada instância de `MovieCard` tem uma chave única para evitar o aviso _"Warning: Each child in a list should have a unique "key" prop"_ error.

- [ ] Os testes unitários do componente `MovieList` se superaram com sucesso, cobrindo vários cenários.
