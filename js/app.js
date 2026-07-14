/* ===== Inglés A2→B2 — motor de la aplicación ===== */
(function () {
  'use strict';

  const LEVELS = [
    { id: 'a2', name: 'A2 · Básico', desc: 'Situaciones cotidianas, pasado y futuro simple', data: () => window.DATA_A2 },
    { id: 'b1', name: 'B1 · Intermedio', desc: 'Condicionales, perfecto, voz pasiva, estilo indirecto', data: () => window.DATA_B1 },
    { id: 'b2', name: 'B2 · Intermedio alto', desc: 'Tiempos narrativos, especulación, relativas, conectores', data: () => window.DATA_B2 },
  ];
  const USERS = [
    { name: 'Heber', avatar: '🧑‍💻' },
    { name: 'Elisa', avatar: '👩‍🎓' },
  ];
  // Intervalos Leitner en días por caja (repetición espaciada)
  const SRS_INTERVALS = [0, 1, 2, 4, 8, 15, 30];
  const NEW_CARDS_PER_SESSION = 10;
  const XP_PER_CORRECT = 10;
  const XP_LESSON_BONUS = 30;

  const $screen = document.getElementById('screen');
  const $topbar = document.getElementById('topbar');
  const $topTitle = document.getElementById('topbar-title');
  const $topUser = document.getElementById('topbar-user');
  const $nav = document.getElementById('bottomnav');

  let currentUser = localStorage.getItem('ingles_current_user') || null;

  /* ---------- Progreso (localStorage por usuario) ---------- */
  function defaultProgress() {
    return { xp: 0, streak: { last: null, count: 0 }, lessons: {}, srs: {}, placement: null, history: [] };
  }
  function loadProgress() {
    try {
      const raw = localStorage.getItem('ingles_progress_' + currentUser);
      return raw ? Object.assign(defaultProgress(), JSON.parse(raw)) : defaultProgress();
    } catch (e) { return defaultProgress(); }
  }
  function saveProgress(p) {
    localStorage.setItem('ingles_progress_' + currentUser, JSON.stringify(p));
  }
  function today() { return new Date().toISOString().slice(0, 10); }
  function touchStreak(p) {
    const t = today();
    if (p.streak.last === t) return;
    const yesterday = new Date(Date.now() - 864e5).toISOString().slice(0, 10);
    p.streak.count = (p.streak.last === yesterday) ? p.streak.count + 1 : 1;
    p.streak.last = t;
  }
  function addXP(p, amount) { p.xp += amount; touchStreak(p); }

  /* ---------- Utilidades ---------- */
  function el(html) {
    const d = document.createElement('div');
    d.innerHTML = html.trim();
    return d.firstElementChild;
  }
  function esc(s) {
    return String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  }
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  function normalize(s) {
    return String(s).toLowerCase().trim()
      .replace(/[’‘]/g, "'")
      .replace(/[.,!?;:]+$/g, '')
      .replace(/\s+/g, ' ');
  }
  function speak(text) {
    if (!('speechSynthesis' in window)) return;
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-GB';
    u.rate = 0.92;
    speechSynthesis.speak(u);
  }
  function speakBtn(text) {
    return '<button class="speak-btn" data-speak="' + esc(text) + '" title="Escuchar">🔊</button>';
  }
  function allLessons() {
    return LEVELS.flatMap(l => l.data().lessons);
  }
  function findLesson(id) {
    return allLessons().find(l => l.id === id);
  }
  function levelOf(lessonId) {
    return LEVELS.find(l => l.data().lessons.some(x => x.id === lessonId));
  }

  /* ---------- Router ---------- */
  const routes = {};
  function go(hash) { location.hash = hash; }
  function route() {
    if (!currentUser) { renderProfile(); return; }
    const parts = (location.hash || '#home').slice(1).split('/');
    const name = parts[0] || 'home';
    (routes[name] || routes.home)(parts.slice(1));
  }
  window.addEventListener('hashchange', route);

  function setChrome(title, navKey) {
    $topbar.classList.remove('hidden');
    $nav.classList.remove('hidden');
    $topTitle.textContent = title;
    const u = USERS.find(x => x.name === currentUser);
    $topUser.textContent = u ? u.avatar + ' ' + u.name : '';
    document.querySelectorAll('.nav-btn').forEach(b =>
      b.classList.toggle('active', b.dataset.nav === navKey));
    $screen.scrollTop = 0;
    window.scrollTo(0, 0);
  }

  document.getElementById('btn-home').onclick = () => go('home');
  document.querySelectorAll('.nav-btn').forEach(b => b.onclick = () => go(b.dataset.nav));
  $topUser.onclick = () => { if (confirm('¿Cambiar de usuario?')) { currentUser = null; localStorage.removeItem('ingles_current_user'); renderProfile(); } };
  document.addEventListener('click', e => {
    const sp = e.target.closest('[data-speak]');
    if (sp) { e.stopPropagation(); speak(sp.dataset.speak); }
  });

  /* ---------- Pantalla: elegir perfil ---------- */
  function renderProfile() {
    $topbar.classList.add('hidden');
    $nav.classList.add('hidden');
    $screen.innerHTML = '';
    const wrap = el('<div class="profile-screen"></div>');
    wrap.appendChild(el('<div class="logo">🇬🇧</div>'));
    wrap.appendChild(el('<h1>Inglés A2 → B2</h1>'));
    wrap.appendChild(el('<p>Lecciones, ejercicios y repaso inteligente.<br>¿Quién va a estudiar hoy?</p>'));
    USERS.forEach(u => {
      const b = el('<button class="profile-btn"><span class="avatar">' + u.avatar + '</span><span>' + u.name + '</span></button>');
      b.onclick = () => {
        currentUser = u.name;
        localStorage.setItem('ingles_current_user', u.name);
        go('home'); route();
      };
      wrap.appendChild(b);
    });
    $screen.appendChild(wrap);
  }

  /* ---------- Pantalla: inicio ---------- */
  routes.home = function () {
    setChrome('Inglés A2 → B2', 'home');
    const p = loadProgress();
    const due = dueCards(p);
    const wordsLearned = Object.values(p.srs).filter(c => c.box >= 2).length;
    const totalLessons = allLessons().length;
    const doneLessons = Object.values(p.lessons).filter(l => l.done).length;

    let html = '<div class="hero"><h1>¡Hola, ' + esc(currentUser) + '! 👋</h1>' +
      '<div class="sub">Constancia diaria: 15 minutos al día valen más que 2 horas un domingo.</div>' +
      '<div class="stat-row">' +
      '<div class="stat-box"><div class="num">🔥 ' + p.streak.count + '</div><div class="lbl">racha</div></div>' +
      '<div class="stat-box"><div class="num">' + p.xp + '</div><div class="lbl">XP</div></div>' +
      '<div class="stat-box"><div class="num">' + wordsLearned + '</div><div class="lbl">palabras</div></div>' +
      '</div></div>';

    $screen.innerHTML = html;

    if (due.total > 0) {
      const b = el('<div class="banner">🔁 Tienes tarjetas para repasar hoy <span class="cnt">' + due.total + '</span></div>');
      b.onclick = () => go('review');
      $screen.appendChild(b);
    }

    if (!p.placement) {
      const c = el('<div class="card"><h2>🎯 Examen de nivel</h2><p class="muted">12 preguntas rápidas para saber por dónde empezar.</p><button class="btn secondary" style="margin-top:.7rem">Hacer el examen</button></div>');
      c.querySelector('button').onclick = () => go('test');
      $screen.appendChild(c);
    } else {
      $screen.appendChild(el('<div class="card"><h2>🎯 Tu nivel recomendado: ' + p.placement.level.toUpperCase() + '</h2><p class="muted">Resultado del examen de nivel (' + p.placement.score + '/12). Puedes repetirlo desde Progreso.</p></div>'));
    }

    $screen.appendChild(el('<div class="muted" style="margin:.4rem 0 .6rem;font-weight:700">📚 Niveles · ' + doneLessons + '/' + totalLessons + ' lecciones completadas</div>'));
    LEVELS.forEach(level => $screen.appendChild(levelCard(level, p)));

    const next = nextLesson(p);
    if (next) {
      const btn = el('<button class="btn green" style="margin-top:.4rem">▶ Continuar: ' + esc(next.title) + '</button>');
      btn.onclick = () => go('lesson/' + next.id);
      $screen.appendChild(btn);
    }
  };

  function levelCard(level, p) {
    const lessons = level.data().lessons;
    const done = lessons.filter(l => p.lessons[l.id] && p.lessons[l.id].done).length;
    const pct = Math.round(done / lessons.length * 100);
    const c = el('<div class="card level-card">' +
      '<div class="level-badge ' + level.id + '">' + level.id.toUpperCase() + '</div>' +
      '<div class="level-info"><h2>' + esc(level.name) + '</h2>' +
      '<div class="muted small">' + esc(level.desc) + '</div>' +
      '<div class="progressbar"><div style="width:' + pct + '%"></div></div>' +
      '<div class="muted small" style="margin-top:.25rem">' + done + '/' + lessons.length + ' lecciones · ' + pct + '%</div>' +
      '</div><div class="chevron">›</div></div>');
    c.onclick = () => go('level/' + level.id);
    return c;
  }

  function nextLesson(p) {
    return allLessons().find(l => !(p.lessons[l.id] && p.lessons[l.id].done));
  }

  /* ---------- Pantalla: lista de niveles ---------- */
  routes.levels = function () {
    setChrome('Lecciones', 'levels');
    const p = loadProgress();
    $screen.innerHTML = '';
    LEVELS.forEach(level => $screen.appendChild(levelCard(level, p)));
    $screen.appendChild(el('<div class="card"><h2>💡 ¿Cómo estudiar?</h2>' +
      '<p class="muted">1. Lee la lección y los ejemplos en voz alta.<br>' +
      '2. Haz los ejercicios: equivocarse también enseña, lee siempre la explicación.<br>' +
      '3. Repasa las tarjetas de vocabulario todos los días (pestaña Repaso).<br>' +
      '4. Una lección se marca completada con un 70% o más de aciertos.</p></div>'));
  };

  /* ---------- Pantalla: lecciones de un nivel ---------- */
  routes.level = function (args) {
    const level = LEVELS.find(l => l.id === args[0]) || LEVELS[0];
    setChrome(level.name, 'levels');
    const p = loadProgress();
    $screen.innerHTML = '';
    level.data().lessons.forEach((lesson, i) => {
      const rec = p.lessons[lesson.id];
      const item = el('<div class="lesson-item">' +
        '<div class="lesson-num' + (rec && rec.done ? ' done' : '') + '">' + (rec && rec.done ? '✓' : (i + 1)) + '</div>' +
        '<div class="t"><h3>' + esc(lesson.title) + '</h3><div class="muted">' + esc(lesson.subtitle) + '</div>' +
        (rec ? '<div class="score-pill">Mejor puntuación: ' + rec.best + '%</div>' : '') +
        '</div><div class="chevron">›</div></div>');
      item.onclick = () => go('lesson/' + lesson.id);
      $screen.appendChild(item);
    });
  };

  /* ---------- Pantalla: teoría de la lección ---------- */
  routes.lesson = function (args) {
    const lesson = findLesson(args[0]);
    if (!lesson) { go('home'); return; }
    const level = levelOf(lesson.id);
    setChrome(lesson.title, 'levels');
    $screen.innerHTML = '';
    const card = el('<div class="card theory"></div>');
    card.appendChild(el('<div class="muted small">' + level.name + '</div>'));
    card.appendChild(el('<h2>' + esc(lesson.title) + '</h2>'));
    lesson.theory.forEach(sec => {
      const s = el('<div class="section"></div>');
      if (sec.h) s.appendChild(el('<h3>' + esc(sec.h) + '</h3>'));
      if (sec.p) s.appendChild(el('<p>' + sec.p + '</p>'));
      if (sec.list) {
        const ul = el('<ul></ul>');
        sec.list.forEach(li => ul.appendChild(el('<li>' + li + '</li>')));
        s.appendChild(ul);
      }
      (sec.examples || []).forEach(ex => {
        s.appendChild(el('<div class="example"><span class="en">' + esc(ex.en) + '</span> ' + speakBtn(ex.en) +
          '<div class="es">' + esc(ex.es) + '</div></div>'));
      });
      if (sec.tip) s.appendChild(el('<div class="tipbox">💡 ' + sec.tip + '</div>'));
      card.appendChild(s);
    });
    $screen.appendChild(card);
    const practice = el('<button class="btn">✏️ Practicar (' + lesson.exercises.length + ' ejercicios)</button>');
    practice.onclick = () => startQuiz(lesson.exercises, {
      title: lesson.title,
      onFinish: (score, total) => finishLesson(lesson, score, total),
    });
    $screen.appendChild(practice);
    const back = el('<button class="btn ghost">← Volver a ' + level.id.toUpperCase() + '</button>');
    back.onclick = () => go('level/' + level.id);
    $screen.appendChild(back);
  };

  function finishLesson(lesson, score, total) {
    const p = loadProgress();
    const pct = Math.round(score / total * 100);
    const rec = p.lessons[lesson.id] || { best: 0, attempts: 0, done: false };
    rec.attempts++;
    rec.best = Math.max(rec.best, pct);
    if (pct >= 70) rec.done = true;
    p.lessons[lesson.id] = rec;
    addXP(p, score * XP_PER_CORRECT + (pct >= 70 ? XP_LESSON_BONUS : 0));
    p.history.push({ d: today(), type: 'lesson', id: lesson.id, pct: pct });
    saveProgress(p);
    renderResult({
      pct: pct,
      title: pct >= 70 ? '¡Lección completada!' : 'Sigue practicando',
      emoji: pct >= 90 ? '🏆' : pct >= 70 ? '🎉' : '💪',
      msg: pct >= 70
        ? 'Ganaste ' + (score * XP_PER_CORRECT + XP_LESSON_BONUS) + ' XP. Repite la lección en unos días para fijarla.'
        : 'Necesitas un 70% para completarla. Vuelve a leer la teoría y reintenta: los errores son parte del aprendizaje.',
      actions: [
        { label: '🔁 Reintentar', cls: 'secondary', fn: () => go('lesson/' + lesson.id) },
        { label: '→ Seguir', cls: '', fn: () => go('level/' + levelOf(lesson.id).id) },
      ],
    });
  }

  /* ---------- Motor de ejercicios ---------- */
  function startQuiz(exercises, opts) {
    const items = shuffle(exercises);
    let idx = 0, score = 0;

    function renderQ() {
      const ex = items[idx];
      $screen.innerHTML = '';
      $screen.appendChild(el('<div class="quiz-top">' +
        '<div class="quiz-progress"><div style="width:' + (idx / items.length * 100) + '%"></div></div>' +
        '<div class="quiz-count">' + (idx + 1) + '/' + items.length + '</div></div>'));
      const card = el('<div class="card"></div>');
      $screen.appendChild(card);
      const renderers = { mc: renderMC, fill: renderFill, order: renderOrder, match: renderMatch, translate: renderTranslate };
      (renderers[ex.type] || renderMC)(ex, card, ok => {
        if (ok) score++;
        const next = el('<button class="btn" style="margin-top:.4rem">' + (idx + 1 < items.length ? 'Siguiente →' : 'Ver resultado') + '</button>');
        next.onclick = () => { idx++; idx < items.length ? renderQ() : opts.onFinish(score, items.length); };
        $screen.appendChild(next);
        next.scrollIntoView({ behavior: 'smooth', block: 'end' });
      });
    }
    renderQ();
  }

  function showFeedback(container, ok, ex, correctText) {
    const fb = el('<div class="feedback ' + (ok ? 'ok' : 'ko') + '">' +
      '<div class="fb-title">' + (ok ? '✅ ¡Correcto!' : '❌ Incorrecto') + '</div>' +
      (!ok && correctText ? '<div><strong>Respuesta:</strong> ' + esc(correctText) + ' ' + speakBtn(correctText) + '</div>' : '') +
      (ex.explanation ? '<div>' + ex.explanation + '</div>' : '') +
      '</div>');
    container.appendChild(fb);
  }

  // Opción múltiple
  function renderMC(ex, card, done) {
    card.appendChild(el('<div class="q-text">' + ex.q.replace(/___/g, '<span class="blank">&nbsp;&nbsp;&nbsp;</span>') + '</div>'));
    if (ex.hint) card.appendChild(el('<div class="q-hint">💡 ' + esc(ex.hint) + '</div>'));
    let answered = false;
    shuffle(ex.options.map((o, i) => ({ o: o, i: i }))).forEach(({ o, i }) => {
      const b = el('<button class="option">' + esc(o) + '</button>');
      b.onclick = () => {
        if (answered) return;
        answered = true;
        const ok = i === ex.answer;
        b.classList.add(ok ? 'correct' : 'wrong');
        card.querySelectorAll('.option').forEach(x => {
          x.disabled = true;
          if (x !== b) x.classList.add('faded');
          if (x.textContent === ex.options[ex.answer]) x.classList.add('correct');
        });
        showFeedback(card, ok, ex, ex.options[ex.answer]);
        done(ok);
      };
      card.appendChild(b);
    });
  }

  // Completar hueco escribiendo
  function renderFill(ex, card, done) {
    card.appendChild(el('<div class="q-text">' + ex.q.replace(/___/g, '<span class="blank">&nbsp;&nbsp;&nbsp;</span>') + '</div>'));
    if (ex.hint) card.appendChild(el('<div class="q-hint">💡 ' + esc(ex.hint) + '</div>'));
    const input = el('<input class="text-answer" type="text" autocapitalize="none" autocomplete="off" placeholder="Escribe tu respuesta...">');
    card.appendChild(input);
    const check = el('<button class="btn secondary">Comprobar</button>');
    card.appendChild(check);
    input.focus();
    const submit = () => {
      const answers = Array.isArray(ex.answer) ? ex.answer : [ex.answer];
      const ok = answers.some(a => normalize(a) === normalize(input.value));
      input.classList.add(ok ? 'correct' : 'wrong');
      input.disabled = true;
      check.remove();
      showFeedback(card, ok, ex, answers[0]);
      done(ok);
    };
    check.onclick = submit;
    input.addEventListener('keydown', e => { if (e.key === 'Enter' && !input.disabled) submit(); });
  }

  // Ordenar palabras
  function renderOrder(ex, card, done) {
    card.appendChild(el('<div class="q-text">Ordena la frase:</div>'));
    if (ex.hint) card.appendChild(el('<div class="q-hint">💡 ' + esc(ex.hint) + '</div>'));
    const target = ex.answer.split(' ');
    const area = el('<div class="order-area"></div>');
    const pool = el('<div class="order-pool"></div>');
    card.appendChild(area);
    card.appendChild(pool);
    const chosen = [];
    shuffle(target).forEach(word => {
      const chip = el('<button class="chip">' + esc(word) + '</button>');
      chip.onclick = () => {
        if (chip.parentElement === pool) {
          area.appendChild(chip); chip.classList.add('in-area'); chosen.push(chip);
        } else {
          pool.appendChild(chip); chip.classList.remove('in-area'); chosen.splice(chosen.indexOf(chip), 1);
        }
        check.disabled = area.children.length !== target.length;
      };
      pool.appendChild(chip);
    });
    const check = el('<button class="btn secondary" disabled>Comprobar</button>');
    card.appendChild(check);
    check.onclick = () => {
      const built = Array.from(area.children).map(c => c.textContent).join(' ');
      const ok = normalize(built) === normalize(ex.answer);
      area.classList.add(ok ? 'correct' : 'wrong');
      card.querySelectorAll('.chip').forEach(c => c.onclick = null);
      check.remove();
      showFeedback(card, ok, ex, ex.answer);
      done(ok);
    };
  }

  // Emparejar
  function renderMatch(ex, card, done) {
    card.appendChild(el('<div class="q-text">' + esc(ex.q || 'Empareja cada palabra con su significado:') + '</div>'));
    const grid = el('<div class="match-grid"></div>');
    card.appendChild(grid);
    const left = shuffle(ex.pairs.map((p, i) => ({ text: p[0], id: i })));
    const right = shuffle(ex.pairs.map((p, i) => ({ text: p[1], id: i })));
    const btns = [];
    let sel = null, pairsDone = 0, mistakes = 0, finished = false;
    const maxRows = Math.max(left.length, right.length);
    for (let r = 0; r < maxRows; r++) {
      [left[r], right[r]].forEach((item, side) => {
        if (!item) return;
        const b = el('<button class="match-btn">' + esc(item.text) + '</button>');
        b.dataset.id = item.id; b.dataset.side = side;
        b.onclick = () => {
          if (finished || b.classList.contains('paired')) return;
          if (!sel) { sel = b; b.classList.add('sel'); return; }
          if (sel === b) { sel.classList.remove('sel'); sel = null; return; }
          if (sel.dataset.side === b.dataset.side) { sel.classList.remove('sel'); sel = b; b.classList.add('sel'); return; }
          if (sel.dataset.id === b.dataset.id) {
            sel.classList.remove('sel');
            sel.classList.add('paired'); b.classList.add('paired');
            pairsDone++;
            if (pairsDone === ex.pairs.length) {
              finished = true;
              const ok = mistakes <= 1;
              showFeedback(card, ok, ex, null);
              done(ok);
            }
          } else {
            mistakes++;
            const a = sel;
            a.classList.remove('sel');
            a.classList.add('shake'); b.classList.add('shake');
            setTimeout(() => { a.classList.remove('shake'); b.classList.remove('shake'); }, 400);
          }
          sel = null;
        };
        btns.push(b);
        grid.appendChild(b);
      });
    }
  }

  // Traducir
  function renderTranslate(ex, card, done) {
    card.appendChild(el('<div class="q-text">Traduce al inglés:<br><em>«' + esc(ex.q) + '»</em></div>'));
    if (ex.hint) card.appendChild(el('<div class="q-hint">💡 ' + esc(ex.hint) + '</div>'));
    const input = el('<input class="text-answer" type="text" autocapitalize="none" autocomplete="off" placeholder="Write it in English...">');
    card.appendChild(input);
    const check = el('<button class="btn secondary">Comprobar</button>');
    card.appendChild(check);
    const submit = () => {
      const answers = Array.isArray(ex.answer) ? ex.answer : [ex.answer];
      const ok = answers.some(a => normalize(a) === normalize(input.value));
      input.classList.add(ok ? 'correct' : 'wrong');
      input.disabled = true;
      check.remove();
      showFeedback(card, ok, ex, answers[0]);
      done(ok);
    };
    check.onclick = submit;
    input.addEventListener('keydown', e => { if (e.key === 'Enter' && !input.disabled) submit(); });
  }

  /* ---------- Pantalla de resultado ---------- */
  function renderResult(r) {
    $screen.innerHTML = '';
    const w = el('<div class="result-screen">' +
      '<div class="big">' + r.emoji + '</div>' +
      '<h1>' + esc(r.title) + '</h1>' +
      '<div class="score-ring" style="--pct:' + r.pct + '"><div>' + r.pct + '%<span class="pct-lbl">aciertos</span></div></div>' +
      '<p class="muted" style="margin-bottom:1.2rem">' + r.msg + '</p></div>');
    $screen.appendChild(w);
    r.actions.forEach(a => {
      const b = el('<button class="btn ' + a.cls + '">' + a.label + '</button>');
      b.onclick = a.fn;
      w.appendChild(b);
    });
  }

  /* ---------- Repaso con repetición espaciada ---------- */
  function dueCards(p) {
    const t = today();
    const due = [], fresh = [];
    window.DATA_VOCAB.forEach(card => {
      const rec = p.srs[card.id];
      if (!rec) fresh.push(card);
      else if (rec.due <= t && rec.box < SRS_INTERVALS.length - 1) due.push(card);
    });
    return { due: due, fresh: fresh.slice(0, NEW_CARDS_PER_SESSION), total: due.length + Math.min(fresh.length, NEW_CARDS_PER_SESSION) };
  }

  routes.review = function () {
    setChrome('Repaso de vocabulario', 'review');
    const p = loadProgress();
    const d = dueCards(p);
    const queue = shuffle(d.due.concat(d.fresh));
    $screen.innerHTML = '';
    if (!queue.length) {
      $screen.appendChild(el('<div class="result-screen"><div class="big">😎</div><h1>¡Todo al día!</h1>' +
        '<p class="muted">No tienes tarjetas pendientes. La repetición espaciada te avisará cuando toque repasar. Vuelve mañana.</p></div>'));
      const b = el('<button class="btn secondary">📚 Ir a las lecciones</button>');
      b.onclick = () => go('levels');
      $screen.appendChild(b);
      return;
    }
    let i = 0, reviewed = 0;
    function show() {
      const card = queue[i];
      $screen.innerHTML = '';
      $screen.appendChild(el('<div class="deck-count">Tarjeta ' + (i + 1) + ' de ' + queue.length + ' · ' + esc(card.topic) + ' (' + card.level.toUpperCase() + ')</div>'));
      const fc = el('<div class="flashcard">' +
        '<div class="word">' + esc(card.en) + ' ' + speakBtn(card.en) + '</div>' +
        '<div class="tap-hint">Piensa la traducción y toca la tarjeta</div></div>');
      $screen.appendChild(fc);
      fc.onclick = () => {
        fc.onclick = null;
        fc.innerHTML = '<div class="word">' + esc(card.en) + ' ' + speakBtn(card.en) + '</div>' +
          '<div class="translation">' + esc(card.es) + '</div>' +
          '<div class="example-sm">' + esc(card.ex) + '</div>';
        const btns = el('<div class="srs-btns">' +
          '<button class="btn again">Otra vez</button>' +
          '<button class="btn hard">Difícil</button>' +
          '<button class="btn good">¡Bien!</button></div>');
        $screen.appendChild(btns);
        btns.children[0].onclick = () => grade(card, 0);
        btns.children[1].onclick = () => grade(card, 1);
        btns.children[2].onclick = () => grade(card, 2);
      };
    }
    function grade(card, quality) {
      const rec = p.srs[card.id] || { box: 0, due: today() };
      if (quality === 0) { rec.box = 0; queue.push(card); }               // otra vez: se repite hoy mismo
      else if (quality === 1) { rec.box = Math.max(1, rec.box); }          // difícil: mantiene caja, repasa mañana
      else { rec.box = Math.min(rec.box + 1, SRS_INTERVALS.length - 1); }  // bien: sube de caja
      const days = quality === 0 ? 0 : SRS_INTERVALS[rec.box];
      rec.due = new Date(Date.now() + days * 864e5).toISOString().slice(0, 10);
      p.srs[card.id] = rec;
      if (quality > 0) { reviewed++; addXP(p, 5); }
      saveProgress(p);
      i++;
      if (i < queue.length) show();
      else {
        p.history.push({ d: today(), type: 'review', n: reviewed });
        saveProgress(p);
        renderResult({
          pct: 100, emoji: '🧠', title: '¡Repaso terminado!',
          msg: 'Repasaste ' + reviewed + ' tarjetas y ganaste ' + (reviewed * 5) + ' XP. Las que marcaste «Bien» volverán en más días; las difíciles, antes.',
          actions: [{ label: '🏠 Volver al inicio', cls: '', fn: () => go('home') }],
        });
      }
    }
    show();
  };

  /* ---------- Examen de nivel ---------- */
  routes.test = function () {
    setChrome('Examen de nivel', 'home');
    $screen.innerHTML = '';
    const intro = el('<div class="card"><h2>🎯 Examen de nivel</h2>' +
      '<p class="muted">12 preguntas de gramática y vocabulario, de más fáciles a más difíciles. No pasa nada si fallas: sirve para recomendarte por dónde empezar.</p>' +
      '<button class="btn" style="margin-top:.8rem">Empezar</button></div>');
    $screen.appendChild(intro);
    intro.querySelector('button').onclick = () => {
      let score = 0, byLevel = { a2: 0, b1: 0, b2: 0 };
      const items = window.DATA_TEST;
      let idx = 0;
      function renderQ() {
        const ex = items[idx];
        $screen.innerHTML = '';
        $screen.appendChild(el('<div class="quiz-top"><div class="quiz-progress"><div style="width:' + (idx / items.length * 100) + '%"></div></div><div class="quiz-count">' + (idx + 1) + '/' + items.length + '</div></div>'));
        const card = el('<div class="card"></div>');
        $screen.appendChild(card);
        card.appendChild(el('<div class="q-text">' + ex.q.replace(/___/g, '<span class="blank">&nbsp;&nbsp;&nbsp;</span>') + '</div>'));
        shuffle(ex.options.map((o, i) => ({ o: o, i: i }))).forEach(({ o, i }) => {
          const b = el('<button class="option">' + esc(o) + '</button>');
          b.onclick = () => {
            if (i === ex.answer) { score++; byLevel[ex.level]++; }
            idx++;
            idx < items.length ? renderQ() : finish();
          };
          card.appendChild(b);
        });
      }
      function finish() {
        let level = 'a2';
        if (byLevel.a2 >= 3 && byLevel.b1 >= 3) level = byLevel.b2 >= 3 ? 'b2' : 'b1';
        const p = loadProgress();
        p.placement = { level: level, score: score, date: today() };
        addXP(p, 20);
        saveProgress(p);
        renderResult({
          pct: Math.round(score / items.length * 100), emoji: '🎯',
          title: 'Nivel recomendado: ' + level.toUpperCase(),
          msg: 'Acertaste ' + score + ' de ' + items.length + '. Te recomendamos empezar por las lecciones de ' + level.toUpperCase() + ', aunque puedes explorar cualquier nivel.',
          actions: [{ label: '📚 Ir a ' + level.toUpperCase(), cls: '', fn: () => go('level/' + level) }],
        });
      }
      renderQ();
    };
  };

  /* ---------- Pantalla: progreso ---------- */
  routes.stats = function () {
    setChrome('Tu progreso', 'stats');
    const p = loadProgress();
    const wordsLearned = Object.values(p.srs).filter(c => c.box >= 2).length;
    const wordsMastered = Object.values(p.srs).filter(c => c.box >= 4).length;
    const attempts = Object.values(p.lessons).reduce((s, l) => s + l.attempts, 0);
    const doneLessons = Object.values(p.lessons).filter(l => l.done).length;
    const activeDays = new Set(p.history.map(h => h.d)).size;

    $screen.innerHTML = '';
    $screen.appendChild(el('<div class="stats-grid">' +
      '<div class="stat-card"><div class="num">🔥 ' + p.streak.count + '</div><div class="lbl">Días de racha</div></div>' +
      '<div class="stat-card"><div class="num">' + p.xp + '</div><div class="lbl">XP total</div></div>' +
      '<div class="stat-card"><div class="num">' + doneLessons + '/' + allLessons().length + '</div><div class="lbl">Lecciones</div></div>' +
      '<div class="stat-card"><div class="num">' + attempts + '</div><div class="lbl">Prácticas hechas</div></div>' +
      '<div class="stat-card"><div class="num">' + wordsLearned + '</div><div class="lbl">Palabras aprendidas</div></div>' +
      '<div class="stat-card"><div class="num">' + wordsMastered + '</div><div class="lbl">Palabras dominadas</div></div>' +
      '</div>'));

    LEVELS.forEach(level => {
      const lessons = level.data().lessons;
      const card = el('<div class="card"><h2>' + esc(level.name) + '</h2></div>');
      lessons.forEach(lesson => {
        const rec = p.lessons[lesson.id];
        card.appendChild(el('<div class="row" style="justify-content:space-between;padding:.3rem 0;border-bottom:1px solid var(--border)">' +
          '<span class="small">' + (rec && rec.done ? '✅' : '⬜') + ' ' + esc(lesson.title) + '</span>' +
          '<span class="small muted">' + (rec ? rec.best + '%' : '—') + '</span></div>'));
      });
      $screen.appendChild(card);
    });

    const retake = el('<button class="btn secondary">🎯 Repetir examen de nivel</button>');
    retake.onclick = () => go('test');
    $screen.appendChild(retake);

    const reset = el('<button class="btn ghost" style="color:var(--red)">🗑 Borrar el progreso de ' + esc(currentUser) + '</button>');
    reset.onclick = () => {
      if (confirm('¿Seguro que quieres borrar TODO el progreso de ' + currentUser + '? No se puede deshacer.')) {
        localStorage.removeItem('ingles_progress_' + currentUser);
        route();
      }
    };
    $screen.appendChild(reset);
  };

  /* ---------- Arranque ---------- */
  route();
})();
