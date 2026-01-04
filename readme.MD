# CorteAzulTea

[![corteazultea.png](https://i.postimg.cc/8P5mb0Mt/corteazultea.png)](https://postimg.cc/QV278S6T)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![PHP](https://img.shields.io/badge/PHP-777BB4?logo=php&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?logo=git&logoColor=white)

Site institucional do **CorteAzulTea**, serviço especializado em cortes de cabelo para crianças com Transtorno do Espectro Autista (TEA), com foco em atendimento humanizado, ambiente acolhedor e comunicação clara com as famílias.

---

## Visão Geral

O projeto apresenta informações completas sobre o CorteAzulTea, incluindo vídeos explicativos do atendimento, depoimentos, reportagem, valores e canais de contato.  
O site foi desenvolvido com foco em **acessibilidade, performance e organização de código**, utilizando PHP para composição de layout e Tailwind CSS para estilização.

---

## Funcionalidades

- Estrutura modular com PHP (partials e sections)
- Navegação por âncoras com scroll suave
- Vídeos informativos e institucionais
- Design responsivo (mobile-first)
- CTA flutuante para WhatsApp e Instagram
- SEO básico (metatags e Open Graph)
- Boas práticas de acessibilidade (semântica, contraste, ARIA)

---

## Estrutura do Projeto

```
ProjetoCorteAzulTea/
├─ public/
│  ├─ index.html         # Versão estática
│  ├─ index.php          # Entrada principal (PHP)
│  ├─ manifest.json
│  └─ assets/
│     ├─ css/style.css
│     ├─ js/script.js
│     └─ img/            # Imagens e vídeos
├─ partials/             # Head, header e footer
├─ sections/             # Seções do site
├─ tailwind.config.js
├─ README.md
└─ LICENSE.md
```

---

## Tecnologias Utilizadas

- HTML5
- Tailwind CSS (via CDN)
- JavaScript
- PHP (organização de layout)
- Font Awesome e SVGs

---

## Como Rodar Localmente

### Opção 1 — Servidor PHP

```bash
php -S localhost:8080 -t public
```

Acesse: http://localhost:8080

### Opção 2 — Servidor estático (HTML)

```bash
python -m http.server 8080
```

Recomendado servir a pasta `public` como raiz para evitar problemas de caminhos absolutos.

---

## Licença

Este projeto está sob a licença MIT.  
Veja o arquivo [LICENSE.md](LICENSE.md) para mais detalhes.

---

## Autor

**Natan Da Luz**  
Desenvolvimento e manutenção  
GitHub: https://github.com/NatanLuz  
LinkedIn: https://www.linkedin.com/in/natan-da-luz

---

## Contato do Projeto

Instagram: [@corteazultea](https://www.instagram.com/corteazultea)  
WhatsApp: disponível no botão flutuante do site
