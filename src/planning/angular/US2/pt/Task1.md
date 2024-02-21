# 2.1 Criar um token de API para The Movie DB

## Descrição

Criar um token de API para [_The Movie Database_](https://developer.themoviedb.org/docs) e armazená-lo como um valor para a chave TOKEN_API nos arquivos _src/environments/environment.ts_ e _src/environments/environment.prod.ts_.

Esta tarefa garante uma gestão segura e organizada do token de API, evitando sua exposição acidental no Github e tornando-o facilmente acessível dentro da aplicação para as requisições API à The Movie DB.

## Critérios de aceitação:

- [ ] Recuperação do Token de API:

    - [ ] Criar uma conta na plataforma The Movie DB para obter acesso à API.

    - [ ] Acessar o portal para desenvolvedores do The Movie DB e gerar uma chave/token de API.

    - [ ] Verificar se a chave/token de API fornece acesso aos endpoints necessários, como /discover/movie.

- [ ] Variável de ambiente:

    - [ ] Adicionar um par chave-valor `TOKEN_API=<Seu-Token-API>` nos arquivos _src/environments/environment.ts_ e _src/environments/environment.prod.ts_, substituindo `<Seu-Token-API>` pelo token de API real obtido.

- [ ] Manipulação segura:

    - [ ] Certificar-se de que os arquivos _src/environments/environment.ts_ e _src/environments/environment.prod.ts_ estão adicionados ao arquivo .gitignore do projeto para evitar a exposição acidental de informações sensíveis.

## Definição de Pronto:

- [ ] Criação de conta na plataforma The Movie DB.

- [ ] A chave/token de API foi gerada e verificada para acessar a API do The Movie DB.

- [ ] Os arquivos src/environments/environment.ts e src/environments/environment.prod.ts foram criados na raiz do projeto com a chave TOKEN_API e o token real da API.

- [ ] Os arquivos _src/environments/environment.ts_ e _src/environments/environment.prod.ts_ foram adicionados ao arquivo .gitignore do projeto.

