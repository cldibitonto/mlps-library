# MLPS‑Template

Una libreria **Angular** di componenti e servizi standalone per accelerare lo sviluppo di applicazioni secondo le linee guida MLPS.

---

## 📦 Installazione

Esegui:

```bash
npm install mlps-template
```

> **Peer‑dependencies**
> - `@angular/common`, `@angular/router` (≥ v15)
> - `primeng` (per FileUpload e Table)
> - `bootstrap-italia` e `design-angular-kit` (per CarouselBI, ItModalComponent)

---

## 🚀 Quickstart

### 1. Importa i componenti

Nel tuo componente o modulo standalone:

```ts
import {
  MLPSNotificationComponent,
  MLPSPaginatorComponent,
  MLPSCarouselComponent,
  MLPSBreadcrumbComponent,
  MLPSUploadComponent,
  MLPSWizardComponent,
  MLPSHeaderComponent,
  MLPSFooterComponent,
  MLPSInfoModalComponent
} from 'mlps-template';

@Component({
  standalone: true,
  imports: [
    MLPSNotificationComponent,
    MLPSPaginatorComponent,
    MLPSCarouselComponent,
    MLPSBreadcrumbComponent,
    MLPSUploadComponent,
    MLPSWizardComponent,
    MLPSHeaderComponent,
    MLPSFooterComponent,
    MLPSInfoModalComponent
  ],
  template: `<!-- il tuo template qui -->`
})
export class AppComponent {};
```

### 2. Usa i componenti nel template

**Notifiche**

```html
<mlps-notification
  [listaNotifiche]="notifiche"
  (notifica)="onNotifica($event)"
  (segnaNotificheLette)="onSegnaLetto()">
</mlps-notification>
```

**Paginatore**

```html
<mlps-paginator
  [myTable]="dataTable"
  [dataLength]="items.length"
  [rows]="10"
  (changeTab)="onPageChange($event)">
</mlps-paginator>
```

**Carousel**

```html
<mlps-carousel [cards]="menuCards"></mlps-carousel>
```

### 3. Servizi

I servizi sono già forniti in `root`, non serve registrarli nei provider:

- `MLPSLoaderService`
- `MLPSInfoModalService`

---

## ⚙️ Configurazione di Angular JSON

Nel file `angular.json` della tua applicazione (nella sezione `architect.build.options` o equivalente), aggiungi le seguenti configurazioni:

```json
"assets": [
  "src/assets",
  {
    "glob": "**/*",
    "input": "node_modules/mlps-template/src/assets",
    "output": "src/assets"
  },
  {
    "glob": "**/*",
    "input": "public"
  },
  {
    "glob": "**/*",
    "input": "./node_modules/design-angular-kit/assets/i18n",
    "output": "/bootstrap-italia/i18n/"
  }
],
"styles": [
  "node_modules/bootstrap-italia/dist/css/bootstrap-italia.min.css",
  "node_modules/mlps-template/src/styles.scss",
  "node_modules/primeng/resources/themes/lara-light-blue/theme.css",
  "node_modules/primeng/resources/primeng.min.css",
  "src/styles.scss"
],
"scripts": [
  {
    "input": "node_modules/bootstrap-italia/dist/js/bootstrap-italia.bundle.min.js",
    "inject": false,
    "bundleName": "bootstrap-italia"
  }
]
```

Assicurati di posizionare correttamente queste voci all'interno della sezione corrispondente (ad esempio sotto `build.options`).

---

## 🛠️ Comandi utili

**Build**

```bash
ng build mlps-template
```

**Pubblica su NPM**

```bash
cd dist/mlps-template
npm publish
```

**Test unitari**

```bash
ng test mlps-template
```

---

## 🎨 Componenti principali

| Componente                  | Descrizione                                      |
|-----------------------------|--------------------------------------------------|
| `mlps-notification`         | Lista notifiche con "segna come lette"          |
| `mlps-paginator`            | Paginazione per tabelle PrimeNG                   |
| `mlps-carousel`             | Carosello responsive basato su Splide (BI)        |
| `mlps-breadcrumb`           | Breadcrumb reattivo agli URL del Router           |
| `mlps-upload`               | Upload drag & drop + validazione PDF              |
| `mlps-wizard`               | Wizard a tab con componenti dinamici              |
| `mlps-header`, `mlps-footer`| Header e Footer con link di navigazione e social  |
| `mlps-info-modal`           | Modale informativo con callback personalizzabili  |

---

## 📖 Documentazione

Dettagli su tutte le API, proprietà e metodi disponibili sono descritti nella documentazione interna del progetto.

---

## 📝+ Changelog

- **v0.1.0** – Setup iniziale: notifiche, paginatore, loader
- **v0.2.0** – Aggiunti header, footer, carousel, breadcrumb, modale
- **v0.3.0** – Upload file, wizard, schematics personalizzati

---

## 📄 Licenza

MIT © Tuo Nome

