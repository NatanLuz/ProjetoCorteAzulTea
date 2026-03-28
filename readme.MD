# CorteAzulTea

Desenvolvi o Site institucional do Projeto **CorteAzulTea**, um serviço do Jonathan Rodrigues especializado em cortes de cabelo para crianças com Transtorno do Espectro Autista (T.E.A), com foco em atendimento humanizado, ambiente acolhedor e comunicação clara com as famílias.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

---

## Introdução

O **CorteAzulTea** é um site responsivo pensado para apresentar, de forma clara e acolhedora, o trabalho do barbeiro especializado em crianças autistas.

O projeto tem como objetivos principais:

- Explicar como funciona o atendimento especializado para crianças TEA.
- Apresentar serviços, valores e políticas de atendimento de forma transparente.
- Facilitar o contato via WhatsApp e Instagram.
- Mostrar depoimentos reais, notícias e reportagem de TV sobre o projeto.
- Indicar de forma simples a localização e as formas de pagamento.

Principais funcionalidades do site:

- Navegação por seções com **scroll suave**.
- Layout **100% responsivo** (mobile, tablet e desktop).
- Seções de **serviços**, **ficha de anamnese**, **formas de pagamento** e **políticas de atendimento**.
- Seção de **depoimentos** dinâmica, carregada via JavaScript.
- Seção de **notícias e reportagem** em vídeo.
- Seção de **localização** com Google Maps incorporado e rotas via Google Maps e Waze.
- **Botão flutuante do WhatsApp** exclusivo para dúvidas.

---

## ⚙️ Pré-requisitos

Este é um projeto **front-end estático**, portanto os requisitos são mínimos:

- Navegador moderno (Chrome, Firefox, Edge, etc.).
- Git instalado (opcional, para clonar o repositório).
- Alguma forma de servir arquivos estáticos (recomendado para ambiente local), como por exemplo:
  - Extensão **Live Server** no VS Code,
  - `python -m http.server`,
  - ou `npx serve`.

Não é necessário banco de dados ou back-end para rodar o projeto.

---

## 🔨 Guia de instalação

Abaixo um passo a passo para ter o projeto rodando em ambiente de desenvolvimento.

### 1. Clonar o repositório

```bash
git clone https://github.com/NatanLuz/ProjetoCorteAzulTea.git
cd ProjetoCorteAzulTea
```

### 2. Estrutura principal

Estrutura simplificada da pasta:

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
│     └─ img/   # Imagens e vídeos
├─ tailwind.config.js
└─ readme.MD
```

### 3. Rodar localmente com servidor estático

Qualquer servidor de arquivos estáticos que aponte para a pasta `public` funciona. Alguns exemplos:

#### Opção A — Python (3.x)

```bash
cd public
python -m http.server 8080
```

Acesse em seguida:

```text
http://localhost:8080
```

#### Opção B — `npx serve`

```bash
npm install -g serve   # opcional, pode usar npx
cd public
serve .
```

#### Opção C — Live Server (VS Code)

1. Abrir a pasta do projeto no VS Code.
2. Clicar com o botão direito em `public/index.html`.
3. Selecionar **“Open with Live Server”**.

---

## 🛠️ Executando os testes

Algumas formas de validar o funcionamento manualmente:

- Verificar a navegação entre as seções pelo menu (incluindo menu mobile).
- Testar o botão flutuante de WhatsApp para dúvidas.
- Clicar nos botões de **Google Maps** e **Waze** na seção de Localização.
- Reproduzir os vídeos de atendimento e reportagem.
- Conferir a responsividade em diferentes larguras de tela (mobile, tablet e desktop).

---

## 📦 Tecnologias usadas

Principais tecnologias e ferramentas utilizadas neste projeto:

## FRONTEND

- **HTML5**
- **CSS3**
- **Tailwind CSS** (via CDN)
- **JavaScript** (vanilla)
- **Font Awesome** (ícones)
- **SVGs personalizados** (Instagram, WhatsApp, etc.)

---

## 👷 Autor

Natan Da Luz

Meu LinkedIn: <https://www.linkedin.com/in/natan-da-luz>
Meu E-mail: natandaluz01@gmail.com
---

## 📄 Licença

Este projeto está sob a licença **MIT**.

---

Para suporte ou dúvidas sobre o site e falar sobre a parte técnica do projeto, entre em contato comigo pelo LinkedIn: <https://www.linkedin.com/in/natan-da-luz>
