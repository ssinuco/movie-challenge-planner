# 3.2 Desenvolver o componente Angular de paginação

## Descrição:

Crie um componente Angular chamado `app-pagination` para exibir um controle de paginação. O componente deve receber o número da página atual e o número total de páginas como _Input_. O componente deve emitir um evento quando um usuário seleciona uma nova página.

## Critérios de aceitação:

- [ ] Criação do componente:

    - [ ] Criar um componente Angular `app-pagination` dentro da pasta _src/layout_.

- [ ] Inputs:

     - [ ] Definir um _Input_ chamado `currentPage` do tipo _number_ para o número da página atual.

     - [ ] Definir um _Input_ chamado `totalPages` do tipo _number_ para o número total de páginas.

- [ ] Output:

     - [ ] Definir um _Output_ chamado `onSelectPage` do tipo _EventEmitter<number>_ para emitir um evento quando o usuário clicar no botão de nova página.

- [ ] Interface de usuário da paginação:

     - [ ] Exibir um conjunto de botões de paginação de acordo com o número total de páginas.

     - [ ] Destacar o botão correspondente à página atual.

- [ ] Manipulação do evento de clique:

     - [ ] Implementar a manipulação de eventos de clique para os botões de paginação.

     - [ ] Emitir o evento `onSelectPage` com o número da página em que foi clicado.

- [ ] Desabilitar a navegação para páginas inválidas:

     - [ ] Desabilitar o botão "Anterior" se a página atual for a primeira página.

     - [ ] Desabilitar o botão "Próximo" se a página atual for a última página.

- [ ] Testes unitários:

     - [ ] Escrever testes unitários para o componente `app-pagination`, cobrindo cenários como clicar em botões de paginação e validar alterações na interface do usuário com base em diferentes Inputs.

## Definição de Pronto:

- [ ] O componente `app-pagination` foi criado dentro da pasta _src/layout_.

- [ ] A interface de usuário da paginação é exibida com o botão destacado corretamente de acordo com a página atual.

- [ ] A manipulação de eventos de clique é implementada para emitir o evento `onSelectPage` com o número da página em que foi clicado.

- [ ] Os botões de navegação são desabilitados adequadamente para a primeira e última página.

- [ ] Os testes unitários para o componente `app-pagination` foram bem-sucedidos e cobrem vários cenários.
