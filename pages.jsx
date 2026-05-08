// pages.jsx — Escola, Professorat, Contacte

function Escola({ setPage }) {
  useReveal();
  const timeline = [
    { year: '1996', title: 'Naixement a Sta. Eugènia', body: 'Comencem com a projecte de barri a Santa Eugènia de Girona, amb una idea clara: la música ha de ser per a tothom. Aules petites, mestres pròxims i moltes ganes.' },
    { year: '2008', title: 'Creixem amb la comunitat', body: 'L\'escola es consolida com a referent al barri. Apareixen nous itineraris, els primers combos juvenils i col·laboracions amb entitats locals.' },
    { year: '2018', title: 'Audicions obertes al barri', body: 'Traslladem algunes audicions a places i centres cívics. La música surt de l\'aula. Neix el cor obert i les jornades de portes obertes.' },
    { year: '2023', title: 'Obrim seu a Banyoles', body: 'Inaugurem la segona seu, amb la mateixa filosofia i un equip docent ampliat. Programa adaptat al teixit cultural de l\'Estany.' },
    { year: '2026', title: 'Cap al segle XXI', body: 'Repensem el projecte amb il·lusió i sostenibilitat. Nous formats, projectes amb entitats socials i una atenció més fina a famílies, barri i ciutat.' },
  ];
  const valors = [
    { k: 'Inclusió', v: 'Música per a tothom, amb beques, adaptacions i projectes amb entitats socials.' },
    { k: 'Excel·lència', v: 'Recerca constant de la màxima qualitat, sense renunciar al caliu.' },
    { k: 'Comunitat', v: 'Treballem per a famílies, barri i ciutat. Som part del teixit cultural.' },
    { k: 'Sostenibilitat', v: 'Un projecte que cuida les persones, els recursos i el temps.' },
    { k: 'Flexibilitat', v: 'Ens adaptem al segle XXI: ritmes, formats, demandes.' },
    { k: 'Passió', v: 'Ho fem perquè estimem el que fem. Aquest és el motor.' },
  ];
  return (
    <main>
      <section className="page-hero">
        <div className="page-hero-inner">
          <h1>L'<em>Escola.</em><br />1996 →</h1>
          <div className="page-hero-side">
            <span className="eyebrow">— Història i ideari</span>
            <p className="lede reveal">
              Trenta anys d'una escola de barri que ha crescut amb les seves famílies. Una manera de fer música, d'estar al món i d'<em>imaginar</em> el segle XXI.
            </p>
          </div>
        </div>
      </section>

      <section className="timeline">
        {timeline.map((t, i) => (
          <div key={i} className="timeline-row">
            <div className="timeline-year">{t.year}</div>
            <h4>{t.title}</h4>
            <p>{t.body}</p>
          </div>
        ))}
      </section>

      <section className="valors">
        <div className="valors-head">
          <h3>Què ens <em>mou.</em></h3>
        </div>
        <div className="valors-grid">
          {valors.map((v, i) => (
            <div key={i} className="valor reveal">
              <h5>0{i + 1} · {v.k}</h5>
              <p>{v.v}</p>
            </div>
          ))}
        </div>
      </section>

      <Marquee items={['Il·lusió', 'Sostenibilitat', 'Comunitat', 'Excel·lència', 'Flexibilitat', 'Passió']} />
    </main>
  );
}

const CODIRECTORES = [
  { name: 'Clara Cruz', img: 'ClaraCruz.avif', role: 'Co-directora', quote: 'La música és un camí compartit que construïm juntes cada dia.' },
  { name: 'Marta Cruz', img: 'MartaCruz.avif', role: 'Co-directora', quote: 'La música és un camí compartit que construïm juntes cada dia.' },
  { name: 'Glòria Bonal', img: 'GloriaBonal.jpg', role: 'Co-directora', quote: 'La música és un camí compartit que construïm juntes cada dia.' },
];

const PROFES = [
  { name: 'Maria Cruz', img: 'MariaCruz.jpg', role: 'Direcció · Pedagogia', quote: 'Fer classes per mi és una manera de viure i de construir.' },
  { name: 'Víctor Álvarez', img: 'VictorAlvarez.jpg', role: 'Instrument · Tècnica', quote: 'La velocitat ve amb el temps, no t\'ha de preocupar fer-ho ràpid sino fer-ho bé.' },
  { name: 'Ana Olguín', img: 'AnaOlguin.jpg', role: 'Moviment · Música', quote: 'La barreja del moviment, la música i l\'espai és increïble.' },
  { name: 'Pau Sagrera', img: 'PauSagrera.jpg', role: 'Instrument · Joves', quote: 'Tu posa-hi ganes i la tècnica ja anirà sortint.' },
  { name: 'Marc Daunis', img: 'MarcDaunis.jpg', role: 'Combos · Conjunt', quote: 'Espavila i no et queixis, que al final ja sortirà!' },
  { name: 'Meritxell Maset', img: 'MertitxellMaset.jpg', role: 'Cant · Sensibilització', quote: 'Escolta\'t i gaudeix de cada petita melodia.' },
  { name: 'Dídac Moral', img: 'DidacMoral.jpg', role: 'Cos · Interpretació', quote: 'S\'ha de filtrar la interpretació a través del cos.' },
  { name: 'Xavier Tudela', img: 'XavierTudela.jpg', role: 'Instrument · Llenguatge', quote: 'Atura\'t, pensa i després toca!' },
  { name: 'Joan Remacha', img: 'JoanRemacha.jpg', role: 'Mestre · Formació', quote: 'Sempre s\'ha d\'estar disposat a aprendre.' },
];

function Professorat() {
  useReveal();
  return (
    <main>

      {/* ── LA DIRECCIÓ ─────────────────────────────── */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <h1>La <em>direcció</em>.</h1>
          <div className="page-hero-side">
            <span className="eyebrow">— Co-direcció</span>
            <p className="lede reveal">
              Tres persones al capdavant del projecte, amb el compromís compartit de fer de Claudefaula una escola viva, oberta i de qualitat.
            </p>
          </div>
        </div>
      </section>
      <section className="prof-grid">
        {CODIRECTORES.map((p, i) => (
          <div key={i} className="prof-card">
            <div className="prof-photo">
              <img src={`equip/${p.img}`} alt={`Retrat de ${p.name}`} />
            </div>
            <div>
              <span className="role">{p.role}</span>
              <h4 style={{ marginTop: 6 }}>{p.name}</h4>
            </div>
            <blockquote className="prof-quote">
              <span className="quote-mark">"</span>{p.quote}<span className="quote-mark">"</span>
            </blockquote>
          </div>
        ))}
      </section>

      {/* ── L'EQUIP ─────────────────────────────────── */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <h1>L'<em>equip</em>.</h1>
          <div className="page-hero-side">
            <span className="eyebrow">— Mestres, intèrprets, persones</span>
            <p className="lede reveal">
              Més de vint mestres entre Girona i Banyoles. Tots amb formació continuada, projecte propi i un compromís compartit: que la música arribi a tothom.
            </p>
          </div>
        </div>
      </section>
      <section className="prof-grid">
        {PROFES.map((p, i) => (
          <div key={i} className="prof-card">
            <div className="prof-photo">
              <img src={`equip/${p.img}`} alt={`Retrat de ${p.name}`} />
            </div>
            <div>
              <span className="role">{p.role}</span>
              <h4 style={{ marginTop: 6 }}>{p.name}</h4>
            </div>
            <blockquote className="prof-quote">
              <span className="quote-mark">"</span>{p.quote}<span className="quote-mark">"</span>
            </blockquote>
          </div>
        ))}
      </section>
    </main>
  );
}

function Contacte() {
  useReveal();
  const [sent, setSent] = useState(false);
  return (
    <main>
      <section className="page-hero">
        <div className="page-hero-inner">
          <h1>Vine a <em>veure'ns.</em></h1>
          <div className="page-hero-side">
            <span className="eyebrow">— Dues seus, una mateixa escola</span>
            <p className="lede reveal">
              Pots passar-te per la seu de Santa Eugènia o per la de Banyoles. Truca, escriu o omple el formulari: et responem en menys de <em>48 h</em>.
            </p>
          </div>
        </div>
      </section>

      <section className="contacte">
        <div className="seu">
          <span className="seu-eyebrow">Seu original · des del 1996</span>
          <h3>Sta. <em>Eugènia</em><br />Girona</h3>
          <address>
            Carrer de Santa Eugènia, 142<br />
            17005 — Girona
          </address>
          <div className="seu-meta">
            <a>+34 972 24 50 47</a>
            <a>+34 640723728</a>
            <a>info@claudefaula.cat</a>
            <span>De 17:00 a 20:30 de dilluns a divendres</span>
          </div>
          <div className="seu-map" />
        </div>
        <div className="seu">
          <span className="seu-eyebrow">Seu nova · des del 2023</span>
          <h3>Banyoles<br /><em>Estany</em></h3>
          <address>
            Plaça Major, 12<br />
            17820 — Banyoles
          </address>
          <div className="seu-meta">
            <a>+34 972 24 50 47</a>
            <a>+34 640723728</a>
            <a>info@claudefaula.cat</a>
            <span>De 17:00 a 20:30 de dilluns a divendres</span>
          </div>
          <div className="seu-map" />
        </div>
      </section>

      <section className="contact-form">
        <div>
          <h3>Escriu-nos.</h3>
          <p style={{ fontFamily: 'var(--serif)', fontSize: 20, lineHeight: 1.4, color: 'var(--muted)', marginTop: 16, maxWidth: '32ch' }}>
            Per a inscripcions, beques, projectes amb entitats o simplement per dir hola.
          </p>
        </div>
        <form className="form-fields" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
          <div className="field">
            <label>Nom</label>
            <input type="text" placeholder="El teu nom" />
          </div>
          <div className="field">
            <label>Correu</label>
            <input type="email" placeholder="exemple@correu.cat" />
          </div>
          <div className="field">
            <label>Sobre què?</label>
            <select>
              <option>Inscripció / matrícula</option>
              <option>Informació de cursos</option>
              <option>Projectes amb entitats</option>
              <option>Beques</option>
              <option>Altres</option>
            </select>
          </div>
          <div className="field">
            <label>Missatge</label>
            <textarea rows="3" placeholder="Explica'ns…" />
          </div>
          <button className="btn" type="submit" style={{ alignSelf: 'flex-start', marginTop: 12 }}>
            {sent ? 'Gràcies! ✓' : 'Envia →'}
          </button>
        </form>
      </section>
    </main>
  );
}

Object.assign(window, { Escola, Professorat, Contacte });
