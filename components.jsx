// components.jsx — Nav, Footer, Marquee shared bits

const { useEffect, useState, useRef } = React;

function NavBar({ page, setPage, tweaks }) {
  const links = [
    { id: 'home', label: 'Inici' },
    { id: 'escola', label: 'L\'Escola' },
    { id: 'professorat', label: 'Professorat' },
    { id: 'contacte', label: 'Contacte' },
  ];
  const [open, setOpen] = useState(false);
  const navigate = (id) => { setPage(id); setOpen(false); };

  return (
    <header className={'nav' + (open ? ' nav-open' : '')}>
      <div className="nav-inner">
        <div className="brand" onClick={() => navigate('home')}>
          <img src="logo.avif" alt="Claudefaula" className="brand-logo" />
          <span>Claudefaula</span>
        </div>
        {/* Navegació desktop */}
        <nav className="nav-links">
          {links.map(l => (
            <span
              key={l.id}
              className={'nav-link' + (page === l.id ? ' active' : '')}
              onClick={() => navigate(l.id)}
            >
              {l.label}
            </span>
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
            <span
              key={l.id}
              className={'nav-mobile-link' + (page === l.id ? ' active' : '')}
              onClick={() => navigate(l.id)}
            >
              {l.label}
            </span>
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
            <li onClick={() => setPage('escola')}>L'ideari</li>
            <li onClick={() => setPage('escola')}>Història</li>
            <li onClick={() => setPage('professorat')}>Professorat</li>
            <li>Aules i seus</li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Cursos</h5>
          <ul>
            <li>Sensibilització (0–3)</li>
            <li>Iniciació (4–7)</li>
            <li>Llenguatge i instrument</li>
            <li>Combos i conjunts</li>
            <li>Adults</li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Contacte</h5>
          <ul>
            <li onClick={() => setPage('contacte')}>Sta. Eugènia, Girona</li>
            <li onClick={() => setPage('contacte')}>Banyoles</li>
            <li>info@claudefaula.cat</li>
            <li>Inscripcions</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Claudefaula · Cooperativa cultural</span>
        <span>Política de privacitat · Avís legal</span>
      </div>
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

Object.assign(window, { NavBar, Marquee, Footer, useReveal });
