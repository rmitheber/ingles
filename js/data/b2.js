/* Nivel B2 — 10 lecciones (currículo CEFR) */
window.DATA_B2 = { lessons: [

{
  id: 'b2-01',
  title: 'Narrative tenses',
  subtitle: 'Combinar todos los pasados al contar historias',
  theory: [
    { h: 'Las cuatro herramientas del narrador', list: [
        '<code>past simple</code>: los hechos principales, en orden: <em>She opened the door and screamed.</em>',
        '<code>past continuous</code>: la escena de fondo: <em>The wind was blowing...</em>',
        '<code>past perfect</code>: lo que pasó antes de la historia: <em>He had forgotten his phone.</em>',
        '<code>past perfect continuous</code>: duración antes del pasado: <em>They had been driving for hours.</em>' ] },
    { h: 'Ejemplo narrado', examples: [
        { en: 'It was raining when Sara left the office. She had been working since dawn and had missed lunch, so she decided to stop at a café.', es: 'Llovía cuando Sara salió de la oficina. Había estado trabajando desde el amanecer y se había saltado la comida, así que decidió parar en una cafetería.' } ],
      tip: 'Truco: dibuja la línea temporal. Lo más antiguo → past perfect; el fondo → continuous; la acción → simple.' },
  ],
  exercises: [
    { type: 'mc', q: 'When I got home, I realized I ___ my keys at the office.', options: ['had left', 'left', 'was leaving', 'have left'], answer: 0, explanation: 'Dejar las llaves ocurrió ANTES de llegar a casa → past perfect.' },
    { type: 'mc', q: 'She was exhausted because she ___ all night.', options: ['had been dancing', 'danced', 'was dancing', 'has danced'], answer: 0, explanation: 'Duración previa con consecuencia → past perfect continuous.' },
    { type: 'fill', q: 'While we ___ (drive) home, we saw an accident.', answer: ['were driving'], explanation: 'Acción de fondo → past continuous.' },
    { type: 'mc', q: 'By the time the police arrived, the thief ___.', options: ['had escaped', 'escaped', 'was escaping', 'has escaped'], answer: 0, explanation: '<em>By the time</em> + past simple → la otra acción es anterior: past perfect.' },
    { type: 'order', answer: 'She had been waiting for an hour when he finally arrived', explanation: 'Duración previa (had been waiting) + hecho principal (arrived).' },
    { type: 'mc', q: 'I ___ TV when suddenly the lights went out.', options: ['was watching', 'watched', 'had watched', 'have been watching'], answer: 0, explanation: 'Acción en curso interrumpida → past continuous.' },
    { type: 'mc', q: 'He didn\'t laugh at the joke because he ___ it before.', options: ['had heard', 'heard', 'was hearing', 'has heard'], answer: 0, explanation: 'Escuchó el chiste antes de ese momento pasado → past perfect.' },
    { type: 'translate', q: 'Cuando llegué, ellos ya se habían ido.', answer: ['When I arrived, they had already left', 'When I arrived they had already left', 'When I arrived, they had already gone', 'When I arrived they had already gone'], explanation: 'Acción anterior → <em>had already left/gone</em>.' },
  ],
},

{
  id: 'b2-02',
  title: 'Future perfect & continuous',
  subtitle: 'Mirar el futuro desde más lejos',
  theory: [
    { h: 'Future continuous', p: '<code>will be + -ing</code>: una acción que estará en desarrollo en un momento futuro.',
      examples: [
        { en: 'This time tomorrow, I will be flying to London.', es: 'Mañana a esta hora estaré volando a Londres.' } ] },
    { h: 'Future perfect', p: '<code>will have + participio</code>: una acción que estará terminada antes de un momento futuro. Suele ir con <code>by</code> (para entonces).',
      examples: [
        { en: 'By 2030, I will have finished my degree.', es: 'Para 2030 habré terminado la carrera.' },
        { en: "Call me at 9 — we'll have had dinner by then.", es: 'Llámame a las 9: ya habremos cenado para entonces.' } ] },
    { h: 'Señales', list: [
        '<code>by + fecha, by then, by the time...</code> → future perfect',
        '<code>this time tomorrow/next week, at 8 pm tomorrow</code> → future continuous' ],
      tip: 'También existe <em>will have been + -ing</em>: <em>By June, I\'ll have been working here for ten years.</em>' },
  ],
  exercises: [
    { type: 'mc', q: 'By next month, they ___ the new bridge.', options: ['will have finished', 'will be finishing', 'will finish been', 'have finished'], answer: 0, explanation: '<em>By + momento futuro</em> → future perfect.' },
    { type: 'mc', q: "Don't call at 8. We ___ dinner.", options: ['will be having', 'will have had', 'will have', 'are had'], answer: 0, explanation: 'Acción en desarrollo en ese momento → future continuous.' },
    { type: 'fill', q: 'By the end of this year, I ___ (save) enough money for the trip.', answer: ['will have saved', "'ll have saved"], explanation: 'Terminado antes de fin de año → <em>will have saved</em>.' },
    { type: 'order', answer: 'This time next week I will be lying on the beach', explanation: '<em>This time next week</em> → future continuous.' },
    { type: 'mc', q: 'In 2030, we ___ in this house for 20 years.', options: ['will have been living', 'will live', 'will be living', 'have lived'], answer: 0, explanation: 'Duración hasta un punto futuro → future perfect continuous.' },
    { type: 'mc', q: 'She ___ by the time you get home.', options: ['will have left', 'will be leave', 'leaves been', 'is leaving by'], answer: 0, explanation: '<em>By the time</em> → future perfect: ya se habrá ido.' },
    { type: 'translate', q: 'Para diciembre habré terminado el curso.', answer: ['By December I will have finished the course', 'By December, I will have finished the course', "By December I'll have finished the course"], explanation: '<em>By + mes → will have finished</em>.' },
    { type: 'mc', q: 'At 10 am tomorrow, he ___ his exam.', options: ['will be taking', 'will have been taken', 'takes', 'is taken'], answer: 0, explanation: 'En pleno examen a esa hora → future continuous.' },
  ],
},

{
  id: 'b2-03',
  title: 'Mixed conditionals',
  subtitle: 'Cruzar pasado y presente en hipótesis',
  theory: [
    { h: 'Pasado → presente', p: 'Condición pasada con resultado presente: <code>If + past perfect, would + verbo</code>.',
      examples: [
        { en: "If I had studied medicine, I would be a doctor now.", es: 'Si hubiera estudiado medicina, ahora sería médico.' },
        { en: "If we hadn't missed the flight, we would be in Rome now.", es: 'Si no hubiéramos perdido el vuelo, ahora estaríamos en Roma.' } ] },
    { h: 'Presente → pasado', p: 'Condición presente (permanente) con resultado pasado: <code>If + past simple, would have + participio</code>.',
      examples: [
        { en: "If I spoke German, I would have applied for that job.", es: 'Si hablara alemán, habría solicitado ese trabajo.' } ],
      tip: 'Pregúntate: ¿cuándo es la condición y cuándo el resultado? Cada mitad usa la gramática de su tiempo.' },
  ],
  exercises: [
    { type: 'mc', q: 'If I had taken that job, I ___ in New York now.', options: ['would be living', 'would have lived', 'lived', 'will live'], answer: 0, explanation: 'Condición pasada + resultado presente (now) → <em>would be</em>.' },
    { type: 'mc', q: 'If she ___ shy, she would have talked to him at the party.', options: ["weren't", "hadn't been", "isn't", "wouldn't be"], answer: 0, explanation: 'Rasgo presente permanente (es tímida) + resultado pasado → <em>If + past simple</em>.' },
    { type: 'fill', q: "If you had slept more, you ___ (not/be) so tired now.", answer: ["wouldn't be", 'would not be'], explanation: 'Pasado → presente: <em>wouldn\'t be so tired now</em>.' },
    { type: 'order', answer: 'If I had saved money I would be rich now', explanation: 'Condición pasada (had saved) + resultado presente (would be now).' },
    { type: 'mc', q: 'Elige la frase correcta:', options: ['If he had caught the train, he would be here now.', 'If he caught the train, he would have be here now.', 'If he had caught the train, he will be here now.', 'If he would catch the train, he would be here now.'], answer: 0, explanation: 'Pasado (had caught) → presente (would be here now).' },
    { type: 'mc', q: "If I didn't love animals, I ___ a vet.", options: ["wouldn't have become", "wouldn't become", "didn't become", "won't have become"], answer: 0, explanation: 'Condición presente (amo los animales) + decisión pasada → <em>wouldn\'t have become</em>.' },
    { type: 'translate', q: 'Si hubiera aprendido inglés de niño, ahora hablaría mejor.', answer: ['If I had learned English as a child, I would speak better now', 'If I had learned English as a child I would speak better now', 'If I had learnt English as a child, I would speak better now', 'If I had learnt English as a child I would speak better now'], explanation: 'Mixto clásico: <em>had learned → would speak now</em>.' },
    { type: 'fill', q: 'If we ___ (live) closer, we would have visited you yesterday.', answer: 'lived', explanation: 'Condición presente permanente → past simple: <em>lived</em>.' },
  ],
},

{
  id: 'b2-04',
  title: 'Speculating about the past',
  subtitle: 'must have, might have, can\'t have, needn\'t have',
  theory: [
    { h: 'Deducciones sobre el pasado', p: 'Modal + <code>have + participio</code>:', list: [
        '<code>must have done</code> = seguro que pasó: <em>She must have forgotten.</em>',
        '<code>might/may/could have done</code> = quizás pasó: <em>He might have got lost.</em>',
        '<code>can\'t have done</code> = imposible que pasara: <em>You can\'t have seen her, she\'s abroad.</em>' ] },
    { h: 'Reproches y arrepentimiento', list: [
        '<code>should have done</code> = debería haberlo hecho (y no lo hizo): <em>You should have called me.</em>',
        '<code>needn\'t have done</code> = lo hizo pero no hacía falta: <em>You needn\'t have brought a gift.</em>' ],
      examples: [
        { en: 'I should have studied more for the test.', es: 'Debería haber estudiado más para el examen.' },
        { en: 'We needn\'t have hurried — the train was late.', es: 'No hacía falta que corriéramos: el tren llegó tarde.' } ],
      tip: 'En el habla rápida <em>must have</em> suena «must\'ve» y <em>should have</em> «should\'ve».' },
  ],
  exercises: [
    { type: 'mc', q: 'The ground is wet. It ___ last night.', options: ['must have rained', 'must rain', "can't have rained", 'should have rained'], answer: 0, explanation: 'Evidencia clara → deducción segura sobre el pasado: <em>must have rained</em>.' },
    { type: 'mc', q: 'He ___ the email — he was on a plane without wifi all day.', options: ["can't have sent", 'must have sent', 'might have sent', 'needn\'t have sent'], answer: 0, explanation: 'Imposible → <em>can\'t have + participio</em>.' },
    { type: 'mc', q: "I failed the exam. I ___ harder.", options: ['should have studied', 'must have studied', 'needn\'t have studied', 'could have study'], answer: 0, explanation: 'Arrepentimiento → <em>should have studied</em>.' },
    { type: 'fill', q: "She's late. She ___ (quizás) have missed the bus.", answer: ['might', 'may', 'could'], explanation: 'Posibilidad en el pasado → <em>might/may/could have missed</em>.' },
    { type: 'order', answer: 'You should have told me the truth', explanation: 'Reproche: <em>should have + participio</em>.' },
    { type: 'mc', q: 'I bought bread, but there was plenty at home. I ___ it.', options: ["needn't have bought", "mustn't have bought", "shouldn't buy", "can't have bought"], answer: 0, explanation: 'Lo hizo pero era innecesario → <em>needn\'t have bought</em>.' },
    { type: 'match', q: 'Empareja la expresión con su significado:', pairs: [['must have done', 'seguro que pasó'], ["can't have done", 'imposible que pasara'], ['should have done', 'debería haberlo hecho'], ["needn't have done", 'no hacía falta hacerlo']], explanation: 'Todos usan <em>have + participio</em> para hablar del pasado.' },
    { type: 'translate', q: 'Deberías haberme llamado.', answer: ['You should have called me', "You should've called me", 'You should have phoned me'], explanation: '<em>should have + participio</em>.' },
  ],
},

{
  id: 'b2-05',
  title: 'Relative clauses',
  subtitle: 'Especificativas y explicativas',
  theory: [
    { h: 'Pronombres relativos', list: [
        '<code>who</code> → personas · <code>which</code> → cosas · <code>that</code> → ambas (solo especificativas)',
        '<code>whose</code> → posesión: <em>the man whose car was stolen</em>',
        '<code>where</code> → lugares · <code>when</code> → momentos' ] },
    { h: 'Especificativas (defining)', p: 'Identifican de quién/qué hablamos. Sin comas. El pronombre se puede omitir si es objeto.',
      examples: [
        { en: 'The woman who lives next door is a doctor.', es: 'La mujer que vive al lado es médica.' },
        { en: 'The film (that) we watched was great.', es: 'La película que vimos fue genial (that opcional: es objeto).' } ] },
    { h: 'Explicativas (non-defining)', p: 'Añaden información extra. Van ENTRE COMAS y no admiten <em>that</em> ni omitir el pronombre.',
      examples: [
        { en: 'My brother, who lives in Madrid, is visiting us.', es: 'Mi hermano, que vive en Madrid, nos visita.' },
        { en: 'The hotel, which was very old, had no lift.', es: 'El hotel, que era muy viejo, no tenía ascensor.' } ],
      tip: 'Si puedes quitar la cláusula y la frase sigue identificando a la persona/cosa, es explicativa → comas y nada de <em>that</em>.' },
  ],
  exercises: [
    { type: 'mc', q: 'The man ___ fixed my car is very good.', options: ['who', 'which', 'whose', 'where'], answer: 0, explanation: 'Persona + sujeto de la cláusula → <em>who</em> (o that).' },
    { type: 'mc', q: 'Paris, ___ is the capital of France, is beautiful.', options: ['which', 'that', 'who', 'where'], answer: 0, explanation: 'Explicativa (entre comas) con cosa → <em>which</em>; «that» está prohibido aquí.' },
    { type: 'mc', q: "That's the girl ___ brother plays in a band.", options: ['whose', 'who', 'which', 'that'], answer: 0, explanation: 'Posesión (el hermano DE ella) → <em>whose</em>.' },
    { type: 'mc', q: 'This is the town ___ I was born.', options: ['where', 'which', 'that', 'who'], answer: 0, explanation: 'Lugar → <em>where</em> (= in which).' },
    { type: 'mc', q: '¿En qué frase se puede OMITIR el pronombre relativo?', options: ['The book that I bought yesterday...', 'The book that is on the table...', 'My mother, who is 70,...', 'The author that wrote this...'], answer: 0, explanation: 'Solo si el relativo es OBJETO (I bought the book) se puede omitir: <em>The book I bought...</em>' },
    { type: 'order', answer: 'The restaurant where we met has closed', explanation: 'Lugar → <em>where</em>: the restaurant where we met.' },
    { type: 'fill', q: 'I never remember the day ___ we first met. (relativo de tiempo)', answer: 'when', explanation: 'Momento → <em>when</em>: the day when we met.' },
    { type: 'translate', q: 'La mujer que vive aquí es profesora.', answer: ['The woman who lives here is a teacher', 'The woman that lives here is a teacher'], explanation: 'Especificativa de persona → <em>who/that</em>, sin comas.' },
  ],
},

{
  id: 'b2-06',
  title: 'Advanced passive',
  subtitle: 'have something done, it is said that...',
  theory: [
    { h: 'Have/get something done', p: 'Cuando OTRO hace algo por ti (un servicio): <code>have + objeto + participio</code>.',
      examples: [
        { en: 'I had my hair cut yesterday.', es: 'Me corté el pelo (me lo cortaron) ayer.' },
        { en: "We're having the house painted.", es: 'Nos están pintando la casa.' },
        { en: 'She got her phone repaired.', es: 'Le arreglaron el móvil.' } ] },
    { h: 'Pasivas impersonales (estilo periodístico)', p: 'Con verbos como say, believe, know, expect, report:', list: [
        '<code>It is said that</code> he is very rich. (Se dice que...)',
        'He <code>is said to be</code> very rich. (Se dice que es...)',
        'The criminal <code>is believed to have escaped</code> abroad. (Se cree que huyó...)' ],
      tip: 'También en pasado: <em>It was reported that... / He was thought to be...</em>' },
  ],
  exercises: [
    { type: 'mc', q: 'I don\'t cut my hair myself. I ___ every month.', options: ['have it cut', 'cut it', 'have cut it', 'am cut it'], answer: 0, explanation: 'Servicio hecho por otro → <em>have it cut</em>.' },
    { type: 'mc', q: 'It ___ that the economy will improve next year.', options: ['is expected', 'expects', 'is expecting', 'expected to'], answer: 0, explanation: 'Pasiva impersonal: <em>It is expected that...</em>' },
    { type: 'mc', q: 'She ___ to be the best player in the team.', options: ['is said', 'says', 'is saying', 'said'], answer: 0, explanation: 'Pasiva personal: <em>She is said to be...</em> (se dice que es).' },
    { type: 'fill', q: 'We are having the kitchen ___ (renovate) next month.', answer: 'renovated', explanation: '<em>have + objeto + participio</em>: having the kitchen renovated.' },
    { type: 'order', answer: 'He is believed to have left the country', explanation: 'Pasiva de opinión sobre el pasado: <em>is believed + to have + participio</em>.' },
    { type: 'mc', q: 'They got their car ___ last week.', options: ['repaired', 'repair', 'to repair', 'repairing'], answer: 0, explanation: '<em>get + objeto + participio</em>: got their car repaired.' },
    { type: 'translate', q: 'Me revisaron los ojos la semana pasada. (have something done)', answer: ['I had my eyes checked last week', 'I had my eyes tested last week'], explanation: 'Servicio → <em>I had my eyes checked/tested</em>.' },
    { type: 'mc', q: '"Se sabe que el clima está cambiando" =', options: ['The climate is known to be changing', 'The climate knows to change', 'It knows that the climate changes', 'The climate is knowing to change'], answer: 0, explanation: 'Pasiva personal: <em>is known to be + -ing</em>.' },
  ],
},

{
  id: 'b2-07',
  title: 'Wish & regrets',
  subtitle: 'wish, if only, would rather',
  theory: [
    { h: 'Wish + past simple', p: 'Deseo sobre el PRESENTE (que no es así): <em>I wish I had more time</em> (no lo tengo).',
      examples: [
        { en: 'I wish I lived near the sea.', es: 'Ojalá viviera cerca del mar.' },
        { en: 'I wish I could fly.', es: 'Ojalá pudiera volar.' } ] },
    { h: 'Wish + past perfect', p: 'Arrepentimiento sobre el PASADO: <em>I wish I had studied harder</em> (no lo hice).',
      examples: [
        { en: "I wish I hadn't said that.", es: 'Ojalá no hubiera dicho eso.' } ] },
    { h: 'Wish + would y would rather', list: [
        '<code>wish + would</code>: queja sobre lo que otro hace: <em>I wish you would stop shouting.</em>',
        '<code>would rather + verbo</code>: preferencia: <em>I\'d rather stay home tonight.</em>',
        '<code>if only</code> = wish más enfático: <em>If only I had listened!</em>' ],
      tip: 'Igual que en los condicionales: presente imposible → past; pasado imposible → past perfect.' },
  ],
  exercises: [
    { type: 'mc', q: 'I wish I ___ taller.', options: ['were', 'am', 'would be', 'have been'], answer: 0, explanation: 'Deseo presente → <em>wish + past simple (were)</em>.' },
    { type: 'mc', q: 'I wish I ___ so much cake at the party yesterday.', options: ["hadn't eaten", "didn't eat", "wouldn't eat", "haven't eaten"], answer: 0, explanation: 'Arrepentimiento del pasado → <em>wish + past perfect</em>.' },
    { type: 'mc', q: 'I wish the neighbours ___ making noise every night!', options: ['would stop', 'stopped had', 'will stop', 'stop'], answer: 0, explanation: 'Queja sobre el comportamiento de otros → <em>wish + would</em>.' },
    { type: 'fill', q: 'If only I ___ (know) about the meeting earlier! (pasado)', answer: ['had known'], explanation: 'Lamento del pasado → <em>if only + past perfect</em>.' },
    { type: 'mc', q: "I'd rather ___ at home tonight.", options: ['stay', 'to stay', 'staying', 'stayed'], answer: 0, explanation: '<em>Would rather + verbo base</em> (sin to).' },
    { type: 'order', answer: 'I wish I had never met him', explanation: 'Arrepentimiento: <em>wish + past perfect (had met)</em>.' },
    { type: 'translate', q: 'Ojalá tuviera más tiempo libre.', answer: ['I wish I had more free time', 'If only I had more free time'], explanation: 'Deseo presente → <em>wish + past simple</em>.' },
    { type: 'mc', q: 'She wishes she ___ speak French.', options: ['could', 'can', 'would can', 'may'], answer: 0, explanation: 'Habilidad deseada → <em>wish + could</em>.' },
  ],
},

{
  id: 'b2-08',
  title: 'Linkers & connectors',
  subtitle: 'although, despite, however, therefore...',
  theory: [
    { h: 'Contraste', list: [
        '<code>although / even though</code> + frase: <em>Although it was raining, we went out.</em>',
        '<code>despite / in spite of</code> + sustantivo o -ing: <em>Despite the rain... / Despite being tired...</em>',
        '<code>however</code> empieza frase nueva: <em>...It was expensive. However, we bought it.</em>',
        '<code>whereas / while</code> compara: <em>He likes tea, whereas she prefers coffee.</em>' ] },
    { h: 'Causa y consecuencia', list: [
        '<code>because of / due to</code> + sustantivo: <em>The match was cancelled due to the storm.</em>',
        '<code>therefore / as a result / consequently</code>: consecuencia formal',
        '<code>so that</code> + propósito: <em>I left early so that I could catch the train.</em>' ] },
    { h: 'Añadir y organizar', list: [
        '<code>in addition / moreover / furthermore</code> = además',
        '<code>on the one hand... on the other hand</code> = por un lado... por otro',
        '<code>in conclusion / to sum up</code> = en conclusión' ],
      tip: 'Regla rápida: although + sujeto y verbo; despite + sustantivo/-ing. <em>Despite although</em> nunca van juntos.' },
  ],
  exercises: [
    { type: 'mc', q: '___ being tired, she finished the marathon.', options: ['Despite', 'Although', 'However', 'Because'], answer: 0, explanation: '+ -ing (being) → <em>despite / in spite of</em>.' },
    { type: 'mc', q: '___ it was late, we kept working.', options: ['Although', 'Despite', 'Due to', 'Therefore'], answer: 0, explanation: '+ frase con sujeto y verbo → <em>although</em>.' },
    { type: 'mc', q: 'The flight was delayed ___ the fog.', options: ['due to', 'although', 'so that', 'whereas'], answer: 0, explanation: 'Causa + sustantivo → <em>due to / because of</em>.' },
    { type: 'mc', q: "He didn't study. ___, he failed the exam.", options: ['As a result', 'Although', 'Despite', 'In addition'], answer: 0, explanation: 'Consecuencia → <em>as a result / therefore</em>.' },
    { type: 'fill', q: 'I wrote it down ___ that I wouldn\'t forget. (propósito)', answer: 'so', explanation: 'Propósito → <em>so that + sujeto</em>.' },
    { type: 'mc', q: 'My brother loves sports, ___ I prefer reading.', options: ['whereas', 'despite', 'therefore', 'moreover'], answer: 0, explanation: 'Comparar dos realidades → <em>whereas / while</em>.' },
    { type: 'match', q: 'Empareja el conector con su función:', pairs: [['however', 'contraste'], ['therefore', 'consecuencia'], ['moreover', 'añadir'], ['due to', 'causa']], explanation: 'Dominar los conectores es clave para el writing del B2.' },
    { type: 'order', answer: 'Although the test was difficult she passed it', explanation: '<em>Although + frase completa</em>, luego la principal.' },
    { type: 'translate', q: 'A pesar de la lluvia, salimos a caminar.', answer: ['Despite the rain, we went for a walk', 'Despite the rain we went for a walk', 'In spite of the rain, we went for a walk', 'In spite of the rain we went for a walk'], explanation: '<em>Despite / in spite of + sustantivo</em>.' },
  ],
},

{
  id: 'b2-09',
  title: 'Gerunds & infinitives',
  subtitle: '¿-ing o to + verbo?',
  theory: [
    { h: 'Verbos + gerundio (-ing)', list: [
        '<code>enjoy, finish, avoid, suggest, mind, practise, keep, give up</code>',
        '<em>I enjoy reading. · Avoid eating late. · Do you mind waiting?</em>',
        'Después de preposición SIEMPRE -ing: <em>interested in learning, good at cooking</em>' ] },
    { h: 'Verbos + infinitivo (to)', list: [
        '<code>want, decide, hope, plan, promise, agree, refuse, learn, would like</code>',
        '<em>She decided to move. · I hope to see you soon.</em>' ] },
    { h: 'Verbos que cambian de significado', list: [
        '<code>stop doing</code> (dejar el hábito) vs <code>stop to do</code> (parar para hacer algo)',
        '<code>remember doing</code> (recuerdo haberlo hecho) vs <code>remember to do</code> (acordarse de hacerlo)',
        '<code>try doing</code> (probar algo) vs <code>try to do</code> (intentar algo difícil)' ],
      examples: [
        { en: 'I stopped smoking two years ago.', es: 'Dejé de fumar hace dos años.' },
        { en: 'We stopped to buy petrol.', es: 'Paramos para comprar gasolina.' },
        { en: 'Remember to lock the door!', es: '¡Acuérdate de cerrar con llave!' } ],
      tip: 'Como sujeto de la frase, usa -ing: <em>Swimming is good for you.</em>' },
  ],
  exercises: [
    { type: 'mc', q: 'I really enjoy ___ to music while I work.', options: ['listening', 'to listen', 'listen', 'listened'], answer: 0, explanation: '<em>Enjoy</em> siempre va con gerundio: enjoy listening.' },
    { type: 'mc', q: 'She decided ___ a new car.', options: ['to buy', 'buying', 'buy', 'bought'], answer: 0, explanation: '<em>Decide</em> va con infinitivo: decided to buy.' },
    { type: 'mc', q: 'Please remember ___ the lights before you leave.', options: ['to turn off', 'turning off', 'turn off', 'turned off'], answer: 0, explanation: 'Acordarse de hacer algo (futuro) → <em>remember to do</em>.' },
    { type: 'mc', q: 'He stopped ___ years ago. Now he is much healthier.', options: ['smoking', 'to smoke', 'smoke', 'smoked'], answer: 0, explanation: 'Dejar un hábito → <em>stop + -ing</em>.' },
    { type: 'fill', q: "I'm interested in ___ (learn) Japanese.", answer: 'learning', explanation: 'Después de preposición (in) siempre gerundio.' },
    { type: 'mc', q: '___ is my favourite way to relax.', options: ['Swimming', 'Swim', 'To swimming', 'Swam'], answer: 0, explanation: 'Sujeto de la frase → gerundio: <em>Swimming is...</em>' },
    { type: 'match', q: '¿Gerundio o infinitivo? Empareja:', pairs: [['avoid', '+ -ing'], ['hope', '+ to'], ['finish', '+ -ing'], ['promise', '+ to']], explanation: 'Hay que memorizar qué verbos van con cada forma: la práctica espaciada ayuda.' },
    { type: 'translate', q: 'Quiero aprender a cocinar.', answer: ['I want to learn to cook', 'I want to learn how to cook'], explanation: '<em>want + to learn</em>; <em>learn + to cook</em>.' },
  ],
},

{
  id: 'b2-10',
  title: 'Phrasal verbs & collocations B2',
  subtitle: 'Sonar natural en inglés',
  theory: [
    { h: 'Phrasal verbs de nivel B2', list: [
        '<code>come up with</code> (idear) · <code>put up with</code> (aguantar)',
        '<code>carry out</code> (llevar a cabo) · <code>set up</code> (montar/fundar)',
        '<code>turn out</code> (resultar) · <code>work out</code> (resolver / hacer ejercicio)',
        '<code>break down</code> (averiarse) · <code>bring up</code> (criar / sacar un tema)',
        '<code>take over</code> (asumir el control) · <code>figure out</code> (entender/resolver)' ] },
    { h: 'Collocations frecuentes', list: [
        '<code>make</code>: make a decision, make a mistake, make progress, make an effort',
        '<code>do</code>: do research, do your best, do homework, do business',
        '<code>take</code>: take a risk, take part, take advantage of, take responsibility',
        '<code>pay</code>: pay attention · <code>keep</code>: keep in touch · <code>catch</code>: catch a cold' ],
      tip: 'Error clásico: «do a mistake» ❌ → <em>make a mistake</em> ✅. Las collocations se memorizan como bloques.' },
  ],
  exercises: [
    { type: 'mc', q: 'We need to ___ a solution before Friday.', options: ['come up with', 'put up with', 'carry on', 'break down'], answer: 0, explanation: '<em>Come up with</em> = idear, proponer.' },
    { type: 'mc', q: "I can't ___ this noise anymore!", options: ['put up with', 'come up with', 'take over', 'set up'], answer: 0, explanation: '<em>Put up with</em> = aguantar, tolerar.' },
    { type: 'mc', q: 'Our car ___ on the way to the airport.', options: ['broke down', 'broke up', 'turned out', 'worked out'], answer: 0, explanation: '<em>Break down</em> = averiarse.' },
    { type: 'mc', q: 'You should ___ a decision soon.', options: ['make', 'do', 'take', 'have'], answer: 0, explanation: 'Collocation: <em>make a decision</em> (nunca «do a decision»).' },
    { type: 'fill', q: 'Scientists are ___ (llevar a cabo) out important research. (phrasal, forma -ing)', answer: 'carrying', explanation: '<em>Carry out research</em> = llevar a cabo una investigación.' },
    { type: 'mc', q: 'The party ___ to be a great success.', options: ['turned out', 'turned off', 'set out', 'came out with'], answer: 0, explanation: '<em>Turn out</em> = resultar (ser al final).' },
    { type: 'match', q: 'Empareja make/do/take con su palabra:', pairs: [['make', 'progress'], ['do', 'research'], ['take', 'part'], ['pay', 'attention']], explanation: 'make progress · do research · take part · pay attention.' },
    { type: 'translate', q: 'Ella montó su propia empresa.', answer: ['She set up her own company', 'She set up her own business'], explanation: '<em>Set up</em> = montar, fundar.' },
    { type: 'order', answer: 'We should keep in touch after the course', explanation: '<em>Keep in touch</em> = mantener el contacto.' },
  ],
},

]};
