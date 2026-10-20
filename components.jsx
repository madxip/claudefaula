// components.jsx — Nav, Footer, Marquee shared bits
import React, { useEffect, useState, useRef } from 'react';

const RAW_BASE = import.meta.env.BASE_URL || '/';
const BASE_PATH = RAW_BASE.endsWith('/') ? RAW_BASE.slice(0, -1) : RAW_BASE;

function getFullPath(rel) {
  return (BASE_PATH + rel).replace(/\/+/g, '/');
}

function NavBar({ page, setPage, tweaks }) {
  const links = [
    { id: 'home', label: 'Inici', path: getFullPath('/') },
    { id: 'escola', label: 'L\'Escola', path: getFullPath('/escola') },
    { id: 'escoles', label: 'A les escoles', path: getFullPath('/escoles') },
    { id: 'professorat', label: 'Professorat', path: getFullPath('/professorat') },
    { id: 'inscripcio', label: 'Inscripció', path: getFullPath('/inscripcio') },
    { id: 'contacte', label: 'Contacte', path: getFullPath('/contacte') },
  ];
  const [open, setOpen] = useState(false);
  const navigate = (e, id) => {
    if (e && e.preventDefault) e.preventDefault();
    setPage(id);
    setOpen(false);
  };

  return (
    <header className={'nav' + (open ? ' nav-open' : '')}>
      <div className="nav-inner">
        <a href={getFullPath('/')} className="brand" onClick={(e) => navigate(e, 'home')}>
          <img src={`${import.meta.env.BASE_URL}logo.avif`} alt="Claudefaula Escola de Música i Arts" className="brand-logo" />
          <span>Claudefaula</span>
        </a>
        {/* Navegació desktop */}
        <nav className="nav-links">
          {links.map(l => (
            <a
              key={l.id}
              href={l.path}
              className={'nav-link' + (page === l.id ? ' active' : '')}
              onClick={(e) => navigate(e, l.id)}
            >
              {l.label}
            </a>
          ))}
        </nav>
        {/* Botó hamburguesa mòbil */}
        <button
          className="nav-burger"
          aria-label={open ? 'Tanca el menú' : 'Obre el menú'}
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
        >
          <span /><span /><span />
        </button>
      </div>
      {/* Menú mòbil desplegable */}
      {open && (
        <nav className="nav-mobile">
          {links.map(l => (
            <a
              key={l.id}
              href={l.path}
              className={'nav-mobile-link' + (page === l.id ? ' active' : '')}
              onClick={(e) => navigate(e, l.id)}
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

function Marquee({ items }) {
  const set = items || [
    'Inclusió',
    'Musicalitat',
    'Expressió',
    'Creativitat',
    'Professionalitat',
    'Rigor',
    'Passió',
    'Amor per la feina',
  ];
  const tail = (
    <span>
      {set.map((w, i) => (
        <React.Fragment key={i}>
          <span style={{ fontStyle: i % 2 ? 'italic' : 'normal', color: i % 3 === 0 ? 'var(--accent)' : 'inherit' }}>{w}</span>
          <span className="dot" />
        </React.Fragment>
      ))}
    </span>
  );
  return (
    <div className="marquee">
      <div className="marquee-track">
        {tail}{tail}
      </div>
    </div>
  );
}

function Footer({ setPage }) {
  const [legalModal, setLegalModal] = useState(null); // 'privacitat' | 'avis' | null

  const navigate = (e, id) => {
    if (e && e.preventDefault) e.preventDefault();
    setPage(id);
  };

  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <h4>
            Música <em>per a</em><br />
            tothom, des<br />
            de <em>1996</em>.
          </h4>
          <div className="eyebrow">Escola de música i arts · Girona / Banyoles</div>
        </div>
        <div className="footer-col">
          <h5>Escola</h5>
          <ul>
            <li><a href={getFullPath('/escola')} onClick={(e) => navigate(e, 'escola')}>L'ideari</a></li>
            <li><a href={getFullPath('/escoles')} onClick={(e) => navigate(e, 'escoles')}>A les escoles</a></li>
            <li><a href={getFullPath('/professorat')} onClick={(e) => navigate(e, 'professorat')}>Professorat</a></li>
            <li><a href={getFullPath('/contacte')} onClick={(e) => navigate(e, 'contacte')}>Aules i seus</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Cursos i Instrumentació</h5>
          <ul>
            <li><a href={getFullPath('/inscripcio')} onClick={(e) => navigate(e, 'inscripcio')}>Piano, Guitarra, Cant, Bateria, Violí</a></li>
            <li><a href={getFullPath('/inscripcio')} onClick={(e) => navigate(e, 'inscripcio')}>Sensibilització (0–3 anys)</a></li>
            <li><a href={getFullPath('/inscripcio')} onClick={(e) => navigate(e, 'inscripcio')}>Iniciació (4–7 anys)</a></li>
            <li><a href={getFullPath('/inscripcio')} onClick={(e) => navigate(e, 'inscripcio')}>Llenguatge i instrument</a></li>
            <li><a href={getFullPath('/inscripcio')} onClick={(e) => navigate(e, 'inscripcio')}>Combos, ensembles i cor</a></li>
            <li><a href={getFullPath('/inscripcio')} onClick={(e) => navigate(e, 'inscripcio')}>Classes de música per a adults</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Contacte</h5>
          <ul>
            <li><a href={getFullPath('/contacte')} onClick={(e) => navigate(e, 'contacte')}>Sta. Eugènia, Girona</a></li>
            <li><a href={getFullPath('/contacte')} onClick={(e) => navigate(e, 'contacte')}>Banyoles</a></li>
            <li><a href="mailto:info@claudefaula.cat">info@claudefaula.cat</a></li>
            <li><a href={getFullPath('/inscripcio')} onClick={(e) => navigate(e, 'inscripcio')} style={{ fontWeight: 600, color: 'var(--accent)' }}>Inscripcions 2026–27</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Claudefaula · Cooperativa cultural</span>
        <span style={{ display: 'inline-flex', gap: 12, flexWrap: 'wrap' }}>
          <button
            type="button"
            onClick={() => setLegalModal('privacitat')}
            style={{ background: 'none', border: 'none', padding: 0, color: 'inherit', font: 'inherit', textDecoration: 'underline', cursor: 'pointer' }}
          >
            Política de privacitat (RGPD)
          </button>
          <span>·</span>
          <button
            type="button"
            onClick={() => setLegalModal('avis')}
            style={{ background: 'none', border: 'none', padding: 0, color: 'inherit', font: 'inherit', textDecoration: 'underline', cursor: 'pointer' }}
          >
            Avís legal
          </button>
        </span>
      </div>

      {legalModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: 'rgba(26, 26, 26, 0.65)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 20
          }}
          onClick={() => setLegalModal(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            style={{
              background: 'var(--paper)',
              color: 'var(--ink)',
              border: 'var(--hairline)',
              borderLeft: '4px solid var(--accent)',
              borderRadius: 12,
              padding: 'clamp(24px, 4vw, 36px)',
              maxWidth: 640,
              maxHeight: '85vh',
              overflowY: 'auto',
              width: '100%',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.25)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <span className="eyebrow" style={{ color: 'var(--accent)', display: 'block', marginBottom: 8, fontWeight: 600 }}>
              — Informació Legal i RGPD
            </span>
            {legalModal === 'privacitat' ? (
              <>
                <h3 className="serif" style={{ fontSize: 30, margin: '0 0 14px', fontWeight: 400 }}>
                  Política de <em>Privacitat</em> i Protecció de Dades
                </h3>
                <div style={{ fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <p style={{ margin: 0 }}><strong>Responsable del tractament:</strong> Claudefaula — Escola de Música i Arts (C/ Campcardós, 39, 17005 Girona · Camí Can Boada, 61, 17820 Banyoles · <a href="mailto:info@claudefaula.cat" style={{ color: 'var(--accent)' }}>info@claudefaula.cat</a>).</p>
                  <p style={{ margin: 0 }}><strong>Finalitat:</strong> Gestionar les sol·licituds d'informació, inscripcions acadèmiques, cobrament de rebuts domiciliats i comunicacions pedagògiques amb l'alumnat i les famílies.</p>
                  <p style={{ margin: 0 }}><strong>Legitimació:</strong> Execució de la relació educativa precontractual o contractual i consentiment exprés de la persona interessada o tutor/a legal (Reglament UE 2016/679 RGPD i LOPDGDD 3/2018).</p>
                  <p style={{ margin: 0 }}><strong>Destinataris i Conservació:</strong> Les dades no se cediran a tercers excepte per obligació legal o per a la gestió bancària dels rebuts. Es conservaran mentre duri la relació acadèmica i durant els terminis legals exigibles.</p>
                  <p style={{ margin: 0 }}><strong>Drets:</strong> Podeu exercir els drets d'accés, rectificació, supressió, oposició i limitació escrivint a <a href="mailto:info@claudefaula.cat" style={{ color: 'var(--accent)' }}>info@claudefaula.cat</a>.</p>
                </div>
              </>
            ) : (
              <>
                <h3 className="serif" style={{ fontSize: 30, margin: '0 0 14px', fontWeight: 400 }}>
                  Avís <em>Legal</em>
                </h3>
                <div style={{ fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <p style={{ margin: 0 }}>En compliment de la Llei 34/2002 (LSSI-CE), s'informa que el lloc web <strong>claudefaula.cat</strong> és titularitat de Claudefaula — Escola de Música i Arts, amb seus a C/ Campcardós, 39 (17005 Girona) i Camí Can Boada, 61 (17820 Banyoles), telèfon +34 972 24 50 47 i correu <a href="mailto:info@claudefaula.cat" style={{ color: 'var(--accent)' }}>info@claudefaula.cat</a>.</p>
                  <p style={{ margin: 0 }}>Tots els continguts, imatges, dissenys i textos d'aquest lloc web estan protegits per drets de propietat intel·lectual. Queda prohibida la seva reproducció sense autorització prèvia.</p>
                </div>
              </>
            )}
            <button
              type="button"
              className="btn"
              style={{ marginTop: 22, background: 'var(--accent)', color: '#fff', width: '100%', justifyContent: 'center' }}
              onClick={() => setLegalModal(null)}
            >
              Tancar →
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}

// Reveal-on-scroll observer hook
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .split-line');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  });
}

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

function parseDateStr(str) {
  if (!str) return null;
  str = str.trim();
  if (!str) return null;
  const euMatch = str.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})$/);
  if (euMatch) {
    const [, d, m, y] = euMatch;
    return new Date(parseInt(y, 10), parseInt(m, 10) - 1, parseInt(d, 10));
  }
  const isoMatch = str.match(/^(\d{4})[\/\-](\d{1,2})[\/\-](\d{1,2})$/);
  if (isoMatch) {
    const [, y, m, d] = isoMatch;
    return new Date(parseInt(y, 10), parseInt(m, 10) - 1, parseInt(d, 10));
  }
  const d = new Date(str);
  return isNaN(d.getTime()) ? null : d;
}

function isDateActive(dataIniciStr, dataFiStr) {
  const now = new Date();
  now.setHours(0, 0, 0, 0);

  if (dataIniciStr) {
    const startDate = parseDateStr(dataIniciStr);
    if (startDate && now < startDate) return false;
  }

  if (dataFiStr) {
    const endDate = parseDateStr(dataFiStr);
    if (endDate) {
      endDate.setHours(23, 59, 59, 999);
      if (now > endDate) return false;
    }
  }

  return true;
}

function parseBannerCSV(text) {
  const lines = text.trim().replace(/\r\n/g, '\n').replace(/\r/g, '\n').split('\n');
  if (lines.length < 2) return null;
  for (let i = 1; i < lines.length; i++) {
    const [visible, etiqueta, textCol, botoText, botoLink, dataInici, dataFi] = parseCSVLine(lines[i]);
    const isVis = visible && ['si', 'sí', '1', 'true'].includes(visible.toLowerCase().trim());
    if (isVis && isDateActive(dataInici, dataFi)) {
      return {
        visible: true,
        badge: etiqueta || 'DESTACAT',
        text: textCol || '',
        buttonText: botoText || '',
        buttonLink: botoLink || '',
        dataInici: dataInici || '',
        dataFi: dataFi || '',
      };
    }
  }
  return { visible: false };
}

const DEFAULT_BANNER_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS6dn96ihqnjp5Rh_ti-xKcSD9BN2B0hxjOtc_c6sLDt-9O98PSh1sw32xxlUV4SBhxIg3FW7PdFCaH/pub?gid=741259203&single=true&output=csv';

function TopBanner({ setPage, csvUrl = DEFAULT_BANNER_CSV_URL }) {
  const [dismissed, setDismissed] = useState(false);
  const [banner, setBanner] = useState({
    visible: true,
    badge: 'INSCRIPCIONS OBERTES',
    text: 'Ja està obert el període de matrícules per al curs 2026–2027.',
    buttonText: 'Inscriu-te ara →',
    buttonLink: 'inscripcio',
    dataInici: '',
    dataFi: '',
  });

  useEffect(() => {
    if (!csvUrl) return;
    fetch(`${csvUrl}&_t=${Date.now()}`, { cache: 'no-store' })
      .then(r => r.ok ? r.text() : Promise.reject(r.status))
      .then(text => {
        const parsed = parseBannerCSV(text);
        if (parsed) setBanner(parsed);
      })
      .catch(() => { });
  }, [csvUrl]);

  const activeByDate = isDateActive(banner.dataInici, banner.dataFi);

  if (dismissed || !banner.visible || !activeByDate) return null;

  const handleAction = () => {
    if (!banner.buttonLink) return;
    const raw = banner.buttonLink.trim();
    const clean = raw.toLowerCase().replace(/^\/+|\/+$/g, '');

    // 1. Enllaç directe a la secció d'Agenda (va a Inici i fa scroll fins a l'agenda)
    if (clean === 'agenda' || clean === '#agenda') {
      setPage('home');
      setTimeout(() => {
        const el = document.getElementById('agenda') || document.querySelector('.agenda');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 120);
      return;
    }

    // 2. Enllaç directe a la secció de Cursos de la portada
    if (clean === 'cursos' || clean === '#cursos') {
      setPage('home');
      setTimeout(() => {
        const el = document.getElementById('cursos') || document.querySelector('.cursos');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 120);
      return;
    }

    // 3. Pàgines internes de la web (accepta accents, majúscules o barres inicials)
    const ROUTE_ALIASES = {
      'home': 'home',
      'inici': 'home',
      'escola': 'escola',
      'l\'escola': 'escola',
      'historia': 'escola',
      'història': 'escola',
      'escoles': 'escoles',
      'a les escoles': 'escoles',
      'professorat': 'professorat',
      'professors': 'professorat',
      'equip': 'professorat',
      'inscripcio': 'inscripcio',
      'inscripció': 'inscripcio',
      'inscripcions': 'inscripcio',
      'matricula': 'inscripcio',
      'matrícula': 'inscripcio',
      'preus': 'inscripcio',
      'contacte': 'contacte',
    };

    if (ROUTE_ALIASES[clean]) {
      setPage(ROUTE_ALIASES[clean]);
      return;
    }

    // 4. Qualsevol URL externa (Instagram, entrades, document PDF, altra web...)
    if (/^https?:\/\//i.test(raw) || raw.startsWith('/')) {
      window.open(raw, '_blank', 'noopener,noreferrer');
    } else {
      setPage(clean);
    }
  };

  return (
    <aside className="top-banner" aria-label="Avís destacat">
      <div className="top-banner-inner">
        <div className="top-banner-content">
          {banner.badge && <span className="top-banner-badge">{banner.badge}</span>}
          <span className="top-banner-text">{banner.text}</span>
        </div>
        <div className="top-banner-actions">
          {banner.buttonText && (
            <button className="top-banner-btn" onClick={handleAction}>
              {banner.buttonText}
            </button>
          )}
          <button
            className="top-banner-close"
            onClick={() => setDismissed(true)}
            aria-label="Tanca l'avís"
          >
            ✕
          </button>
        </div>
      </div>
    </aside>
  );
}

export { NavBar, TopBanner, Marquee, Footer, useReveal };
