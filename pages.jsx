// pages.jsx — Escola, Professorat, Contacte
import React, { useState, useEffect } from 'react';
import { Users, Target, Calendar, AlertCircle, FileText } from 'lucide-react';
import { Marquee, useReveal } from './components.jsx';

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
  { name: 'Clara Cruz', img: 'ClaraCruz.avif', role: 'Co-directora', quote: 'Des de la primera infància, la música esdevé un element clau en el desenvolupament de la sensibilitat, la confiança i l\'autoestima dels infants.' },
  { name: 'Marta Cruz', img: 'MartaCruz.avif', role: 'Co-directora', quote: 'Crec que l\'aprenentatge musical ha de néixer d\'una forma natural i sensorial en els infants.' },
  { name: 'Glòria Bonal', img: 'GloriaBonal.jpg', role: 'Co-directora', quote: 'Ara més que mai, fer música en conjunt i fer créixer la pròpia personalitat es fa imprescindible per educar les persones per a un futur que ja és aquí.' },
];

const PROFES = [
  { name: 'Maria Cruz', img: 'MariaCruz.jpg', role: 'Professora de combo, big band, saxo, sensibilització musical i piano', quote: 'Fer classes per mi és una manera de viure i de construir.' },
  { name: 'Gerard Llavero', img: 'GerardLlavero.jpg', role: 'Professor de conjunt instrumental', quote: 'T\'ajudaré a connectar amb la música!' },
  { name: 'Mariona Taltavull', img: 'Mariona.jpg', role: 'Professora de Trompeta, trombó i sensibilització musical', quote: 'Equivocar-se també és aprendre.' },
  { name: 'Ana Olguín', img: 'AnaOlguin.jpg', role: 'Professora de dansa, teatre musical, sensibilització musical i piano', quote: 'La barreja del moviment, la música i l\'espai és increïble.' },
  { name: 'Pau Sagrera', img: 'PauSagrera.jpg', role: 'Professor de guitarra i piano', quote: 'Tu posa-hi ganes i la tècnica ja anirà sortint.' },
  { name: 'Laia Gomes', img: 'LaiaGomes.jpg', role: 'Professora de piano, flauta travessera, guitarra, bateria, llenguatge musical, sensibilització musical i combo', quote: 'Equivocar-se és la millor manera d\'aprendre.' },
  { name: 'Marc Daunis', img: 'MarcDaunis.jpg', role: 'Professor d\'instruments tradicionals', quote: 'Espavila i no et queixis, que al final ja sortirà!' },
  { name: 'Meritxell Maset', img: 'MertitxellMaset.jpg', role: 'Professora de flauta dolça i piano', quote: 'Escolta\'t i gaudeix de cada petita melodia.' },
  { name: 'Dídac Moral', img: 'DidacMoral.jpg', role: 'Professor de percussió', quote: 'S\'ha de filtrar la interpretació a través del cos.' },
  { name: 'Xavier Tudela', img: 'XavierTudela.jpg', role: 'Professor de piano, llenguatge musical, roda d\'instruments, cant i guitarra', quote: 'Atura\'t, pensa i després toca!' },
  { name: 'Joan Remacha', img: 'JoanRemacha.jpg', role: 'Professor de trompeta', quote: 'Sempre s\'ha d\'estar disposat a aprendre.' },
  { name: 'Rita Cantó', img: 'RitaCanto.jpg', role: 'Professora de sensibilització musical, violí i teatre musical', quote: 'Prova-ho i després ja veurem què passa.' },
  { name: 'Jaume Sureda', img: 'JaumeSureda.jpg', role: 'Professor de guitarra, bateria, llenguatge musical i combo', quote: 'Frase destacada.' },
  { name: 'Joel Moreno', img: 'JoelMoreno.jpg', role: 'Professor de flauta travessera, cant, llenguatge musical i sensibilització musical', quote: 'La música vol molt de mimo.' },
  { name: 'Albert Mademont', img: 'AlbertMademont.jpg', role: 'Professor a Claudefaula Banyoles i a Claudefaula Girona de piano, llenguatge, combo i guitarra', quote: 'Aquí venim a aprendre però també a passar-nos-ho molt bé!' },
  { name: 'Andrea Jerónimo', img: 'AndreaJeronimo.jpg', role: 'Professora de cant, piano, guitarra, sensibilització musical ', quote: 'Frase destacada' },
  { name: 'Elena Birtwistle', img: 'ElenaBirtwistle.jpg', role: 'Professora de sensibilització infantil, cant coral i arpa', quote: 'Escoltem, experimentem i gaudim: així és com aprenem música.' },
  { name: 'Cesc Coromines', img: 'CescCoromines.jpg', role: 'Professor de violoncel i cambra', quote: 'Tocar un instrument és com cuidar una planta: si la reges i et quedes mirant-la, no la veuràs créixer. Però si la vas regant dia rere dia, al cap d’un temps t’adonaràs que ha crescut.' },
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
              <img src={`${import.meta.env.BASE_URL}equip/${p.img}`} alt={`Retrat de ${p.name}`} />
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
              <img src={`${import.meta.env.BASE_URL}equip/${p.img}`} alt={`Retrat de ${p.name}`} />
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

const DEFAULT_WEBHOOK_URL = import.meta.env.VITE_WEBHOOK_URL || 'https://script.google.com/macros/s/AKfycbxeGPTGt2HqApnNaxHSC6_Wm9roHGStaWN0JVHrc8aHAMCqmxnSrGPZoxuBbSg3YPcEYg/exec';

function Contacte() {
  useReveal();
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [contactForm, setContactForm] = useState({
    nom: '',
    correu: '',
    tema: 'Inscripció / matrícula',
    missatge: '',
    websiteHoneypot: '', // Camp anti-bots ocult
  });

  const handleContactSubmit = (e) => {
    e.preventDefault();
    // Si un bot omple el camp ocult honeypot, ignorem silenciosament l'enviament
    if (contactForm.websiteHoneypot) {
      setSent(true);
      return;
    }
    setSending(true);
    const payload = {
      tipusFormulari: 'CONTACTE_WEB',
      timestamp: new Date().toLocaleString('ca-ES'),
      nomAlumne: contactForm.nom.trim(),
      correuPares: contactForm.correu.trim(),
      cursos: `[CONTACTE: ${contactForm.tema}]`,
      alergies: contactForm.missatge.trim(),
      destinatariMail: 'info@claudefaula.cat',
    };

    fetch(DEFAULT_WEBHOOK_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(payload),
    })
      .then(() => {
        setSending(false);
        setSent(true);
      })
      .catch(() => {
        setSending(false);
        setSent(true);
      });
  };

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
          <h3>Sta. Eugènia<br /><em>Girona</em></h3>
          <address>
            <a
              href="https://maps.google.com/maps?q=C%2F+Campcard%C3%B3s+39+Girona"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'inherit', textDecoration: 'underline', textDecorationColor: 'var(--accent)' }}
            >
              C/ Campcardós, 39
            </a><br />
            17005 — Girona
          </address>
          <div className="seu-meta">
            <a href="tel:+34972245047">+34 972 24 50 47</a>
            <a href="tel:+34640723728">+34 640 72 37 28</a>
            <a href="mailto:info@claudefaula.cat">info@claudefaula.cat</a>
            <span>De 16:00 a 20:00 de dilluns a divendres</span>
          </div>
          <div className="seu-map">
            <iframe
              title="Mapa Seu Girona"
              src="https://maps.google.com/maps?q=C%2F+Campcard%C3%B3s+39+Girona&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        <div className="seu">
          <span className="seu-eyebrow">Seu nova · des del 2023</span>
          <h3>Canaleta<br /><em>Banyoles</em></h3>
          <address>
            <a
              href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x12bac390126b570f:0x31f4a65133530658?sa=X&ved=1t:8290&ictx=111"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'inherit', textDecoration: 'underline', textDecorationColor: 'var(--accent)' }}
            >
              Camí Can Boada, 61
            </a><br />
            17820 — Banyoles
          </address>
          <div className="seu-meta">
            <a href="tel:+34972245047">+34 972 24 50 47</a>
            <a href="tel:+34640723728">+34 640 72 37 28</a>
            <a href="mailto:info@claudefaula.cat">info@claudefaula.cat</a>
            <span>De 17:00 a 20:30 de dilluns a divendres</span>
          </div>
          <div className="seu-map">
            <iframe
              title="Mapa Seu Banyoles"
              src="https://maps.google.com/maps?q=Cam%C3%AD+Can+Boada+24+Banyoles&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className="contact-form">
        <div>
          <h3>Escriu-nos.</h3>
          <p style={{ fontFamily: 'var(--serif)', fontSize: 20, lineHeight: 1.4, color: 'var(--muted)', marginTop: 16, maxWidth: '32ch' }}>
            Per a inscripcions, beques, projectes amb entitats o simplement per dir hola.
          </p>
        </div>
        <form className="form-fields" onSubmit={handleContactSubmit}>
          {/* Camp ocult anti-spam (honeypot) */}
          <input
            type="text"
            name="website_url"
            tabIndex="-1"
            autoComplete="off"
            value={contactForm.websiteHoneypot}
            onChange={(e) => setContactForm(f => ({ ...f, websiteHoneypot: e.target.value }))}
            style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0, width: 0 }}
            aria-hidden="true"
          />
          <div className="field">
            <label>Nom *</label>
            <input
              type="text"
              required
              placeholder="El teu nom"
              value={contactForm.nom}
              onChange={(e) => setContactForm(f => ({ ...f, nom: e.target.value }))}
            />
          </div>
          <div className="field">
            <label>Correu *</label>
            <input
              type="email"
              required
              placeholder="exemple@correu.cat"
              value={contactForm.correu}
              onChange={(e) => setContactForm(f => ({ ...f, correu: e.target.value }))}
            />
          </div>
          <div className="field">
            <label>Sobre què?</label>
            <select
              value={contactForm.tema}
              onChange={(e) => setContactForm(f => ({ ...f, tema: e.target.value }))}
            >
              <option>Inscripció / matrícula</option>
              <option>Informació de cursos</option>
              <option>Música a l'Empresa</option>
              <option>Projectes amb entitats / escoles</option>
              <option>Beques</option>
              <option>Altres</option>
            </select>
          </div>
          <div className="field">
            <label>Missatge *</label>
            <textarea
              rows="3"
              required
              placeholder="Explica'ns…"
              value={contactForm.missatge}
              onChange={(e) => setContactForm(f => ({ ...f, missatge: e.target.value }))}
            />
          </div>
          <button className="btn" type="submit" disabled={sending || sent} style={{ alignSelf: 'flex-start', marginTop: 12 }}>
            {sent ? 'Missatge enviat! Gràcies ✓' : (sending ? 'Enviant…' : 'Envia →')}
          </button>
        </form>
      </section>
    </main>
  );
}

// ─── INSCRIPCIÓ / MATRÍCULA PER PASSOS ───────────────────────────────────

const DEFAULT_PREUS = [
  // MATRÍCULES
  { id: 'matricula', nom: "Matrícula d'inscripció anual (Activitats grupals)", categoria: 'General', preu: 55, tipus: 'unica', descripcio: "Quota d'alta anual per a activitats grupals", visible: 'si' },
  { id: 'matricula_ind', nom: "Matrícula d'inscripció anual (Classes individuals)", categoria: 'General', preu: 80, tipus: 'unica', descripcio: "Quota d'alta anual per a classes individuals", visible: 'si' },

  // ACTIVITATS GRUPALS
  { id: 'dansa_musica_familia', nom: 'TALLER DE DANSA I MÚSICA EN FAMÍLIA', categoria: 'Grupals', preu: 40, tipus: 'mensual', descripcio: '0-2 anys (nadons acompanyats de família)', visible: 'si' },
  { id: 'minimusica_1', nom: 'MINIMÚSICA 1', categoria: 'Grupals', preu: 45, tipus: 'mensual', descripcio: 'I2 — infants a partir de 2 anys', visible: 'si' },
  { id: 'minimusica_2', nom: 'MINIMÚSICA 2', categoria: 'Grupals', preu: 45, tipus: 'mensual', descripcio: 'I3 — infants a partir de 3 anys', visible: 'si' },
  { id: 'musica_moviment_1', nom: 'MÚSICA I MOVIMENT 1', categoria: 'Grupals', preu: 45, tipus: 'mensual', descripcio: 'I4 — infants a partir de 4 anys', visible: 'si' },
  { id: 'musica_moviment_2', nom: 'MÚSICA I MOVIMENT 2', categoria: 'Grupals', preu: 45, tipus: 'mensual', descripcio: 'I5 — infants a partir de 5 anys', visible: 'si' },
  { id: 'llenguatge_1', nom: 'LLENGUATGE MUSICAL 1', categoria: 'Grupals', preu: 47, tipus: 'mensual', descripcio: '1r-2n — infants de Cicle Inicial', visible: 'si' },
  { id: 'llenguatge_2', nom: 'LLENGUATGE MUSICAL 2', categoria: 'Grupals', preu: 47, tipus: 'mensual', descripcio: '3r-4t — infants de Cicle Mitjà', visible: 'si' },
  { id: 'llenguatge_3', nom: 'LLENGUATGE MUSICAL 3', categoria: 'Grupals', preu: 47, tipus: 'mensual', descripcio: '5È-6È — infants de Cicle Superior', visible: 'si' },
  { id: 'llenguatge_4', nom: 'LLENGUATGE MUSICAL 4', categoria: 'Grupals', preu: 47, tipus: 'mensual', descripcio: "1r-2n ESO — alumnes de primer cicle d'ESO", visible: 'si' },
  { id: 'llenguatge_5', nom: 'LLENGUATGE MUSICAL 5', categoria: 'Grupals', preu: 47, tipus: 'mensual', descripcio: "3r-4t ESO — alumnes de segon cicle d'ESO", visible: 'si' },
  { id: 'conjunt_instrumental', nom: 'CONJUNT INSTRUMENTAL', categoria: 'Grupals', preu: 30, tipus: 'mensual', descripcio: "A partir del 2n any d'instrument", visible: 'si' },
  { id: 'big_band', nom: 'BIG BAND', categoria: 'Grupals', preu: 30, tipus: 'mensual', descripcio: 'Joves i adults (vent)', visible: 'si' },
  { id: 'improvisacio', nom: 'IMPROVISACIÓ', categoria: 'Grupals', preu: 25, tipus: 'mensual', descripcio: 'Adults que toquin un instrument amb solvència', visible: 'si' },
  { id: 'cant_coral_social', nom: 'CANT CORAL SOCIAL', categoria: 'Grupals', preu: 20, tipus: 'mensual', descripcio: 'Infants de 6 a 14 anys (SENSE MATRÍCULA)', senseMatricula: true, visible: 'si' },
  { id: 'teatre_musical', nom: 'TEATRE MUSICAL', categoria: 'Grupals', preu: 35, tipus: 'mensual', descripcio: 'Infants a partir de 7 anys', visible: 'si' },
  { id: 'cor_noies', nom: 'COR DE NOIES', categoria: 'Grupals', preu: 25, tipus: 'mensual', descripcio: 'Noies i dones adultes', visible: 'si' },
  { id: 'cor_cambra', nom: 'COR DE CAMBRA', categoria: 'Grupals', preu: 25, tipus: 'mensual', descripcio: 'Dones i homes adults', visible: 'si' },

  // CLASSES INDIVIDUALS
  { id: 'ind_30min', nom: "CLASS. INDIVIDUAL D'INSTRUMENT (30 min/setmana)", categoria: 'Classes Individuals', preu: 65, tipus: 'mensual', descripcio: 'Franja de 30 minuts setmanals. Matrícula anual 80€', isIndividual: true, visible: 'si' },
  { id: 'ind_45min', nom: "CLASS. INDIVIDUAL D'INSTRUMENT (45 min/setmana)", categoria: 'Classes Individuals', preu: 85, tipus: 'mensual', descripcio: 'Franja de 45 minuts setmanals. Matrícula anual 80€', isIndividual: true, visible: 'si' },
  { id: 'ind_60min', nom: "CLASS. INDIVIDUAL D'INSTRUMENT (60 min/setmana)", categoria: 'Classes Individuals', preu: 105, tipus: 'mensual', descripcio: 'Franja de 60 minuts setmanals. Matrícula anual 80€', isIndividual: true, visible: 'si' },
];

const INSTRUMENTS_LIST = [
  'Piano',
  'Violí',
  'Violoncel',
  'Clarinet',
  'Flauta travessera',
  'Saxo',
  'Bateria / Percussió',
  'Guitarra Elèctrica',
];

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

function parsePreusCSV(text) {
  const lines = text.trim().replace(/\r\n/g, '\n').replace(/\r/g, '\n').split('\n');
  if (lines.length < 2) return null;
  const header = lines[0].toLowerCase();
  if (header.includes('hora') || header.includes('imatge') || !header.includes('preu')) {
    return null;
  }
  const items = [];
  for (let i = 1; i < lines.length; i++) {
    const cols = parseCSVLine(lines[i]);
    if (cols.length >= 4) {
      const [id, nom, categoria, preu, tipus, descripcio, visible] = cols;
      if (['si', 'sí', '1', 'true'].includes((visible || 'si').toLowerCase().trim())) {
        const cleanPreu = parseFloat((preu || '').toString().replace(/[^0-9.,]/g, '').replace(',', '.')) || 0;
        const textFull = `${nom || ''} ${descripcio || ''} ${categoria || ''}`.toLowerCase();
        const isFreeMatricula = textFull.includes('sense matrícula') || textFull.includes('sense matricula');
        const isInd = textFull.includes('individual') || (id || '').includes('ind_');
        items.push({
          id: id || `item_${i}`,
          nom: nom || '',
          categoria: categoria || 'General',
          preu: cleanPreu,
          tipus: (tipus || 'mensual').toLowerCase().trim(),
          descripcio: descripcio || '',
          senseMatricula: isFreeMatricula,
          isIndividual: isInd,
          visible: visible || 'si',
        });
      }
    }
  }
  return items.length > 0 ? items : null;
}

function parseInstrumentsCSV(text) {
  const lines = text.trim().replace(/\r\n/g, '\n').replace(/\r/g, '\n').split('\n');
  if (lines.length < 2) return null;
  const list = [];
  for (let i = 1; i < lines.length; i++) {
    const cols = parseCSVLine(lines[i]);
    if (cols.length >= 1) {
      const nom = cols[0];
      const visible = cols.length > 1 ? cols[cols.length - 1] : 'si';
      if (nom && ['si', 'sí', '1', 'true', ''].includes((visible || 'si').toLowerCase().trim())) {
        list.push(nom);
      }
    }
  }
  return list.length > 0 ? list : null;
}

function PreusTaula({ preusList = DEFAULT_PREUS, selectedCourses = [], toggleCourse, onSelectCourse }) {
  const [activeTab, setActiveTab] = useState('tots');

  const source = preusList && preusList.length > 0 ? preusList : DEFAULT_PREUS;

  // Extraiem les categories úniques dels cursos visibles (excloent 'General')
  const dynamicCategories = Array.from(
    new Set(
      source
        .filter(p => p.tipus !== 'unica' && p.categoria && p.categoria !== 'General')
        .map(p => p.categoria)
    )
  );

  const categories = [
    { id: 'tots', label: 'Tots els programes' },
    ...dynamicCategories.map(cat => ({ id: cat, label: cat }))
  ];

  const itemsFiltered = activeTab === 'tots'
    ? source.filter(p => p.tipus !== 'unica')
    : source.filter(p => p.tipus !== 'unica' && p.categoria === activeTab);

  return (
    <section className="section-preus" style={{ margin: '32px 0' }}>
      <div style={{
        background: 'var(--paper)',
        borderRadius: 12,
        border: 'var(--hairline)',
        padding: 'clamp(24px, 4vw, 40px)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 16, marginBottom: 24 }}>
          <div>
            <span className="eyebrow">— Tarifes i Blocs Curs 2026/27</span>
            <h2 className="serif" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', margin: '6px 0 0' }}>
              Quotes <em>segons Programes</em>
            </h2>
            <p style={{ margin: '8px 0 0', fontSize: 14, color: 'var(--muted)' }}>
              Clica a qualsevol programa per afegir-lo o treure'l de la teva inscripció directament.
            </p>
          </div>
        </div>

        {/* Categoria Filter Pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 28 }}>
          {categories.map(cat => (
            <button
              key={cat.id}
              className={'chip' + (activeTab === cat.id ? ' active' : '')}
              onClick={() => setActiveTab(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid de Programes i Quotes */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16, marginBottom: 32 }}>
          {itemsFiltered.map(item => {
            const isSelected = selectedCourses.includes(item.id);
            return (
              <div
                key={item.id}
                onClick={() => {
                  if (toggleCourse) {
                    toggleCourse(item.id);
                    if (!isSelected && onSelectCourse) {
                      onSelectCourse();
                    }
                  }
                }}
                style={{
                  background: isSelected ? '#ffffff' : 'var(--bg)',
                  border: isSelected ? '2px solid var(--accent)' : 'var(--hairline)',
                  borderRadius: 8,
                  padding: '18px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: 12,
                  cursor: toggleCourse ? 'pointer' : 'default',
                  transition: 'all 0.2s ease',
                  boxShadow: isSelected ? '0 4px 14px rgba(201, 71, 43, 0.12)' : 'none',
                  transform: isSelected ? 'translateY(-2px)' : 'none'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                    <span className="eyebrow" style={{ fontSize: 10, color: 'var(--accent)' }}>
                      {item.categoria}
                    </span>
                    {toggleCourse && (
                      <span style={{
                        fontSize: 10,
                        fontWeight: 700,
                        fontFamily: 'var(--mono)',
                        padding: '3px 8px',
                        borderRadius: 4,
                        background: isSelected ? 'var(--accent)' : 'var(--paper)',
                        color: isSelected ? '#ffffff' : 'var(--muted)',
                        border: isSelected ? 'none' : 'var(--hairline)'
                      }}>
                        {isSelected ? '✓ SELECCIONAT' : '+ AFEGIR'}
                      </span>
                    )}
                  </div>
                  <h4 style={{ margin: 0, fontSize: 16, fontWeight: 600, color: 'var(--ink)' }}>{item.nom}</h4>
                  {item.descripcio && (
                    <p style={{ margin: '6px 0 0', fontSize: 13, color: 'var(--muted)', lineHeight: 1.4 }}>{item.descripcio}</p>
                  )}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 10, borderTop: 'var(--hairline)' }}>
                  <span style={{ fontSize: 11, color: 'var(--muted)', textTransform: 'uppercase', fontFamily: 'var(--mono)' }}>
                    {item.senseMatricula ? 'Sense Matrícula' : (item.isIndividual ? 'Matrícula: 80€' : 'Matrícula: 55€')}
                  </span>
                  <span className="course-price-badge" style={{ fontSize: 15 }}>{item.preu} €/mes</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Resum de Matrícules, Proves i Descomptes */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, borderTop: 'var(--hairline)', paddingTop: 28 }}>
          <div style={{ background: 'var(--bg)', padding: 20, borderRadius: 8, border: 'var(--hairline)' }}>
            <span className="eyebrow" style={{ color: 'var(--accent)' }}>— Quota d'alta Anual</span>
            <h4 style={{ margin: '4px 0 10px', fontSize: 18 }}>Matrícules</h4>
            <ul style={{ margin: 0, paddingLeft: 18, fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.6 }}>
              <li><strong>55 €</strong>: Activitats i programes grupals</li>
              <li><strong>80 €</strong>: Classes d'instrument individual</li>
            </ul>
          </div>

          <div style={{ background: 'var(--bg)', padding: 20, borderRadius: 8, border: 'var(--hairline)' }}>
            <span className="eyebrow" style={{ color: 'var(--accent)' }}>— Provador d'Instrument</span>
            <h4 style={{ margin: '4px 0 10px', fontSize: 18 }}>Classes de Prova</h4>
            <ul style={{ margin: 0, paddingLeft: 18, fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.6 }}>
              <li><strong>25 €</strong>: Sessió de 30 minuts</li>
              <li><strong>30 €</strong>: Sessió de 45 minuts</li>
              <li><strong>40 €</strong>: Sessió d'1 hora</li>
            </ul>
          </div>

          <div style={{ background: 'var(--bg)', padding: 20, borderRadius: 8, border: 'var(--hairline)', gridColumn: '1 / -1' }}>
            <span className="eyebrow" style={{ color: 'var(--accent)' }}>— Bonificacions</span>
            <h4 style={{ margin: '4px 0 10px', fontSize: 18 }}>Taula de Descomptes (no acumulables)</h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 14, marginTop: 12 }}>
              <div style={{ fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.4 }}>
                <strong style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                  <Users size={14} style={{ color: 'var(--accent)' }} /> 2 membres de la família
                </strong><br />
                En activitat de conjunt (tots dos): <strong>-10%</strong>
              </div>
              <div style={{ fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.4 }}>
                <strong style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                  <Target size={14} style={{ color: 'var(--accent)' }} /> 3 o més activitats
                </strong><br />
                Si una d'elles és de conjunt: <strong>-10%</strong>
              </div>
              <div style={{ fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.4 }}>
                <strong style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                  <Calendar size={14} style={{ color: 'var(--accent)' }} /> Pagament Trimestral
                </strong><br />
                Set-des / gen-març / abr-juny: <strong>-7%</strong>
              </div>
              <div style={{ fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.4 }}>
                <strong style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                  <Calendar size={14} style={{ color: 'var(--accent)' }} /> Pagament Semestral
                </strong><br />
                Set-gen / febrer-juny: <strong>-10%</strong>
              </div>
              <div style={{ fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.4 }}>
                <strong style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                  <Calendar size={14} style={{ color: 'var(--accent)' }} /> Pagament Anual
                </strong><br />
                Setembre - juny (un sol pagament): <strong>-13%</strong>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function Inscripcio({ setPage }) {
  useReveal();
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  // Carregar preus des de Google Sheets
  const [preusList, setPreusList] = useState(DEFAULT_PREUS);
  const [instrumentsList, setInstrumentsList] = useState(INSTRUMENTS_LIST);

  useEffect(() => {
    const SHEET_ID = '1iitej3cDu3K0v1ZjSOGWWjlvRDCA-IFX_NGdH4Gn9yo';
    const PREUS_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS6dn96ihqnjp5Rh_ti-xKcSD9BN2B0hxjOtc_c6sLDt-9O98PSh1sw32xxlUV4SBhxIg3FW7PdFCaH/pub?gid=193777705&single=true&output=csv';
    const PREUS_CSV_ALT = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv`;
    const INSTRUMENTS_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS6dn96ihqnjp5Rh_ti-xKcSD9BN2B0hxjOtc_c6sLDt-9O98PSh1sw32xxlUV4SBhxIg3FW7PdFCaH/pub?gid=2066170543&single=true&output=csv';

    fetch(`${PREUS_CSV_URL}&_t=${Date.now()}`, { cache: 'no-store' })
      .then(r => r.ok ? r.text() : fetch(`${PREUS_CSV_ALT}&_t=${Date.now()}`, { cache: 'no-store' }).then(r2 => r2.ok ? r2.text() : Promise.reject(r2.status)))
      .then(text => {
        const parsed = parsePreusCSV(text);
        if (parsed) setPreusList(parsed);
      })
      .catch(() => { });

    fetch(`${INSTRUMENTS_CSV_URL}&_t=${Date.now()}`, { cache: 'no-store' })
      .then(r => r.ok ? r.text() : Promise.reject(r.status))
      .then(text => {
        const parsed = parseInstrumentsCSV(text);
        if (parsed) setInstrumentsList(parsed);
      })
      .catch(() => { });
  }, []);

  const [instrumentError, setInstrumentError] = useState(false);
  const [showNoCourseModal, setShowNoCourseModal] = useState(false);

  const [form, setForm] = useState({
    seu: 'girona',
    selectedCourses: [],
    instrument: '',
    nomAlumne: '',
    dataNaixement: '',
    dniAlumne: '',
    dniPares: '',
    adreca: '',
    poblacio: '',
    telefAlumne: '',
    correuAlumne: '',
    nomPares: '',
    telefPares: '',
    correuPares: '',
    tsi: '',
    alergies: '',
    iban: '',
    autoritzacioImatge: false,
    acceptaTermes: false,
    acceptaReglament: false,
    websiteHoneypot: '', // Camp anti-bots ocult
  });

  const toggleCourse = (id) => {
    setForm(f => {
      const exists = f.selectedCourses.includes(id);
      const updated = exists ? f.selectedCourses.filter(c => c !== id) : [...f.selectedCourses, id];
      return { ...f, selectedCourses: updated };
    });
  };

  const updateForm = (field, val) => {
    setForm(f => ({ ...f, [field]: val }));
  };

  // Calculadora de preus
  const cursosActius = preusList.filter(p => p.tipus !== 'unica' && form.selectedCourses.includes(p.id));
  const subtotalMensual = cursosActius.reduce((sum, c) => sum + (c.preu || 0), 0);

  const teCursInstrument = cursosActius.some(c =>
    c.isIndividual ||
    (c.categoria && (c.categoria.toLowerCase().includes('instrument') || c.categoria.toLowerCase().includes('individual') || c.categoria.toLowerCase().includes('pack'))) ||
    (c.nom && (c.nom.toLowerCase().includes('instrument') || c.nom.toLowerCase().includes('individual') || c.nom.toLowerCase().includes('col·lectiva'))) ||
    (c.id && (c.id.includes('ind_') || c.id.includes('col_') || c.id.includes('pack_') || c.id.includes('roda_')))
  );

  const handleNextStep1 = () => {
    if (cursosActius.length === 0) {
      setShowNoCourseModal(true);
      return;
    }
    if (teCursInstrument && (!form.instrument || form.instrument.trim() === '')) {
      setInstrumentError(true);
      const instEl = document.getElementById('instrument-select-box');
      if (instEl) {
        instEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        const wizardEl = document.getElementById('wizard-form');
        if (wizardEl) wizardEl.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }
    setInstrumentError(false);
    setStep(2);
    const wizardEl = document.getElementById('wizard-form');
    if (wizardEl) wizardEl.scrollIntoView({ behavior: 'smooth' });
  };

  // Determinació dinàmica de la Matrícula:
  // - 80 € si s'ha seleccionat alguna classe individual
  // - 55 € si s'han seleccionat activitats grupals
  // - 0 € si només s'ha triat 'Cant Coral Social' / 'Sense Matrícula' o cap curs
  let matriculaPreu = 0;
  if (cursosActius.length > 0) {
    const teIndividual = cursosActius.some(c => c.isIndividual || c.id.includes('ind_'));
    const teGrupalStandard = cursosActius.some(c => !c.senseMatricula && c.id !== 'cant_coral_social');
    if (teIndividual) {
      matriculaPreu = 80;
    } else if (teGrupalStandard) {
      matriculaPreu = 55;
    } else {
      matriculaPreu = 0;
    }
  }
  const totalPrimerPagament = subtotalMensual + matriculaPreu;

  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.websiteHoneypot) {
      setSubmitted(true);
      return;
    }
    setIsSending(true);

    const payload = {
      tipusFormulari: 'INSCRIPCIO_CURS',
      timestamp: new Date().toLocaleString('ca-ES'),
      seu: form.seu === 'girona' ? 'Girona (C/ Campcardós, 39)' : 'Banyoles (Camí Can Boada, 61)',
      nomAlumne: form.nomAlumne.trim(),
      dataNaixement: form.dataNaixement.trim(),
      dniAlumne: form.dniAlumne.trim(),
      tsi: form.tsi.trim(),
      nomPares: form.nomPares.trim(),
      dniPares: form.dniPares.trim(),
      telefPares: form.telefPares.trim(),
      correuPares: form.correuPares.trim(),
      adreca: form.adreca.trim(),
      alergies: (form.alergies || 'Cap').trim(),
      cursos: cursosActius.map(c => c.nom).join(', '),
      instrument: form.instrument,
      subtotalMensual: `${subtotalMensual} €/mes`,
      matricula: `${matriculaPreu} €`,
      totalPrimerPagament: `${totalPrimerPagament} €`,
      iban: form.iban.replace(/\s+/g, '').toUpperCase(),
      autoritzacioImatge: form.autoritzacioImatge ? 'Sí' : 'No',
      acceptaReglament: form.acceptaReglament ? 'Sí' : 'No',
      destinatariMail: 'info@claudefaula.cat',
    };

    const clearSensitiveData = () => {
      setForm(f => ({
        ...f,
        nomAlumne: '',
        dataNaixement: '',
        dniAlumne: '',
        dniPares: '',
        adreca: '',
        poblacio: '',
        telefAlumne: '',
        correuAlumne: '',
        nomPares: '',
        telefPares: '',
        correuPares: '',
        tsi: '',
        alergies: '',
        iban: '',
      }));
    };

    if (DEFAULT_WEBHOOK_URL) {
      fetch(DEFAULT_WEBHOOK_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload)
      })
        .then(() => {
          clearSensitiveData();
          setIsSending(false);
          setSubmitted(true);
        })
        .catch(() => {
          clearSensitiveData();
          setIsSending(false);
          setSubmitted(true);
        });
    } else {
      setTimeout(() => {
        clearSensitiveData();
        setIsSending(false);
        setSubmitted(true);
      }, 500);
    }
  };

  if (submitted) {
    return (
      <main style={{ padding: 'clamp(60px, 8vw, 120px) var(--pad)', textAlign: 'center', maxWidth: '720px', margin: '0 auto' }}>
        <span className="eyebrow" style={{ display: 'block', marginBottom: 16 }}>— Confirmació d'inscripció</span>
        <h1 className="serif" style={{ fontSize: 'clamp(36px, 5vw, 64px)', marginBottom: 16 }}>Inscripció <em>rebuda.</em></h1>
        <p className="lede" style={{ color: 'var(--muted)', fontSize: 20, marginBottom: 32 }}>
          Gràcies per matricular-te a Claudefaula! Hem rebut la teva sol·licitud per a la seu de <strong>{form.seu === 'girona' ? 'Girona (C/ Campcardós, 39)' : 'Banyoles (Camí Can Boada, 61)'}</strong>. Et respondrem en menys de 48 hores per confirmar l'horari i els detalls del curs.
        </p>
        <button className="btn" onClick={() => { setSubmitted(false); setStep(1); setPage('home'); }}>
          Tornar a l'inici →
        </button>
      </main>
    );
  }

  return (
    <main className="inscripcio-page">
      <section className="page-hero">
        <div className="page-hero-inner">
          <h1>Full d'<em>Inscripció</em></h1>
          <div className="page-hero-side">
            <span className="eyebrow">— Curs 2026–2027</span>
            <p className="lede reveal">
              Omple el formulari per matricular-te a l'escola. Els preus i la matrícula es calculen automàticament.
            </p>
          </div>
        </div>
      </section>

      {/* BARRA DE PROGRESS DELS PASSOS */}
      <div className="wizard-bar" id="wizard-form">
        <div className={'wizard-step-tab' + (step === 1 ? ' active' : '')} onClick={() => setStep(1)}>
          <span className="step-num">1</span> <span>Seu & Activitats</span>
        </div>
        <div className={'wizard-step-tab' + (step === 2 ? ' active' : '')} onClick={() => setStep(2)}>
          <span className="step-num">2</span> <span>Dades Alumne i Família</span>
        </div>
        <div className={'wizard-step-tab' + (step === 3 ? ' active' : '')} onClick={() => setStep(3)}>
          <span className="step-num">3</span> <span>Pagament & Confirmació</span>
        </div>
      </div>

      <div className="inscripcio-grid">
        {/* FORMULARI PRINCIPAL (ESQUERRA) */}
        <div className="wizard-content">

          {/* PAS 1: SEU I ACTIVITATS */}
          {step === 1 && (
            <div className="wizard-step">
              <h3>1. Selecciona la Seu</h3>
              <div className="seu-selector-grid" style={{ marginBottom: 32 }}>
                <div
                  className={'seu-card' + (form.seu === 'girona' ? ' selected' : '')}
                  onClick={() => updateForm('seu', 'girona')}
                >
                  <input type="radio" name="seu" checked={form.seu === 'girona'} readOnly />
                  <div>
                    <strong>Claudefaula Girona</strong>
                    <p>C/ Campcardós, 39 — Sta. Eugènia</p>
                  </div>
                </div>
                <div
                  className={'seu-card' + (form.seu === 'banyoles' ? ' selected' : '')}
                  onClick={() => updateForm('seu', 'banyoles')}
                >
                  <input type="radio" name="seu" checked={form.seu === 'banyoles'} readOnly />
                  <div>
                    <strong>El Molí de Banyoles</strong>
                    <p>Camí Can Boada, 61 — Banyoles</p>
                  </div>
                </div>
              </div>

              <h3>2. Tria les Activitats / Cursos</h3>
              <p style={{ color: 'var(--muted)', fontSize: 14, marginTop: -8, marginBottom: 16 }}>
                Pots triar una o més activitats clicant a sobre de cada targeta.
              </p>

              <PreusTaula
                preusList={preusList}
                selectedCourses={form.selectedCourses}
                toggleCourse={toggleCourse}
              />

              {/* SELECCIÓ D'INSTRUMENT SI S'HA MARCAT UN CURS D'INSTRUMENT */}
              <div
                id="instrument-select-box"
                style={{
                  marginTop: 28,
                  background: teCursInstrument ? 'var(--paper)' : 'var(--bg)',
                  padding: 20,
                  borderRadius: 8,
                  border: (instrumentError && teCursInstrument) ? '2px solid var(--accent)' : 'var(--hairline)',
                  boxShadow: (instrumentError && teCursInstrument) ? '0 0 12px rgba(201, 71, 43, 0.15)' : 'none',
                  transition: 'all 0.2s ease'
                }}>
                <label style={{
                  fontFamily: 'var(--mono)',
                  fontSize: 11,
                  textTransform: 'uppercase',
                  color: (instrumentError && teCursInstrument) ? 'var(--accent)' : (teCursInstrument ? 'var(--accent)' : 'var(--muted)'),
                  display: 'block',
                  marginBottom: 8,
                  fontWeight: 600
                }}>
                  Tria d'Instrument Principal {teCursInstrument ? ' * (Obligatori)' : '(Opcional)'}
                </label>
                <select
                  value={form.instrument}
                  onChange={(e) => {
                    updateForm('instrument', e.target.value);
                    if (e.target.value) setInstrumentError(false);
                  }}
                  style={{
                    width: '100%',
                    padding: '11px 14px',
                    fontSize: 15,
                    borderRadius: 6,
                    border: (instrumentError && teCursInstrument) ? '1.5px solid var(--accent)' : 'var(--hairline)',
                    background: 'var(--bg)',
                    color: form.instrument ? 'var(--ink)' : 'var(--muted)'
                  }}
                >
                  <option value="">-- Selecciona el teu instrument --</option>
                  {instrumentsList.map((inst, i) => (
                    <option key={i} value={inst}>{inst}</option>
                  ))}
                </select>
                {instrumentError && teCursInstrument && (
                  <p style={{ color: 'var(--accent)', fontSize: 13, fontWeight: 600, marginTop: 8, margin: '8px 0 0', display: 'flex', alignItems: 'center', gap: 6 }}>
                    <AlertCircle size={15} /> És obligatori seleccionar un instrument principal per al curs d'instrument triat.
                  </p>
                )}
              </div>

              <button className="btn" style={{ marginTop: 32 }} onClick={handleNextStep1}>
                Continuar a Dades Personals →
              </button>
            </div>
          )}

          {/* PAS 2: DADES PERSONALS */}
          {step === 2 && (
            <form
              className="wizard-step"
              onSubmit={(e) => {
                e.preventDefault();
                setStep(3);
                const wizardEl = document.getElementById('wizard-form');
                if (wizardEl) wizardEl.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <h3>3. Dades de l'Alumne</h3>
              <div className="form-grid-2">
                <div className="field">
                  <label>Nom i Cognoms (Alumne) *</label>
                  <input
                    type="text"
                    required
                    placeholder="Nom complet"
                    value={form.nomAlumne}
                    onChange={(e) => updateForm('nomAlumne', e.target.value)}
                  />
                </div>
                <div className="field">
                  <label>Data de Naixement (dd/mm/aaaa) *</label>
                  <input
                    type="text"
                    required
                    placeholder="01/01/2012"
                    value={form.dataNaixement}
                    onChange={(e) => updateForm('dataNaixement', e.target.value)}
                  />
                </div>
                <div className="field">
                  <label>DNI de l'Alumne *</label>
                  <input
                    type="text"
                    required
                    autoComplete="off"
                    data-lpignore="true"
                    data-1p-ignore="true"
                    placeholder="12345678X"
                    value={form.dniAlumne}
                    onChange={(e) => updateForm('dniAlumne', e.target.value)}
                  />
                </div>
                <div className="field">
                  <label>Número Targeta Sanitària (TSI) *</label>
                  <input
                    type="text"
                    required
                    autoComplete="off"
                    data-lpignore="true"
                    data-1p-ignore="true"
                    placeholder="TSI 123456789"
                    value={form.tsi}
                    onChange={(e) => updateForm('tsi', e.target.value)}
                  />
                </div>
              </div>

              <h3 style={{ marginTop: 32 }}>Dades de la Família / Tutors</h3>
              <div className="form-grid-2">
                <div className="field">
                  <label>Nom dels Pares o Tutors *</label>
                  <input
                    type="text"
                    required
                    placeholder="Nom pare/mare/tutor"
                    value={form.nomPares}
                    onChange={(e) => updateForm('nomPares', e.target.value)}
                  />
                </div>
                <div className="field">
                  <label>DNI Pares o Tutors (si l'alumne és menor)</label>
                  <input
                    type="text"
                    autoComplete="off"
                    data-lpignore="true"
                    data-1p-ignore="true"
                    placeholder="87654321Y"
                    value={form.dniPares}
                    onChange={(e) => updateForm('dniPares', e.target.value)}
                  />
                </div>
                <div className="field">
                  <label>Telèfon de Contacte *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+34 600 000 000"
                    value={form.telefPares}
                    onChange={(e) => updateForm('telefPares', e.target.value)}
                  />
                </div>
                <div className="field">
                  <label>Correu Electrònic *</label>
                  <input
                    type="email"
                    required
                    placeholder="correu@familia.cat"
                    value={form.correuPares}
                    onChange={(e) => updateForm('correuPares', e.target.value)}
                  />
                </div>
                <div className="field" style={{ gridColumn: '1 / -1' }}>
                  <label>Adreça i CP *</label>
                  <input
                    type="text"
                    required
                    placeholder="Carrer, número, pis, CP i població"
                    value={form.adreca}
                    onChange={(e) => updateForm('adreca', e.target.value)}
                  />
                </div>
                <div className="field" style={{ gridColumn: '1 / -1' }}>
                  <label>Intoleràncies o Al·lèrgies</label>

                  <input
                    type="text"
                    autoComplete="off"
                    placeholder="Cap, o bé al·lèrgia a..."
                    value={form.alergies}
                    onChange={(e) => updateForm('alergies', e.target.value)}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', gap: 16, marginTop: 32 }}>
                <button type="button" className="btn" style={{ background: 'var(--bg-2)', color: 'var(--ink)' }} onClick={() => setStep(1)}>
                  ← Enrere
                </button>
                <button type="submit" className="btn">
                  Continuar a Pagament →
                </button>
              </div>
            </form>
          )}

          {/* PAS 3: PAGAMENT I CONFIRMACIÓ */}
          {step === 3 && (
            <form className="wizard-step" onSubmit={handleSubmit} autoComplete="off">
              {/* Camp ocult anti-spam (honeypot) */}
              <input
                type="text"
                name="website_url"
                tabIndex="-1"
                autoComplete="off"
                value={form.websiteHoneypot}
                onChange={(e) => updateForm('websiteHoneypot', e.target.value)}
                style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0, width: 0 }}
                aria-hidden="true"
              />
              <h3>4. Dades de Recepta Bancària</h3>
              <div className="field">
                <label>Número de Compte (IBAN) per als rebuts mensuals *</label>
                <input
                  type="text"
                  required
                  autoComplete="off"
                  data-lpignore="true"
                  data-1p-ignore="true"
                  data-form-type="other"
                  spellCheck="false"
                  placeholder="ES00 0000 0000 0000 0000 0000"
                  value={form.iban}
                  onChange={(e) => updateForm('iban', e.target.value)}
                />
              </div>

              <h3 style={{ marginTop: 32 }}>Autoritzacions i Protecció de Dades</h3>

              <div style={{
                background: 'var(--paper)',
                padding: '20px 22px',
                borderRadius: 8,
                border: '1px solid var(--accent)',
                marginBottom: 20,
                boxShadow: '0 2px 8px rgba(201, 71, 43, 0.06)'
              }}>
                <span className="eyebrow" style={{ display: 'block', marginBottom: 8, color: 'var(--accent)', fontWeight: 600 }}>
                  — Reglament de l'Escola
                </span>
                <p style={{ margin: '0 0 12px', fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.45 }}>
                  Abans de finalitzar la inscripció, pots consultar el reglament de règim intern del centre Claudefaula:
                </p>
                <a
                  href={`${import.meta.env.BASE_URL}reglament_regim_intern_26_27.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--accent)', textDecoration: 'underline', fontWeight: 600, fontSize: 14, marginBottom: 14 }}
                >
                  <FileText size={16} /> Consulta / Descarrega el Reglament de Règim Intern (PDF) ↗
                </a>

                <label style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 10,
                  cursor: 'pointer',
                  fontSize: 14,
                  fontWeight: 600,
                  color: 'var(--ink)',
                  paddingTop: 14,
                  borderTop: 'var(--hairline)'
                }}>
                  <input
                    type="checkbox"
                    required
                    checked={form.acceptaReglament}
                    onChange={(e) => updateForm('acceptaReglament', e.target.checked)}
                    style={{ accentColor: 'var(--accent)', width: 17, height: 17, marginTop: 2, cursor: 'pointer' }}
                  />
                  <span>He llegit i accepto el reglament de règim intern del centre Claudefaula *</span>
                </label>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <label style={{ display: 'flex', alignItems: 'flex-start', gap: 10, cursor: 'pointer', fontSize: 14 }}>
                  <input
                    type="checkbox"
                    checked={form.autoritzacioImatge}
                    onChange={(e) => updateForm('autoritzacioImatge', e.target.checked)}
                  />
                  <span>Autoritzo l'ús d'imatges i gravacions de l'alumne/a per a les activitats pedagògiques i de difusió de l'escola.</span>
                </label>
                <label style={{ display: 'flex', alignItems: 'flex-start', gap: 10, cursor: 'pointer', fontSize: 14 }}>
                  <input
                    type="checkbox"
                    required
                    checked={form.acceptaTermes}
                    onChange={(e) => updateForm('acceptaTermes', e.target.checked)}
                  />
                  <span>Accepto les condicions d'inscripció i la política de tractament de dades de Claudefaula. *</span>
                </label>
              </div>

              <div style={{ display: 'flex', gap: 16, marginTop: 36 }}>
                <button type="button" className="btn" style={{ background: 'var(--bg-2)', color: 'var(--ink)' }} onClick={() => setStep(2)}>
                  ← Enrere
                </button>
                <button type="submit" disabled={isSending} className="btn" style={{ background: 'var(--accent)', color: '#fff' }}>
                  {isSending ? 'Enviant inscripció…' : 'Finalitzar Inscripció ✓'}
                </button>
              </div>
            </form>
          )}

        </div>

        {/* CALCULADORA DE PREUS EN TEMPS REAL (DRETA / FLOTANT) */}
        <aside className="price-summary-sidebar">
          <div className="price-summary-card">
            <span className="eyebrow">— Resum de Matrícula</span>
            <h4 style={{ marginTop: 6, marginBottom: 16 }}>Calculadora de Preus</h4>

            <div className="summary-section">
              <div className="summary-row">
                <span>Seu seleccionada:</span>
                <strong>{form.seu === 'girona' ? 'Girona' : 'Banyoles'}</strong>
              </div>
              <div className="summary-row">
                <span>Instrument principal:</span>
                <strong style={{ color: (!form.instrument && teCursInstrument) ? 'var(--accent)' : 'inherit' }}>
                  {form.instrument || (teCursInstrument ? 'Pendent de triar *' : 'Cap')}
                </strong>
              </div>
            </div>

            <hr className="hairline" style={{ margin: '14px 0' }} />

            <div className="summary-section">
              <span className="summary-subtitle">Activitats triades ({cursosActius.length}):</span>
              {cursosActius.length === 0 ? (
                <p style={{ fontSize: 13, color: 'var(--muted)', fontStyle: 'italic' }}>Cap activitat seleccionada</p>
              ) : (
                cursosActius.map(c => (
                  <div key={c.id} className="summary-row">
                    <span>{c.nom}</span>
                    <span>{c.preu} €/mes</span>
                  </div>
                ))
              )}
            </div>

            <hr className="hairline" style={{ margin: '14px 0' }} />

            <div className="summary-section">
              <div className="summary-row">
                <span>Matrícula (alta anual):</span>
                <span>{matriculaPreu} €</span>
              </div>
              <div className="summary-row highlight">
                <span>Quota mensual:</span>
                <strong>{subtotalMensual} € / mes</strong>
              </div>
            </div>

            <div className="summary-total-box">
              <span>Total 1er Pagament:</span>
              <span className="total-amount">{totalPrimerPagament} €</span>
              <small style={{ display: 'block', fontSize: 11, color: 'rgba(255,255,255,0.8)', marginTop: 4 }}>
                (Inclou Matrícula de {matriculaPreu} € + 1a Quota de {subtotalMensual} €)
              </small>
            </div>

            {step === 1 && (
              <button
                className="btn"
                style={{
                  width: '100%',
                  marginTop: 16,
                  background: 'var(--ink)',
                  color: 'var(--bg)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                  padding: '14px 18px',
                  fontSize: 14,
                  fontWeight: 600,
                  boxShadow: '0 4px 14px rgba(0,0,0,0.15)'
                }}
                onClick={handleNextStep1}
              >
                Continuar a Dades Personals →
              </button>
            )}
          </div>
        </aside>
      </div>

      {/* BARRA FLOTANT EN MÒBIL EN SELECCIONAR CURS */}
      {step === 1 && cursosActius.length > 0 && (
        <div className="mobile-floating-next-bar">
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: 13, fontWeight: 700 }}>
              {cursosActius.length} {cursosActius.length === 1 ? 'activitat' : 'activitats'}
            </span>
            <span style={{ fontSize: 12, opacity: 0.9 }}>
              {subtotalMensual} €/mes {matriculaPreu > 0 ? `(+${matriculaPreu}€ mat.)` : ''}
            </span>
          </div>
          <button className="btn" style={{ padding: '10px 18px', fontSize: 14 }} onClick={handleNextStep1}>
            Continuar →
          </button>
        </div>
      )}
      {/* MODAL CORPORATIU D'AVÍS SENSE SELECCIÓ */}
      {showNoCourseModal && (
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
          onClick={() => setShowNoCourseModal(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            style={{
              background: 'var(--paper)',
              border: 'var(--hairline)',
              borderLeft: '4px solid var(--accent)',
              borderRadius: 12,
              padding: 'clamp(28px, 4vw, 40px)',
              maxWidth: 480,
              width: '100%',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.25)',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <span className="eyebrow" style={{ color: 'var(--accent)', display: 'block', marginBottom: 8, fontWeight: 600 }}>
              — Selecció Requerida
            </span>
            <h3 className="serif" style={{ fontSize: 'clamp(26px, 3.5vw, 36px)', margin: '0 0 12px', fontWeight: 400, color: 'var(--ink)' }}>
              Cap activitat <em>seleccionada.</em>
            </h3>
            <p style={{ fontSize: 15, color: 'var(--ink-2)', lineHeight: 1.5, margin: '0 0 24px' }}>
              Si us plau, tria almenys un curs o activitat de la taula per poder continuar amb la teva inscripció.
            </p>
            <button
              className="btn"
              style={{ width: '100%', justifyContent: 'center', background: 'var(--accent)', color: '#ffffff' }}
              onClick={() => setShowNoCourseModal(false)}
            >
              Entesos →
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

const DEFAULT_ESCOLES_DATA = [
  { escola: 'Escola Santa Eugènia', ciutat: 'Girona', activitat: 'Sensibilització Musical (Infantil)', horari: 'Migdia / Tarda', preu: '', visible: 'Si' },
  { escola: 'Escola Santa Eugènia', ciutat: 'Girona', activitat: 'Cant Coral Social (Primària)', horari: 'Migdia / Tarda', preu: '', visible: 'Si' },
  { escola: 'Escola Montfalgars', ciutat: 'Girona', activitat: 'Iniciació i Llenguatge Musical', horari: 'Extraescolar', preu: '', visible: 'Si' },
  { escola: 'Escola Montfalgars', ciutat: 'Girona', activitat: 'Instrument en Grup (Guitarra / Teclat / Percussió)', horari: 'Extraescolar', preu: '', visible: 'Si' },
  { escola: 'Escola Dalmau Carles', ciutat: 'Girona', activitat: 'Sensibilització i Expressió Musical', horari: 'Extraescolar', preu: '', visible: 'Si' },
  { escola: 'Escola Dalmau Carles', ciutat: 'Girona', activitat: 'Coral i Conjunt Instrumental', horari: 'Extraescolar', preu: '', visible: 'Si' },
  { escola: 'Escola de La Draga', ciutat: 'Banyoles', activitat: 'Conjunt Instrumental', horari: 'Extraescolar', preu: '', visible: 'Si' },
  { escola: 'Escola de La Draga', ciutat: 'Banyoles', activitat: 'Coral Escolar', horari: 'Extraescolar', preu: '', visible: 'Si' },
  { escola: 'Escola Camins', ciutat: 'Banyoles', activitat: 'Taller de Minimúsica i Ritme (Infantil)', horari: 'Extraescolar', preu: '', visible: 'Si' },
  { escola: 'Escola Camins', ciutat: 'Banyoles', activitat: 'Iniciació Musical (Primària)', horari: 'Extraescolar', preu: '', visible: 'Si' },
  { escola: 'Escola Baldiri Reixac', ciutat: 'Banyoles', activitat: 'Sensibilització Musical', horari: 'Extraescolar', preu: '', visible: 'Si' },
  { escola: 'Escola Baldiri Reixac', ciutat: 'Banyoles', activitat: 'Llenguatge i Instrument', horari: 'Extraescolar', preu: '', visible: 'Si' },
];

// Enllaç CSV publicat de la pestanya "Escoles" (gid=419728189):
const ESCOLES_CSV_URL = import.meta.env.VITE_ESCOLES_CSV_URL || 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS6dn96ihqnjp5Rh_ti-xKcSD9BN2B0hxjOtc_c6sLDt-9O98PSh1sw32xxlUV4SBhxIg3FW7PdFCaH/pub?gid=419728189&single=true&output=csv';

function parseEscolesCSV(text) {
  const lines = text.trim().replace(/\r\n/g, '\n').replace(/\r/g, '\n').split('\n');
  if (lines.length < 2) return null;
  const header = lines[0].toLowerCase();
  if (!header.includes('escola') && !header.includes('centre')) return null;

  const rows = [];
  for (let i = 1; i < lines.length; i++) {
    const cols = parseCSVLine(lines[i]);
    if (cols.length >= 2) {
      // Admet: escola | ciutat | activitat | horari/descripcio | preu | visible
      // O bé format simplificat: escola | activitat | horari | preu | visible
      let escola = '', ciutat = '', activitat = '', horari = '', preu = '', visible = 'si';
      if (header.includes('ciutat') || header.includes('poblaci')) {
        [escola, ciutat, activitat, horari, preu, visible] = cols;
      } else {
        [escola, activitat, horari, preu, visible] = cols;
      }
      const isVis = ['si', 'sí', '1', 'true', ''].includes((visible || 'si').toLowerCase().trim());
      if (escola && activitat && isVis) {
        // Si algú posa múltiples activitats separades per punt i coma (;) en una sola fila, les desglossem automàticament
        const actParts = activitat.split(';').map(a => a.trim()).filter(Boolean);
        actParts.forEach(actName => {
          rows.push({
            escola: escola.trim(),
            ciutat: (ciutat || '').trim(),
            activitat: actName,
            horari: (horari || '').trim(),
            preu: (preu || '').trim(),
          });
        });
      }
    }
  }
  return rows.length > 0 ? rows : null;
}

const CURSOS_ESCOLARS = [
  'I2 (Llar d\'infants / P2)',
  'I3 (Educació Infantil)',
  'I4 (Educació Infantil)',
  'I5 (Educació Infantil)',
  '1r de Primària',
  '2n de Primària',
  '3r de Primària',
  '4t de Primària',
  '5è de Primària',
  '6è de Primària',
  'ESO / Altres',
];

function Escoles({ setPage }) {
  useReveal();
  const [escolesData, setEscolesData] = useState(DEFAULT_ESCOLES_DATA);
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [actError, setActError] = useState(false);

  useEffect(() => {
    if (!ESCOLES_CSV_URL) return;
    fetch(`${ESCOLES_CSV_URL}${ESCOLES_CSV_URL.includes('?') ? '&' : '?'}_t=${Date.now()}`, { cache: 'no-store' })
      .then(r => r.ok ? r.text() : Promise.reject(r.status))
      .then(text => {
        const parsed = parseEscolesCSV(text);
        if (parsed) setEscolesData(parsed);
      })
      .catch(() => { });
  }, []);

  const [form, setForm] = useState({
    nomAlumne: '',
    escola: '',
    activitats: [],
    cursEscolar: '',
    dataNaixement: '',
    nomPares: '',
    telefon: '',
    correu: '',
    iban: '',
    acceptaTermes: false,
    websiteHoneypot: '',
  });

  // Llista única d'escoles disponibles al Google Sheet
  const escolesUniques = Array.from(new Set(escolesData.map(d => d.escola)));

  // Activitats que es fan a l'escola seleccionada
  const activitatsDisponibles = form.escola
    ? escolesData.filter(d => d.escola === form.escola)
    : [];

  // Agrupació per mostrar targetes informatives de les escoles i les seves activitats
  const escolesResum = escolesUniques.map(nomEscola => {
    const items = escolesData.filter(d => d.escola === nomEscola);
    return {
      nom: nomEscola,
      ciutat: items.find(i => i.ciutat)?.ciutat || '',
      activitats: items.map(i => i.activitat),
    };
  });

  const updateField = (field, val) => {
    setForm(f => ({ ...f, [field]: val }));
  };

  const handleSelectEscola = (novaEscola) => {
    setForm(f => ({
      ...f,
      escola: novaEscola,
      activitats: [], // Reiniciem les activitats quan canvia d'escola
    }));
    setActError(false);
  };

  const toggleActivitat = (actNom) => {
    setForm(f => {
      const exists = f.activitats.includes(actNom);
      const next = exists ? f.activitats.filter(a => a !== actNom) : [...f.activitats, actNom];
      if (next.length > 0) setActError(false);
      return { ...f, activitats: next };
    });
  };

  const handleSubmitEscoles = (e) => {
    e.preventDefault();
    if (form.websiteHoneypot) {
      setSubmitted(true);
      return;
    }
    if (form.activitats.length === 0) {
      setActError(true);
      const box = document.getElementById('escoles-activitats-box');
      if (box) box.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    setIsSending(true);
    const payload = {
      tipusFormulari: 'INSCRIPCIO_ESCOLA_EXTERNA',
      timestamp: new Date().toLocaleString('ca-ES'),
      seu: `A les Escoles: ${form.escola}`,
      nomAlumne: form.nomAlumne.trim(),
      dataNaixement: form.dataNaixement.trim(),
      dniAlumne: `Curs: ${form.cursEscolar}`,
      tsi: '-',
      nomPares: form.nomPares.trim(),
      dniPares: '-',
      telefPares: form.telefon.trim(),
      correuPares: form.correu.trim(),
      adreca: `Escola: ${form.escola} (${form.cursEscolar})`,
      alergies: '-',
      cursos: form.activitats.map(a => `${a} [${form.escola}]`).join(', '),
      instrument: form.cursEscolar,
      subtotalMensual: 'Segons quota escola',
      matricula: '-',
      totalPrimerPagament: '-',
      iban: form.iban.replace(/\s+/g, '').toUpperCase(),
      acceptaReglament: 'Sí',
      destinatariMail: 'info@claudefaula.cat',
    };

    const clearSensitive = () => {
      setForm({
        nomAlumne: '',
        escola: '',
        activitats: [],
        cursEscolar: '',
        dataNaixement: '',
        nomPares: '',
        telefon: '',
        correu: '',
        iban: '',
        acceptaTermes: false,
        websiteHoneypot: '',
      });
    };

    fetch(DEFAULT_WEBHOOK_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(payload),
    })
      .then(() => {
        clearSensitive();
        setIsSending(false);
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      })
      .catch(() => {
        clearSensitive();
        setIsSending(false);
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
  };

  const activitatsEscoles = [
    {
      title: 'Sensibilització',
      age: 'A partir de 3 anys',
      desc: 'Primera aproximació al món sonor. Eines per a l\'expressió i la comunicació a través del cant, el moviment i el joc amb petits instruments.',
    },
    {
      title: 'Dansa',
      age: 'A partir de 3 anys',
      desc: 'Expressió estètica i artística a través del cos. Coneixement corporal i possibilitats expressives i comunicatives a través de tot tipus de música.',
    },
    {
      title: 'Roda d\'instruments',
      age: 'A partir de 3 anys',
      desc: 'Tast de diferents instruments per trimestres en sessions col·lectives de 30\' (vent - corda - percussió).',
    },
    {
      title: 'Llenguatge',
      age: 'A partir de 6 anys',
      desc: 'Fer música amb una primera codificació simple del llenguatge musical sempre a través de la pràctica i el dinamisme.',
    },
    {
      title: 'Cant Coral',
      age: 'A partir de 6 anys',
      desc: 'Descoberta de repertori, exploració de la pròpia veu, goig de cantar plegats. L\'activitat més inclusiva per naturalesa.',
    },
    {
      title: 'Teatre musical',
      age: 'A partir de 6 anys',
      desc: 'Treball d\'arts escèniques a través del cant i la dansa. Petites produccions i improvisacions. Perdre la por a l\'escena, desenvolupar les pròpies capacitats expressives i comunicatives. Treball de cohesió de grup.',
    },
    {
      title: 'Conjunt instrumental',
      age: 'A partir de 6 anys',
      desc: 'Fer música en conjunt és un dels plaers més grans que podem tenir. Buscar un resultat comú com a suma de l\'esforç individual de cadascú.',
    },
    {
      title: 'Instruments',
      age: 'A partir de 6 anys',
      desc: 'Inici a l\'estudi d\'un instrument: ukelele, guitarra, flauta de bec, violí, piano (si n\'hi ha a l\'escola). Classes col·lectives des de 3 alumnes, 45\' setmanals. Instrument a càrrec de l\'alumne.',
    },
  ];

  if (submitted) {
    return (
      <main style={{ padding: 'clamp(60px, 8vw, 120px) var(--pad)', textAlign: 'center', maxWidth: '720px', margin: '0 auto' }}>
        <span className="eyebrow" style={{ display: 'block', marginBottom: 16 }}>— Confirmació d'inscripció escolar</span>
        <h1 className="serif" style={{ fontSize: 'clamp(36px, 5vw, 64px)', marginBottom: 16 }}>Inscripció <em>rebuda.</em></h1>
        <p className="lede" style={{ color: 'var(--muted)', fontSize: 20, marginBottom: 32 }}>
          Gràcies! Hem rebut la inscripció per a les activitats de <strong>Claudefaula a les Escoles</strong>. Ens posarem en contacte amb vosaltres per confirmar l'inici i els detalls del grup.
        </p>
        <button className="btn" onClick={() => { setSubmitted(false); setPage('home'); }}>
          Tornar a l'inici →
        </button>
      </main>
    );
  }

  return (
    <main className="escoles-page">
      <section className="page-hero">
        <div className="page-hero-inner">
          <h1>Claudefaula a les <em>Escoles</em></h1>
          <div className="page-hero-side">
            <span className="eyebrow">— Educació i Comunitat · Curs 2026–2027</span>
            <p className="lede reveal">
              Portem la música i les arts escèniques a les escoles. Inscriu-te a les activitats extraescolars de la teva escola o descarrega el díptic informatiu complet.
            </p>
            <div style={{ marginTop: 20, display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              <a
                href={`${import.meta.env.BASE_URL}diptic_extraescolars_26_27.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  background: 'var(--paper)',
                  color: 'var(--ink)',
                  border: 'var(--hairline)',
                  textDecoration: 'none',
                }}
              >
                <FileText size={16} /> Veure Díptic Extraescolars 26–27 (PDF) ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FORMULARI D'INSCRIPCIÓ A LES ESCOLES */}
      <section id="formulari-escoles" className="section" style={{ padding: 'clamp(32px, 5vw, 64px) var(--pad)', maxWidth: '1040px', margin: '0 auto' }}>
        <div style={{
          background: 'var(--paper)',
          border: 'var(--hairline)',
          borderRadius: 12,
          padding: 'clamp(24px, 4vw, 48px)',
          boxShadow: '0 8px 30px rgba(0,0,0,0.04)'
        }}>
          <div style={{ marginBottom: 28 }}>
            <span className="eyebrow" style={{ color: 'var(--accent)' }}>— Curs 2026–2027 · Extraescolars als Centres</span>
            <h2 className="serif" style={{ fontSize: 'clamp(30px, 4vw, 46px)', margin: '6px 0 8px' }}>
              Inscripció d'Activitats <em>a la teva Escola</em>
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: 15, margin: 0 }}>
              Selecciona l'escola per veure i triar les activitats musicals que s'hi ofereixen aquest curs.
            </p>
          </div>

          <form onSubmit={handleSubmitEscoles} autoComplete="off">
            {/* Camp ocult anti-spam (honeypot) */}
            <input
              type="text"
              name="website_url"
              tabIndex="-1"
              autoComplete="off"
              value={form.websiteHoneypot}
              onChange={(e) => updateField('websiteHoneypot', e.target.value)}
              style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0, width: 0 }}
              aria-hidden="true"
            />

            <div className="form-grid-2">
              <div className="field">
                <label>Nom i cognoms de l'alumne/a *</label>
                <input
                  type="text"
                  required
                  placeholder="Nom i cognoms"
                  value={form.nomAlumne}
                  onChange={(e) => updateField('nomAlumne', e.target.value)}
                />
              </div>

              <div className="field">
                <label>Data de naixement (dd/mm/aaaa) *</label>
                <input
                  type="text"
                  required
                  placeholder="Ex: 15/05/2018"
                  value={form.dataNaixement}
                  onChange={(e) => updateField('dataNaixement', e.target.value)}
                />
              </div>

              <div className="field">
                <label>Escola *</label>
                <select
                  required
                  value={form.escola}
                  onChange={(e) => handleSelectEscola(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    fontSize: 15,
                    borderRadius: 6,
                    border: 'var(--hairline)',
                    background: 'var(--bg)',
                    color: form.escola ? 'var(--ink)' : 'var(--muted)',
                  }}
                >
                  <option value="">-- Selecciona l'escola --</option>
                  {escolesUniques.map((esc, idx) => (
                    <option key={idx} value={esc}>{esc}</option>
                  ))}
                </select>
              </div>

              <div className="field">
                <label>Curs escolar que fa *</label>
                <select
                  required
                  value={form.cursEscolar}
                  onChange={(e) => updateField('cursEscolar', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    fontSize: 15,
                    borderRadius: 6,
                    border: 'var(--hairline)',
                    background: 'var(--bg)',
                    color: form.cursEscolar ? 'var(--ink)' : 'var(--muted)',
                  }}
                >
                  <option value="">-- Selecciona el curs escolar --</option>
                  {CURSOS_ESCOLARS.map((c, idx) => (
                    <option key={idx} value={c}>{c}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* ACTIVITATS DINÀMIQUES SEGONS L'ESCOLA TRIADA */}
            <div
              id="escoles-activitats-box"
              style={{
                marginTop: 24,
                marginBottom: 24,
                padding: 20,
                borderRadius: 8,
                background: 'var(--bg)',
                border: actError ? '2px solid var(--accent)' : 'var(--hairline)',
              }}
            >
              <label style={{
                fontFamily: 'var(--mono)',
                fontSize: 11,
                textTransform: 'uppercase',
                color: actError ? 'var(--accent)' : 'var(--ink)',
                display: 'block',
                marginBottom: 12,
                fontWeight: 600,
                letterSpacing: '0.05em',
              }}>
                Activitats disponibles {form.escola ? `a ${form.escola} *` : '*'}
              </label>

              {!form.escola ? (
                <p style={{ margin: 0, fontSize: 14, color: 'var(--muted)', fontStyle: 'italic' }}>
                  Selecciona primer una escola al desplegable superior per veure les activitats que s'hi fan.
                </p>
              ) : activitatsDisponibles.length === 0 ? (
                <p style={{ margin: 0, fontSize: 14, color: 'var(--muted)' }}>
                  No hi ha activitats registrades per a aquesta escola en aquest moment.
                </p>
              ) : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: 12 }}>
                  {activitatsDisponibles.map((item, idx) => {
                    const isSelected = form.activitats.includes(item.activitat);
                    return (
                      <div
                        key={idx}
                        onClick={() => toggleActivitat(item.activitat)}
                        style={{
                          padding: '14px 16px',
                          borderRadius: 8,
                          background: isSelected ? '#ffffff' : 'var(--paper)',
                          border: isSelected ? '2px solid var(--accent)' : 'var(--hairline)',
                          cursor: 'pointer',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                          gap: 8,
                          transition: 'all 0.18s ease',
                          boxShadow: isSelected ? '0 4px 12px rgba(201, 71, 43, 0.12)' : 'none',
                        }}
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}>
                          <strong style={{ fontSize: 15, color: 'var(--ink)', lineHeight: 1.3 }}>
                            {item.activitat}
                          </strong>
                          <span style={{
                            fontSize: 10,
                            fontFamily: 'var(--mono)',
                            fontWeight: 700,
                            padding: '2px 7px',
                            borderRadius: 4,
                            background: isSelected ? 'var(--accent)' : 'var(--bg)',
                            color: isSelected ? '#fff' : 'var(--muted)',
                            whiteSpace: 'nowrap',
                          }}>
                            {isSelected ? '✓ TRIADA' : '+ TRIAR'}
                          </span>
                        </div>
                        {(item.horari || item.preu) && (
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 12, color: 'var(--muted)', paddingTop: 6, borderTop: 'var(--hairline)' }}>
                            <span>{item.horari}</span>
                            {item.preu && <strong style={{ color: 'var(--accent)' }}>{item.preu.includes('€') ? item.preu : `${item.preu} €/mes`}</strong>}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}

              {actError && (
                <p style={{ color: 'var(--accent)', fontSize: 13, fontWeight: 600, margin: '10px 0 0', display: 'flex', alignItems: 'center', gap: 6 }}>
                  <AlertCircle size={15} /> Si us plau, selecciona almenys una activitat de l'escola.
                </p>
              )}
            </div>

            <h3 style={{ fontSize: 20, marginTop: 28, marginBottom: 16 }}>Dades dels Pares / Tutors i Domiciliació</h3>
            <div className="form-grid-2">
              <div className="field">
                <label>Nom dels pares o tutors *</label>
                <input
                  type="text"
                  required
                  placeholder="Nom complet del pare, mare o tutor/a"
                  value={form.nomPares}
                  onChange={(e) => updateField('nomPares', e.target.value)}
                />
              </div>

              <div className="field">
                <label>Telèfon de contacte *</label>
                <input
                  type="tel"
                  required
                  placeholder="+34 600 000 000"
                  value={form.telefon}
                  onChange={(e) => updateField('telefon', e.target.value)}
                />
              </div>

              <div className="field">
                <label>Adreça electrònica *</label>
                <input
                  type="email"
                  required
                  placeholder="correu@familia.cat"
                  value={form.correu}
                  onChange={(e) => updateField('correu', e.target.value)}
                />
              </div>

              <div className="field">
                <label>Número de compte per a domiciliació de rebut mensual (IBAN) *</label>
                <input
                  type="text"
                  required
                  autoComplete="off"
                  data-lpignore="true"
                  data-1p-ignore="true"
                  data-form-type="other"
                  spellCheck="false"
                  placeholder="ES00 0000 0000 0000 0000 0000"
                  value={form.iban}
                  onChange={(e) => updateField('iban', e.target.value)}
                />
              </div>
            </div>

            <div style={{ marginTop: 20 }}>
              <label style={{ display: 'flex', alignItems: 'flex-start', gap: 10, cursor: 'pointer', fontSize: 14 }}>
                <input
                  type="checkbox"
                  required
                  checked={form.acceptaTermes}
                  onChange={(e) => updateField('acceptaTermes', e.target.checked)}
                  style={{ accentColor: 'var(--accent)', width: 17, height: 17, marginTop: 2 }}
                />
                <span>Accepto les condicions d'inscripció, la domiciliació dels rebuts mensuals i la política de protecció de dades de Claudefaula. *</span>
              </label>
            </div>

            <button
              type="submit"
              disabled={isSending}
              className="btn"
              style={{ marginTop: 28, background: 'var(--accent)', color: '#fff' }}
            >
              {isSending ? 'Enviant inscripció…' : 'Enviar Inscripció Escolar →'}
            </button>
          </form>
        </div>
      </section>

      {/* ESCOLES ON TREBALLEM ACTUALMENT (SINCRONITZAT AMB EL SHEETS) */}
      <section className="section" style={{ background: 'var(--paper)', borderTop: 'var(--hairline)', borderBottom: 'var(--hairline)', padding: 'clamp(40px, 6vw, 80px) var(--pad)' }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <div className="section-head reveal" style={{ marginBottom: '40px' }}>
            <span className="eyebrow">— Xarxa d'escoles</span>
            <h2 className="serif" style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>Escoles on <em>col·laborem</em></h2>
            <p className="lede" style={{ color: 'var(--muted)' }}>Clica a la teva escola per seleccionar-la directament al formulari d'inscripció.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {escolesResum.map((esc, i) => (
              <div
                key={i}
                className="card reveal"
                onClick={() => {
                  handleSelectEscola(esc.nom);
                  const el = document.getElementById('formulari-escoles');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                style={{
                  padding: '24px',
                  background: form.escola === esc.nom ? '#fff' : 'var(--bg)',
                  border: form.escola === esc.nom ? '2px solid var(--accent)' : 'var(--hairline)',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {esc.ciutat && <span className="course-price-badge" style={{ marginBottom: '12px', display: 'inline-block' }}>{esc.ciutat}</span>}
                <h4 style={{ fontSize: '18px', margin: '4px 0 8px', fontWeight: 600 }}>{esc.nom}</h4>
                <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0, lineHeight: 1.5 }}>
                  {esc.activitats.join(' · ')}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACTIVITATS QUE OFERIM A LES ESCOLES (DÍPTIC 26-27) */}
      <section className="section" style={{ padding: 'clamp(40px, 6vw, 80px) var(--pad)', maxWidth: '1440px', margin: '0 auto' }}>
        <div className="section-head reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16, marginBottom: '32px' }}>
          <div>
            <span className="eyebrow">— Què fem a les escoles · Curs 2026–2027</span>
            <h2 className="serif" style={{ fontSize: 'clamp(32px, 4vw, 52px)', margin: '8px 0 0' }}>Activitats i projectes <em>educatius</em></h2>
          </div>
          <a
            href={`${import.meta.env.BASE_URL}diptic_extraescolars_26_27.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'var(--accent)',
              color: '#fff',
              textDecoration: 'none',
            }}
          >
            <FileText size={16} /> Descarregar Díptic 26–27 (PDF) ↗
          </a>
        </div>
        <div className="grid-2 gap-lg" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {activitatsEscoles.map((act, idx) => (
            <div key={idx} className="card reveal" style={{ padding: '26px', background: 'var(--paper)', border: 'var(--hairline)', borderRadius: '8px', display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 10 }}>
                <h3 className="serif" style={{ fontSize: '24px', margin: 0 }}>{act.title}</h3>
                {act.age && (
                  <span style={{
                    fontFamily: 'var(--mono)',
                    fontSize: '11px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    padding: '4px 10px',
                    borderRadius: '999px',
                    background: 'var(--bg)',
                    border: 'var(--hairline)',
                    color: 'var(--accent)',
                    fontWeight: 600,
                  }}>
                    {act.age}
                  </span>
                )}
              </div>
              <p style={{ color: 'var(--muted)', fontSize: '15px', lineHeight: '1.6', margin: 0 }}>{act.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* METODOLOGIA, PROFESSIONALITAT I PREUS I CONDICIONS (DEL DÍPTIC 26-27) */}
      <section className="section" style={{ background: 'var(--paper)', borderTop: 'var(--hairline)', borderBottom: 'var(--hairline)', padding: 'clamp(40px, 6vw, 80px) var(--pad)' }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', alignItems: 'stretch' }}>
          {/* Metodologia i Professionalitat */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className="card reveal" style={{ padding: '32px', background: 'var(--bg)', border: 'var(--hairline)', borderRadius: '12px', flex: 1 }}>
              <span className="eyebrow" style={{ color: 'var(--accent)' }}>— Com treballem</span>
              <h3 className="serif" style={{ fontSize: '28px', margin: '8px 0 12px' }}>Metodologia</h3>
              <p style={{ color: 'var(--muted)', fontSize: '15px', lineHeight: '1.65', margin: 0 }}>
                Les classes són programades i realitzades de manera lúdica i des de la gamificació i la creativitat usades com a eina d'aprenentatge, conservant un clima de calma i control imprescindible per a avançar. Les propostes són diverses i es té present la diversitat del grup tant per edats com per a ritmes i evolucions, donant la millor resposta en cada cas. <strong>Informes a les famílies.</strong>
              </p>
            </div>

            <div className="card reveal" style={{ padding: '32px', background: 'var(--bg)', border: 'var(--hairline)', borderRadius: '12px', flex: 1 }}>
              <span className="eyebrow" style={{ color: 'var(--accent)' }}>— Equip docent</span>
              <h3 className="serif" style={{ fontSize: '28px', margin: '8px 0 12px' }}>Professionalitat</h3>
              <p style={{ color: 'var(--muted)', fontSize: '15px', lineHeight: '1.65', margin: 0 }}>
                Les persones que imparteixen les activitats són pedagogs, músics i professionals en actiu, en formació constant i amb especial sensibilització pedagògica.
              </p>
            </div>
          </div>

          {/* Preus i condicions */}
          <div className="card reveal" style={{ padding: '36px', background: 'var(--ink)', color: 'var(--bg)', borderRadius: '12px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <span className="eyebrow" style={{ color: 'var(--accent)' }}>— Curs 2026–2027</span>
              <h3 className="serif" style={{ fontSize: 'clamp(28px, 3vw, 38px)', margin: '8px 0 24px', color: 'var(--bg)' }}>
                Preus i <em>Condicions</em>
              </h3>

              <div style={{ padding: '20px', background: 'rgba(255,255,255,0.06)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.12)', marginBottom: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '12px', flexWrap: 'wrap', marginBottom: '8px' }}>
                  <strong style={{ fontSize: '16px', color: '#fff' }}>Activitats col·lectives i grupals</strong>
                  <span className="serif" style={{ fontSize: '28px', color: 'var(--accent)', fontWeight: 700 }}>25 € <small style={{ fontSize: '14px', fontWeight: 400, color: 'rgba(255,255,255,0.75)' }}>/ mes per alumne*</small></span>
                </div>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.78)', lineHeight: 1.55, margin: '0 0 8px' }}>
                  Sensibilització, Llenguatge, Cant Coral, Teatre musical, Dansa, Conjunt instrumental i Cant Coral adults (mínim de 8 persones).
                </p>
                <span style={{ fontFamily: 'var(--mono)', fontSize: '11px', textTransform: 'uppercase', color: 'var(--accent)', letterSpacing: '0.04em' }}>
                  ✓ Inclou sessió oberta a final de curs escolar
                </span>
              </div>

              <div style={{ padding: '20px', background: 'rgba(255,255,255,0.06)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.12)', marginBottom: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '12px', flexWrap: 'wrap', marginBottom: '8px' }}>
                  <strong style={{ fontSize: '16px', color: '#fff' }}>Roda d'instruments i Instrument col·lectiu</strong>
                  <span className="serif" style={{ fontSize: '28px', color: 'var(--accent)', fontWeight: 700 }}>15 € <small style={{ fontSize: '14px', fontWeight: 400, color: 'rgba(255,255,255,0.75)' }}>/ mes per alumne*</small></span>
                </div>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.78)', lineHeight: 1.55, margin: 0 }}>
                  Roda d'instruments i classes col·lectives d'instrument (grups de 6 persones, sessions de 30').
                </p>
              </div>
            </div>

            <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '16px', marginTop: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', fontStyle: 'italic', margin: 0 }}>
                * Si el grup és de menys alumnes s'adaptarà la quota.
              </p>
              <a
                href={`${import.meta.env.BASE_URL}diptic_extraescolars_26_27.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#fff', fontSize: '13px', fontFamily: 'var(--mono)', textDecoration: 'underline' }}
              >
                Veure díptic original (PDF) ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION D'AFA I ESCOLES */}
      <section className="section" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', padding: 'clamp(40px, 6vw, 100px) var(--pad)' }}>
        <span className="eyebrow">— Vols portar Claudefaula a la teva escola?</span>
        <h2 className="serif" style={{ fontSize: 'clamp(32px, 4vw, 52px)', margin: '16px 0 24px' }}>Implantem el projecte musical a la teva <em>escola o AFA</em></h2>
        <p style={{ color: 'var(--muted)', fontSize: '18px', marginBottom: '32px' }}>
          Dissenyem activitats a mida per al vostre centre educatiu. Contacteu amb nosaltres i us presentarem el nostre projecte pedagògic.
        </p>
        <button className="btn" style={{ background: 'var(--accent)', color: '#fff' }} onClick={() => setPage('contacte')}>
          Contacta amb nosaltres →
        </button>
      </section>
    </main>
  );
}

function Empreses({ setPage }) {
  useReveal();

  const comFunciona = [
    {
      num: '01',
      title: '30 minuts setmanals al migdia',
      desc: 'Una classe setmanal de 30 minuts durant la franja del migdia, sense haver de desplaçar-se després de la jornada laboral ni renunciar al temps personal.'
    },
    {
      num: '02',
      title: 'Elecció de l’instrument',
      desc: 'Al juliol organitzem una roda d’instruments perquè cada treballador pugui descobrir les diferents opcions i escollir la que més l’interessi.'
    },
    {
      num: '03',
      title: 'Aprenentatge personalitzat',
      desc: 'Classes individuals adaptades al nivell, al ritme i als objectius de cada participant. No cal tenir experiència musical prèvia.'
    },
    {
      num: '04',
      title: 'Instruments a l’abast de tothom',
      desc: 'Si el treballador no disposa d’instrument propi, oferim la possibilitat de llogar-lo directament a la nostra escola.'
    }
  ];

  const beneficisTreballadors = [
    {
      k: 'Benestar i desconnexió',
      v: 'La música ofereix una pausa de qualitat enmig de la jornada, un moment per sortir de la rutina, concentrar-se en una activitat creativa i dedicar temps a un mateix.'
    },
    {
      k: 'Creixement personal',
      v: 'Aprendre un instrument és un repte estimulant que ajuda a desenvolupar la constància, la concentració, la paciència i la confiança en les pròpies capacitats.'
    },
    {
      k: 'Una afició que s’adapta a la seva vida',
      v: 'En situar les classes dins de l’horari del migdia, facilitem que els treballadors puguin gaudir de la música sense afegir desplaçaments ni compromisos al final del dia.'
    },
    {
      k: 'Descobrir noves passions',
      v: 'No cal tenir experiència musical prèvia: només ganes d’aprendre, curiositat i il·lusió.'
    }
  ];

  const beneficisEmpresa = [
    {
      k: 'Aposta pel benestar de les persones',
      v: 'Oferir activitats que afavoreixen el desenvolupament personal és una manera de mostrar que l’empresa es preocupa pels seus equips més enllà de les responsabilitats professionals.'
    },
    {
      k: 'Proposta de valor diferencial',
      v: 'Música a l’Empresa amplia les iniciatives de benestar i els beneficis socials que l’organització posa a disposició dels seus treballadors.'
    },
    {
      k: 'Motivació i compromís',
      v: 'Facilitar experiències positives i oportunitats d’aprenentatge contribueix a crear un entorn laboral més enriquidor i a reforçar el vincle entre les persones i l’organització.'
    },
    {
      k: 'Cultura empresarial més humana i creativa',
      v: 'La música incorpora una dimensió cultural i emocional al dia a dia de l’empresa i transmet una manera d’entendre el treball que dóna valor a les persones, a les seves inquietuds i al seu creixement.'
    }
  ];

  return (
    <main className="empreses-page">
      {/* HERO */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <h1>Música a <em>l'Empresa.</em></h1>
          <div className="page-hero-side">
            <span className="eyebrow">— Benestar, creativitat i creixement</span>
            <p className="lede reveal">
              Una pausa per desconnectar, aprendre i créixer a través de la música. I si la pausa del migdia es convertís en una oportunitat per descobrir un talent, despertar una nova passió i millorar el <em>benestar de l’equip</em>?
            </p>
          </div>
        </div>
      </section>

      {/* INTRODUCCIÓ */}
      <section className="filosofia" style={{ borderTop: 'var(--hairline)' }}>
        <div className="filosofia-grid">
          <div>
            <span className="eyebrow">§ La Proposta</span>
            <h2 className="reveal" style={{ marginTop: 16 }}>
              L’aprenentatge musical<br />
              al <em>lloc de treball</em>.
            </h2>
            <div className="tag-list">
              <span className="tag">Pausa de migdia</span>
              <span className="tag">Sense desplaçaments</span>
              <span className="tag">Classes individuals</span>
              <span className="tag">Benestar laboral</span>
            </div>
          </div>
          <div className="filosofia-body reveal">
            <p>
              Des de la nostra escola de música us proposem <strong>Música a l’Empresa</strong>, un programa que apropa l’aprenentatge musical al lloc de treball i transforma una estona del migdia en un espai per a la creativitat, la desconnexió i el creixement personal.
            </p>
            <p>
              La iniciativa ofereix als treballadors la possibilitat d’<strong>aprendre a tocar l’instrument que més els agrada</strong>, sense haver de desplaçar-se després de la jornada laboral ni renunciar al seu temps personal.
            </p>
          </div>
        </div>
      </section>

      {/* COM FUNCIONA */}
      <section className="section" style={{ padding: 'clamp(48px, 6vw, 88px) var(--pad)', maxWidth: '1440px', margin: '0 auto' }}>
        <div className="section-head reveal" style={{ marginBottom: 36 }}>
          <span className="eyebrow">— Metodologia flexible</span>
          <h2 className="serif" style={{ fontSize: 'clamp(32px, 4vw, 52px)', margin: '8px 0 12px' }}>Com <em>funciona?</em></h2>
          <p className="lede" style={{ color: 'var(--muted)', maxWidth: '58ch' }}>
            El programa s’adapta a la dinàmica de l’empresa i a les necessitats dels participants.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: 24 }}>
          {comFunciona.map((item, i) => (
            <div
              key={i}
              className="card reveal"
              style={{
                padding: '28px',
                background: 'var(--paper)',
                border: 'var(--hairline)',
                borderRadius: 8,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: 14
              }}
            >
              <div>
                <span className="mono" style={{ fontSize: 12, color: 'var(--accent)', fontWeight: 700 }}>{item.num}</span>
                <h3 className="serif" style={{ fontSize: 24, margin: '8px 0 12px', fontWeight: 400 }}>{item.title}</h3>
                <p style={{ color: 'var(--muted)', fontSize: 15, lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* QUÈ HI GUANYEN ELS TREBALLADORS I L'EMPRESA */}
      <section style={{ background: 'var(--paper)', borderTop: 'var(--hairline)', borderBottom: 'var(--hairline)', padding: 'clamp(56px, 7vw, 100px) var(--pad)' }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'clamp(36px, 5vw, 64px)' }}>
          {/* Columna Treballadors */}
          <div>
            <span className="eyebrow" style={{ color: 'var(--accent)' }}>— Per a les persones</span>
            <h3 className="serif" style={{ fontSize: 'clamp(30px, 3.5vw, 44px)', margin: '8px 0 28px', fontWeight: 400 }}>
              Què hi guanyen els <em>treballadors?</em>
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {beneficisTreballadors.map((b, i) => (
                <div key={i} className="reveal" style={{ padding: '22px 24px', background: 'var(--bg)', border: 'var(--hairline)', borderRadius: 8 }}>
                  <h4 style={{ fontSize: 17, margin: '0 0 8px', fontWeight: 600, color: 'var(--ink)' }}>
                    0{i + 1} · {b.k}
                  </h4>
                  <p style={{ margin: 0, fontSize: 14.5, color: 'var(--muted)', lineHeight: 1.55 }}>{b.v}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Columna Empresa */}
          <div>
            <span className="eyebrow" style={{ color: 'var(--accent)' }}>— Per a l'organització</span>
            <h3 className="serif" style={{ fontSize: 'clamp(30px, 3.5vw, 44px)', margin: '8px 0 28px', fontWeight: 400 }}>
              Què hi guanya <em>l’empresa?</em>
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {beneficisEmpresa.map((b, i) => (
                <div key={i} className="reveal" style={{ padding: '22px 24px', background: 'var(--bg)', border: 'var(--hairline)', borderRadius: 8 }}>
                  <h4 style={{ fontSize: 17, margin: '0 0 8px', fontWeight: 600, color: 'var(--ink)' }}>
                    0{i + 1} · {b.k}
                  </h4>
                  <p style={{ margin: 0, fontSize: 14.5, color: 'var(--muted)', lineHeight: 1.55 }}>{b.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COST COMPARTIT / PREU */}
      <section className="section" style={{ padding: 'clamp(56px, 7vw, 100px) var(--pad)', maxWidth: '1080px', margin: '0 auto' }}>
        <div
          className="reveal"
          style={{
            background: 'var(--paper)',
            border: 'var(--hairline)',
            borderLeft: '4px solid var(--accent)',
            borderRadius: 12,
            padding: 'clamp(28px, 5vw, 52px)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.04)'
          }}
        >
          <span className="eyebrow" style={{ color: 'var(--accent)', fontWeight: 600 }}>— Un projecte compartit, amb un cost compartit</span>
          <h2 className="serif" style={{ fontSize: 'clamp(30px, 4vw, 46px)', margin: '8px 0 16px', fontWeight: 400 }}>
            Accessible i <em>motivador</em> per a totes dues parts
          </h2>
          <p style={{ fontSize: 16, color: 'var(--ink-2)', lineHeight: 1.6, maxWidth: '65ch', margin: '0 0 32px' }}>
            Volem que aprendre música sigui una oportunitat accessible i motivadora. Per això, el cost del programa es reparteix entre l’empresa i cada treballador, de manera que totes dues parts participen en aquesta iniciativa de benestar.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: 20, marginBottom: 24 }}>
            <div style={{ background: 'var(--ink)', color: 'var(--bg)', padding: '24px', borderRadius: 8 }}>
              <span className="mono" style={{ fontSize: 11, textTransform: 'uppercase', opacity: 0.8 }}>Quota total per participant</span>
              <div className="serif" style={{ fontSize: 44, lineHeight: 1.1, margin: '8px 0 4px' }}>95 € <span style={{ fontSize: 18 }}>/ mes</span></div>
              <span style={{ fontSize: 13, opacity: 0.85 }}>1 classe individual setmanal (30 min)</span>
            </div>

            <div style={{ background: 'var(--bg)', border: 'var(--hairline)', padding: '24px', borderRadius: 8 }}>
              <span className="mono" style={{ fontSize: 11, textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 600 }}>50% A càrrec de l'empresa</span>
              <div className="serif" style={{ fontSize: 40, lineHeight: 1.1, margin: '8px 0 4px', color: 'var(--ink)' }}>47,50 € <span style={{ fontSize: 17, color: 'var(--muted)' }}>/ mes</span></div>
              <span style={{ fontSize: 13, color: 'var(--muted)' }}>Inversió en benestar i equip</span>
            </div>

            <div style={{ background: 'var(--bg)', border: 'var(--hairline)', padding: '24px', borderRadius: 8 }}>
              <span className="mono" style={{ fontSize: 11, textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 600 }}>50% A càrrec del treballador</span>
              <div className="serif" style={{ fontSize: 40, lineHeight: 1.1, margin: '8px 0 4px', color: 'var(--ink)' }}>47,50 € <span style={{ fontSize: 17, color: 'var(--muted)' }}>/ mes</span></div>
              <span style={{ fontSize: 13, color: 'var(--muted)' }}>Formació musical personalitzada</span>
            </div>
          </div>

          <p style={{ margin: 0, fontSize: 13.5, color: 'var(--muted)', fontStyle: 'italic' }}>
            * El lloguer de l’instrument, si és necessari, es pot valorar a part segons l’instrument escollit.
          </p>
        </div>
      </section>

      {/* TANCAMENT I CALL TO ACTION */}
      <section className="section" style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto', padding: 'clamp(32px, 6vw, 96px) var(--pad)' }}>
        <span className="eyebrow">— Posem música al dia a dia de la vostra empresa?</span>
        <h2 className="serif" style={{ fontSize: 'clamp(32px, 4.5vw, 54px)', margin: '14px 0 20px' }}>
          Fem que la música també formi part de la <em>vostra jornada!</em>
        </h2>
        <p style={{ color: 'var(--ink-2)', fontSize: 17, lineHeight: 1.6, marginBottom: 16 }}>
          Des de la nostra escola ens encarreguem de l’acompanyament musical i de l’organització de les classes perquè l’experiència sigui propera, flexible i enriquidora.
        </p>
        <p style={{ color: 'var(--muted)', fontSize: 16, lineHeight: 1.6, marginBottom: 32 }}>
          <strong>Música a l’Empresa</strong> és molt més que aprendre a tocar un instrument: és regalar temps de qualitat, obrir la porta a noves experiències i fer que la música formi part de la vida de les persones, també dins de l’entorn laboral. Us convidem a descobrir com podem fer sonar aquest projecte a la vostra empresa.
        </p>
        <button className="btn" style={{ background: 'var(--accent)', color: '#fff' }} onClick={() => setPage('contacte')}>
          Sol·licita informació per a la teva empresa →
        </button>
      </section>
    </main>
  );
}

export { Escola, Professorat, Contacte, Inscripcio, Escoles, Empreses, PreusTaula };

