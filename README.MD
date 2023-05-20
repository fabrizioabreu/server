## D-1 Tecnologias
- [x] Back-end
	- [x] Node.js
	- [x] TypeScript + TSX
	- [x] Fastify (Framework)
	- [x] ESLint
	- [x] Prisma + SQLite

## D-2 Layout
- [x] Back-end
	- [x] Estrutura do banco de dados
	- [x] CRUD de memórias
		- [x] Criação
		- [x] Listagem
		- [x] Detalhe
		- [x] Atualização
	- [x] Plugin de CORS

## Getting Started
```bash
npm run dev
```

## Bibliotecas e comandos utilizados
```sh
npm init -y
npm i typescript -D
npm i @types/node -D
npx tsc --init
npm i tsx -D
npm i fastfy
npm install eslint -D
npm i @rocketseat/eslint-config -D
npm i prisma -D
npx prisma init --datasource-provider SQLite

# Sobe as migrate e alterações no schema.prisma
npx prisma migrate dev

# Reseta a ultima migrate
npx prisma migrate reset

# Inicia o Prisma no seu navegador
npx prisma studio

# Acessar o DB de dentro da aplicação
npm i @prisma/client

npm i zod

# Tecnica de segurança para determinar quais URLs vão poder acessar nossa API
npm i @fastify/cors

# Para o prisma conseguir ler as variáveis de ambiente.
npm i dotenv -D

# Fazer requisições Http
npm i axios

npm i @fastify/jwt
```