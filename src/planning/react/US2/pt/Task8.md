# 2.8 Desenvolver Testes de Integração para o Componente `Home`

## Descrição

Escrever testes de integração para garantir que o componente `Home` mostra os dados corretamente usando respostas de API simuladas. Os testes devem cobrir cenários como a visualização correta de filmes com base em dados simulados e o manejo adequado de erros de API.  

### Critérios de Aceitação

- [ ] Respostas de API simuladas:

    - [ ] Utilizar uma biblioteca de testes como Jest para simular as respostas da API para o serviço `getMovies` utilizado no componente `Home`.

- [ ] Visualização correta dos dados:

    - [ ] Escrever um teste para garantir que o componente `Home` mostra corretamente os filmes com base em dados simulados.

    - [ ] Utilizar dados simulados que representem vários cenários, como diferentes filmes com diversas propriedades.

- [ ] Visualização do carregador:

    - [ ] Comprovar que se mostra um carregador (por exemplo, um spinner) quando se obtêm os dados (`isLoading` é _true_).

- [ ] Tratamento de erros:

    - [ ] Escrever um teste para simular um erro de API durante a obtenção de dados.

    - [ ] Assegurar que o componente `Home` gerencia adequadamente o erro mostrando uma mensagem de erro ou uma notificação.

- [ ] Limpeza e isolamento:

    - [ ] Assegurar que cada caso de teste tem uma limpeza e isolamento adequados para evitar interferências entre os testes.  

    - [ ] Utilizar ferramentas de teste para restaurar o estado entre os testes.

## Definição de Pronto

- [ ] Os testes de integração para o componente `Home` são desenvolvidos usando uma biblioteca de testes.

- [ ] Se utilizam respostas de API simuladas para simular vários cenários, incluindo a visualização correta de dados e erros de API.

- [ ] Os testes se superam com sucesso, validando que o componente `Home` mostra os dados corretamente e gerencia os erros da API de maneira adequada.

- [ ] Existem mecanismos de limpeza e isolamento para manter a confiabilidade dos testes.  
