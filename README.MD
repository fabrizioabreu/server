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

## D-3 Autenticação & Upload 1/2
- [x] Back-end
	- [x] Rota de autenticação
	- [x] Criação de token JWT
	- [x] Rotas autenticadas

## D-4 Upload & Nova memória
- [x] Back-end
	- [x] Rota de upload de arquivo
	- [x] Servindo arquivos estáticos

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

# Upload de arquivo/vídeo
# https://github.com/fastify/fastify-multipart
npm i @fastify/multipart

# Faz com que uma pasta do back-end fique pública
npm i @fastify/static
```