// home.jsx — pàgina principal amb SEO & GEO optimitzat
import React, { useEffect, useState } from 'react';
import { Marquee, useReveal } from './components.jsx';

const PILARS = [
  {
    n: '01',
    title: <>Inclusió. <em>Música per a tothom.</em></>,
    body: 'L\'escola és un espai obert al barri i a la ciutat. Cada infant, jove o adult hi té lloc, sigui quin sigui el seu punt de partida, ritme o circumstància. Becaris, projectes amb entitats socials i adaptacions per a cada cas.',
    tag: 'Beques · Adaptacions · Comunitat',
    watermark: 'Tothom',
  },
  {
    n: '02',
    title: <>Musicalitat, <em>expressió</em> i creativitat.</>,
    body: 'Toquem, cantem, escoltem i creem. La música no és només llegir notes: és una manera de pensar, sentir i conviure. Cada classe és un petit laboratori d\'expressió.',
    tag: 'Improvisació · Composició · Conjunt',
    watermark: 'Sentir',
  },
  {
    n: '03',
    title: <>Professionalitat, <em>rigor</em> i formació continuada.</>,
    body: 'L\'equip docent es forma cada any. Treballem amb metodologies actualitzades i mantenim un diàleg constant entre disciplines. Rigor sense rigidesa.',
    tag: 'Equip · Recerca · Mètode',
    watermark: 'Rigor',
  },
  {
    n: '04',
    title: <>Passió i <em>amor per la feina.</em></>,
    body: 'Ho fem perquè ens estimem el que fem. Aquesta passió travessa cada audició, cada matrícula, cada ratet d\'estudi. És el motor de tot.',
    tag: 'Vocació · Constància · Joia',
    watermark: 'Estimar',
  },
];

const CURSOS = [
  { age: '0 – 3 anys', title: <>Sensibilització <em>musical</em></>, body: 'Sessions amb famílies per a nadons i petits. La música abans de les paraules: ritme, cançó, joc i moviment.', dur: '45 min/setm', cat: 'inicials' },
  { age: '4 – 7 anys', title: <>Iniciació <em>en grup</em></>, body: 'Primer contacte amb el llenguatge musical i la roda d\'instruments (piano, guitarra, percussió). Joc, cos, veu i escolta.', dur: '60 min/setm', cat: 'inicials' },
  { age: '8 – 18 anys', title: <>Llenguatge i <em>instrument</em></>, body: 'Classes de piano, guitarra, cant, bateria, violí, flauta, trompeta i trombó. Itinerari individual, llenguatge i conjunt.', dur: '2 sessions/setm', cat: 'itinerari' },
  { age: 'Joves', title: <>Combos & <em>ensembles</em></>, body: 'Combos de pop-rock, jazz, música tradicional, ensemble de vents, cor jove i teatre musical.', dur: '90 min/setm', cat: 'conjunt' },
  { age: 'Adults', title: <>Adults <em>(de 18 a 99)</em></>, body: 'Cap edat per començar. Classes de piano, guitarra, cant, bateria o instrument adaptat al ritme i objectius personals.', dur: 'Flexible', cat: 'adults' },
  { age: 'Tots', title: <>Cor de <em>l'escola</em></>, body: 'Veus mixtes obertes a alumnat, famílies i veïnat. Cant coral i tècnica vocal sense audició prèvia.', dur: '90 min/setm', cat: 'conjunt' },
];

const INSTRUMENTS_SEO = [
  { nom: 'Classes de Piano', desc: 'Apreneu piano clàssic, modern o acompanyament a Girona i Banyoles. Classes individuals adaptades a infants, joves i adults.' },
  { nom: 'Classes de Guitarra', desc: 'Guitarra clàssica, acústica i elèctrica. Tècnica, acords, lectura i repertori pop, rock, jazz i tradicional.' },
  { nom: 'Classes de Cant & Tècnica Vocal', desc: 'Descobreix la teva veu. Respiració, afinació, vocalització, teatre musical i interpretació vocal.' },
  { nom: 'Classes de Bateria & Percussió', desc: 'Control de ritme, independència, tempo i coordinació per tocar en combos de pop-rock o ensembles.' },
  { nom: 'Classes de Violí & Corda', desc: 'Iniciació i perfeccionament de violí amb pedagogia acurada i adaptada a cada edat.' },
  { nom: 'Instruments de Vent (Flauta, Trompeta, Trombó, Harmònica)', desc: 'Classes individuals i de conjunt de flauta travessera, trompeta, trombó i harmònica.' },
];

const CHIPS = [
  { id: 'tots', label: 'Tots' },
  { id: 'inicials', label: 'Inicials' },
  { id: 'itinerari', label: 'Itinerari' },
  { id: 'conjunt', label: 'Conjunt' },
  { id: 'adults', label: 'Adults' },
];

// ─── AGENDA · Google Sheets ───────────────────────────────────────────────
const AGENDA_CSV_URL = '';

function parseCSVLine(line) {
  const cols = [];
  let cur = '';
  let inQ = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') { inQ = !inQ; }
    else if (ch === ',' && !inQ) { cols.push(cur.trim()); cur = ''; }
    else { cur += ch; }
  }
  cols.push(cur.trim());
  return cols;
}

function resolveImg(url) {
  if (!url) return url;
  url = url.trim();
  if (!url.startsWith('http') && !url.startsWith('/')) {
    return `${import.meta.env.BASE_URL}agenda/${url}`;
  }
  const m = url.match(/\/file\/d\/([^\/\?]+)/);
  if (m) return `https://lh3.googleusercontent.com/d/${m[1]}`;
  return url;
}

function parseAgendaCSV(text) {
  const lines = text.trim().replace(/\r\n/g, '\n').replace(/\r/g, '\n').split('\n');
  if (lines.length < 2) return [];
  return lines.slice(1)
    .map(line => {
      const [data, hora, titol, lloc, preu, etiqueta, visible, imatge] = parseCSVLine(line);
      return { date: data, time: hora, title: titol, place: lloc, price: preu, tag: etiqueta, visible, img: resolveImg(imatge) };
    })
    .filter(e => ['si', 'sí'].includes(e.visible?.toLowerCase().trim()) && e.date?.trim());
}

function Home({ setPage, tweaks }) {
  useReveal();
  const [filter, setFilter] = useState('tots');
  const filtered = filter === 'tots' ? CURSOS : CURSOS.filter(c => c.cat === filter);

  // Agenda dinàmica des de Google Sheets
  const [events, setEvents] = useState([]);
  useEffect(() => {
    if (!AGENDA_CSV_URL || AGENDA_CSV_URL.startsWith('ENGANXA')) return;
    fetch(AGENDA_CSV_URL)
      .then(r => r.ok ? r.text() : Promise.reject(r.status))
      .then(text => setEvents(parseAgendaCSV(text)))
      .catch(() => setEvents([]));
  }, []);

  // Lightbox
  const [lightboxImg, setLightboxImg] = useState(null);
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setLightboxImg(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <svg className="hero-clef" aria-hidden="true" viewBox="0 0 65.2 75.5" xmlns="http://www.w3.org/2000/svg">
          <path d="M27.5,62.8c-6.2,4.7-11.2,8.2-26.9,12.8,26.7-15.1,36-30.7,35.6-52.7-.1-7.7-7.1-16.9-17.2-16.6-2.2,0-9.7-.8-15.7,9.2,1.3-.9,2.9-1.5,4.6-1.5,4.4,0,8,3.6,8,8s-3.6,8-8,8S0,26.2,0,21.8s.1-1.3.3-1.9h-.3C1,11.8,5.6,6.9,9,4.6,13.3,1.7,18.6-.2,23.8,0c17.9.7,21.5,15.7,22.2,20.6,2.7,19.1-8.2,34.6-18.4,42.2ZM60.1,7c-2.8,0-5.1,2.3-5.1,5.1s2.3,5.1,5.1,5.1,5.1-2.3,5.1-5.1c0-2.8-2.3-5.1-5.1-5.1ZM60.1,31c-2.8,0-5.1,2.3-5.1,5.1s2.3,5.1,5.1,5.1,5.1-2.3,5.1-5.1c0-2.8-2.3-5.1-5.1-5.1Z" />
        </svg>
        <div className="hero-meta">
          <span className="mono" style={{ color: 'var(--accent)', fontWeight: 600 }}>Girona (Santa Eugènia) &middot; Banyoles (Estany)</span>
        </div>
        <h1 className="hero-title">
          Escola de <em>música i arts</em><br />
          a Girona i Banyoles<br />
          des de <em>1996</em>.
        </h1>
        <div className="hero-sub">
          <p className="hero-lede reveal">
            Música per a tothom: <strong>classes de piano, guitarra, cant, bateria, violí, sensibilització i música per a adults</strong>. Una escola de barri amb <em>màxima qualitat</em> educàtiva.
          </p>
          <div className="hero-cta">
            <button className="btn" onClick={() => setPage('inscripcio')}>Inscriu-te ara →</button>
            <span className="mono" style={{ color: 'var(--muted)' }}>matrícules obertes · curs 2026–27</span>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      {tweaks.marquee && <Marquee />}

      {/* FILOSOFIA */}
      <section className="filosofia">
        <div className="filosofia-grid">
          <div>
            <span className="eyebrow">§ Ideari</span>
            <h2 className="reveal" style={{ marginTop: 16 }}>
              Treballem per a la<br />
              <em>comunitat</em>.
            </h2>
            <div className="tag-list">
              <span className="tag">Inclusió</span>
              <span className="tag">Sensibilització</span>
              <span className="tag">Excel·lència</span>
              <span className="tag">Flexibilitat</span>
              <span className="tag">Obertura</span>
            </div>
          </div>
          <div className="filosofia-body reveal">
            <p>Som una <strong>escola de música i arts</strong> al barri de Santa Eugènia de Girona. <em>Des de 2023</em> també amb seu a Banyoles.</p>
            <p>Oferim <strong>extraescolars de música, classes d'instruments individuals, llenguatge musical, combos i cor</strong> amb la màxima qualitat pedagògica.</p>
            <p>Volem una escola del segle XXI: il·lusionada, sostenible, atenta a les famílies i flexible per a infants, joves i adults.</p>
          </div>
        </div>
      </section>

      {/* PILARS */}
      <section className="pilars">
        <div className="pilars-head">
          <h3><em>Quatre pilars</em>,<br />una sola escola.</h3>
          <span className="mono" style={{ color: 'var(--muted)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.06em' }}>I — IV</span>
        </div>
        {PILARS.map((p, i) => (
          <div key={i} className="pilar">
            <div className="pilar-num">{p.n}</div>
            <div>
              <h4 className="pilar-title">{p.title}</h4>
              <div className="pilar-tag">— {p.tag}</div>
            </div>
            <p className="pilar-body">{p.body}</p>
            <div className="pilar-watermark">{p.watermark}</div>
          </div>
        ))}
      </section>

      {/* CURSOS */}
      <section className="cursos">
        <div className="cursos-head">
          <h3>Què hi <em>fem.</em></h3>
          <span className="mono" style={{ color: 'var(--muted)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.06em' }}>0–99 anys</span>
        </div>
        <div className="filter-bar">
          {CHIPS.map(c => (
            <button key={c.id} className={'chip' + (filter === c.id ? ' active' : '')} onClick={() => setFilter(c.id)}>{c.label}</button>
          ))}
        </div>
        <div className="cursos-grid">
          {filtered.map((c, i) => (
            <div key={i} className="curs-card" onClick={() => setPage('inscripcio')} style={{ cursor: 'pointer' }}>
              <span className="age">— {c.age}</span>
              <h4>{c.title}</h4>
              <p>{c.body}</p>
              <div className="curs-meta">
                <span>{c.dur}</span>
                <span className="curs-arrow">Veure quotes →</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INSTRUMENTS I ESPECIALITATS (OPTIMITZACIÓ PER CERQUES I IA) */}
      <section className="valors" style={{ paddingTop: 40, paddingBottom: 40 }}>
        <div className="valors-head">
          <h3>Instruments i <em>Especialitats</em> a Girona i Banyoles.</h3>
          <p style={{ marginTop: 12, color: 'var(--muted)', maxWidth: '50ch' }}>
            Classes d'instrument individual i col·lectiu amb professorat qualificat i metodologies adaptades.
          </p>
        </div>
        <div className="valors-grid" style={{ marginTop: 24 }}>
          {INSTRUMENTS_SEO.map((inst, i) => (
            <div key={i} className="valor reveal" style={{ cursor: 'pointer' }} onClick={() => setPage('inscripcio')}>
              <h5>{inst.nom}</h5>
              <p>{inst.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AGENDA */}
      {events.length > 0 && (
        <section className="agenda">
          <div className="agenda-head">
            <h3>Agenda <em>de curs.</em></h3>
            <div className="meta">{events.length} {events.length === 1 ? 'cita' : 'cites'}</div>
          </div>
          <div className="agenda-track">
            {events.map((e, i) => e.img ? (
              <article key={i} className="event event-featured">
                <img
                  className="event-poster event-poster--clickable"
                  src={e.img}
                  alt={`Cartell: ${e.title}`}
                  onClick={() => setLightboxImg(e.img)}
                />
                <div className="event-featured-body">
                  <div className="event-when">
                    <span className="event-date">{e.date}</span>
                    {e.time && <span className="event-time">{e.time}</span>}
                  </div>
                  <h4 className="event-title">{e.title}</h4>
                  <div className="event-meta">
                    <span>{e.place}{e.price ? <> &middot; <strong>{e.price}</strong></> : ''}</span>
                    {e.tag && <span className="event-tag" style={{ marginTop: 8 }}>{e.tag}</span>}
                  </div>
                </div>
              </article>
            ) : (
              <article key={i} className="event">
                <div className="event-when">
                  <span className="event-date">{e.date}</span>
                  {e.time && <span className="event-time">{e.time}</span>}
                </div>
                <h4 className="event-title">{e.title}</h4>
                <div className="event-meta">
                  <span>{e.place}{e.price ? <> &middot; <strong>{e.price}</strong></> : ''}</span>
                  {e.tag && <span className="event-tag" style={{ marginTop: 8 }}>{e.tag}</span>}
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* LIGHTBOX */}
      {lightboxImg && (
        <div className="lightbox" onClick={() => setLightboxImg(null)} role="dialog" aria-modal="true">
          <button className="lightbox-close" onClick={() => setLightboxImg(null)} aria-label="Tancar">×</button>
          <img
            className="lightbox-img"
            src={lightboxImg}
            alt="Cartell ampliat"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </main>
  );
}

export { Home };
