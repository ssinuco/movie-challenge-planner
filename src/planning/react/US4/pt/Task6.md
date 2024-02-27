# 4.6 Desenvolver o componente React `ListOptions`

## Descrição:

Criar um componente React chamado `ListOptions` que permita ao usuário selecionar um elemento de uma lista de opções e limpar a seleção.

## Critérios de aceitação:

- [ ] Criação do componente:

     - [ ] Criar o componente React `ListOptions` dentro da pasta _components_.

- [ ] Props:

     - [ ] Definir uma _prop_ chamada `options` para armazenar as opções a serem listadas. O tipo dessa _prop_ será um array de objetos como `[{value: string, label: string}]`.

     - [ ] Definir uma _prop_ chamada `selectedOption` para armazenar a opção escolhida. O tipo dessa _prop_ será um objeto como `{value: string, label: string}`. Pode ser _null_ se nenhuma opção for selecionada.

     - [ ] Definir uma _prop_ chamada `onChange` para ser executada quando o usuário selecionar uma opção.
     
     - [ ] Definir uma _prop_ chamada `onClear` para ser executada quando o usuário limpar a seleção.

- [ ] UI implementável:

     - [ ] Mostrar um [_<select>_](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select) para listar as opções fornecidas.

     - [ ] Destacar a opção selecionada no _<select>_.

- [ ] Seleção de opção:

     - [ ] Executar `onChange` quando o usuário selecionar uma opção do _<select>_.

- [ ] Limpar seleção:

     - [ ] Incluir um botão ou ícone para limpar a seleção atual.

     - [ ] Executar `onClear` quando o usuário clicar para remover a seleção.

- [ ] Teste unitário:

     - [ ] Escrever testes unitários para o componente `ListOptions`, que cubram cenários como selecionar uma opção, limpar a seleção e validar alterações na interface do usuário.

## Definição de Pronto:

- [ ] A interface de usuário desdobrável é exibida com o destaque correto para a opção selecionada.

- [ ] A capacidade de selecionar uma opção e limpar a seleção é implementada.

- [ ] Os testes unitários para o componente `ListOptions` passam com sucesso e cobrem vários cenários.
