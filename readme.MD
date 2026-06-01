# CorteAzulTea

Website institucional responsivo desenvolvido para Jonathan Rodrigues — barbeiro especializado em atendimento infantil para crianças com Transtorno do Espectro Autista (TEA). Foco em atendimento humanizado, comunicação clara com famílias e otimização do fluxo de agendamentos.

- Tipo: Site estático (frontend)
- Desenvolvedor: Natan Da Luz
- Cliente: Jonathan Rodrigues

<!-- Badges -->

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black) ![Tailwind](https://img.shields.io/badge/Tailwind-CB3837?logo=tailwind-css&logoColor=white) ![MIT](https://img.shields.io/badge/License-MIT-green)

---

> ## Preview / Demo

- Abra `public/index.html` no navegador ou sirva o diretório `public/` localmente.
- Capturas e assets: `public/assets/img/` (usar nomes descritivos: `home.png`, `servicos.png`, `anamnese.png`).

---

## Descrição curta

Site institucional responsivo que apresenta serviços, políticas e ficha de anamnese integrada, facilitando contato e agendamento para famílias de crianças com TEA.

---

## Objetivo do projeto

- Fortalecer a presença digital de Jonathan com uma página clara e acessível.
- Reduzir atrito no atendimento por meio de coleta prévia de informações (ficha de anamnese integrada).
- Melhorar organização de agendamentos e comunicação direta (WhatsApp / redes sociais), tornando o serviço mais profissional.

---

## Funcionalidades principais

- Layout responsivo (mobile‑first) e navegação por seções.
- Botão flutuante para contato rápido via WhatsApp.
- Seções de serviços, políticas, preços e formas de pagamento.

-**Ficha de anamnese integrada** (DIFERENCIAL) — formulário para coleta estruturada de informações pré‑atendimento.

- Depoimentos carregados dinamicamente via JavaScript.
- Integração com Google Maps e links para rotas (Waze).
- Incorporação de mídia externa (vídeo/reportagem) com carregamento controlado.

---

## Diferenciais relevantes

-**Ficha de anamnese integrada**: coleta de preferências sensoriais, gatilhos e histórico, melhorando a preparação do atendimento e reduzindo faltas.

- Conteúdo escrito para famílias: linguagem clara e orientada ao usuário final.
- Entrega prática para cliente real — projeto pensado para uso cotidiano e eficiência operacional.

---

## Stack tecnológica

- HTML5 semântico
- CSS3 + Tailwind CSS
- JavaScript (vanilla)

---

## Arquitetura e responsabilidades

- Separação de responsabilidades:

  - Estrutura: `HTML`
  - Estilo: `Tailwind CSS` + `style.css`
  - Comportamento: `JavaScript` (scripts para interatividade e carregamento dinâmico)

---

## Estrutura de pastas

```

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

---

## Responsividade & UX

- Abordagem mobile‑first com pontos de quebra comuns (360px / 768px / 1024px).
- Botões com área de toque adequada e contraste legível.
- Fluxo primário: apresentação → serviços → ficha de anamnese → contato.
- Depoimentos e mídias são carregados assíncronamente para manter a performance.

---

## Segurança e privacidade

- Site estático: sem backend público, reduz superfície de ataque.
- Integrações externas restritas e controladas (Google Maps, redes sociais).
- Ao coletar dados via ficha de anamnese, recomenda‑se:

  - Exibir aviso de privacidade e consentimento no formulário.
  - Orientar envio/armazenamento seguro por canais aprovados pelo cliente.

---

## Desafios enfrentados

- Projetar a ficha de anamnese para ser breve e ao mesmo tempo completa.
- Equilibrar clareza para famílias com apresentação profissional para o cliente.
- Otimizar imagens e recursos externos para performance mobile.

---

## Resultados / Impacto

- Adoção da ficha de anamnese reduziu trocas de mensagens prévias (feedback do cliente).
- Maior clareza nas políticas e serviços, facilitando conversão em contato via WhatsApp.
- Site entregue para uso real com foco em operação local e atendimento humanizado.

---

## Testes rápidos / Checklist de QA

- Validar navegação entre seções (desktop e mobile).
- Testar menu responsivo e links de âncora.
- Verificar botão de WhatsApp em múltiplos dispositivos.
- Testar integração Google Maps e rotas (Waze).
- Validar campos obrigatórios e fluxo da ficha de anamnese.

---

## Screenshots (incluir em `public/assets/img/`)

-`home.png` — tela inicial

-`servicos.png` — seção de serviços

-`anamnese.png` — ficha de anamnese (diferencial)

-`contato.png` — contato / mapa

---

## Como executar (rápido)

Abrir diretamente:

```bash

# Windows: abre o arquivo no navegador padrão

startpublic/index.html

```

Servir localmente (recomendado):

```bash

# Python 3 (porta 8000)

python-mhttp.server--directorypublic8000


# Ou com Node.js (http-server)

npxhttp-serverpublic-p8000

```

Acessar: `http://localhost:8000`

---

## Autor

-**Desenvolvedor:** Natan Da Luz — natandaluz01@gmail.com

-**LinkedIn:** https://www.linkedin.com/in/natan-da-luz

-**Cliente entregue:** Jonathan Rodrigues (barbeiro especializado em atendimento infantil com TEA)

---

## Licença

Projeto entregue ao cliente; licença: **MIT**.

---

## Próximos passos (opcionais)

- Inserir placeholders de imagens em `public/assets/img/`.
- Criar commit com mensagem de entrega: "docs: README profissional CorteAzulTea".
- Adicionar aviso de privacidade na página da anamnese.

# CorteAzulTea — Website Institucional

Aplicação web estática responsiva desenvolvida para o projeto **CorteAzulTea**, serviço de Jonathan Rodrigues especializado em cortes de cabelo para crianças com Transtorno do Espectro Autista (TEA), com foco em atendimento humanizado, ambiente acolhedor e comunicação clara com as famílias.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)

![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)

![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white)

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

---

## Objetivo do Projeto

Desenvolver uma plataforma WEB institucional moderna e acessível para fortalecer a presença digital do barbeiro Jonathan, comunicar seus serviços com clareza e facilitar o contato com novos clientes. O projeto também teve como objetivo melhorar a gestão dos atendimentos, permitindo maior organização de horários, redução na perda de clientes e otimização do fluxo de agendamentos. Com a utilização da plataforma, Jonathan conseguiu ampliar seu alcance digital, atrair novos clientes e aumentar sua capacidade de atendimento, tornando o processo mais profissional, organizado e eficiente.

Acrescentado no projeto, a lista de anamnese, facilitando o preenchimento no própio site invés de ser no google docs.

**Benefícios principais:**

- Comunicação clara sobre atendimento especializado (TEA)
- Interface responsiva com foco em usabilidade
- Facilitação de contato direto (WhatsApp e redes sociais)
- Apresentação estruturada de serviços, políticas e localização

---

## ⚙️ Funcionalidades

## Interface & UX

- Layout responsivo (mobile-first)
- Navegação por seções com rolagem suave
- Estrutura organizada e de fácil leitura
- Botão flutuante para contato rápido via WhatsApp

### Conteúdo Institucional

- Seção de serviços e valores
- Políticas de atendimento detalhadas
- Ficha de anamnese explicativa
- Informações sobre formas de pagamento

### Conteúdo Dinâmico

- Depoimentos carregados dinamicamente via JavaScript
- Seção de notícias e reportagem em vídeo
- Integração com mídias externas

### Localização e Contato

- Integração com Google Maps
- Rotas via Google Maps e Waze
- Links diretos para WhatsApp e Instagram

---

## 🏗️ Arquitetura / Estrutura

Separação entre estrutura, estilo e comportamento:

-**HTML** → estrutura semântica e conteúdo

-**CSS / Tailwind** → layout responsivo e estilização

-**JavaScript** → interatividade e carregamento dinâmico

**Estrutura do Projeto:**

```bash

ProjetoCorteAzulTea/

├─public/

│  ├─index.html

│  ├─manifest.json

│  └─assets/

│     ├─css/

│     │  └─style.css

│     ├─js/

│     │  ├─script.js

│     │  └─depoimentos.js

│     └─img/

├─tailwind.config.js

└─README.md

```

---

## 🔐 Segurança

- Site estático (Sem Backend)
- Integrações externas controladas (maps e redes sociais

---

## 🧰 Stack Tecnológica

- HTML5 semântico
- CSS3
- Tailwind CSS
- JavaScript

---

## 🧪 Testes Rápidos

Checklist funcional:

- Validar navegação entre seções (desktop e mobile)
- Testar menu responsivo
- Verificar botão de WhatsApp
- Testar integração com Google Maps e Waze
- Reproduzir vídeos e conteúdos externos
- Validar responsividade em diferentes resoluções

---

## 📸 Screenshots do Projeto

### Home

![Home](homecorteazultea.PNG)

### Serviços

![Serviços](servicoscorteazultea.PNG)

### Contato

![Contato](contatocorteazultea.PNG)

### Ficha de Anamnese (ACRESCENTADA)

![Ficha de Anamnese](FichaAnamnese.PNG)

---

## 👤 Autor

Natan Da Luz

📧 [natandaluz01@gmail.com](mailto:natandaluz01@gmail.com)

🔗 https://www.linkedin.com/in/natan-da-luz

---

## 📄 Licença

Este projeto está sob a licença **MIT**, todos os direitos reservados ao Jonathan.
