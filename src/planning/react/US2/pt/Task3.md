# 2.3 Implementar função de transformação de dados de filmes

## Descrição

Crie um arquivo `transformers.ts` na pasta `src/utils`. Crie uma função chamada `formatMovie` dentro desse arquivo. Esta função será responsável pela transformação dos dados do filme da API para o modelo de negócios _Movie_.

A criação de um arquivo dedicado para os transformadores assegura uma abordagem modular e organizada para a transformação de dados dentro do projeto.

## Critérios de Aceitação:

- [ ] Função `formatMovie`:

    - [ ] Criar um arquivo chamado `transformers.ts` dentro da pasta _utils_.

    - [ ] Implementar uma função chamada `formatMovie` dentro do arquivo `transformers.ts`.

    - [ ] A função deve receber um objeto de dados de filme da API como parâmetro e retornar um objeto do modelo de negócios _Movie_.

    - [ ] Atribuir as propriedades relevantes dos dados da API às propriedades correspondentes no modelo de negócios _Movie_.

    - [ ] Lidar com qualquer conversão ou transformação de dados necessária para garantir a coerência.

- [ ] Testes unitários:

    - [ ] Escrever testes unitários para a função `formatMovie` no arquivo `transformers.spec.ts` na pasta `src/utils`.

    - [ ] Testar a função com vários tipos de dados de filme da API para garantir uma transformação correta.

    - [ ] Incluir testes para casos extremos e potenciais erros.

## Definição de Pronto:

- [ ] O arquivo `transformers.ts` está criado dentro da pasta _utils_.

- [ ] A função `formatMovie` está implementada e transforma com sucesso os dados do filme da API para o modelo de negócios _Movie_.

- [ ] Os testes unitários da função `formatMovie` foram bem-sucedidos, cobrindo vários cenários.
