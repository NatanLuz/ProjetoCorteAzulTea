# CorteAzul T.E.A. Project

Institutional website developed for Jonathan Rodrigues, who is responsible for Corte Azul in Viamão, Rio Grande do Sul, Brazil. It presents humanized care for children, focusing on children with Autism Spectrum Disorder (ASD), as well as an independent service area for seniors.

**Quick links:** [Published website](https://projeto-corte-azul-tea.vercel.app/) · [Developer's GitHub repository](https://github.com/NatanLuz)

> This documentation describes the repository code. Publication in the client's environment and the availability of external services should be verified separately.

## Project summary

- [Overview and objective](#overview-and-objective)
- [Implemented features](#implemented-features)
- [Services and prices](#services-and-prices)
- [Service flow](#service-flow)
- [Anamnesis form](#anamnesis-form)
- [Technologies and architecture](#technologies-and-architecture)
- [Project structure](#project-structure)
- [How to run locally](#how-to-run-locally)
- [Quality, testing, and checklist](#quality-testing-and-checklist)
- [Maintenance and contribution](#maintenance-and-contribution)
- [Deployment and production](#deployment-and-production)
- [Roadmap](#roadmap)
- [Owners and license](#owners-and-license)

## Overview and objective

The website brings together information about the project, services, prices, scheduling guidelines, location, and promotional content. The anamnesis form allows the family to provide the child's needs and preferences and prepare a WhatsApp contact message.

**What the project is:** a static website using HTML, CSS, and JavaScript.

**What the project does not have:** a backend, database, proprietary API, CMS, authentication, automatic scheduling, or payment processing.

Important information about the service:

- Scheduling and availability confirmation are handled directly with the professional through WhatsApp.
- There is no integrated calendar or automatic reservation.
- PIX deposit instructions are for informational purposes only: the website does not verify payments or receipts.

## Implemented features

- Presentation of the professional, project, and service differentiators.
- Section about the history of Corte Azul in a book, after the institutional presentation, with a decorative highlight prepared to receive client material. No specific book cover or video is embedded.
- Children's services, prices, and service policies.
- Children's in-home service, with the text “In-home service — price to be agreed.”
- “Special Haircut — R$ 85” option in the form, intended for children without difficulty during haircuts. There is no separate card for this service.
- Senior area with direct WhatsApp buttons, without using the children's form.
- Five-step children's form, with browser validation and a message prepared for WhatsApp.
- News, interviews, videos, and review images included directly in the HTML.
- Links to Instagram, Google Maps, and Waze, in addition to an embedded map.
- Responsive menu, anchor navigation, and back-to-top button.
- Basic accessibility features: skip-to-content link, accessible names, labels, focus indication, and form error alert.

## Services and prices

| Service | Current presentation | Price |
| --------------------------------- | ------------------------------------------- | ---------------- |
| Kids Haircut | Card and option in the children's form | R$ 45 |
| Playful Haircut | Card and option in the children's form | R$ 65 |
| Special ASD Haircut | Card and option in the children's form | R$ 85 |
| Special Haircut | Option in the children's form | R$ 85 |
| Children's in-home service | Information in the services section | Price to be agreed |
| Bedridden senior — Porto Alegre | Senior area, direct WhatsApp contact | R$ 80 |
| Senior service in Viamão | Senior area, direct WhatsApp contact | R$ 70 |

## Service flow

**Children:** presentation → services and guidelines → five form steps → message prepared in WhatsApp → contact and confirmation with the professional.

**Seniors:** senior area → city/service selection → WhatsApp with a pre-filled message → contact and confirmation with the professional.

The website opens WhatsApp with the encoded text in the URL. It **does not** send the message automatically, receive confirmation of delivery, or register the appointment.

## Anamnesis form

### Steps

| Step | Content |
| -------------------------- | -------------------------------------------------------------------------------------- |
| 1 — Basic information | Service, child, age, guardian, phone, date, and time |
| 2 — Support level | Optional selection of level 1, 2, or 3 |
| 3 — Sensitivities | Sensitivities and history of trauma involving a hair dryer or haircut |
| 4 — Additional information | Hyperfocus, therapy, and medication |
| 5 — Completion | Location, address, expectations/desired haircut, image authorization, and contact source |

### Validation rules

**Required fields:** service, child's name, age, guardian's name, phone number, and service location.

**Address:** required only when `serviceLocation` has the value `Casa`. For “Meeting point / Barbershop,” it may be left blank.

**Phone:** must contain 10 or 11 digits, including the area code.

**Other fields:** optional.

- The support level may be left blank, including for non-autistic children. There is no specific diagnosis field.
- Entered date and time remain subject to the existing validations.
- The `desiredHaircut` field is optional and represents the family's expectations and desired haircut. Its guidance is associated through `aria-describedby`.

### Generated message

Empty optional fields appear as “Not provided” or “No description,” depending on the field. The absence of an answer about image usage appears as “Not provided” and **does not** constitute authorization.

## Technologies and architecture

| Technology | Use |
| -------------------------- | ----------------------------------------------------------------------------------------------- |
| HTML5 | Institutional content, sections, and form |
| CSS3 | Local styles, animations, focus, and presentation adjustments |
| Tailwind CSS (via CDN) | Utility classes and responsiveness |
| JavaScript (no framework) | Menu, anchors, scrolling effects, form steps, validation, and WhatsApp link composition |
| Google Fonts | Inter font |
| Font Awesome (via CDN) | Icons |
| Web App Manifest | Metadata in `public/manifest.json` |

### Architecture

The architecture is static, with a separation between content (`index.html`), local styles (`style.css`), and behavior (`script.js`). There is no React, backend, database, proprietary API, CMS, or authentication.

### Technical notes

- **Tailwind:** the configuration used by the page is in the HTML. The `tailwind.config.js` file also exists, but no build is configured to consume it.
- **`@apply` directives:** the local CSS contains some directives that depend on Tailwind processing and are not native CSS. Without a configured build, they should not be assumed to be processed by the browser. The page also uses utility classes directly in the HTML.
- **PWA:** there is a manifest, but no service worker or offline support is implemented.
- **Form data:** data is read from the DOM and included in the WhatsApp link. There is no native persistence for this data in the current code.
- **Third-party services:** fonts, CDNs, the map, and external links depend on external services.

## Project structure

```text
ProjetoCorteAzulTea/
├── public/                         # Directory to serve/publish
│   ├── index.html                  # Content, layout, and form
│   ├── manifest.json               # Web app metadata
│   └── assets/
│       ├── css/style.css            # Local styles
│       ├── js/script.js             # Interactivity and form
│       └── img/                     # Images, SVG icons, and videos
├── tailwind.config.js              # Present configuration, without integrated build
├── readme.MD                       # Documentation
├── .gitignore
├── homecorteazultea.PNG
├── servicoscorteazultea.PNG
├── contatocorteazultea.PNG
└── FichaAnamnese.PNG                # Historical screenshots
```

The screenshots in the root are historical references and may not reflect recent changes. Testimonials and news are static: there is no `depoimentos.js` or JSON data loading in the current version.

## How to run locally

No project dependencies need to be installed and no build needs to be run. From the repository root, serve the `public` directory.

With Python 3 installed:

```sh
python -m http.server 8000 --directory public
```

Alternatively, with Node.js and npm available:

```sh
npx http-server public -p 8000
```

The second command may download `http-server`, which is not a versioned project dependency.

Open `http://localhost:8000`.

- Internet access is required to load Tailwind, fonts, icons, and the external map.
- Opening `public/index.html` directly allows a basic check, but a local server is preferable for validation.

## Quality, testing, and checklist

### Checks already performed

The maintenance review included:

- Static verification of IDs, anchors, ARIA references, local paths, HTML closing tags, and JavaScript syntax.
- Headless browser tests at widths of 320, 375, 768, 1024, and 1440 px, with no horizontal overflow observed after the adjustments.
- Tests of the menu, required fields, negative age, and invalid phone number.
- Completion of all five steps with empty optional fields, address blocking for in-home service, and message generation without an address for the barbershop.
- Verification of expectations and fallback values in the message by intercepting navigation to WhatsApp, without actually sending anything.
- `git diff --check` and confirmation that there were no JavaScript exceptions in the tested scenario.

### Limitations

These checks **do not** constitute accessibility certification, complete cross-browser testing, or a guarantee of external availability. There is no automated test suite or versioned QA pipeline.

### Checklist before each delivery

1. Check the menu, anchors, focus, and presentation on a real mobile device, tablet, and desktop, including 200% zoom.
2. Confirm names, prices, service separation, and direct contact for seniors.
3. Go through Next/Back and test required fields, optional fields, phone number, and entered date/time.
4. Test an empty address with `Casa` and `Meeting point`, including after changing the selection.
5. Check the message with filled and empty expectations and image authorization not provided, without sending test messages to the client.
6. Open Instagram, news, and routes; check the map, videos, and images.
7. Check labels and guidance with a screen reader.
8. Run `git diff --check` and, with Node.js installed, `node --check public/assets/js/script.js`.

## Maintenance and contribution

- **Content and prices** are maintained in `public/index.html`.
- **Changes to the form** require reviewing `public/index.html` and `public/assets/js/script.js` together: visual indicators, validation, identifiers, and message text must remain consistent.
- **Workflow:** use branches per task and separate commits for independent changes. Review the diff before integrating into `main`, preserving prices and flows for other audiences.
- **After publishing,** repeat the verification in production. A repository change does not prove that it has already been published.

## Deployment and production

Registered project address: [CorteAzul T.E.A. on Vercel](https://projeto-corte-azul-tea.vercel.app/).

The repository contains static files to be served from `public`. There is no `vercel.json`, deployment workflow, or versioned build command.

- Configure hosting to serve `public`, with no mandatory build, and validate `assets/`, the manifest, and links after publication.
- The Git connection, production branch, and published directory must be checked in the hosting dashboard.
- The repository does not prove that every push triggers an automatic deployment.
- The production address was not validated in this documentation update.

Integrated scheduling, a CMS, an administration panel, email sending, analytics, and offline PWA **are not implemented** and are not delivery commitments for this maintenance.

## Owners 

- **Client:** Jonathan Rodrigues — CorteAzul T.E.A.
- **Developer:** Natan Da Luz — [GitHub](https://github.com/NatanLuz).
