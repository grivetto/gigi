# Gigi il decoratore - Sito Web Ufficiale

Benvenuti nel repository del sito web ufficiale di **Gigi il decoratore** (precedentemente Vivirito Maestria Decò), artigiano specializzato in decorazioni d'interni di lusso, microcemento, resine e stucchi veneziani a Torino.

## Architettura del Progetto

Il progetto è una Single Page Application (SPA) costruita con:
- **React 19** per la struttura a componenti.
- **Vite** come bundler e server di sviluppo per performance ottimali.
- **Tailwind CSS** per lo styling utility-first e il design responsivo.
- **Framer Motion** per animazioni fluide e transizioni degli elementi UI.
- **Lucide React** per l'iconografia.

### Struttura dei Componenti Principali (`src/components/`)
- `Navbar.jsx`: Barra di navigazione fissa che gestisce lo scroll e il menu responsive su dispositivi mobili.
- `Hero.jsx`: Sezione iniziale d'impatto con video di background auto-riprodotto (`public/images/video.mp4`).
- `Services.jsx`: Griglia dei servizi offerti (Tinteggiatura, Microcemento, Resine, Stucchi) con immagini di sfondo e hover states.
- `Portfolio.jsx`: Galleria lavori filtrabile con animazioni di layout (utilizza `framer-motion`).
- `Reviews.jsx`: Sezione testimonianze clienti.
- `About.jsx`: Sezione "Chi Sono" e filosofia artigianale.
- `Contact.jsx`: Form di contatto e informazioni geografiche (Atelier, Email, Telefono).
- `Footer.jsx`: Piè di pagina con link legali e navigazione.

## Modifiche Recenti (v0.0.3)

- **SEO & Navigabilità**: 
  - Ottimizzazione meta tag (Title, Description, OpenGraph, Twitter) focalizzati su Torino, Milano, Roma e Firenze.
  - Inserimento di tag GEO specifici e Schema.org JSON-LD per migliorare l'indicizzazione locale (`HomeAndConstructionBusiness`).
  - Creazione di `robots.txt` a supporto di `sitemap.xml`.
- **Ampliamento Portfolio**: Aggiunte 4 nuove referenze fotografiche (`img6.jpeg` - `img9.jpeg`) alla galleria di `Portfolio.jsx` con categorizzazione espansa.

## Storico Versioni (v0.0.2)

- **Rebranding**: Aggiornato il nome del brand da "Vivirito Maestria Decò" a "Gigi il decoratore" su Navbar, Footer e nei metadati globali (`index.html`).
- **Aggiornamento Contatti**: Aggiornati i dettagli di contatto:
  - Indirizzo: Via Nicola Fabrizi 80 interno 54 - 10145 Torino TO - Italy
  - Email: pierluigi@vivirito.it
  - Telefono: +39 391 361 8790
- **Integrazione Media**: Sostituiti i placeholder con le immagini reali dai progetti (`img1.jpeg` - `img5.jpeg`) e il video hero (`video.mp4`) ospitati nella directory `public/images/`.
- **Deploy Automation**:
  - Aggiunto lo script FTP locale `deploy.js` (tramite `basic-ftp`) per pubblicazioni dirette ed immediate sul server live (`vivirito.it`).
  - Configurato GitHub Actions (`.github/workflows/deploy.yml`) per la compilazione automatica e deploy su GitHub Pages ad ogni push su branch `main`.

## Sviluppo Locale e Deploy

### Avviare in Locale
1. Clona il repository: `git clone ...`
2. Installa le dipendenze: `npm install`
3. Avvia il dev server: `npm run dev`

### Deploy Diretto (FTP su vivirito.it)
Aggiungere le credenziali nello script, dopodiché avviare:
```bash
npm install --no-save basic-ftp
npm run build && node deploy.js
```

## 🔐 Passaggio di Proprietà Futuro (Handover)
Affinché il sito venga trasferito definitivamente al suo vero proprietario in futuro, andranno seguiti questi passaggi:
1. **Repository GitHub**: Trasferire la proprietà ("Transfer Ownership") del repository GitHub dal profilo attuale a quello del destinatario.
2. **Accesso FTP**: Consegnare all'utente finale le credenziali per caricare le modifiche sul server `vivirito.it` (indirizzo FTP, username e password fornite).
3. **Google Search Console**: Entrare nelle Impostazioni di Search Console -> *Utenti e autorizzazioni* e aggiungere l'account Google del proprietario finale come Amministratore (Owner/Full), permettendogli infine di rimuovere il tuo account.
4. **Rimozione Script Personali**: Assicurarsi che nel file `deploy.js` non rimangano scritte in chiaro password o username (idealmente andrebbero lette tramite `.env` files o secret di GitHub Actions).
