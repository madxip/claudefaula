// app.jsx — root with routing + tweaks
import React, { useEffect, useState } from 'react';
import { NavBar, Footer } from './components.jsx';
import { Home } from './home.jsx';
import { Escola, Professorat, Contacte } from './pages.jsx';
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

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [page, setPage] = useState('home');

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

  // Scroll-to-top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [page]);

  let Page;
  switch (page) {
    case 'escola': Page = Escola; break;
    case 'professorat': Page = Professorat; break;
    case 'contacte': Page = Contacte; break;
    default: Page = Home;
  }

  return (
    <>
      <NavBar page={page} setPage={setPage} tweaks={t} />
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
        <TweakButton onClick={() => setPage('professorat')}>Professorat</TweakButton>
        <TweakButton onClick={() => setPage('contacte')}>Contacte</TweakButton>
      </TweaksPanel>
    </>
  );
}

export default App;
