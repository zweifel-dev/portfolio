#!/usr/bin/env node
/*
 * Builds the Midnight Alibi pages of this site from the game itself, so the
 * site can't drift from the app. The game repo knows nothing about the site:
 * this script reads it.
 *
 *   npm run midnight-alibi                    # game repo at ../midnight-alibi
 *   node scripts/build-midnight-alibi.cjs --game <path to the midnight-alibi repo>
 *
 * It does two things:
 *   1. Copies the game art these pages use into public/midnight-alibi/assets/
 *      (room icons, rank badges, room illustrations, suspect portraits, the
 *      laurel frame, and the app icon).
 *   2. Writes the five pages generated from the game's data:
 *        how-to-play/  the rules, levels and solving methods (engine.js TECHNIQUES)
 *        ranks/        rank points, the 18-rank ladder and the looks (ranks.js, cosmetics.js)
 *        challenges/   the challenges and par times (challenges.js)
 *        rooms/        the manor's rooms (engine.js ROOMS)
 *        suspects/     the cast and the victims (engine.js SUSPECTS, ROLES, VICTIMS)
 *
 * Hand-written, not generated: public/midnight-alibi/index.html (home),
 * privacy/, delete-account/ and assets/site.css. Screenshots (assets/screens/,
 * assets/tablet/) and og-image.jpg are converted by hand from the game repo's
 * assets/store/ captures.
 */
'use strict';
const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const gameAt = args.indexOf('--game');
const GAME = path.resolve(gameAt >= 0 ? args[gameAt + 1] : process.env.MIDNIGHT_ALIBI_DIR || path.join(__dirname, '..', '..', 'midnight-alibi'));
if (!fs.existsSync(path.join(GAME, 'www', 'js', 'engine.js'))) {
  throw new Error(`Midnight Alibi repo not found at ${GAME}. Pass --game <path> or set MIDNIGHT_ALIBI_DIR.`);
}
const SITE = path.join(__dirname, '..', 'public', 'midnight-alibi');
const game = (file) => require(path.join(GAME, 'www', 'js', file));
const Engine = game('engine.js');
const Ranks = game('ranks.js');
const Challenges = game('challenges.js');
const Cosmetics = game('cosmetics.js');

// ---------- 1. the game art these pages use ----------

const copied = [];
function copy(from, to) {
  const target = path.join(SITE, 'assets', to);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.copyFileSync(path.join(GAME, from), target);
  copied.push(to);
}
copy('www/assets/icons.svg', 'icons.svg');
copy('www/assets/ranks.svg', 'ranks.svg');
copy('www/assets/cosmetics/frame-top.svg', 'cosmetics/frame-top.svg');
copy('icons/icon.svg', 'seal.svg');
copy('assets/store/icon-512.png', 'icon-512.png');
for (const room of Engine.ROOMS) copy(`www/assets/rooms/${room.toLowerCase()}.webp`, `rooms/${room.toLowerCase()}.webp`);
for (const name of Engine.SUSPECTS) copy(`www/assets/suspects/${name.toLowerCase()}.webp`, `suspects/${name.toLowerCase()}.webp`);

// ---------- 2. the pages ----------

const BASE = '/midnight-alibi';
const A = `${BASE}/assets`;
const e = (text) => String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;');

const NAV = [['how-to-play', 'How to play'], ['ranks', 'Ranks'], ['challenges', 'Challenges'], ['rooms', 'Rooms'], ['suspects', 'Suspects']];
const LEVEL = { easy: 'Easy', medium: 'Medium', hard: 'Hard', expert: 'Expert' };
const RANK = Object.fromEntries(Ranks.LADDER.map((r) => [r.n, r]));
const CH = Object.fromEntries(Challenges.CATALOGUE.map((c) => [c.id, c]));
const LOOK = Object.fromEntries(Cosmetics.CATALOGUE.map((x) => [x.id, x]));

// ---------- shared pieces ----------

const icon = (name, cls = 'ico') =>
  `<svg class="${cls}" aria-hidden="true" focusable="false" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><use href="${A}/icons.svg#${name}"></use></svg>`;

const badge = (n) =>
  `<svg class="badge-art" viewBox="0 0 64 64" aria-hidden="true" focusable="false"><use href="${A}/ranks.svg#rank-${String(n).padStart(2, '0')}"></use></svg>`;

function header(active) {
  const links = NAV.map(([slug, label]) => `<a href="${BASE}/${slug}/"${slug === active ? ' aria-current="page"' : ''}>${label}</a>`).join('');
  return `  <a class="skip" href="#main">Skip to content</a>
  <header class="topbar solid">
    <div class="wrap">
      <a class="brand" href="${BASE}/"><img src="${A}/seal.svg" alt="" width="34" height="34">Midnight <em>Alibi</em></a>
      <nav aria-label="Midnight Alibi">${links}</nav>
    </div>
  </header>`;
}

const FOOTER = `  <footer>
    <div class="wrap">
      <span>© 2026 Brandon Zweifel · Made at <a href="/">zweifel.tech</a></span>
      <nav aria-label="Footer">
        <a href="${BASE}/">Midnight Alibi</a>
        <a href="${BASE}/how-to-play/">How to play</a>
        <a href="${BASE}/privacy/">Privacy policy</a>
        <a href="${BASE}/delete-account/">Delete your data</a>
        <a href="/contact">Contact</a>
      </nav>
    </div>
  </footer>`;

const written = [];
function page(slug, title, desc, body) {
  const url = `https://zweifel.tech${BASE}/${slug}/`;
  const doc = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${e(title)} – Midnight Alibi</title>
  <meta name="description" content="${e(desc)}">
  <link rel="canonical" href="${url}">
  <meta name="theme-color" content="#141217">
  <link rel="icon" href="${A}/seal.svg" type="image/svg+xml">
  <link rel="icon" href="${A}/icon-512.png" type="image/png" sizes="512x512">
  <meta property="og:type" content="website">
  <meta property="og:title" content="${e(title)} – Midnight Alibi">
  <meta property="og:description" content="${e(desc)}">
  <meta property="og:url" content="${url}">
  <meta property="og:image" content="https://zweifel.tech${A}/og-image.jpg">
  <link rel="preload" href="${A}/fonts/bodoni-moda.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="stylesheet" href="${A}/site.css">
  <!-- Generated by scripts/build-midnight-alibi.cjs from the game's data: edit the script, not this file. -->
</head>
<body>
${header(slug)}

  <main id="main">
${body}
  </main>

${FOOTER}
</body>
</html>
`;
  const out = path.join(SITE, slug, 'index.html');
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, doc);
  written.push(path.relative(process.cwd(), out));
}

function hero(kicker, title, lede, art) {
  const style = art ? ` style="--art: url('${art}')"` : '';
  return `    <section class="${art ? 'page-hero has-art' : 'page-hero'}"${style}>
      <div class="wrap">
        <p class="crumbs"><a href="${BASE}/">Midnight Alibi</a> / ${e(kicker)}</p>
        <h1>${title}</h1>
        <p class="lede">${lede}</p>
      </div>
    </section>`;
}

const phone = (src, alt) =>
  `<div class="phone"><img src="${A}/screens/${src}.webp" alt="${e(alt)}" width="360" height="640" loading="lazy"></div>`;

const rankLink = (n) => `<a href="${BASE}/ranks/#rank-${n}">${RANK[n].name}</a>`;

// ---------- how to play ----------

// The level at which each method first appears.
const FIRST_LEVEL = {
  stated: 'easy', crossHatch: 'easy', clueElim: 'easy', nakedSingle: 'easy', hiddenSingle: 'easy',
  nakedPair: 'medium', hiddenPair: 'medium', liar: 'hard', xWing: 'hard', xyWing: 'hard', swordfish: 'expert',
};
const methodsHtml = Object.entries(Engine.TECHNIQUES).sort((a, b) => a[1].rank - b[1].rank).map(([k, t]) =>
  `<li class="method"><span class="lvl">${LEVEL[FIRST_LEVEL[k]]} and up</span><h3>${e(t.name)}</h3><p>${e(t.about)}</p></li>`).join('');
const levelRows = [
  ['easy', '4', 'No', 'Direct statements, ruling rooms out, only one place or room left. Extra clues help you start.', 'From the start'],
  ['medium', '5', 'No', 'Adds pairs: two rooms locked into two squares.', 'From the start'],
  ['hard', '5', 'Yes, the killer lies', 'Adds catching the liar, cross-checking two rows and chains of three.', `At ${rankLink(Ranks.LEVEL_UNLOCK.hard)}`],
  ['expert', '6', 'Yes, the killer lies', 'Needs cross-checks or harder, up to three-row cross-checks.', `At ${rankLink(Ranks.LEVEL_UNLOCK.expert)}`],
];
const levelsHtml = levelRows.map(([k, n, liar, m, o]) =>
  `<tr><th scope="row">${LEVEL[k]}</th><td data-label="Suspects">${n}</td><td data-label="A liar">${liar}</td><td data-label="Methods">${m}</td><td data-label="Opens">${o}</td></tr>`).join('');

page('how-to-play', 'How to play', 'The rules of Midnight Alibi: fill in the timeline, question the suspects, and name the killer. Plus the four levels and all eleven solving methods.', `${hero('How to play', 'How to <em>play</em>', 'Every case is a small logic puzzle with a murder at its center. This page covers everything from your first Easy case to Expert.')}

    <section class="tight">
      <div class="wrap">
        <ol class="rules">
          <li class="split">
            <div class="prose"><p class="num">01</p><h2>The timeline</h2>
              <p>The Board is a grid. Each <strong>row is a suspect</strong>, each <strong>column is an hour</strong>, and each square is the room that suspect was in.</p>
              <p>Like a Sudoku, <strong>every suspect visits every room exactly once</strong>, and <strong>no two suspects share a room at the same hour</strong>. Tap a square, then pick a room.</p></div>
            ${phone('board', 'The Board: a grid of suspects by hour, with room symbols placed')}
          </li>
          <li class="split flip">
            <div class="prose"><p class="num">02</p><h2>Question everyone</h2>
              <p>The <strong>Testimony</strong> tab has one statement from each suspect. The <strong>Evidence</strong> corkboard holds what forensics found, and evidence is always true.</p>
              <p>Tap a statement to cross it off once you have used it. On the corkboard, tap one pin and then another to run red string between clues.</p></div>
            <div class="gallery" style="grid-template-columns: repeat(2, minmax(0, 1fr))"><figure>${phone('testimony', 'The Testimony tab: each suspect gives one statement')}</figure><figure>${phone('evidence', 'The Evidence corkboard: pinned notes with red string')}</figure></div>
          </li>
          <li class="split">
            <div class="prose"><p class="num">03</p><h2>Name the killer</h2>
              <p>The body was found in one room at the time of death. <strong>Whoever was in that room then is the killer.</strong> As soon as someone is placed at the scene at that hour, the Accuse button appears, so you don’t have to finish the whole board.</p>
              <p>On <strong>Hard</strong> and <strong>Expert</strong>, the killer’s testimony is a lie. Find the statement that can’t be true.</p></div>
            ${phone('lineup', 'The lineup: full-length suspects waiting for your accusation')}
          </li>
        </ol>
      </div>
    </section>

    <section class="band tight">
      <div class="wrap">
        <p class="kicker">When you’re stuck</p>
        <h2>Help that teaches</h2>
        <div class="help-grid">
          <div class="help-card"><h3>${icon('hint')} Hint</h3><p>A nudge comes first. It names the method and points at the right square. Tap Show answer to see the answer, with every step explained.</p></div>
          <div class="help-card"><h3>${icon('evidence')} Check your work</h3><p>If a square you placed doesn’t fit the clues, the hint outlines it in red. Show answer clears it so you can work it out again.</p></div>
          <div class="help-card"><h3>${icon('hunch')} Hunch</h3><p>Pencil in the rooms a square might be: tap a room once for a maybe, twice to rule it out, and a third time to clear it. When you place a room, it is removed from the maybes in the rest of that row and hour.</p></div>
          <div class="help-card"><h3>${icon('methods')} Methods</h3><p>Each case lists the methods it needs, so you know what to look for before you start.</p></div>
        </div>
        <div class="gallery" style="margin-top: 28px">
          <figure>${phone('hint', 'A hint card naming the method and asking who could have been in the Chapel')}<figcaption><b>A nudge</b>The hint names the method first.</figcaption></figure>
          <figure>${phone('methods', 'The Methods tab listing the solving methods this case needs')}<figcaption><b>Methods</b>What this case will ask of you.</figcaption></figure>
          <figure>${phone('closed', 'The case-closed report: time, nudges, answers and rank points')}<figcaption><b>Case closed</b>Your time, hints and rank points.</figcaption></figure>
          <figure>${phone('casebook', 'The casebook: today’s case and the case library')}<figcaption><b>The casebook</b>Today’s case and the library.</figcaption></figure>
        </div>
      </div>
    </section>

    <section class="tight" id="levels">
      <div class="wrap">
        <p class="kicker">Four levels</p>
        <h2>Graded by the hardest method a case needs</h2>
        <table class="levels-table">
          <thead><tr><th>Level</th><th>Suspects</th><th>A liar</th><th>Methods</th><th>Opens (free play)</th></tr></thead>
          <tbody>${levelsHtml}</tbody>
        </table>
        <p class="note" style="margin-top: 14px">Today’s case is always open, whatever its level. <em>Case Files: Volume 1</em> opens every level at once.</p>
      </div>
    </section>

    <section class="band tight" id="methods">
      <div class="wrap">
        <p class="kicker">The methods</p>
        <h2>The eleven methods</h2>
        <p class="intro">Every case can be solved by logic alone, with exactly one answer. These are the methods in order, from the first you will need to the hardest.</p>
        <ul class="methods">${methodsHtml}</ul>
      </div>
    </section>`);

// ---------- ranks ----------

function needText(n) {
  const s = n.count !== 1 ? 's' : '';
  if (n.type === 'levelSolves') return `${n.count} ${LEVEL[n.level]} solve${s}`;
  if (n.type === 'cleanSolves') return `${n.count} clean ${n.level ? LEVEL[n.level] + ' ' : ''}solve${s}`;
  if (n.type === 'challengesMet') return `${n.count} challenges met`;
  if (n.type === 'eachChallenge') return `every challenge met on an ${LEVEL[n.level]} case`;
  return '';
}

function unlockHtml(w) {
  if (w.kind === 'level') return `<span class="unlock"><small>Level</small>${LEVEL[w.id]}</span>`;
  if (w.kind === 'challenge') return `<a class="unlock" href="${BASE}/challenges/#${w.id}"><small>Challenge</small>${CH[w.id].name}</a>`;
  return `<span class="unlock"><small>Look</small>${LOOK[w.id].name}</span>`;
}

function rankCard(r) {
  const needs = r.n > 1 ? [`${r.points.toLocaleString('en-US')} points`, ...r.needs.map(needText)] : ['Everyone starts here'];
  return `<li class="rank-card" id="rank-${r.n}">${badge(r.n)}<div><span class="n">Rank ${r.n}</span>` +
    `<h4>${e(r.name)}</h4><p class="needs">${needs.join(' · ')}</p><div class="chips">${r.rewards.map(unlockHtml).join('')}</div></div></li>`;
}

const TIERS = [
  ['The amateur', 'Ink stamps on paper. Learning the trade, one case at a time.', 1, 5],
  ['The police', 'Enamelled shields and brass chevrons. Harder levels and the first challenges.', 6, 13],
  ['The legend', 'Gold medallions, for the players who reach Baker Street Detective.', 14, 18],
];
const tiersHtml = TIERS.map(([t, d, a, b]) => {
  const cards = [];
  for (let n = a; n <= b; n++) cards.push(rankCard(RANK[n]));
  return `<div class="tier"><h3>${t}</h3><p>${d}</p><ol class="ladder-list">${cards.join('')}</ol></div>`;
}).join('');

// Swatches for each look, in unlock order (styles: .sw-* in site.css).
const LOOK_SWATCHES = [
  ['sw-ink', 'ink-fountain-pen'], ['sw-frame" style="--ring:#b68b48', 'frame-brass'], ['sw-precinct', 'desk-rainy-precinct'],
  ['sw-yard', 'file-scotland-yard'], ['sw-gaslight', 'desk-gaslight-study'], ['sw-frame" style="--ring:#c9ced4', 'frame-silver'],
  ['sw-stamp', 'stamp-gold'], ['sw-library', 'desk-manor-library'], ['sw-frame" style="--ring:#e2b84f', 'frame-gold'],
  ['sw-seal', 'seal-personal'], ['sw-221b', 'desk-221b'], ['sw-frame sw-laurel" style="--ring:#e2b84f', 'frame-top'],
];
const missing = Cosmetics.CATALOGUE.filter((x) => !x.standard && !LOOK_SWATCHES.some(([, id]) => id === x.id));
if (missing.length) throw new Error(`Add a swatch in LOOK_SWATCHES for: ${missing.map((x) => x.id).join(', ')}`);
const looksHtml = LOOK_SWATCHES.map(([cls, id]) =>
  `<li><div class="swatch ${cls}" aria-hidden="true"></div><b>${LOOK[id].name}</b><span>${rankLink(LOOK[id].unlockRank)}</span></li>`).join('');
const P = Ranks.POINTS;

page('ranks', 'The detective ladder', 'Eighteen ranks from Clue Hunter to Baker Street Detective. How rank points work, what each rank needs and what it unlocks in Midnight Alibi.', `${hero('Ranks', 'The detective <em>ladder</em>', 'Eighteen ranks, from Clue Hunter to Baker Street Detective. Every case you close earns rank points, and every promotion opens something new: a level, a challenge or a look for your desk.')}

    <section class="tight">
      <div class="wrap split">
        <div class="prose">
          <p class="kicker">Rank points</p>
          <h2>Harder cases count for more</h2>
          <p>A case earns its points once, however often you replay it. A <strong>clean solve</strong> (no hints and no nudges) adds a point, and so does each <strong>challenge</strong> you meet on it. You climb faster by playing well than by playing a lot.</p>
          <div class="points">
            <div><b>${P.easy}</b><span>Easy case</span></div><div><b>${P.medium}</b><span>Medium case</span></div>
            <div><b>${P.hard}</b><span>Hard case</span></div><div><b>${P.expert}</b><span>Expert case</span></div>
            <div><b>+${P.clean}</b><span>Clean solve</span></div><div><b>+${P.challenge}</b><span>Challenge met</span></div>
          </div>
          <p>Some ranks also need particular solves, such as Hard cases or challenges met, so every level and challenge counts toward the top. You climb the ranks in order, and your rank never drops. With Cloud Sync, your rank follows you to your other Android devices.</p>
        </div>
        <div class="gallery" style="grid-template-columns: repeat(2, minmax(0, 1fr))"><figure>${phone('profile-record', 'The Detective record: rank, rank points, streaks and statistics')}</figure><figure>${phone('profile-ladder', 'The Ladder tab, with what each rank needs and unlocks')}</figure></div>
      </div>
    </section>

    <section class="band tight" id="ladder">
      <div class="wrap">
        <p class="kicker">All eighteen</p>
        <h2>The ranks</h2>
        ${tiersHtml}
      </div>
    </section>

    <section class="tight" id="looks">
      <div class="wrap split flip">
        <div>
          <p class="kicker">Looks</p>
          <h2>Dress the desk</h2>
          <p class="intro">Ranks unlock looks: desk themes, a Scotland Yard case file, badge frames, a gold stamp, fountain-pen ink and a personal wax seal. They never change how a case plays.</p>
          <ul class="looks-grid">${looksHtml}</ul>
        </div>
        ${phone('profile-looks', 'The Looks tab: desk themes and case files, some in use and some locked')}
      </div>
    </section>`);

// ---------- challenges ----------

// How each challenge ends, in the player's words.
const HOW_IT_ENDS = {
  'cold-case': 'Asking for a hint, a nudge or a check ends it. You’re warned first.',
  clock: 'The timer counts down to par. It only runs while the case is on screen.',
  'from-memory': 'Turning Hunch on ends it. You’re warned first.',
  'one-shot': 'A wrong accusation ends it. The lineup reminds you before you choose.',
};
const noText = Challenges.active().filter((c) => !HOW_IT_ENDS[c.id]);
if (noText.length) throw new Error(`Add a line in HOW_IT_ENDS for: ${noText.map((c) => c.id).join(', ')}`);
const challengesHtml = Challenges.active().map((c) =>
  `<li class="challenge" id="${c.id}"><span class="ch-ico">${icon(c.icon, 'ico-lg')}</span><h3>${c.name}</h3><p>${c.rule}</p><p>${HOW_IT_ENDS[c.id]}</p>` +
  `<p class="opens">${badge(c.unlockRank)} Opens at ${rankLink(c.unlockRank)}</p></li>`).join('');
const clock = (Challenges.get('clock') || {}).par;
const fmt = (sec) => `${Math.floor(sec / 60)}:${String(sec % 60).padStart(2, '0')}`;
// Par is per level, for cases of one, two and three stars.
const parHtml = clock ? `
          <h3 style="margin-top: 24px">Par times for Against the Clock</h3>
          <p>Every case has one to three stars for how hard it is within its level. The more stars, the more time you get.</p>
          <table class="par"><thead><tr><td></td><th scope="col">1 star</th><th scope="col">2 stars</th><th scope="col">3 stars</th></tr></thead><tbody>${Object.entries(clock).map(([k, times]) => `<tr><th scope="row">${LEVEL[k]}</th>${times.map((v) => `<td>${fmt(v)}</td>`).join('')}</tr>`).join('')}</tbody></table>` : '';

page('challenges', 'Challenges', 'Cold Case, Against the Clock, From Memory and One Shot: the four challenges in Midnight Alibi, what they ask and where they unlock.', `${hero('Challenges', 'Take on a <em>challenge</em>', 'When you open a new case, you can choose Normal or take on a challenge. Meet the challenge and you earn a bonus rank point. If you break it, the case carries on as a normal case.')}

    <section class="tight">
      <div class="wrap">
        <ul class="challenge-list">${challengesHtml}</ul>
      </div>
    </section>

    <section class="band tight">
      <div class="wrap split">
        <div class="prose">
          <p class="kicker">How challenges work</p>
          <h2>One rule, one case</h2>
          <p>You choose one challenge as you open a new case, and you can’t add one partway through. A label under the case title shows the challenge in play. It changes to “Challenge ended” if you break the rule.</p>
          <p><strong>Replays count.</strong> Replay a case you have already closed under a new challenge to earn that challenge’s bonus point. The case’s own points are only earned once.</p>${parHtml}
          <p>Challenges met also count toward the higher ranks, so the top of the ladder needs every challenge on an Expert case.</p>
        </div>
        ${phone('profile-challenges', 'The Challenges tab: each challenge with its rule and the rank that opens it')}
      </div>
    </section>`);

// ---------- rooms ----------

const ROOM_LINES = {
  Library: 'Shelves to the ceiling, a rolling ladder and a fire that never quite goes out.',
  Kitchen: 'Copper pans, a scrubbed oak table and a back door to the kitchen garden.',
  Ballroom: 'A chandelier over an empty floor, and the piano lid still up.',
  Conservatory: 'Glass, palms and orchids, warm as July even at midnight.',
  Study: 'The desk, the ledgers, and the safe nobody admits to opening.',
  Cellar: 'Wine racks, cold stone and a single bulb on a chain.',
  Lounge: 'Deep armchairs, a card table and the good whisky.',
  Hall: 'The front door, the stairs and every coming and going.',
  Attic: 'Trunks, dust sheets and a round window over the drive.',
  Chapel: 'Candles, a cold pew and the family vault beneath.',
  Gallery: 'Ancestors in gilt frames, watching the long corridor.',
  Garden: 'Gravel paths, a sundial and the hedges by moonlight.',
};
const noLine = Engine.ROOMS.filter((r) => !ROOM_LINES[r]);
if (noLine.length) throw new Error(`Add a line in ROOM_LINES for: ${noLine.join(', ')}`);
const roomsHtml = Engine.ROOMS.map((r) =>
  `<li class="room"><img src="${A}/rooms/${r.toLowerCase()}.webp" alt="The ${r.toLowerCase()} at night" width="720" height="480" loading="lazy">` +
  `<div><h3>${icon(r.toLowerCase())} ${r}</h3><p>${ROOM_LINES[r]}</p></div></li>`).join('');

page('rooms', 'The rooms', 'The twelve rooms of the manor in Midnight Alibi, from the Library to the Garden.', `${hero('Rooms', 'The <em>manor</em>', 'Twelve rooms, one long night. Each case uses four to six of them, and every suspect visits each room exactly once.', `${A}/manor-night.webp`)}

    <section class="tight">
      <div class="wrap">
        <ul class="room-grid">${roomsHtml}</ul>
        <p class="note" style="margin-top: 18px">On the board, each room has its own symbol and color, so you can read the timeline quickly.</p>
      </div>
    </section>`);

// ---------- suspects ----------

const castHtml = Engine.SUSPECTS.map((s) =>
  `<li class="suspect"><img src="${A}/suspects/${s.toLowerCase()}.webp" alt="Portrait of ${s}" width="256" height="320" loading="lazy">` +
  `<h3>${s}</h3><p>${e(Engine.ROLES[s].replace('$', 'the victim'))}</p></li>`).join('');
const victimsHtml = Engine.VICTIMS.map((v) => `<li>${e(v)}</li>`).join('');

page('suspects', 'The suspects', 'The sixteen suspects of Midnight Alibi, and the twelve victims found dead in the manor.', `${hero('Suspects', 'The <em>suspects</em>', 'Sixteen people with a reason to be in the house tonight. Four to six of them are in each case, and one of them did it.')}

    <section class="tight">
      <div class="wrap">
        <ul class="cast">${castHtml}</ul>
      </div>
    </section>

    <section class="band tight">
      <div class="wrap">
        <p class="kicker">The victims</p>
        <h2>Found dead</h2>
        <p class="intro">Twelve victims, and in every case one of them is found in one room at the time of death.</p>
        <ul class="victims">${victimsHtml}</ul>
      </div>
    </section>`);

console.log(`Copied ${copied.length} art files from ${GAME}.\nWrote ${written.length} pages:\n  ${written.join('\n  ')}`);
