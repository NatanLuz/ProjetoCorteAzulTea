# CorteAzul T.E.A.

Site institucional desenvolvido para Jonathan Rodrigues, responsável pelo Corte Azul em Viamão/RS. Apresenta o atendimento infantil humanizado, com foco em crianças com Transtorno do Espectro Autista (TEA), e uma área independente de atendimento para idosos.

**Links rápidos:** [Site publicado](https://projeto-corte-azul-tea.vercel.app/) · [Repositório do desenvolvedor no GitHub](https://github.com/NatanLuz)

> Esta documentação descreve o código do repositório. A publicação no ambiente do cliente e a disponibilidade dos serviços externos devem ser verificadas separadamente.

## Sumário

- [Visão geral e objetivo](#visão-geral-e-objetivo)
- [Funcionalidades implementadas](#funcionalidades-implementadas)
- [Serviços e valores](#serviços-e-valores)
- [Fluxo de atendimento](#fluxo-de-atendimento)
- [Ficha de anamnese](#ficha-de-anamnese)
- [Tecnologias e arquitetura](#tecnologias-e-arquitetura)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Como executar localmente](#como-executar-localmente)
- [Qualidade, testes e checklist](#qualidade-testes-e-checklist)
- [Manutenção e contribuição](#manutenção-e-contribuição)
- [Deploy e produção](#deploy-e-produção)
- [Roadmap](#roadmap)
- [Responsáveis e licença](#responsáveis-e-licença)

## Visão geral e objetivo

O site reúne informações sobre o projeto, serviços, valores, orientações de agendamento, localização e conteúdos de divulgação. A ficha de anamnese permite à família informar necessidades e preferências da criança e preparar uma mensagem para contato pelo WhatsApp.

**O que o projeto é:** um site estático, com HTML, CSS e JavaScript.

**O que o projeto não tem:** backend, banco de dados, API própria, CMS, autenticação, agendamento automático ou processamento de pagamentos.

Pontos importantes sobre o atendimento:

- Agendamento e confirmação de disponibilidade são tratados diretamente com o profissional pelo WhatsApp.
- Não há agenda integrada nem reserva automática.
- As orientações de sinal via PIX são apenas informativas: o site não verifica pagamentos nem comprovantes.

## Funcionalidades implementadas

- Apresentação do profissional, do projeto e dos diferenciais do atendimento.
- Seção sobre a história do Corte Azul em livro, após a apresentação institucional, com destaque decorativo preparado para receber material do cliente. Não há capa ou vídeo específico do livro incorporado.
- Serviços infantis, valores e políticas de atendimento.
- Atendimento a domicílio infantil, com o texto “Atendimento a domicílio – valor a combinar.”
- Opção “Corte Especial – R$ 85” na ficha, indicada para crianças sem dificuldade no corte. Não há cartão independente desse serviço.
- Área de idosos com botões diretos para WhatsApp, sem utilizar a ficha infantil.
- Ficha infantil em cinco etapas, com validações no navegador e mensagem preparada para WhatsApp.
- Notícias, entrevistas, vídeos e imagens de avaliações incluídos diretamente no HTML.
- Links para Instagram, Google Maps e Waze, além de mapa incorporado.
- Menu responsivo, navegação por âncoras e botão de retorno ao topo.
- Recursos básicos de acessibilidade: link para pular ao conteúdo, nomes acessíveis, rótulos, indicação de foco e alerta de erro na ficha.

## Serviços e valores

| Serviço | Apresentação atual | Valor |
|---|---|---|
| Corte Kids | Cartão e opção na ficha infantil | R$ 45 |
| Corte Lúdico | Cartão e opção na ficha infantil | R$ 65 |
| Corte TEA Especial | Cartão e opção na ficha infantil | R$ 85 |
| Corte Especial | Opção na ficha infantil | R$ 85 |
| Atendimento a domicílio infantil | Informação na seção de serviços | Valor a combinar |
| Idoso acamado — Porto Alegre | Área de idosos, contato direto por WhatsApp | R$ 80 |
| Atendimento para idosos em Viamão | Área de idosos, contato direto por WhatsApp | R$ 70 |

## Fluxo de atendimento

**Infantil:** apresentação → serviços e orientações → cinco etapas da ficha → mensagem preparada no WhatsApp → contato e confirmação com o profissional.

**Idosos:** área de idosos → escolha de cidade/serviço → WhatsApp com mensagem preenchida → contato e confirmação com o profissional.

O site abre o WhatsApp com o texto codificado na URL. Ele **não** envia a mensagem automaticamente, não recebe confirmação de envio e não registra o agendamento.

## Ficha de anamnese

### Etapas

| Etapa | Conteúdo |
|---|---|
| 1 — Dados básicos | Serviço, criança, idade, responsável, telefone, data e horário |
| 2 — Nível de suporte | Seleção opcional de nível 1, 2 ou 3 |
| 3 — Sensibilidades | Sensibilidades e histórico de trauma com secador ou corte |
| 4 — Informações adicionais | Hiperfoco, terapia e medicação |
| 5 — Finalização | Local, endereço, expectativa/corte desejado, autorização de imagem e origem do contato |

### Regras de validação

**Campos obrigatórios:** serviço, nome da criança, idade, nome do responsável, telefone e local do atendimento.

**Endereço:** obrigatório somente quando `serviceLocation` tem o valor `Casa`. Para “Ponto de encontro / Barbearia”, pode ficar vazio.

**Telefone:** deve conter 10 ou 11 dígitos, incluindo DDD.

**Demais campos:** opcionais.

- O nível de suporte pode ficar vazio, inclusive para crianças não autistas. Não existe campo específico de diagnóstico.
- Data e horário preenchidos continuam sujeitos às validações existentes.
- O campo `desiredHaircut` é opcional e representa a expectativa da família e o corte desejado. Sua orientação é associada por `aria-describedby`.

### Mensagem gerada

Opcionais vazios aparecem como “Não informado” ou “Sem descrição”, conforme o campo. A ausência de resposta sobre uso de imagem aparece como “Não informado” e **não** equivale a autorização.

## Tecnologias e arquitetura

| Tecnologia | Uso |
|---|---|
| HTML5 | Conteúdo institucional, seções e formulário |
| CSS3 | Estilos locais, animações, foco e ajustes de apresentação |
| Tailwind CSS (via CDN) | Classes utilitárias e responsividade |
| JavaScript (sem framework) | Menu, âncoras, efeitos de rolagem, etapas da ficha, validações e composição do link do WhatsApp |
| Google Fonts | Fonte Inter |
| Font Awesome (via CDN) | Ícones |
| Web App Manifest | Metadados em `public/manifest.json` |

### Arquitetura

A arquitetura é estática, com separação entre conteúdo (`index.html`), estilos locais (`style.css`) e comportamento (`script.js`). Não há React, backend, banco de dados, API própria, CMS ou autenticação.

### Observações técnicas

- **Tailwind:** a configuração usada pela página está no HTML. O arquivo `tailwind.config.js` também existe, mas não há build configurado para consumi-lo.
- **Diretivas `@apply`:** o CSS local contém algumas, que dependem de processamento Tailwind e não são CSS nativo. Sem build configurado, não se deve presumir que sejam processadas pelo navegador. A página também usa classes utilitárias diretamente no HTML.
- **PWA:** há manifest, mas não há service worker nem suporte offline implementado.
- **Dados da ficha:** são lidos do DOM e incluídos no link do WhatsApp. Não há persistência própria desses dados no código atual.
- **Serviços de terceiros:** fontes, CDNs, mapa e links externos dependem de serviços externos.

## Estrutura do projeto

```text
ProjetoCorteAzulTea/
├── public/                         # Diretório a servir/publicar
│   ├── index.html                  # Conteúdo, layout e ficha
│   ├── manifest.json               # Metadados do web app
│   └── assets/
│       ├── css/style.css            # Estilos locais
│       ├── js/script.js             # Interatividade e ficha
│       └── img/                     # Imagens, ícones SVG e vídeos
├── tailwind.config.js              # Configuração presente, sem build integrado
├── readme.MD                       # Documentação
├── .gitignore
├── homecorteazultea.PNG
├── servicoscorteazultea.PNG
├── contatocorteazultea.PNG
└── FichaAnamnese.PNG                # Capturas históricas
```

As capturas na raiz são referências históricas e podem não refletir as alterações recentes. Depoimentos e notícias são estáticos: não há `depoimentos.js` nem carga de dados por JSON na versão atual.

## Como executar localmente

Não é necessário instalar dependências do projeto nem executar build. A partir da raiz do repositório, sirva a pasta `public`.

Com Python 3 instalado:

```sh
python -m http.server 8000 --directory public
```

Alternativamente, com Node.js e npm disponíveis:

```sh
npx http-server public -p 8000
```

O segundo comando pode baixar o `http-server`, que não é uma dependência versionada do projeto.

Acesse `http://localhost:8000`.

- É necessário acesso à internet para carregar Tailwind, fontes, ícones e mapa externos.
- Abrir `public/index.html` diretamente permite uma conferência básica, mas o servidor local é preferível para validação.

## Qualidade, testes e checklist

### Verificações já realizadas

Na revisão de manutenção foram realizados:

- Verificação estática de IDs, âncoras, referências ARIA, caminhos locais, fechamentos HTML e sintaxe JavaScript.
- Testes em navegador headless nas larguras de 320, 375, 768, 1024 e 1440 px, sem overflow horizontal observado após os ajustes.
- Testes do menu, campos obrigatórios, idade negativa e telefone inválido.
- Percurso das cinco etapas com opcionais vazios, bloqueio de endereço para atendimento em casa e geração da mensagem sem endereço para barbearia.
- Conferência da expectativa e dos valores substitutos na mensagem, interceptando a navegação ao WhatsApp, sem envio real.
- `git diff --check` e conferência de ausência de exceções JavaScript no cenário testado.

### Limites

Essas verificações **não** constituem certificação de acessibilidade, teste completo entre navegadores ou garantia de disponibilidade externa. Não há suíte automatizada de testes nem pipeline de QA versionados.

### Checklist antes de cada entrega

1. Conferir menu, âncoras, foco e apresentação em celular real, tablet e desktop, incluindo zoom de 200%.
2. Confirmar nomes, valores, separação dos serviços e contato direto dos idosos.
3. Percorrer Próximo/Voltar e testar obrigatórios, opcionais, telefone e data/horário preenchidos.
4. Testar endereço vazio com `Casa` e `Ponto de encontro`, inclusive após trocar a seleção.
5. Conferir a mensagem com expectativa preenchida e vazia e autorização de imagem não informada, sem enviar mensagens de teste ao cliente.
6. Abrir Instagram, notícias e rotas; verificar mapa, vídeos e imagens.
7. Conferir rótulos e orientação com leitor de tela.
8. Executar `git diff --check` e, com Node.js instalado, `node --check public/assets/js/script.js`.

## Manutenção e contribuição

- **Conteúdo e valores** são mantidos em `public/index.html`.
- **Alterações na ficha** exigem revisar `public/index.html` e `public/assets/js/script.js` em conjunto: indicadores visuais, validações, identificadores e texto da mensagem devem permanecer coerentes.
- **Fluxo de trabalho:** use branches por tarefa e commits separados para mudanças independentes. Revise o diff antes de integrar na `main`, preservando preços e fluxos de outros públicos.
- **Após publicar,** repita a conferência em produção. Uma alteração no repositório não comprova que ela já esteja publicada.

## Deploy e produção

Endereço registrado para o projeto: [CorteAzul T.E.A. na Vercel](https://projeto-corte-azul-tea.vercel.app/).

O repositório contém arquivos estáticos para servir a partir de `public`. Não há `vercel.json`, workflow de deploy ou comando de build versionado.

- Configure a hospedagem para servir `public`, sem build obrigatório, e valide `assets/`, manifest e links após a publicação.
- A conexão Git, a branch de produção e o diretório publicado precisam ser conferidos no painel da hospedagem.
- O repositório não comprova que cada push dispara deploy automático.
- O endereço de produção não foi validado nesta atualização de documentação.

## Roadmap

Pendências e candidatos a evolução, sujeitos à definição de prioridade com o cliente:

- Receber e incorporar capa, vídeo ou outro material real do livro.
- Ampliar a validação em dispositivos reais, navegadores e tecnologias assistivas.
- Avaliar processamento local do Tailwind e das diretivas `@apply`, além da dependência de CDNs.
- Avaliar testes automatizados da ficha e verificações de entrega reproduzíveis.

Agenda integrada, CMS, painel administrativo, envio por e-mail, analytics e PWA offline **não estão implementados** e não são compromissos de entrega desta manutenção.

## Responsáveis e licença

- **Cliente:** Jonathan Rodrigues — CorteAzul T.E.A.

- **Desenvolvedor:** Natan Da Luz — [GitHub](https://github.com/NatanLuz).

