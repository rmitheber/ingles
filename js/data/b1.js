/* Nivel B1 — 10 lecciones (currículo CEFR) */
window.DATA_B1 = { lessons: [

{
  id: 'b1-01',
  title: 'Present perfect vs past simple',
  subtitle: 'La diferencia clave del nivel intermedio',
  theory: [
    { h: 'La regla de oro', p: 'Si el momento es <strong>concreto y terminado</strong> (yesterday, in 2020, last week) → <code>past simple</code>. Si conecta con el presente o no importa cuándo → <code>present perfect</code>.',
      examples: [
        { en: 'I lived in Madrid in 2019.', es: 'Viví en Madrid en 2019 (tiempo cerrado).' },
        { en: 'I have lived here for five years.', es: 'Llevo cinco años viviendo aquí (continúa).' } ] },
    { h: 'For y since', p: '<code>for</code> + duración (for two years); <code>since</code> + punto de inicio (since 2021, since Monday).',
      examples: [
        { en: 'She has worked there for ten years.', es: 'Trabaja allí desde hace diez años.' },
        { en: 'We have known each other since school.', es: 'Nos conocemos desde la escuela.' } ] },
    { h: 'Períodos abiertos vs cerrados', list: [
        '<code>today, this week, this year</code> (aún no terminan) → present perfect',
        '<code>yesterday, last week, ago</code> (terminados) → past simple' ],
      tip: '<em>How long...?</em> con present perfect pregunta por algo que sigue: <em>How long have you lived here?</em>' },
  ],
  exercises: [
    { type: 'mc', q: 'I ___ in this company since 2020.', options: ['have worked', 'worked', 'work', 'am working'], answer: 0, explanation: '<em>Since 2020</em> conecta pasado y presente → present perfect.' },
    { type: 'mc', q: 'Shakespeare ___ many famous plays.', options: ['wrote', 'has written', 'has wrote', 'writes'], answer: 0, explanation: 'Shakespeare murió: el período está cerrado → past simple.' },
    { type: 'fill', q: 'We have been friends ___ ten years. (for/since)', answer: 'for', explanation: 'Duración (diez años) → <em>for</em>.' },
    { type: 'fill', q: 'She has lived in Canada ___ 2018. (for/since)', answer: 'since', explanation: 'Punto de inicio (2018) → <em>since</em>.' },
    { type: 'mc', q: '___ the news this morning? (todavía es por la mañana)', options: ['Have you heard', 'Did you hear', 'Do you hear', 'Had you heard'], answer: 0, explanation: 'Si la mañana no ha terminado, el período está abierto → present perfect.' },
    { type: 'order', answer: 'How long have you studied English', explanation: '<em>How long + present perfect</em> para algo que continúa.' },
    { type: 'mc', q: 'They ___ to Japan three years ago.', options: ['moved', 'have moved', 'move', 'has moved'], answer: 0, explanation: '<em>Ago</em> siempre va con past simple.' },
    { type: 'translate', q: 'He vivido aquí desde 2021.', answer: ['I have lived here since 2021', "I've lived here since 2021"], explanation: '<em>Since + año</em> → present perfect.' },
    { type: 'mc', q: 'I can\'t find my wallet. I think I ___ it.', options: ['have lost', 'lost', 'lose', 'was losing'], answer: 0, explanation: 'Resultado presente (no la encuentro) → present perfect.' },
  ],
},

{
  id: 'b1-02',
  title: 'Present perfect continuous',
  subtitle: 'Acciones que duran hasta ahora',
  theory: [
    { h: 'Forma y uso', p: '<code>have/has been + verbo-ing</code>. Destaca la <strong>duración</strong> de una actividad que empezó en el pasado y continúa (o acaba de terminar dejando huella).',
      examples: [
        { en: 'I have been studying English for two hours.', es: 'Llevo dos horas estudiando inglés.' },
        { en: "You're sweating! Have you been running?", es: '¡Estás sudando! ¿Has estado corriendo?' } ] },
    { h: 'Simple o continuo', list: [
        'Resultado / cuántas veces → simple: <em>I have written three emails.</em>',
        'Duración / actividad → continuo: <em>I have been writing emails all morning.</em>',
        'Verbos de estado (know, like, have=poseer) → siempre simple: <em>I have known her for years.</em>' ],
      tip: 'Pregunta típica: <em>How long have you been waiting?</em> (¿Cuánto llevas esperando?)' },
  ],
  exercises: [
    { type: 'mc', q: 'She ___ for the exam all week.', options: ['has been studying', 'has studied', 'is studying', 'studies'], answer: 0, explanation: 'Se destaca la duración (all week) → present perfect continuous.' },
    { type: 'mc', q: 'I ___ five chapters of the book so far.', options: ['have read', 'have been reading', 'read', 'am reading'], answer: 0, explanation: 'Cantidad terminada (cinco capítulos) → simple, no continuo.' },
    { type: 'fill', q: 'It ___ (rain) since yesterday. Everything is wet.', answer: ['has been raining', "'s been raining"], explanation: 'Actividad continua con since → present perfect continuous.' },
    { type: 'mc', q: 'How long ___ each other?', options: ['have you known', 'have you been knowing', 'do you know', 'are you knowing'], answer: 0, explanation: '<em>Know</em> es verbo de estado → nunca en continuo.' },
    { type: 'order', answer: 'They have been living in Peru for six months', explanation: '<em>have been + -ing + for + duración</em>.' },
    { type: 'mc', q: 'Your eyes are red. ___?', options: ['Have you been crying', 'Have you cried', 'Do you cry', 'Did you cried'], answer: 0, explanation: 'Actividad reciente con evidencia visible → present perfect continuous.' },
    { type: 'translate', q: 'Llevo una hora esperando el autobús.', answer: ['I have been waiting for the bus for an hour', "I've been waiting for the bus for an hour"], explanation: 'Duración hasta ahora → <em>have been waiting... for an hour</em>.' },
    { type: 'fill', q: 'He is tired because he ___ (work) all day.', answer: ['has been working', "'s been working"], explanation: 'La causa de su cansancio es la actividad prolongada → continuo.' },
  ],
},

{
  id: 'b1-03',
  title: 'Past continuous & past perfect',
  subtitle: 'Contar historias en pasado',
  theory: [
    { h: 'Past continuous: escena de fondo', p: '<code>was/were + -ing</code>: acción en desarrollo interrumpida por otra (past simple).',
      examples: [
        { en: 'I was cooking when the phone rang.', es: 'Estaba cocinando cuando sonó el teléfono.' },
        { en: 'While we were walking, it started to rain.', es: 'Mientras caminábamos, empezó a llover.' } ] },
    { h: 'Past perfect: el pasado del pasado', p: '<code>had + participio</code>: una acción anterior a otra acción pasada.',
      examples: [
        { en: 'When I arrived, the film had already started.', es: 'Cuando llegué, la película ya había empezado.' },
        { en: "She was sad because she had failed the exam.", es: 'Estaba triste porque había suspendido el examen.' } ] },
    { h: 'When y while', list: [
        '<code>while</code> + past continuous: <em>While I was driving...</em>',
        '<code>when</code> + past simple: <em>...when I saw the accident.</em>' ],
      tip: 'Línea de tiempo: past perfect (antes) → past simple (después): <em>The train had left when we got there.</em>' },
  ],
  exercises: [
    { type: 'mc', q: 'I ___ TV when you called me.', options: ['was watching', 'watched', 'am watching', 'had watch'], answer: 0, explanation: 'Acción en desarrollo interrumpida → past continuous.' },
    { type: 'mc', q: 'When we got to the cinema, the film ___.', options: ['had already started', 'already started', 'has already started', 'was starting'], answer: 0, explanation: 'La película empezó ANTES de llegar → past perfect.' },
    { type: 'fill', q: 'While she ___ (sleep), the thief entered the house.', answer: ['was sleeping'], explanation: '<em>While</em> + past continuous para la acción de fondo.' },
    { type: 'mc', q: 'He couldn\'t pay because he ___ his wallet at home.', options: ['had left', 'left', 'has left', 'was leaving'], answer: 0, explanation: 'Dejó la cartera antes de intentar pagar → past perfect.' },
    { type: 'order', answer: 'What were you doing at eight last night', explanation: 'Pregunta en past continuous: <em>What + was/were + sujeto + -ing?</em>' },
    { type: 'mc', q: 'It was the first time I ___ sushi.', options: ['had eaten', 'ate', 'have eaten', 'was eating'], answer: 0, explanation: '«It was the first time» + past perfect: <em>the first time I had eaten...</em>' },
    { type: 'translate', q: 'Estaba lloviendo cuando salí de casa.', answer: ['It was raining when I left home', 'It was raining when I left the house'], explanation: 'Fondo (was raining) + interrupción (left).' },
    { type: 'fill', q: 'By the time we arrived, everyone ___ (go) home.', answer: ['had gone'], explanation: '<em>By the time</em> + pasado → la otra acción es anterior: past perfect.' },
  ],
},

{
  id: 'b1-04',
  title: 'First & second conditional',
  subtitle: 'Situaciones posibles e hipotéticas',
  theory: [
    { h: 'First conditional: posible y real', p: '<code>If + present simple, will + verbo</code>. Para situaciones futuras probables.',
      examples: [
        { en: 'If it rains, we will stay at home.', es: 'Si llueve, nos quedaremos en casa.' },
        { en: "If you study, you'll pass the exam.", es: 'Si estudias, aprobarás.' } ] },
    { h: 'Second conditional: hipotético', p: '<code>If + past simple, would + verbo</code>. Para situaciones imaginarias o poco probables en el presente/futuro.',
      examples: [
        { en: 'If I won the lottery, I would travel the world.', es: 'Si ganara la lotería, viajaría por el mundo.' },
        { en: 'If I were you, I would apologize.', es: 'Yo en tu lugar, me disculparía.' } ] },
    { h: 'Detalles importantes', list: [
        'Nunca <em>will</em> ni <em>would</em> justo después de if: <em>If it will rain</em> ❌',
        'Con el 2º condicional se prefiere <code>were</code> para todos: <em>If I were rich...</em>',
        'El orden puede invertirse sin coma: <em>We will stay at home if it rains.</em>' ],
      tip: '¿Real o imaginario? <em>If I have time</em> (puede pasar) vs <em>If I had time</em> (ahora no lo tengo).' },
  ],
  exercises: [
    { type: 'mc', q: 'If you heat ice, it ___.', options: ['melts', 'would melt', 'melted', 'will melting'], answer: 0, explanation: 'Verdad general (condicional cero): <em>If + presente, presente</em>.' },
    { type: 'mc', q: 'If I ___ rich, I would buy a big house.', options: ['were', 'am', 'will be', 'would be'], answer: 0, explanation: 'Hipótesis → second conditional: <em>If + past (were)</em>.' },
    { type: 'fill', q: 'If it rains tomorrow, we ___ (cancel) the picnic.', answer: ['will cancel', "'ll cancel"], explanation: 'Situación futura posible → first conditional: <em>will cancel</em>.' },
    { type: 'mc', q: 'What would you do if you ___ a ghost?', options: ['saw', 'see', 'will see', 'would see'], answer: 0, explanation: 'Situación imaginaria → <em>If + past simple</em>: saw.' },
    { type: 'order', answer: 'If I were you I would take the job', explanation: 'Consejo con 2º condicional: <em>If I were you, I would...</em>' },
    { type: 'mc', q: "You'll miss the bus if you ___ now.", options: ["don't leave", "won't leave", "didn't leave", 'not leave'], answer: 0, explanation: 'First conditional: la parte con if va en present simple.' },
    { type: 'translate', q: 'Si tuviera tiempo, haría más ejercicio.', answer: ['If I had time, I would do more exercise', 'If I had time I would do more exercise', 'If I had time, I would exercise more', 'If I had time I would exercise more'], explanation: 'Hipótesis presente → <em>If + past, would + verbo</em>.' },
    { type: 'fill', q: 'If she ___ (know) the answer, she would tell us.', answer: 'knew', explanation: 'Second conditional → past simple: <em>knew</em>.' },
  ],
},

{
  id: 'b1-05',
  title: 'Third conditional',
  subtitle: 'Lamentar el pasado que no fue',
  theory: [
    { h: 'Forma y uso', p: '<code>If + past perfect, would have + participio</code>. Para imaginar un pasado diferente: cosas que ya no se pueden cambiar.',
      examples: [
        { en: 'If I had studied, I would have passed.', es: 'Si hubiera estudiado, habría aprobado.' },
        { en: "If you had told me, I wouldn't have gone.", es: 'Si me lo hubieras dicho, no habría ido.' } ] },
    { h: 'Cómo pensarlo', p: 'Realidad: no estudié y suspendí. Tercer condicional: le doy la vuelta a la realidad pasada.',
      list: [
        'Realidad: <em>I missed the train because I woke up late.</em>',
        'Condicional: <em>If I hadn\'t woken up late, I wouldn\'t have missed the train.</em>' ],
      tip: 'Formas cortas al escuchar: <em>If I\'d known...</em> (= had), <em>I\'d have gone...</em> (= would). El contexto te dice cuál es cuál.' },
  ],
  exercises: [
    { type: 'mc', q: 'If we had left earlier, we ___ the plane.', options: ["wouldn't have missed", "wouldn't miss", "didn't miss", "won't have missed"], answer: 0, explanation: 'Pasado hipotético → <em>would have + participio</em>.' },
    { type: 'fill', q: 'If she ___ (see) the sign, she would have stopped.', answer: ['had seen'], explanation: 'Parte con if → past perfect: <em>had seen</em>.' },
    { type: 'mc', q: 'I would have called you if I ___ my phone.', options: ["hadn't lost", "didn't lose", "haven't lost", "wouldn't lose"], answer: 0, explanation: 'If + past perfect (negativo): <em>hadn\'t lost</em>.' },
    { type: 'order', answer: 'If I had known I would have helped you', explanation: 'Estructura completa del tercer condicional.' },
    { type: 'mc', q: 'She ___ the job if she had prepared the interview.', options: ['would have got', 'would get', 'got', 'had got'], answer: 0, explanation: 'Resultado hipotético en pasado → <em>would have got</em>.' },
    { type: 'translate', q: 'Si hubieras venido, te habría gustado la fiesta.', answer: ['If you had come, you would have liked the party', 'If you had come you would have liked the party'], explanation: '<em>If + had come..., would have liked...</em>' },
    { type: 'mc', q: 'Elige la frase correcta:', options: ['If it hadn\'t rained, we would have gone out.', 'If it wouldn\'t have rained, we had gone out.', 'If it didn\'t rain, we would have gone out.', 'If it hadn\'t rained, we would go out yesterday.'], answer: 0, explanation: 'If + past perfect / would have + participio. Nunca «would» en la parte del if.' },
    { type: 'fill', q: 'If they ___ (not/miss) the bus, they would have arrived on time.', answer: ["hadn't missed", 'had not missed'], explanation: 'Negativo en la parte del if: <em>hadn\'t missed</em>.' },
  ],
},

{
  id: 'b1-06',
  title: 'Modals: obligation & advice',
  subtitle: 'must, have to, should, don\'t have to',
  theory: [
    { h: 'Obligación', p: '<code>must</code> (obligación del hablante o norma escrita) y <code>have to</code> (obligación externa). En pasado y futuro solo existe <em>have to</em> (had to, will have to).',
      examples: [
        { en: 'You must wear a seatbelt.', es: 'Debes llevar cinturón (norma).' },
        { en: 'I have to work on Saturdays.', es: 'Tengo que trabajar los sábados (me lo imponen).' } ] },
    { h: '¡Ojo con los negativos!', p: 'Significan cosas MUY distintas:', list: [
        '<code>mustn\'t</code> = prohibido: <em>You mustn\'t smoke here.</em>',
        '<code>don\'t have to</code> = no es necesario: <em>You don\'t have to come if you\'re busy.</em>' ] },
    { h: 'Consejo', p: '<code>should / shouldn\'t</code> = deberías / no deberías. Más suave: <code>ought to</code>.',
      examples: [
        { en: 'You should see a doctor.', es: 'Deberías ir al médico.' },
        { en: "You shouldn't eat so much sugar.", es: 'No deberías comer tanto azúcar.' } ],
      tip: '<em>had better</em> es una advertencia fuerte: <em>You\'d better hurry or you\'ll miss the train.</em>' },
  ],
  exercises: [
    { type: 'mc', q: 'You ___ smoke in the hospital. It\'s forbidden.', options: ["mustn't", "don't have to", "shouldn't", "may not to"], answer: 0, explanation: 'Prohibición → <em>mustn\'t</em>.' },
    { type: 'mc', q: 'The entrance is free. You ___ pay.', options: ["don't have to", "mustn't", "shouldn't", "can't"], answer: 0, explanation: 'No es necesario (pero puedes si quieres) → <em>don\'t have to</em>.' },
    { type: 'fill', q: 'I ___ (tener que, pasado) work last weekend.', answer: ['had to'], explanation: 'Obligación en pasado → <em>had to</em> (must no tiene pasado).' },
    { type: 'mc', q: 'You look tired. You ___ go to bed earlier.', options: ['should', 'must to', 'have', 'would'], answer: 0, explanation: 'Consejo → <em>should</em>.' },
    { type: 'order', answer: 'You should drink more water every day', explanation: 'Consejo: <em>should + verbo base</em>.' },
    { type: 'mc', q: 'Passengers ___ show their passports at the border.', options: ['must', 'should', "don't have to", 'would'], answer: 0, explanation: 'Norma oficial obligatoria → <em>must</em>.' },
    { type: 'match', q: 'Empareja el modal con su significado:', pairs: [["mustn't", 'prohibido'], ["don't have to", 'no es necesario'], ['should', 'consejo'], ['have to', 'obligación externa']], explanation: 'La diferencia mustn\'t / don\'t have to es una de las más importantes del B1.' },
    { type: 'translate', q: 'No deberías trabajar tanto.', answer: ["You shouldn't work so much", 'You should not work so much', "You shouldn't work so hard"], explanation: 'Consejo negativo → <em>shouldn\'t</em>.' },
  ],
},

{
  id: 'b1-07',
  title: 'Modals of deduction',
  subtitle: 'must, might, may, could, can\'t',
  theory: [
    { h: 'Grados de certeza (presente)', list: [
        '<code>must be</code> = seguro que sí (90%): <em>She must be tired, she worked all night.</em>',
        '<code>might / may / could be</code> = quizás (50%): <em>He might be at home.</em>',
        '<code>can\'t be</code> = seguro que no (90%): <em>That can\'t be true!</em>' ],
      examples: [
        { en: "The lights are on. Someone must be home.", es: 'Las luces están encendidas. Debe de haber alguien en casa.' },
        { en: "He can't be hungry. He has just eaten.", es: 'No puede tener hambre. Acaba de comer.' } ] },
    { h: 'Detalle clave', p: 'Lo contrario de <code>must be</code> (deducción) es <code>can\'t be</code>, ¡no «mustn\'t be»!',
      tip: 'También con -ing: <em>She\'s not answering — she must be sleeping.</em>' },
  ],
  exercises: [
    { type: 'mc', q: "He's been working for 12 hours. He ___ exhausted.", options: ['must be', 'can be', "can't be", 'should being'], answer: 0, explanation: 'Deducción casi segura → <em>must be</em>.' },
    { type: 'mc', q: 'That ___ be Maria. She is in Japan right now!', options: ["can't", 'must', 'might', 'should'], answer: 0, explanation: 'Imposible (está en Japón) → <em>can\'t be</em>.' },
    { type: 'mc', q: "I'm not sure where Tom is. He ___ be in the garden.", options: ['might', 'must', "can't", 'has to'], answer: 0, explanation: 'Posibilidad sin certeza → <em>might</em> (o may/could).' },
    { type: 'fill', q: 'She has three houses and a yacht. She ___ (deducción) be very rich.', answer: 'must', explanation: 'Evidencia fuerte → <em>must be</em>.' },
    { type: 'order', answer: 'He must be very happy with the news', explanation: 'Deducción: <em>must be + adjetivo</em>.' },
    { type: 'mc', q: "The phone is ringing. It ___ be Ana — she said she'd call.", options: ['must', "can't", "mustn't", 'would'], answer: 0, explanation: 'Deducción lógica con evidencia (dijo que llamaría) → <em>must</em>.' },
    { type: 'mc', q: 'Lo contrario de «It must be true» es:', options: ["It can't be true", "It mustn't be true", "It shouldn't be true", "It doesn't be true"], answer: 0, explanation: 'En deducciones, el opuesto de must es <em>can\'t</em>.' },
    { type: 'translate', q: 'Ella debe de estar dormida.', answer: ['She must be asleep', 'She must be sleeping'], explanation: 'Deducción → <em>must be asleep / sleeping</em>.' },
  ],
},

{
  id: 'b1-08',
  title: 'Passive voice',
  subtitle: 'La voz pasiva en presente y pasado',
  theory: [
    { h: 'Forma y uso', p: '<code>be (en el tiempo que toque) + participio</code>. Se usa cuando importa más la acción que quién la hace.',
      examples: [
        { en: 'Spanish is spoken in Mexico.', es: 'En México se habla español.' },
        { en: 'This bridge was built in 1990.', es: 'Este puente fue construido en 1990.' },
        { en: 'The results will be published tomorrow.', es: 'Los resultados se publicarán mañana.' } ] },
    { h: 'Cómo transformar', p: 'El objeto pasa a ser sujeto; el verbo se convierte en be + participio; el agente (si importa) va con <code>by</code>.',
      list: [
        'Activa: <em>Leonardo painted the Mona Lisa.</em>',
        'Pasiva: <em>The Mona Lisa was painted by Leonardo.</em>' ],
      tip: 'Muchas frases con «se» en español son pasivas en inglés: «se vende» → <em>is sold</em>, «se hicieron» → <em>were made</em>.' },
  ],
  exercises: [
    { type: 'mc', q: 'This car ___ in Germany.', options: ['was made', 'made', 'is making', 'has made'], answer: 0, explanation: 'El coche no hace la acción, la recibe → pasiva: <em>was made</em>.' },
    { type: 'fill', q: 'English ___ (speak) all over the world.', answer: ['is spoken'], explanation: 'Presente pasivo: <em>is + spoken</em>.' },
    { type: 'mc', q: 'The thieves ___ by the police yesterday.', options: ['were arrested', 'arrested', 'have arrested', 'was arrested'], answer: 0, explanation: 'Sujeto plural + pasado → <em>were arrested</em>.' },
    { type: 'mc', q: 'The new hospital ___ next year.', options: ['will be opened', 'will open by', 'is opened will', 'opens be'], answer: 0, explanation: 'Futuro pasivo: <em>will be + participio</em>.' },
    { type: 'order', answer: 'The Mona Lisa was painted by Leonardo da Vinci', explanation: 'Pasiva con agente: <em>was painted by...</em>' },
    { type: 'fill', q: 'My phone ___ (steal) last week.', answer: ['was stolen'], explanation: 'Pasado pasivo: <em>was + stolen</em> (participio de steal).' },
    { type: 'translate', q: 'Esta casa fue construida en 1980.', answer: ['This house was built in 1980'], explanation: '<em>was built</em> = fue construida.' },
    { type: 'mc', q: 'Breakfast ___ from 7 to 10 in this hotel.', options: ['is served', 'serves', 'is serving', 'served'], answer: 0, explanation: 'El desayuno «se sirve» → pasiva de presente: <em>is served</em>.' },
  ],
},

{
  id: 'b1-09',
  title: 'Reported speech',
  subtitle: 'Contar lo que dijo otra persona',
  theory: [
    { h: 'El cambio de tiempo (backshift)', p: 'Al pasar a estilo indirecto con <em>said/told</em>, el verbo retrocede un tiempo:', list: [
        'present simple → past simple: <em>"I like it" → She said she liked it.</em>',
        'present continuous → past continuous: <em>"I\'m working" → He said he was working.</em>',
        'past simple / present perfect → past perfect: <em>"I saw it" → She said she had seen it.</em>',
        'will → would · can → could · must → had to' ] },
    { h: 'Say y tell', p: '<code>said</code> sin persona (o said to me); <code>told</code> siempre con persona: <em>He told me...</em>' },
    { h: 'Otros cambios', list: [
        'Pronombres: <em>"I love you" → He said he loved her.</em>',
        'Tiempo y lugar: today → that day · tomorrow → the next day · here → there',
        'Preguntas: se usa if/whether o la question word, SIN invertir: <em>"Where do you live?" → She asked me where I lived.</em>' ],
      tip: 'Órdenes: <em>told + persona + to + verbo</em>: <em>"Sit down!" → He told me to sit down.</em>' },
  ],
  exercises: [
    { type: 'mc', q: '"I am tired." → She said she ___ tired.', options: ['was', 'is', 'were being', 'has been'], answer: 0, explanation: 'Backshift: am → was.' },
    { type: 'mc', q: '"I will call you tomorrow." → He said he ___ me the next day.', options: ['would call', 'will call', 'called', 'would called'], answer: 0, explanation: 'will → would; tomorrow → the next day.' },
    { type: 'fill', q: '"I have finished." → She said she ___ finished. (auxiliar)', answer: 'had', explanation: 'Present perfect → past perfect: <em>had finished</em>.' },
    { type: 'mc', q: 'He ___ me that he was leaving.', options: ['told', 'said', 'said to that', 'telled'], answer: 0, explanation: 'Con persona (me) → <em>told</em>. «Said me» es incorrecto.' },
    { type: 'mc', q: '"Where do you work?" → She asked me where ___.', options: ['I worked', 'did I work', 'do I work', 'I work did'], answer: 0, explanation: 'En preguntas indirectas NO se invierte: <em>where I worked</em>.' },
    { type: 'order', answer: 'She told me to close the door', explanation: 'Orden en estilo indirecto: <em>told + persona + to + verbo</em>.' },
    { type: 'translate', q: 'Él dijo que estaba ocupado.', answer: ['He said he was busy', 'He said that he was busy'], explanation: '«Estoy ocupado» → said he <em>was</em> busy (backshift).' },
    { type: 'mc', q: '"Can you help me?" → She asked me if I ___ help her.', options: ['could', 'can', 'will', 'would to'], answer: 0, explanation: 'Pregunta yes/no → <em>if</em>; can → could.' },
  ],
},

{
  id: 'b1-10',
  title: 'Used to & phrasal verbs',
  subtitle: 'Hábitos del pasado y verbos frasales comunes',
  theory: [
    { h: 'Used to: hábitos del pasado', p: '<code>used to + verbo</code> = algo que hacías antes y ya no. Negativa: <code>didn\'t use to</code>. Pregunta: <code>Did you use to...?</code>',
      examples: [
        { en: 'I used to play football when I was a child.', es: 'De niño jugaba al fútbol (ya no).' },
        { en: "She didn't use to like coffee.", es: 'Antes no le gustaba el café.' } ] },
    { h: 'Phrasal verbs imprescindibles', list: [
        '<code>get up</code> (levantarse) · <code>wake up</code> (despertarse)',
        '<code>look for</code> (buscar) · <code>look after</code> (cuidar) · <code>look forward to</code> (tener ganas de)',
        '<code>give up</code> (rendirse/dejar) · <code>find out</code> (descubrir)',
        '<code>turn on / turn off</code> (encender/apagar) · <code>put on / take off</code> (ponerse/quitarse ropa)',
        '<code>run out of</code> (quedarse sin) · <code>get on with</code> (llevarse bien con)' ],
      tip: 'No confundas <em>used to + verbo</em> (hábito pasado) con <em>be used to + -ing</em> (estar acostumbrado a).' },
  ],
  exercises: [
    { type: 'mc', q: 'I ___ live in a small town, but now I live in the city.', options: ['used to', 'use to', 'am used to', 'was use to'], answer: 0, explanation: 'Hábito pasado → <em>used to + verbo</em>.' },
    { type: 'mc', q: 'Did you ___ have long hair?', options: ['use to', 'used to', 'using to', 'be used to'], answer: 0, explanation: 'En preguntas con did, se escribe <em>use to</em> (sin -d).' },
    { type: 'mc', q: "I'm ___ my keys. Have you seen them?", options: ['looking for', 'looking after', 'looking at', 'looking up to'], answer: 0, explanation: '<em>Look for</em> = buscar.' },
    { type: 'mc', q: "Don't ___! You can do it!", options: ['give up', 'give in to', 'give away', 'give back'], answer: 0, explanation: '<em>Give up</em> = rendirse.' },
    { type: 'fill', q: 'Can you ___ off the TV, please? (apagar)', answer: 'turn', explanation: '<em>Turn off</em> = apagar; <em>turn on</em> = encender.' },
    { type: 'match', q: 'Empareja el phrasal verb con su significado:', pairs: [['look after', 'cuidar'], ['find out', 'descubrir'], ['run out of', 'quedarse sin'], ['get on with', 'llevarse bien con']], explanation: 'Los phrasal verbs se aprenden mejor en contexto y con repaso espaciado.' },
    { type: 'translate', q: 'Antes fumaba, pero lo dejé.', answer: ['I used to smoke, but I gave up', 'I used to smoke but I gave up', 'I used to smoke, but I quit', 'I used to smoke but I quit'], explanation: '<em>used to smoke</em> (hábito pasado) + <em>gave up</em> (lo dejé).' },
    { type: 'order', answer: 'I am looking forward to seeing you', explanation: '<em>Look forward to</em> va seguido de -ing: <em>to seeing you</em>.' },
  ],
},

]};
