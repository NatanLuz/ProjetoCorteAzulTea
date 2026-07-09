# CorteAzulTea — Website Institucional

Aplicação web estática responsiva desenvolvida para **Jonathan Rodrigues**, barbeiro especializado em atendimento infantil para crianças com Transtorno do Espectro Autista (TEA). O projeto tem como foco o atendimento humanizado, a comunicação clara com as famílias e a otimização do fluxo de agendamentos.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) ![MIT](https://img.shields.io/badge/License-MIT-green)

## 📖 Sobre o projeto

O objetivo do projeto é oferecer uma plataforma web institucional moderna e acessível para fortalecer a presença digital do barbeiro Jonathan, comunicar seus serviços com clareza e facilitar o contato com novos clientes. A aplicação também busca melhorar a gestão dos atendimentos, permitindo maior organização de horários, redução na perda de clientes e otimização do fluxo de agendamentos.

O projeto recebeu uma ficha de anamnese integrada, que permite o preenchimento direto pelo site em substituição ao Google Docs.

### Benefícios principais

- comunicação clara sobre o atendimento especializado a crianças com TEA;
- interface responsiva com foco em usabilidade;
- facilidade de contato direto por WhatsApp e redes sociais;
- apresentação estruturada de serviços, políticas e localização.

### Responsividade e UX Design

- abordagem mobile-first com breakpoints em 360px, 768px e 1024px;
- botões com área de toque adequada e contraste legível;
- fluxo primário: apresentação → serviços → ficha de anamnese → contato;
- depoimentos e mídias carregados de forma assíncrona para preservar a performance.

### Segurança e privacidade

- integrações externas restritas e controladas, incluindo Google Maps e redes sociais;
- recomenda-se exibir um aviso de privacidade e solicitar consentimento no formulário de anamnese quando ele for preenchido pelo próprio cliente.

### Resultados e impacto

- a adoção da ficha de anamnese reduziu as trocas de mensagens prévias, conforme feedback do cliente;
- maior clareza nas políticas e nos serviços, facilitando a conversão em contatos pelo WhatsApp;
- site entregue para uso real, com foco na operação local e em um atendimento mais humanizado.

### Checklist de QA

- validar a navegação entre seções em desktop e dispositivos móveis;
- testar o menu responsivo e os links de âncora;
- verificar o botão de WhatsApp em múltiplos dispositivos;
- testar a integração com Google Maps e as rotas pelo Waze;
- reproduzir vídeos e conteúdos externos;
- validar os campos obrigatórios e o fluxo da ficha de anamnese.

## ✨ Funcionalidades

### Interface e UX

- layout responsivo com abordagem mobile-first;
- navegação por seções com rolagem suave;
- botão flutuante para contato rápido pelo WhatsApp.

### Conteúdo institucional

- seção de serviços e valores;
- políticas de atendimento detalhadas;
- **ficha de anamnese integrada** para coleta de preferências sensoriais, gatilhos e histórico;
- informações sobre formas de pagamento.

### Conteúdo dinâmico

- depoimentos carregados dinamicamente por JavaScript;
- seção de notícias e reportagem em vídeo;
- integração com mídias externas.

### Localização e contato

- integração com Google Maps e rotas pelo Waze;
- links diretos para WhatsApp e Instagram.

## 🖼️ Screenshots

### Home

![Home](homecorteazultea.PNG)

### Serviços

![Serviços](servicoscorteazultea.PNG)

### Contato

![Contato](contatocorteazultea.PNG)

### Ficha de Anamnese (Atualização mais recente)

![Ficha de Anamnese](FichaAnamnese.PNG)

## 🚀 Tecnologias

- HTML5;
- CSS3;
- Tailwind CSS;
- JavaScript.

### Arquitetura

O projeto mantém a separação entre estrutura, estilo e comportamento:

- **HTML:** estrutura semântica e conteúdo;
- **CSS e Tailwind CSS:** layout responsivo e estilização;
- **JavaScript:** interatividade e carregamento dinâmico.

## ⚙️ Como executar

### Abrir diretamente

```bash
# Windows
start public/index.html
```

### Servir localmente

```bash
# Python 3 (porta 8000)
python -m http.server --directory public 8000

# Ou com Node.js
npx http-server public -p 8000
```

Acesse `http://localhost:8000`.

## 📂 Estrutura do projeto

```text
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

## 📌 Roadmap do Projeto

- painel administrativo para gerenciamento de conteúdo;
- formulário de contato com envio por e-mail;
- integração com sistema de agendamento online;
- CMS para atualização de conteúdo;
- otimização de SEO;
- melhoria da acessibilidade em conformidade com as diretrizes WCAG;
- internacionalização;
- integração com Google Analytics;
- otimização de performance;
- versão PWA completa.

## 🌐 Deploy

O Projeto CorteAzulTea é um website institucional desenvolvido para uso em produção pelo cliente Jonathan Rodrigues.

Acesse aqui o link do Projeto: https://projeto-corte-azul-tea.vercel.app/

## 👤 Autor

**Natan Da Luz**

- LinkedIn: [linkedin.com/in/natandaluz](https://www.linkedin.com/in/natandaluz/)
- Portfólio: [portfolionatan.vercel.app](https://portfolionatan.vercel.app/)
- E-mail: [natandaluz01@gmail.com](mailto:natandaluz01@gmail.com)

### Cliente

**Jonathan Rodrigues**

Barbeiro especializado em atendimento infantil para crianças com Transtorno do Espectro Autista (TEA).

## 📄 Licença

Este projeto está sob a licença **MIT** — todos os direitos reservados ao Jonathan.
