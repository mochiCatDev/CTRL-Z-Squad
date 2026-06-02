// ── GRUPO E — MUNDIAL 2026 ──────────────────────────────────────────────
// Copa del Mundo FIFA 2026 · Estados Unidos, México y Canadá

const TEAMS = [
  {
    id: 'germany',
    flag: '🇩🇪',
    name: 'Alemania',
    shortName: 'GER',
    region: 'UEFA',
    confederation: 'Europa',
    ranking: 4,
    worldCups: 4,
    qualified: 'Ganador Grupo A — Eliminatorias UEFA',
    classModifier: 'team-card--germany',
  },
  {
    id: 'curacao',
    flag: '🇨🇼',
    name: 'Curazao',
    shortName: 'CUW',
    region: 'CONCACAF',
    confederation: 'Centroamérica y Caribe',
    ranking: 81,
    worldCups: 0,
    qualified: 'Ganador Grupo B — Ronda 3 CONCACAF',
    classModifier: 'team-card--curacao',
  },
  {
    id: 'ivory',
    flag: '🇨🇮',
    name: 'Costa de Marfil',
    shortName: 'CIV',
    region: 'CAF',
    confederation: 'África',
    ranking: 48,
    worldCups: 3,
    qualified: 'Ganador Grupo F — Eliminatorias CAF',
    classModifier: 'team-card--ivory',
  },
  {
    id: 'ecuador',
    flag: '🇪🇨',
    name: 'Ecuador',
    shortName: 'ECU',
    region: 'CONMEBOL',
    confederation: 'Sudamérica',
    ranking: 44,
    worldCups: 4,
    qualified: '2.º — Eliminatorias Sudamericanas',
    classModifier: 'team-card--ecuador',
  },
];

const MATCHES = [
  {
    home: 'GER', away: 'CIV',
    date: '13 Jun', city: 'Kansas City', group: 1,
  },
  {
    home: 'ECU', away: 'CUW',
    date: '14 Jun', city: 'Dallas', group: 1,
  },
  {
    home: 'GER', away: 'ECU',
    date: '18 Jun', city: 'Houston', group: 2,
  },
  {
    home: 'CIV', away: 'CUW',
    date: '18 Jun', city: 'San Francisco', group: 2,
  },
  {
    home: 'GER', away: 'CUW',
    date: '22 Jun', city: 'Dallas', group: 3,
  },
  {
    home: 'CIV', away: 'ECU',
    date: '22 Jun', city: 'Kansas City', group: 3,
  },
];

// Tabla inicial (todos en 0 antes de que arranque el torneo)
const STANDINGS = [
  { shortName: 'GER', flag: '🇩🇪', name: 'Alemania',        pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, pts: 0 },
  { shortName: 'ECU', flag: '🇪🇨', name: 'Ecuador',         pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, pts: 0 },
  { shortName: 'CIV', flag: '🇨🇮', name: 'Costa de Marfil', pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, pts: 0 },
  { shortName: 'CUW', flag: '🇨🇼', name: 'Curazao',         pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, pts: 0 },
];

// ── HELPERS ──────────────────────────────────────────────────────────────

function getTeamByShort(short) {
  return TEAMS.find(t => t.shortName === short);
}

// ── RENDER: TEAM CARDS ────────────────────────────────────────────────────

function renderTeams() {
  const grid = document.getElementById('teams-grid');
  if (!grid) return;

  grid.innerHTML = TEAMS.map((team, i) => `
    <article class="team-card ${team.classModifier}" role="listitem" aria-label="${team.name}">
      <div class="team-card__accent"></div>
      <div class="team-card__glow"></div>

      <span class="team-card__flag" aria-hidden="true">${team.flag}</span>

      <p class="team-card__position">E${i + 1}</p>
      <h2 class="team-card__name">${team.name}</h2>
      <span class="team-card__region">${team.confederation}</span>

      <div class="team-card__stats">
        <div class="stat">
          <span class="stat__value">${team.ranking}</span>
          <span class="stat__label">FIFA Rank</span>
        </div>
        <div class="stat">
          <span class="stat__value">${team.worldCups}</span>
          <span class="stat__label">Mundiales</span>
        </div>
      </div>
    </article>
  `).join('');
}

// ── RENDER: MATCHES ───────────────────────────────────────────────────────

function renderMatches() {
  const list = document.getElementById('matches-list');
  if (!list) return;

  let currentGroup = null;

  list.innerHTML = MATCHES.map(match => {
    const homeTeam = getTeamByShort(match.home);
    const awayTeam = getTeamByShort(match.away);

    const groupHeader = match.group !== currentGroup
      ? (() => { currentGroup = match.group; return `<p class="section__label" style="margin-bottom:12px;">Jornada ${match.group}</p>`; })()
      : '';

    return `
      ${groupHeader}
      <div class="match-row">
        <div class="match-team">
          <span class="match-team__flag">${homeTeam.flag}</span>
          <span class="match-team__name">${homeTeam.name}</span>
        </div>

        <div class="match-center">
          <span class="match-center__vs">VS</span>
          <span class="match-center__date">${match.date}<br>${match.city}</span>
          <span class="match-center__badge">Grupo E</span>
        </div>

        <div class="match-team match-team--right">
          <span class="match-team__flag">${awayTeam.flag}</span>
          <span class="match-team__name">${awayTeam.name}</span>
        </div>
      </div>
    `;
  }).join('');
}

// ── RENDER: STANDINGS ─────────────────────────────────────────────────────

function renderStandings() {
  const tbody = document.getElementById('standings-body');
  if (!tbody) return;

  tbody.innerHTML = STANDINGS.map((row, i) => `
    <tr>
      <td class="td-rank">
        ${i < 2 ? `<span class="qualify-dot" title="Clasificación directa"></span>` : ''}${i + 1}
      </td>
      <td>
        <div class="td-team">
          <span class="td-team__flag">${row.flag}</span>
          ${row.name}
        </div>
      </td>
      <td>${row.pj}</td>
      <td>${row.g}</td>
      <td>${row.e}</td>
      <td>${row.p}</td>
      <td>${row.gf}</td>
      <td>${row.gc}</td>
      <td class="td-pts">${row.pts}</td>
    </tr>
  `).join('');
}

// ── INTERSECTION OBSERVER: Subtle scroll reveal ───────────────────────────

function setupScrollReveal() {
  const sections = document.querySelectorAll('.section');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05 });

  sections.forEach(section => {
    observer.observe(section);
  });
}

// ── COUNTDOWN to first match ──────────────────────────────────────────────

function setupCountdown() {
  const el = document.getElementById('countdown');
  if (!el) return;

  const firstMatch = new Date('2026-06-13T19:00:00-05:00'); // Kansas City CDT

  function update() {
    const now = new Date();
    const diff = firstMatch - now;

    if (diff <= 0) {
      el.textContent = '¡El torneo ya comenzó!';
      return;
    }

    const days    = Math.floor(diff / 86400000);
    const hours   = Math.floor((diff % 86400000) / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);

    el.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  update();
  setInterval(update, 1000);
}

// ── INIT ──────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  renderTeams();
  renderMatches();
  renderStandings();
  setupScrollReveal();
  setupCountdown();
});