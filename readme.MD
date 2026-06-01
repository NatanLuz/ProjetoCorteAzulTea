# CorteAzulTea — Website Institucional

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white) ![Tailwind](https://img.shields.io/badge/Tailwind-CB3837?logo=tailwind-css&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black) ![MIT](https://img.shields.io/badge/License-MIT-green)

Resumo

Site institucional responsivo desenvolvido para Jonathan Rodrigues — barbeiro especializado em atendimento infantil para crianças com Transtorno do Espectro Autista (TEA). Foco em atendimento humanizado, comunicação clara com famílias e otimização do fluxo de agendamentos.

Preview / Demo

- Abra `public/index.html` no navegador ou sirva o diretório `public/` localmente.
- Capturas e assets: `public/assets/img/` (usar nomes descritivos: `home.png`, `servicos.png`, `anamnese.png`).

Objetivo do projeto

- Fortalecer a presença digital do cliente com uma página clara e acessível.
- Reduzir atrito no atendimento por meio de ficha de anamnese integrada.
- Melhorar organização de agendamentos e contato direto (WhatsApp / redes sociais).

Funcionalidades principais

- Layout responsivo (mobile‑first) e navegação por seções.
- Botão flutuante para contato rápido via WhatsApp.
- Ficha de anamnese integrada (formulário para coleta estruturada pré‑atendimento).
- Depoimentos carregados dinamicamente via JavaScript.
- Integração com Google Maps e links para rotas (Waze).
- Incorporação de mídia externa com carregamento controlado.

Diferenciais

- Ficha de anamnese detalhada (preferências sensoriais, gatilhos, histórico) — diferencial para preparo do atendimento.
- Conteúdo escrito para famílias em linguagem clara e acessível.
- Entrega prática para cliente real com foco em operação cotidiana.

Stack tecnológica

- HTML5 semântico
- CSS3 + Tailwind CSS
- JavaScript

Arquitetura / Responsabilidades

- Estrutura: `HTML`
- Estilo: `Tailwind CSS` + `style.css`
- Comportamento: `JavaScript` (scripts para interatividade e carregamento dinâmico)

Estrutura de pastas (resumo)

```bash
ProjetoCorteAzulTea/
├─ public/
│  ├─ index.html
│  ├─ manifest.json
│  └─ assets/
│     ├─ css/
│     │  └─ style.css
│     ├─ js/
│     │  ├─ script.js
│     │  └─ depoimentos.js
│     └─ img/
├─ tailwind.config.js
└─ README.md
```

Responsividade & UX

- Abordagem mobile‑first (breakpoints típicos: 360px / 768px / 1024px).
- Botões com área de toque adequada e contraste legível.
- Fluxo primário: apresentação → serviços → ficha de anamnese → contato.
- Depoimentos e mídias são carregados assincronamente para manter a performance.

Segurança & Privacidade

- Site estático: sem backend público, reduz superfície de ataque.
- Integrações externas restritas e controladas (Google Maps, redes sociais).
- Recomendações ao coletar dados via ficha de anamnese: exibir aviso de privacidade, obter consentimento e orientar envio/armazenamento seguro por canais aprovados pelo cliente.

Testes rápidos / Checklist de QA

- Validar navegação entre seções (desktop e mobile).
- Testar menu responsivo e links de âncora.
- Verificar botão de WhatsApp em múltiplos dispositivos.
- Testar integração Google Maps e rotas (Waze).
- Validar campos obrigatórios e fluxo da ficha de anamnese.

Screenshots (exemplos)

- `home.png` — tela inicial
- `servicos.png` — seção de serviços
- `anamnese.png` — ficha de anamnese (diferencial)
- `contato.png` — contato / mapa

Como executar (rápido)

- Abrir diretamente (Windows):

```powershell
start public\index.html
```

- Servir localmente:

```bash
# Python 3 (porta 8000)
python -m http.server --directory public 8000

# Ou com Node.js (http-server)
npx http-server public -p 8000
```

Acessar: http://localhost:8000

Autor

- Natan Da Luz — natandaluz01@gmail.com
- LinkedIn: https://www.linkedin.com/in/natan-da-luz

Licença

- MIT (projeto entregue ao cliente).

Próximos passos sugeridos

- Inserir aviso de privacidade na ficha de anamnese.
- Adicionar placeholders de imagens em `public/assets/img/` se necessário.
- Criar commit com mensagem: "docs: README profissional CorteAzulTea".

# Meu Saldo Certo Projeto Financeiro

Meu Saldo Certo, é uma aplicação financeira desenvolvida em Laravel para controle de receitas, despesas e saldo. O projeto foi construído com foco em clareza visual, organização de código e apresentação profissional, simulando a experiência de um produto real para portfólio.

![Laravel](https://img.shields.io/badge/Laravel-12%2B-red)
![PHP](https://img.shields.io/badge/PHP-8.2%2B-blue)
![Tailwind](https://img.shields.io/badge/Tailwind%20CSS-3%2B-38BDF8)

## Visão Geral do Projeto

O sistema vai permitir que você registre, consulte e analise movimentações financeiras por usuário autenticado. A interface foi desenhada para priorizar leitura rápida de dados, previsibilidade de uso e uma apresentação consistente para recrutadores e portfólio.

## Objetivo do Projeto

Este projeto foi desenvolvido com foco em criar um sistema financeiro Real para o dia a dia, aplicando boas práticas de desenvolvimento com Laravel, organização de código e atenção à experiência do usuário. O objetivo principal é demonstrar capacidade de construir uma aplicação completa, desde a modelagem de dados até a interface final com deploy

## Diferencial do Projeto

- Dashboard com agregação dinâmica de dados financeiros.
- Filtro por período com atualização clara da interface.
- Implementação de multi-tenant simples com isolamento por usuário.
- Uso de Form Requests e Policies para validação e autorização.
- Interface pensada como produto real, com UX limpa e responsiva.
- Estrutura organizada seguindo boas práticas do Laravel.

## Principais Funcionalidades

- Sistema completo de autenticação com login, registro e recuperação de senha.
- Dashboard financeiro com totais consolidados e gráfico analítico.
- Filtro por período para acompanhar o comportamento das finanças.
- Cadastro, edição, listagem e exclusão de transações.
- Classificação das movimentações em receitas e despesas.
- Associação de categorias por usuário autenticado.
- Validação de dados e autorização por políticas.
- Seed inicial para facilitar a execução e validação do sistema em ambiente local.

## Regras de Negócio

- Toda transação deve estar vinculada a uma categoria.
- Categorias pertencem ao usuário autenticado.
- Uma transação deve ser do tipo receita ou despesa.
- O tipo da categoria precisa ser compatível com o tipo da transação.
- Cada usuário visualiza apenas os próprios dados.

## Arquitetura

O projeto segue o padrão MVC do Laravel com separação clara de responsabilidades:

- Controllers: orquestram o fluxo entre validação, modelos e views.
- Form Requests: Centralizam regras de validação e mantêm os controllers enxutos.
- Policies: Controlam autorização por usuário.
- Models: Concentram relacionamentos e parte das regras de domínio.
- Views com Blade: Entregam a camada de apresentação com Tailwind CSS.

Essa estrutura facilita manutenção, evolução e leitura do código em cenários reais de produto.

## Stack Utilizada no projeto

- Laravel 12
- PHP 8.2+
- Blade
- TailwindCSS
- Alpine.js
- Chart.js
- Vite
- SQLite
- Laravel Breeze

## Estrutura do Projeto

```text
app/
  Http/
    Controllers/
    Requests/
  Models/
  Policies/
  Support/
bootstrap/
config/
database/
  migrations/
  seeders/
public/
resources/
  css/
  js/
  views/
routes/
tests/
```

## Como Executar

### Pré-requisitos

- PHP 8.2+
- Composer
- Node.js e npm
- SQLite

### Instalação

```bash
git clone https://github.com/NatanLuz/meu-saldo-certo.git)

cd SaldoPro

composer install

npm install

cp .env.example .env
php artisan key:generate
php artisan migrate --seed
```

O seeder vai criar um usuário de teste e dados iniciais para facilitar a validação local do sistema.

### Rodando o projeto

```bash
npm run dev
php artisan serve --host=127.0.0.1 --port=8000
```

Depois acesse:

- [http://127.0.0.1:8000](http://127.0.0.1:8000)

## Testes

```bash
php artisan test
```

## Pasta Screenshots

A pasta `screenshots` foi incluída no projeto para documentar visualmente as principais telas e reforçar a apresentação do sistema. Os arquivos foram padronizados para nomes sem acentos e em minúsculas visando compatibilidade entre sistemas de arquivos.

## Screenshots do Projeto

### Login

Tela de autenticação de usuário para entrar na aplicação

![Login](./screenshots/login.png)

### Dashboard

Resumo financeiro com gráfico e filtro por período.

![Dashboard](./screenshots/dashboard.png)

### Transações

Lista de movimentações com ações de cadastro, edição e exclusão.

![Transações](./screenshots/tela-transacoes.png)

### Nova Transação

Formulário para registrar uma nova movimentação financeira.

![Nova Transação](./screenshots/nova-transacao.png)

## Banco de Dados

Entidades principais:

- `users`
- `categories`
- `transactions`

Relacionamentos:

- User 1:N Transactions
- User 1:N Categories
- Category 1:N Transactions

## Autor

Natan Da Luz

- E-mail: <natandaluz01@gmail.com>
- LinkedIn: [https://www.linkedin.com/in/natandaluzdesenvolvedor/](https://www.linkedin.com/in/natandaluzdesenvolvedor/)

## Licença

Projeto é licenciado sob a licença MIT.
