# TrybeSmith

Este é um projeto backend em Node.js utilizando TypeScript como linguagem principal, Sequelize como ORM para interação com um banco de dados MySQL, testes realizados com Chai e Mocha, criptografia implementada com Bcrypt e autenticação de tokens JWT integrada através do Express.

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas antes de começar:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [MySQL](https://www.mysql.com/)

## Tecnologias Utilizadas

- Node.js
- TypeScript
- Sequelize (ORM)
- MySQL (Banco de Dados)
- Chai (Testes)
- Mocha (Testes)
- Bcrypt (Criptografia)
- JWT (Autenticação de Tokens)
- Express (Framework Web)

## Configuração

1. Clone este repositório:

```bash
git clone https://github.com/seu-usuario/seu-projeto.git
cd seu-projeto

```

2. Instale as dependências:

```bash
npm install
```

3. Configure o arquivo .env com suas informações de banco de dados e segredo JWT.
   Um exemplo pode ser encontrado em `.env.example.`
   `

## Banco de Dados

Certifique-se de ter um banco de dados MySQL configurado. Altere as configurações de banco de dados em .env conforme necessário.

Execute as migrações para criar as tabelas no banco de dados:
warning: Isso irá apagar todos os dados existentes no banco de dados.

```bash
npm run db:reset
```

## Executando o Projeto

```bash
npm run dev
```

## Estrutura do Projeto

- `src/:` Contém o código-fonte da aplicação.
- `controllers/:` Controladores da aplicação.
- `middlewares/:` Middlewares customizados.
- `database/:` Configurações do banco de dados e migrações, e modelos do Sequelize.
- `services/:` Lógica de negócios.
- `types/:` Tipos TypeScript customizados.
- `test/:` Testes automatizados.

## Testes

Para executar os testes automatizados:

```bash
npm run test
```

## Docker

Lembrando que o banco de dados configurado no arquivo .env.example é o mesmo configurado no docker-compose.yml logo ao executar o docker-compose up e tirar o `.example` do arquivo .env.example, a conexão com o banco de dados será feita automaticamente.

- Para executar o projeto com docker, basta executar o comando abaixo:

```bash
docker-compose up
```

- Para abrir o bash do container:

```bash
docker exec -it trybesmith_api bash
```
