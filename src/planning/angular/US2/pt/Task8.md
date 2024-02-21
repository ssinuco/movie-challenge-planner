# 2.8 Desenvolver Testes de Integração para o Componente `app-home`

## Descrição

Escrever testes de integração para garantir que o componente `app-home` exiba os dados corretamente usando respostas simuladas da API. Os testes devem abranger cenários como a visualização correta de filmes com base em dados simulados e o tratamento apropriado de erros da API.

## Critérios de Aceitação

- [ ] Respostas simuladas da API:

    - [ ] Simular as respostas da API para o método `getMovies` do serviço `APIService` utilizado no componente `app-home`.

- [ ] Visualização correta dos dados:

    - [ ] Escrever um teste para garantir que o componente `app-home` exibe corretamente os filmes com base em dados simulados.

    - [ ] Utilizar dados simulados que representem vários cenários, como diferentes filmes com diversas propriedades.

- [ ] Visualização do indicador de carregamento:

    - [ ] Verificar se um indicador de carregamento (por exemplo, um spinner) é exibido enquanto os dados são obtidos.  

- [ ] Tratamento de erros:

    - [ ] Escrever um teste para simular um erro da API durante a obtenção de dados.

    - [ ] Garantir que o componente `app-home` lida adequadamente com o erro, mostrando uma mensagem de erro ou uma notificação.

- [ ] Limpeza e isolamento:

    - [ ] Garantir que cada caso de teste tenha limpeza e isolamento adequados para evitar interferências entre os testes.

    - [ ] Utilizar utilidades de teste para restaurar o estado entre os testes.

## Definição de Pronto

- [ ] Os testes de integração para o componente `app-home` foram desenvolvidos usando uma biblioteca de testes.

- [ ] Foram utilizadas respostas simuladas da API para simular vários cenários, incluindo a visualização correta de dados e erros da API.

- [ ] Os testes foram bem-sucedidos, validando que o componente `app-home` exibe os dados corretamente e trata os erros da API de maneira adequada.

- [ ] Existem mecanismos de limpeza e isolamento para manter a confiabilidade dos testes.
