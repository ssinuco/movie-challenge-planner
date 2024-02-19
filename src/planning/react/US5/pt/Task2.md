# 5.2 Criar componente React `MovieDetail`

## Descrição:

Criar um componente React chamado `MovieDetail` para exibir informações detalhadas sobre um único filme. Exiba este componente na rota `/movie/:id` e implemente funções para mostrar um carregador enquanto obtém dados da API e exibir uma notificação em caso de erro. Extraia a identificação do filme da URL e use-a no serviço `getMovieDetail`. Forneça uma maneira para que o usuário retorne à página anterior a partir do componente `MovieDetail`.

## Critérios de aceitação:

- [ ] Criação de componentes:

    - [ ] Criar um componente React `MovieDetail` dentro da pasta _src/components_.

- [ ] Informações na tela:

     - [ ] Exibir informações relevantes sobre o filme, incluindo, entre outros: pôster, título original, sinopse, classificação e ano de lançamento.

- [ ] Integração de serviços:

     - [ ] Utilizar o serviço `getMovieDetail` para obter informações detalhadas sobre o filme com base em sua identificação.

     - [ ] Extrair a identificação do filme da URL (parâmetro de rota).

- [ ] Tela de carregamento:

     - [ ] Exibir um indicador de carregamento (por exemplo, um spinner) enquanto os dados da API estão sendo obtidos.

- [ ] Tratamento de erros:

     - [ ] Implementar tratamento de erros para exibir uma notificação em caso de erro durante a obtenção de dados.

- [ ] Navegação de volta:

     - [ ] Fornecer uma forma clara e intuitiva para que o usuário retorne à página anterior.

- [ ] Configuração de rota:

     - [ ] Configurar a rota para o componente `MovieDetail` para ser `/movie/:id`, onde `:id` é o id do filme.

- [ ] Testes unitários:

     - [ ] Escrever testes unitários para o componente `MovieDetail` para garantir a integração correta com `MovieDetailCard`, a obtenção adequada de dados e o tratamento de erros.

## Definição de Pronto:

- [ ] O componente `MovieDetail` foi criado dentro da pasta _src/componets_.

- [ ] O serviço `getMovieDetail` foi utilizado para obter informações detalhadas sobre o filme com base em sua identificação.

- [ ] A identificação do filme é extraída da URL (parâmetro de rota) e utilizada na chamada do serviço.

- [ ] Um indicador de carregamento é exibido enquanto os dados da API estão sendo obtidos.

- [ ] O tratamento de erros foi implementado para exibir uma notificação em caso de erro durante a obtenção de dados.

- [ ] A rota para o componente `MovieDetail` está configurada como `/movie/:id`.

- [ ] Os testes unitários para o componente `MovieDetail` passam com sucesso e cobrem vários cenários.
