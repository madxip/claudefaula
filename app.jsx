// app.jsx — root with routing + SEO + tweaks
import React, { useEffect, useState } from 'react';
import { NavBar, TopBanner, Footer } from './components.jsx';
import { Home } from './home.jsx';
import { Escola, Professorat, Contacte, Inscripcio, Escoles } from './pages.jsx';
import {
  useTweaks, TweaksPanel, TweakSection,
  TweakColor, TweakToggle, TweakSelect, TweakRadio, TweakButton,
} from './tweaks-panel.jsx';

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": ["#f5f1e8", "#1a1a1a", "#c9472b"],
  "density": "regular",
  "marquee": true,
  "dark": false,
  "accent": "#c9472b",
  "serif": "Instrument Serif"
}/*EDITMODE-END*/;

const PALETTES = [
  ["#f5f1e8", "#1a1a1a", "#c9472b"], // crema · tinta · terracota (default)
  ["#efe9df", "#3a3128", "#8a6a47"], // pergami · cafe · ocre
  ["#fbf7f2", "#1f2a26", "#2d6a4f"], // boira · pi · molsa
  ["#f4eada", "#0e0e10", "#d4a85a"], // sorra · negre · or
];

const SERIFS = [
  { id: 'Instrument Serif', label: 'Instrument' },
  { id: 'Cormorant Garamond', label: 'Cormorant' },
  { id: 'DM Serif Display', label: 'DM Serif' },
  { id: 'Newsreader', label: 'Newsreader' },
];

const RAW_BASE = import.meta.env.BASE_URL || '/';
const BASE_PATH = RAW_BASE.endsWith('/') ? RAW_BASE.slice(0, -1) : RAW_BASE;

const PAGE_ROUTES = {
  '/': 'home',
  '/escola': 'escola',
  '/escoles': 'escoles',
  '/professorat': 'professorat',
  '/inscripcio': 'inscripcio',
  '/contacte': 'contacte',
};

const PAGE_PATHS = {
  'home': '/',
  'escola': '/escola',
  'escoles': '/escoles',
  'professorat': '/professorat',
  'inscripcio': '/inscripcio',
  'contacte': '/contacte',
};

function getRouteKeyFromPath(fullPath) {
  // 1. Suport per a redirecció 404.html (si s'ha passat com a ?redirect=...)
  const params = new URLSearchParams(window.location.search);
  const redirectParam = params.get('redirect');
  if (redirectParam) {
    const cleanPath = decodeURIComponent(redirectParam);
    window.history.replaceState(null, '', cleanPath);
    fullPath = cleanPath.split('?')[0].split('#')[0];
  }

  // 2. Suport per a encaminament per Hash (#/professorat)
  if (window.location.hash) {
    const rawHash = window.location.hash.replace(/^#\/?/, '/').toLowerCase().replace(/\/$/, '') || '/';
    if (PAGE_ROUTES[rawHash]) return PAGE_ROUTES[rawHash];
  }

  // 3. Encaminament per Pathname (HTML5 History API)
  let path = (fullPath || window.location.pathname).toLowerCase().replace(/\/$/, '') || '/';
  if (BASE_PATH && path.startsWith(BASE_PATH.toLowerCase())) {
    path = path.slice(BASE_PATH.length) || '/';
  }
  return PAGE_ROUTES[path] || 'home';
}

function getFullPath(pageKey) {
  const relativePath = PAGE_PATHS[pageKey] || '/';
  const combined = (BASE_PATH + relativePath).replace(/\/+/g, '/');
  return combined || '/';
}

const SEO_DATA = {
  home: {
    title: "Claudefaula — Escola de Música i Arts a Girona i Banyoles",
    description: "Claudefaula és l'escola de música i arts de referència a Girona (Santa Eugènia) i Banyoles des de 1996. Classes de piano, guitarra, bateria, violí, cant, sensibilització 0-3 anys, combos i música per a adults.",
    keywords: "escola de musica girona, escola de musica banyoles, classes de piano girona, classes de guitarra banyoles, classes de cant, extraescolar musica girona, classes de bateria, sensibilitzacio musical, violi, llenguatge musical, combos pop rock, musica adults, claudefaula, santa eugenia girona",
    canonical: "https://claudefaula.cat/",
  },
  escola: {
    title: "L'Escola — Claudefaula | Projecte educatiu de música a Girona i Banyoles",
    description: "Coneix la història i l'ideari de Claudefaula. 30 anys d'escola de música de barri a Santa Eugènia (Girona) i Banyoles amb valors d'inclusió, excel·lència i comunitat.",
    keywords: "historia claudefaula, escola musica santa eugenia, escola musica banyoles, projecte educatiu musica girona",
    canonical: "https://claudefaula.cat/escola",
  },
  escoles: {
    title: "Música a les Escoles — Claudefaula | Projectes educatius Girona i Banyoles",
    description: "Projectes educatius, tallers i activitats musicals per a escoles, instituts i centres educatius de Girona i el Pla de l'Estany.",
    keywords: "musica a les escoles girona, tallers de musica escoles banyoles, extraescolars escoles girona",
    canonical: "https://claudefaula.cat/escoles",
  },
  professorat: {
    title: "Professorat i Equip Docent — Claudefaula | Girona i Banyoles",
    description: "Coneix l'equip de mestres i la direcció de Claudefaula. Més de 20 professors de piano, guitarra, bateria, violí, cant, flauta, trompeta, trombó i llenguatge musical.",
    keywords: "professors de musica girona, equip docent claudefaula, mestres de piano banyoles, professors de guitarra girona",
    canonical: "https://claudefaula.cat/professorat",
  },
  inscripcio: {
    title: "Inscripció i Cursos — Claudefaula | Classes de Piano, Guitarra, Cant, Bateria i més",
    description: "Consulta l'oferta de cursos i quotes d'inscripció de Claudefaula. Classes de piano, guitarra, cant, bateria, violí, sensibilització 0-3 anys, combos i adults.",
    keywords: "matricula escola de musica girona, preus classes de piano, inscripcio classes de guitarra, quotes musica banyoles",
    canonical: "https://claudefaula.cat/inscripcio",
  },
  contacte: {
    title: "Contacte i Seus a Girona i Banyoles — Claudefaula | Escola de Música",
    description: "Troba les nostres seus a Santa Eugènia (Girona) i l'Estany (Banyoles). Contacta amb nosaltres per a matrícules, dubtes o sol·licitud d'informació.",
    keywords: "contacte claudefaula, adreça escola musica girona, adreça escola musica banyoles, telefon claudefaula",
    canonical: "https://claudefaula.cat/contacte",
  },
};

function updateSEO(pageKey) {
  const seo = SEO_DATA[pageKey] || SEO_DATA.home;
  document.title = seo.title;

  const setMeta = (name, content, attribute = 'name') => {
    let el = document.querySelector(`meta[${attribute}="${name}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(attribute, name);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  };

  setMeta('description', seo.description);
  setMeta('keywords', seo.keywords);

  // Open Graph
  setMeta('og:title', seo.title, 'property');
  setMeta('og:description', seo.description, 'property');
  setMeta('og:url', seo.canonical, 'property');

  // Twitter
  setMeta('twitter:title', seo.title);
  setMeta('twitter:description', seo.description);

  // Canonical
  let canonicalEl = document.querySelector('link[rel="canonical"]');
  if (!canonicalEl) {
    canonicalEl = document.createElement('link');
    canonicalEl.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalEl);
  }
  canonicalEl.setAttribute('href', seo.canonical);
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  const [page, setPageState] = useState(() => getRouteKeyFromPath());

  const setPage = (newPage, pushHistory = true) => {
    setPageState(newPage);
    if (pushHistory) {
      const targetPath = getFullPath(newPage);
      if (window.location.pathname !== targetPath) {
        window.history.pushState({ page: newPage }, '', targetPath);
      }
    }
    updateSEO(newPage);
  };

  // Apply tweaks to root
  useEffect(() => {
    const root = document.documentElement;
    const [bg, ink, accent] = t.palette;
    root.style.setProperty('--bg', bg);
    root.style.setProperty('--ink', ink);
    root.style.setProperty('--accent', accent);
    document.body.dataset.density = t.density;
    document.body.dataset.mode = t.dark ? 'dark' : 'light';
    root.style.setProperty('--serif', `"${t.serif}", "Cormorant Garamond", Georgia, serif`);
  }, [t]);

  // Sync with browser back/forward buttons, hash changes and initial load
  useEffect(() => {
    const handleLocationChange = () => {
      const pageKey = getRouteKeyFromPath();
      setPageState(pageKey);
      updateSEO(pageKey);
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    updateSEO(page);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  // Scroll-to-top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [page]);

  let Page;
  switch (page) {
    case 'escola': Page = Escola; break;
    case 'escoles': Page = Escoles; break;
    case 'professorat': Page = Professorat; break;
    case 'contacte': Page = Contacte; break;
    case 'inscripcio': Page = Inscripcio; break;
    default: Page = Home;
  }

  return (
    <>
      <NavBar page={page} setPage={setPage} tweaks={t} />
      <TopBanner setPage={setPage} />
      <Page setPage={setPage} tweaks={t} />
      <Footer setPage={setPage} />
      <TweaksPanel>
        <TweakSection label="Paleta" />
        <TweakColor
          label="Combinació"
          value={t.palette}
          options={PALETTES}
          onChange={(v) => setTweak('palette', v)}
        />
        <TweakToggle label="Mode fosc" value={t.dark} onChange={(v) => setTweak('dark', v)} />

        <TweakSection label="Tipografia" />
        <TweakSelect
          label="Display serif"
          value={t.serif}
          options={SERIFS.map(s => ({ value: s.id, label: s.label }))}
          onChange={(v) => setTweak('serif', v)}
        />

        <TweakSection label="Disposició" />
        <TweakRadio
          label="Densitat"
          value={t.density}
          options={['compact', 'regular', 'comfy']}
          onChange={(v) => setTweak('density', v)}
        />
        <TweakToggle label="Marquee filosòfic" value={t.marquee} onChange={(v) => setTweak('marquee', v)} />

        <TweakSection label="Vés a" />
        <TweakButton onClick={() => setPage('home')}>Inici</TweakButton>
        <TweakButton onClick={() => setPage('escola')}>L'Escola</TweakButton>
        <TweakButton onClick={() => setPage('escoles')}>A les escoles</TweakButton>
        <TweakButton onClick={() => setPage('professorat')}>Professorat</TweakButton>
        <TweakButton onClick={() => setPage('inscripcio')}>Inscripció</TweakButton>
        <TweakButton onClick={() => setPage('contacte')}>Contacte</TweakButton>
      </TweaksPanel>
    </>
  );
}

export default App;
