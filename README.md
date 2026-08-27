<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<p align="center">Um framework <a href="http://nodejs.org" target="_blank">Node.js</a> progressivo para construir aplicações server-side eficientes e escaláveis.</p>

<p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
<a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
<a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>

---

## 📋 Sumário

- [Descrição](#-descrição)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação](#-instalação)
- [Variáveis de ambiente](#-variáveis-de-ambiente)
- [Executando o projeto](#-executando-o-projeto)
- [Estrutura do projeto](#-estrutura-do-projeto)
- [Testes](#-testes)
- [Deploy](#-deploy)
- [Recursos úteis](#-recursos-úteis)
- [Suporte](#-suporte)
- [Licença](#-licença)

---

## 📖 Descrição

Repositório inicial (starter) em [TypeScript](https://www.typescriptlang.org/) para o framework [Nest](https://github.com/nestjs/nest), ideal como ponto de partida para novas APIs e serviços server-side.

## ✅ Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 18 ou superior recomendada)
- [npm](https://www.npmjs.com/) (ou `yarn`/`pnpm`, se preferir)

## 🚀 Instalação

```bash
$ npm install
```

## 🔐 Variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto com base no `.env.example` (se houver), definindo as variáveis necessárias para a execução da aplicação (porta, credenciais de banco de dados, chaves de API, etc.).

```bash
$ cp .env.example .env
```

## ▶️ Executando o projeto

```bash
# desenvolvimento
$ npm run start

# modo watch (recarrega automaticamente)
$ npm run start:dev

# produção
$ npm run start:prod
```

## 🗂️ Estrutura do projeto

```
src/
├── modules/        # Módulos de domínio da aplicação
├── common/         # Filtros, guards, interceptors e utilitários compartilhados
├── config/         # Configurações da aplicação
├── main.ts         # Ponto de entrada da aplicação
└── app.module.ts   # Módulo raiz
```

> Ajuste esta seção conforme a estrutura real do seu projeto.

## 🧪 Testes

```bash
# testes unitários
$ npm run test

# testes e2e
$ npm run test:e2e

# cobertura de testes
$ npm run test:cov
```

## ☁️ Deploy

Quando estiver pronto para colocar sua aplicação NestJS em produção, confira a [documentação de deploy](https://docs.nestjs.com/deployment) para garantir a melhor performance possível.

Se estiver procurando uma plataforma cloud para fazer o deploy, confira o [Mau](https://mau.nestjs.com), a plataforma oficial da NestJS para deploy na AWS:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

## 📚 Recursos úteis

- [Documentação oficial do NestJS](https://docs.nestjs.com)
- [Canal no Discord](https://discord.gg/G7Qnnhy) — dúvidas e suporte
- [Cursos oficiais](https://courses.nestjs.com/) — conteúdo prático
- [NestJS Devtools](https://devtools.nestjs.com) — visualize o grafo da aplicação em tempo real
- [Suporte enterprise](https://enterprise.nestjs.com)
- [Vagas de emprego](https://jobs.nestjs.com)
- Siga a comunidade no [X](https://x.com/nestframework) e [LinkedIn](https://linkedin.com/company/nestjs)

## 💙 Suporte

Nest é um projeto open source licenciado sob MIT. Ele cresce graças aos patrocinadores e apoiadores. Se quiser contribuir, [saiba mais aqui](https://docs.nestjs.com/support).

## 📬 Contato

- Autor — [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website — [https://nestjs.com](https://nestjs.com/)
- Twitter — [@nestframework](https://twitter.com/nestframework)

## 📄 Licença

Nest está licenciado sob a [licença MIT](https://github.com/nestjs/nest/blob/master/LICENSE).
