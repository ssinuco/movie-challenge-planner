# 2.1 Criar um Token de API para The Movie DB

## Descrição

Criar um token de API para [_The Movie Database_](https://developer.themoviedb.org/docs) e armazená-lo como um valor para a chave `VITE_TOKEN_API` em um arquivo `.env` na raiz do projeto.

Esta tarefa garante uma gestão segura e organizada do token de API, evitando sua exposição acidental no Github e fazendo com que seja facilmente acessível dentro da aplicação para as requisições à API do The Movie DB.

## Critérios de Aceitação:

- [ ] Obtenção do Token da API:

    - [ ] Criar uma conta na plataforma The Movie DB para obter acesso à API.

    - [ ] Acessar o portal de desenvolvedores do The Movie DB e gerar uma chave/token de API.

    - [ ] Verificar se a chave/token de API fornece acesso aos endpoints necessários, como `/discover/movie`.

- [ ] Variável de ambiente:

    - [ ] Criar um arquivo `_.env` na raiz do projeto.

    - [ ] Adicionar um par chave-valor `VITE_TOKEN_API=<Seu-Token-API>` no arquivo `_.env`, substituindo `<Seu-Token-API>` pelo token real da API obtido.

- [ ] Manipulação segura:

    - [ ] Assegurar que o arquivo `_.env` seja adicionado ao arquivo `_.gitignore` do projeto para evitar a exposição acidental de informações sensíveis.

## Definição de Pronto:

- [ ] Uma conta na plataforma The Movie DB é criada.

- [ ] Uma chave/token de API é gerada e verificada para acessar a API do The Movie DB.

- [ ] O arquivo `_.env` é criado na raiz do projeto com a chave `VITE_TOKEN_API` e o token real da API.

- [ ] O arquivo `_.env` é adicionado ao arquivo `_.gitignore` do projeto.
