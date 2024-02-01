# Desenvolver o componente Angular `app-list-options`

## Descrição:

Crie um componente Angular chamado `app-list-options` que permita ao usuário selecionar um elemento de uma lista de opções e limpar a seleção.

## Critérios de aceitação:

- [ ] Criação do componente:

     - [ ] Criar o componente Angular `app-list-options` dentro da pasta _src/layout_.

- [ ] Inputs:

     - [ ] Definir um _Input_ chamado `options` para armazenar as opções a serem listadas. O tipo deste input será um array de objetos como `[{value: string, label: string}]`.

     - [ ] Definir um _Input_ chamado `selectedOption` para armazenar a opção selecionada. O tipo deste input será um objeto como `{value: string, label: string}`. Pode ser _null_ se nenhuma opção for selecionada.

- [ ] Outputs:

     - [ ] Definir um _Output_ chamado `onChange` do tipo _EventEmitter<{value: string, label: string}>_ para emitir um evento quando o usuário selecionar uma opção.
     
     - [ ] Definir um _Output_ chamado `onClear` do tipo _EventEmitter_ para emitir um evento quando o usuário limpar a seleção.

- [ ] UI de seleção expansiva:

     - [ ] Exibir um [_<select>_](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select) para listar as opções fornecidas.

     - [ ] Destacar a opção escolhida no _<select>_.

- [ ] Seleção de opção:

     - [ ] Emitir o evento `onChange` quando o usuário selecionar uma opção no _<select>_.

- [ ] Limpar seleção:

     - [ ] Incluir um botão ou ícone para limpar a seleção atual.

     - [ ] Emitir o evento `onClear` quando o usuário clicar para limpar a seleção.

- [ ] Teste unitário:

     - [ ] Escrever testes unitários para o componente `app-list-options`, que cubram cenários como selecionar uma opção, limpar a seleção e validar alterações na interface do usuário.

## Definição de Pronto:

- [ ] A interface de seleção expansível é exibida ao usuário com o destaque correto para a opção selecionada.

- [ ] Foram implementadas a capacidade de selecionar uma opção e limpar a seleção.

- [ ] Os testes unitários para o componente `app-list-options` passam com sucesso e cobrem vários cenários.
