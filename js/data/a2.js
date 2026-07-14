/* Nivel A2 — 10 lecciones (currículo CEFR) */
window.DATA_A2 = { lessons: [

{
  id: 'a2-01',
  title: 'Present simple vs continuous',
  subtitle: 'Rutinas frente a acciones en curso',
  theory: [
    { h: 'Present simple: rutinas y hechos', p: 'Se usa para hábitos, rutinas y verdades generales. Con <code>he/she/it</code> el verbo lleva <code>-s</code>. Palabras clave: <em>always, usually, often, sometimes, never, every day</em>.',
      examples: [
        { en: 'I work in an office.', es: 'Trabajo en una oficina.' },
        { en: 'She drinks coffee every morning.', es: 'Ella toma café cada mañana.' },
        { en: 'We don\'t watch TV at night.', es: 'No vemos la tele por la noche.' } ] },
    { h: 'Present continuous: ahora mismo', p: 'Se usa para acciones que ocurren en este momento o planes ya organizados. Se forma con <code>am/is/are + verbo-ing</code>. Palabras clave: <em>now, right now, at the moment, today</em>.',
      examples: [
        { en: 'I am studying English now.', es: 'Estoy estudiando inglés ahora.' },
        { en: 'They are playing football at the moment.', es: 'Están jugando al fútbol en este momento.' },
        { en: 'Is she working today?', es: '¿Está trabajando hoy?' } ] },
    { h: 'Verbos que casi nunca van en continuo', list: [
        '<code>like, love, hate, want, need</code> (gustos y deseos)',
        '<code>know, understand, believe</code> (mente)',
        '<code>have</code> cuando significa «tener» (posesión)' ],
      tip: 'Di <em>I want a coffee</em>, nunca <em>I am wanting a coffee</em>.' },
  ],
  exercises: [
    { type: 'mc', q: 'She ___ to work by bus every day.', options: ['goes', 'is going', 'go', 'going'], answer: 0, explanation: 'Es una rutina (every day), por eso usamos present simple con -s para she: <em>goes</em>.' },
    { type: 'mc', q: 'Listen! The baby ___.', options: ['is crying', 'cries', 'cry', 'crying'], answer: 0, explanation: '«Listen!» indica que ocurre ahora mismo → present continuous: <em>is crying</em>.' },
    { type: 'fill', q: 'My brother ___ (not / like) vegetables.', answer: ["doesn't like", 'does not like'], explanation: 'Negativo en present simple con he/she/it: <em>doesn\'t + verbo base</em>.' },
    { type: 'mc', q: 'I ___ a shower right now, can you call later?', options: ["am having", 'have', 'has', 'am have'], answer: 0, explanation: '«Right now» → continuo. Aquí <em>have</em> no es posesión (es «darse una ducha»), así que sí puede ir en continuo.' },
    { type: 'order', answer: 'She usually gets up at seven', hint: 'El adverbio de frecuencia va antes del verbo.', explanation: 'Los adverbios de frecuencia (usually, always...) van antes del verbo principal.' },
    { type: 'mc', q: '___ you understand the question?', options: ['Do', 'Are', 'Does', 'Is'], answer: 0, explanation: '<em>Understand</em> es un verbo de estado: nunca va en continuo. Pregunta en present simple con you → <em>Do</em>.' },
    { type: 'translate', q: 'Estoy aprendiendo inglés.', answer: ['I am learning English', "I'm learning English"], explanation: 'Acción en curso → present continuous: <em>I am learning English</em>.' },
    { type: 'fill', q: 'Look! It ___ (rain).', answer: ['is raining', "'s raining"], explanation: '«Look!» = ahora mismo → <em>is raining</em>.' },
    { type: 'mc', q: 'We ___ dinner with my parents on Sundays.', options: ['have', 'are having', 'has', 'having'], answer: 0, explanation: '«On Sundays» indica rutina → present simple: <em>have</em>.' },
  ],
},

{
  id: 'a2-02',
  title: 'Past simple',
  subtitle: 'Verbos regulares e irregulares en pasado',
  theory: [
    { h: 'Cuándo se usa', p: 'Para acciones terminadas en un momento concreto del pasado. Palabras clave: <em>yesterday, last week, two days ago, in 2020</em>.',
      examples: [
        { en: 'I visited my grandmother yesterday.', es: 'Visité a mi abuela ayer.' },
        { en: 'They went to Mexico last summer.', es: 'Fueron a México el verano pasado.' } ] },
    { h: 'Regulares e irregulares', p: 'Los regulares añaden <code>-ed</code>: <em>work → worked, play → played</em>. Los irregulares hay que memorizarlos:',
      list: [ 'go → <code>went</code> · have → <code>had</code> · do → <code>did</code>',
        'see → <code>saw</code> · eat → <code>ate</code> · buy → <code>bought</code>',
        'make → <code>made</code> · take → <code>took</code> · come → <code>came</code>',
        'get → <code>got</code> · say → <code>said</code> · think → <code>thought</code>' ] },
    { h: 'Negativa y pregunta', p: 'Se usa <code>did/didn\'t + verbo en forma base</code> (¡el verbo vuelve a su forma normal!).',
      examples: [
        { en: "I didn't see the film.", es: 'No vi la película.' },
        { en: 'Did you call her? — Yes, I did.', es: '¿La llamaste? — Sí.' } ],
      tip: 'Error típico: <em>Did you went?</em> ❌ → <em>Did you go?</em> ✅' },
  ],
  exercises: [
    { type: 'fill', q: 'We ___ (go) to the beach last weekend.', answer: 'went', explanation: '<em>Go</em> es irregular: go → went.' },
    { type: 'mc', q: 'She ___ a new phone two days ago.', options: ['bought', 'buyed', 'buy', 'was buy'], answer: 0, explanation: '<em>Buy</em> es irregular: buy → bought. «Buyed» no existe.' },
    { type: 'mc', q: '___ you watch the match yesterday?', options: ['Did', 'Do', 'Was', 'Were'], answer: 0, explanation: 'Pregunta en pasado con verbo normal → <em>Did + sujeto + verbo base</em>.' },
    { type: 'fill', q: 'I ___ (not / have) breakfast this morning.', answer: ["didn't have", 'did not have'], explanation: 'Negativa en pasado: <em>didn\'t + verbo base</em> (no «didn\'t had»).' },
    { type: 'order', answer: 'They arrived home very late last night', explanation: 'Sujeto + verbo en pasado + complementos + expresión de tiempo al final.' },
    { type: 'mc', q: 'My grandfather ___ born in 1950.', options: ['was', 'were', 'is', 'did'], answer: 0, explanation: '«Nacer» en inglés es <em>to be born</em>: I/he/she <em>was</em> born.' },
    { type: 'translate', q: 'Ayer comí pizza.', answer: ['I ate pizza yesterday', 'Yesterday I ate pizza'], explanation: '<em>Eat</em> es irregular: eat → ate.' },
    { type: 'match', q: 'Empareja el verbo con su pasado:', pairs: [['go', 'went'], ['see', 'saw'], ['take', 'took'], ['think', 'thought'], ['make', 'made']], explanation: 'Los verbos irregulares se aprenden con la práctica. Repásalos a menudo.' },
    { type: 'fill', q: 'Where ___ (do) you live when you were a child?', answer: 'did', explanation: 'Pregunta con partícula interrogativa: <em>Where did you live...?</em>' },
  ],
},

{
  id: 'a2-03',
  title: 'There is / there are, some & any',
  subtitle: 'Describir lugares y cantidades',
  theory: [
    { h: 'There is / There are', p: '<code>There is</code> + singular o incontable; <code>there are</code> + plural. En pasado: <code>there was / there were</code>.',
      examples: [
        { en: 'There is a supermarket near my house.', es: 'Hay un supermercado cerca de mi casa.' },
        { en: 'There are two banks on this street.', es: 'Hay dos bancos en esta calle.' },
        { en: 'There was a party last night.', es: 'Hubo una fiesta anoche.' } ] },
    { h: 'Some y any', p: '<code>some</code> en afirmativas (y ofrecimientos); <code>any</code> en negativas y preguntas.',
      examples: [
        { en: 'There is some milk in the fridge.', es: 'Hay algo de leche en la nevera.' },
        { en: "There isn't any sugar.", es: 'No hay nada de azúcar.' },
        { en: 'Are there any questions?', es: '¿Hay alguna pregunta?' } ] },
    { h: 'How much / How many', p: '<code>How much</code> + incontable, <code>how many</code> + contable plural.',
      examples: [
        { en: 'How much water do you drink?', es: '¿Cuánta agua bebes?' },
        { en: 'How many brothers do you have?', es: '¿Cuántos hermanos tienes?' } ],
      tip: 'Incontables típicos: water, money, time, bread, rice, information. No llevan plural ni «a/an».' },
  ],
  exercises: [
    { type: 'mc', q: '___ a lot of people at the concert.', options: ['There were', 'There was', 'There is', 'It was'], answer: 0, explanation: '«People» es plural y el concierto ya pasó → <em>There were</em>.' },
    { type: 'mc', q: "We don't have ___ eggs for the cake.", options: ['any', 'some', 'a', 'much'], answer: 0, explanation: 'Frase negativa → <em>any</em>.' },
    { type: 'fill', q: 'There ___ (be) some bread on the table. (presente)', answer: ['is', "'s"], explanation: '<em>Bread</em> es incontable → singular: <em>there is</em>.' },
    { type: 'mc', q: 'How ___ money do you need?', options: ['much', 'many', 'lot', 'few'], answer: 0, explanation: '<em>Money</em> es incontable → <em>how much</em>.' },
    { type: 'order', answer: 'Are there any good restaurants near here', explanation: 'Pregunta con there are: <em>Are there + any + sustantivo...?</em>' },
    { type: 'mc', q: 'Would you like ___ tea?', options: ['some', 'any', 'many', 'a'], answer: 0, explanation: 'En ofrecimientos usamos <em>some</em> aunque sea pregunta: <em>Would you like some tea?</em>' },
    { type: 'translate', q: 'Hay un parque cerca de mi casa.', answer: ['There is a park near my house', "There's a park near my house"], explanation: 'Un parque (singular) → <em>There is a park...</em>' },
    { type: 'match', q: '¿Contable o incontable? Empareja:', pairs: [['water', 'incontable'], ['apples', 'contable'], ['money', 'incontable'], ['books', 'contable']], explanation: 'Los incontables no tienen plural: decimos «some water», nunca «two waters» (salvo pidiendo botellas).' },
    { type: 'fill', q: 'How ___ students are there in your class?', answer: 'many', explanation: '<em>Students</em> es contable plural → <em>how many</em>.' },
  ],
},

{
  id: 'a2-04',
  title: 'Comparatives & superlatives',
  subtitle: 'Comparar personas, lugares y cosas',
  theory: [
    { h: 'Comparativos', p: 'Adjetivos cortos: <code>+er than</code> (<em>taller than</em>). Largos: <code>more ... than</code> (<em>more expensive than</em>).',
      examples: [
        { en: 'My city is bigger than yours.', es: 'Mi ciudad es más grande que la tuya.' },
        { en: 'This book is more interesting than the film.', es: 'Este libro es más interesante que la película.' } ] },
    { h: 'Superlativos', p: 'Cortos: <code>the + -est</code> (<em>the tallest</em>). Largos: <code>the most ...</code> (<em>the most expensive</em>).',
      examples: [
        { en: 'Everest is the highest mountain in the world.', es: 'El Everest es la montaña más alta del mundo.' },
        { en: "It's the most beautiful beach in Mexico.", es: 'Es la playa más bonita de México.' } ] },
    { h: 'Irregulares y reglas de ortografía', list: [
        'good → <code>better</code> → <code>the best</code>',
        'bad → <code>worse</code> → <code>the worst</code>',
        'far → <code>farther/further</code> → <code>the farthest</code>',
        'big → bi<code>gg</code>er · hot → ho<code>tt</code>er (consonante doble)',
        'happy → happ<code>ier</code> · easy → eas<code>ier</code> (y → i)' ],
      tip: 'Para decir «tan ... como» usa <code>as + adjetivo + as</code>: <em>She is as tall as me.</em>' },
  ],
  exercises: [
    { type: 'mc', q: 'This exam was ___ than the last one.', options: ['easier', 'more easy', 'easyer', 'the easiest'], answer: 0, explanation: '<em>Easy</em> termina en -y → cambia a i: <em>easier</em>. «More easy» es incorrecto.' },
    { type: 'fill', q: 'February is ___ (short) month of the year.', answer: ['the shortest'], explanation: 'Superlativo de adjetivo corto: <em>the + shortest</em>.' },
    { type: 'mc', q: 'My English is getting ___.', options: ['better', 'gooder', 'more good', 'best'], answer: 0, explanation: '<em>Good</em> es irregular: good → better → the best.' },
    { type: 'mc', q: 'This is ___ restaurant in town.', options: ['the most expensive', 'the expensivest', 'more expensive', 'most expensive'], answer: 0, explanation: 'Adjetivo largo → superlativo con <em>the most</em>.' },
    { type: 'order', answer: 'My sister is younger than me', explanation: 'Comparativo corto: <em>younger than</em>.' },
    { type: 'fill', q: 'Today is ___ (hot) than yesterday.', answer: 'hotter', explanation: '<em>Hot</em> dobla la consonante final: ho<strong>tt</strong>er.' },
    { type: 'translate', q: 'Mi casa es más grande que tu casa.', answer: ['My house is bigger than your house', 'My house is bigger than yours'], explanation: '<em>Big → bigger</em> (dobla la g) <em>+ than</em>.' },
    { type: 'mc', q: 'She is as ___ as her mother.', options: ['tall', 'taller', 'tallest', 'more tall'], answer: 0, explanation: 'Con <em>as ... as</em> el adjetivo va en forma normal: <em>as tall as</em>.' },
    { type: 'mc', q: 'That was the ___ film I have ever seen.', options: ['worst', 'worse', 'baddest', 'most bad'], answer: 0, explanation: '<em>Bad</em> es irregular: bad → worse → the worst.' },
  ],
},

{
  id: 'a2-05',
  title: 'Future: going to & will',
  subtitle: 'Planes, predicciones y decisiones',
  theory: [
    { h: 'Going to: planes e intenciones', p: 'Para planes ya decididos y para predicciones con evidencia visible. Forma: <code>am/is/are going to + verbo</code>.',
      examples: [
        { en: 'We are going to travel to Cancún in December.', es: 'Vamos a viajar a Cancún en diciembre.' },
        { en: 'Look at those clouds! It is going to rain.', es: '¡Mira esas nubes! Va a llover.' } ] },
    { h: 'Will: decisiones del momento y predicciones', p: 'Para decisiones espontáneas, promesas, ofrecimientos y predicciones basadas en opinión. Forma: <code>will + verbo</code>. Negativo: <code>won\'t</code>.',
      examples: [
        { en: "I'm tired. I'll go to bed.", es: 'Estoy cansado. Me voy a dormir (lo decido ahora).' },
        { en: 'I think it will be a great year.', es: 'Creo que será un gran año.' },
        { en: "Don't worry, I won't tell anyone.", es: 'No te preocupes, no se lo diré a nadie.' } ] },
    { h: 'Comparación rápida', list: [
        'Plan decidido antes → <code>going to</code>: <em>I\'m going to study medicine.</em>',
        'Decisión en el momento → <code>will</code>: <em>The phone is ringing — I\'ll answer!</em>',
        'Predicción con evidencia → <code>going to</code>; con opinión (I think...) → <code>will</code>' ],
      tip: 'El present continuous también sirve para planes con fecha y hora: <em>I\'m meeting Ana tomorrow at 6.</em>' },
  ],
  exercises: [
    { type: 'mc', q: 'A: "We have no milk." B: "OK, I ___ buy some."', options: ["'ll", "'m going to", 'going to', 'will to'], answer: 0, explanation: 'Decisión tomada en el momento → <em>will</em> (I\'ll buy some).' },
    { type: 'mc', q: 'Careful! You ___ fall!', options: ['are going to', 'will', 'go to', 'would'], answer: 0, explanation: 'Predicción con evidencia visible (lo estás viendo) → <em>going to</em>.' },
    { type: 'fill', q: 'She ___ (study) medicine next year. (plan decidido, usa going to)', answer: ['is going to study', "'s going to study"], explanation: 'Plan decidido → <em>is going to study</em>.' },
    { type: 'mc', q: 'I promise I ___ be late again.', options: ["won't", "don't", "'m not going to", 'not will'], answer: 0, explanation: 'Promesa → <em>will</em>; en negativo: <em>won\'t</em>.' },
    { type: 'order', answer: 'What are you going to do this weekend', explanation: 'Pregunta con going to: <em>What + are + sujeto + going to + verbo?</em>' },
    { type: 'translate', q: 'Voy a visitar a mi familia mañana.', answer: ["I am going to visit my family tomorrow", "I'm going to visit my family tomorrow"], explanation: 'Plan → <em>going to</em>.' },
    { type: 'mc', q: 'I think our team ___ the game tonight.', options: ['will win', 'wins', 'is going to winning', 'win'], answer: 0, explanation: 'Predicción con «I think» (opinión) → <em>will win</em>.' },
    { type: 'fill', q: "It's cold in here. I ___ (close) the window. (decisión del momento)", answer: ["'ll close", 'will close'], explanation: 'Decisión espontánea → <em>I\'ll close</em>.' },
  ],
},

{
  id: 'a2-06',
  title: 'Modals: can, could, would like',
  subtitle: 'Habilidad, permiso y peticiones amables',
  theory: [
    { h: 'Can / can\'t: habilidad y permiso', p: 'Habilidad presente y permiso informal. Nunca lleva -s ni «to» después.',
      examples: [
        { en: 'She can speak three languages.', es: 'Ella sabe hablar tres idiomas.' },
        { en: "I can't swim very well.", es: 'No sé nadar muy bien.' },
        { en: 'Can I open the window?', es: '¿Puedo abrir la ventana?' } ] },
    { h: 'Could: pasado y peticiones amables', p: '<code>Could</code> es el pasado de can y también la forma educada de pedir cosas.',
      examples: [
        { en: 'When I was young, I could run very fast.', es: 'De joven podía correr muy rápido.' },
        { en: 'Could you help me, please?', es: '¿Podrías ayudarme, por favor?' } ] },
    { h: 'Would like: querer (educado)', p: '<code>I\'d like</code> = «me gustaría / quisiera». Más educado que <em>I want</em>. Va con <code>to + verbo</code> o con sustantivo.',
      examples: [
        { en: "I'd like a coffee, please.", es: 'Quisiera un café, por favor.' },
        { en: 'Would you like to come with us?', es: '¿Te gustaría venir con nosotros?' } ],
      tip: 'En un restaurante: <em>I\'d like the chicken, please</em> suena mucho mejor que <em>I want chicken</em>.' },
  ],
  exercises: [
    { type: 'mc', q: 'My grandmother ___ use a smartphone. She finds it difficult.', options: ["can't", "doesn't can", 'not can', "couldn't to"], answer: 0, explanation: 'Negativo de can: <em>can\'t / cannot</em>. «Doesn\'t can» no existe.' },
    { type: 'mc', q: '___ you like something to drink?', options: ['Would', 'Do', 'Can', 'Are'], answer: 0, explanation: 'Ofrecimiento educado: <em>Would you like...?</em>' },
    { type: 'fill', q: 'When he was five, he ___ (poder, pasado) already read.', answer: 'could', explanation: 'Habilidad en el pasado → <em>could</em>.' },
    { type: 'mc', q: 'She can ___ very well.', options: ['dance', 'dances', 'to dance', 'dancing'], answer: 0, explanation: 'Después de <em>can</em> el verbo va en forma base, sin «to» y sin -s.' },
    { type: 'order', answer: 'Could you speak more slowly please', explanation: 'Petición educada: <em>Could you + verbo...?</em>' },
    { type: 'translate', q: 'Me gustaría reservar una mesa.', answer: ['I would like to book a table', "I'd like to book a table", 'I would like to reserve a table', "I'd like to reserve a table"], explanation: '<em>I\'d like + to + verbo</em>.' },
    { type: 'mc', q: '___ I borrow your pen? — Of course!', options: ['Can', 'Do', 'Am', 'Would'], answer: 0, explanation: 'Pedir permiso informal → <em>Can I...?</em>' },
    { type: 'match', q: 'Empareja la situación con la frase:', pairs: [['Pedir en un café', "I'd like a tea, please"], ['Pedir ayuda educadamente', 'Could you help me?'], ['Hablar de una habilidad', 'I can cook'], ['Pedir permiso', 'Can I sit here?']], explanation: 'Cada modal tiene su contexto: can (habilidad/permiso), could (educado), would like (deseo educado).' },
  ],
},

{
  id: 'a2-07',
  title: 'Present perfect (introducción)',
  subtitle: 'Experiencias con have/has + participio',
  theory: [
    { h: 'Forma y uso', p: '<code>have/has + participio pasado</code> (worked, gone, seen...). Se usa para experiencias de vida sin decir cuándo, y para acciones recientes con resultado presente.',
      examples: [
        { en: 'I have visited London twice.', es: 'He visitado Londres dos veces.' },
        { en: 'She has lost her keys.', es: 'Ha perdido sus llaves (y sigue sin ellas).' } ] },
    { h: 'Ever, never, just, already, yet', list: [
        '<code>ever</code> (¿alguna vez?): <em>Have you ever eaten sushi?</em>',
        '<code>never</code> (nunca): <em>I have never been to Europe.</em>',
        '<code>just</code> (acabar de): <em>He has just arrived.</em>',
        '<code>already</code> (ya): <em>We have already finished.</em>',
        '<code>yet</code> (todavía, en negativas y preguntas): <em>I haven\'t finished yet.</em>' ] },
    { h: 'Been vs gone', p: '<code>has been to</code> = fue y volvió; <code>has gone to</code> = fue y sigue allí.',
      examples: [
        { en: 'She has been to Paris.', es: 'Ha estado en París (ya volvió).' },
        { en: 'She has gone to Paris.', es: 'Se ha ido a París (está allí).' } ],
      tip: 'Si dices CUÁNDO pasó (yesterday, in 2020, last year), usa past simple, no present perfect.' },
  ],
  exercises: [
    { type: 'mc', q: 'Have you ___ tried Indian food?', options: ['ever', 'never', 'yet', 'just'], answer: 0, explanation: 'En preguntas sobre experiencias: <em>Have you ever...?</em>' },
    { type: 'fill', q: 'I have ___ (see) that film three times.', answer: 'seen', explanation: 'Participio de see: see → saw → <strong>seen</strong>.' },
    { type: 'mc', q: 'She ___ her homework yet.', options: ["hasn't finished", "didn't finished", "hasn't finish", "doesn't finished"], answer: 0, explanation: 'Con <em>yet</em> usamos present perfect negativo: <em>hasn\'t + participio</em>.' },
    { type: 'mc', q: 'They ___ to Japan. They came back last week.', options: ['have been', 'have gone', 'has been', 'went been'], answer: 0, explanation: 'Fueron y volvieron → <em>have been to</em>.' },
    { type: 'order', answer: 'I have never eaten octopus', explanation: '<em>Never</em> va entre have y el participio.' },
    { type: 'mc', q: 'I ___ my keys! I can\'t open the door.', options: ['have lost', 'lost', 'lose', 'was losing'], answer: 0, explanation: 'Acción pasada con resultado en el presente (no puedo entrar) → present perfect.' },
    { type: 'mc', q: 'We visited Rome ___.', options: ['last year', 'already', 'yet', 'ever'], answer: 0, explanation: 'Con un tiempo concreto del pasado (last year) se usa past simple: <em>visited</em>.' },
    { type: 'fill', q: 'He has ___ arrived, five minutes ago. (acabar de)', answer: 'just', explanation: '<em>Just</em> = acabar de: <em>He has just arrived.</em>' },
    { type: 'match', q: 'Empareja verbo y participio:', pairs: [['go', 'gone'], ['eat', 'eaten'], ['write', 'written'], ['do', 'done'], ['be', 'been']], explanation: 'Los participios irregulares son esenciales para el present perfect.' },
  ],
},

{
  id: 'a2-08',
  title: 'Adverbios y preposiciones',
  subtitle: 'Frecuencia, tiempo (in/on/at) y lugar',
  theory: [
    { h: 'Adverbios de frecuencia', p: 'De más a menos: <code>always → usually → often → sometimes → rarely → never</code>. Van antes del verbo principal, pero después de <em>be</em>.',
      examples: [
        { en: 'I always have coffee in the morning.', es: 'Siempre tomo café por la mañana.' },
        { en: 'She is never late.', es: 'Ella nunca llega tarde.' } ] },
    { h: 'Preposiciones de tiempo: in, on, at', list: [
        '<code>in</code> + meses, años, partes del día: <em>in July, in 2026, in the morning</em>',
        '<code>on</code> + días y fechas: <em>on Monday, on 15th July, on my birthday</em>',
        '<code>at</code> + horas y momentos: <em>at 7 o\'clock, at night, at the weekend</em>' ] },
    { h: 'Preposiciones de lugar', list: [
        '<code>in</code> = dentro: <em>in the box, in Mexico, in the kitchen</em>',
        '<code>on</code> = sobre: <em>on the table, on the wall, on the bus</em>',
        '<code>at</code> = punto: <em>at home, at work, at the door, at school</em>',
        '<code>next to, between, behind, in front of, under</code>' ],
      tip: 'Memoriza combinaciones fijas: <em>at night, in the morning, on TV, at home</em>.' },
  ],
  exercises: [
    { type: 'mc', q: 'My birthday is ___ March.', options: ['in', 'on', 'at', 'of'], answer: 0, explanation: 'Meses → <em>in</em>: in March.' },
    { type: 'mc', q: 'The meeting is ___ Monday ___ 10 o\'clock.', options: ['on / at', 'in / at', 'at / on', 'on / in'], answer: 0, explanation: 'Días → <em>on</em>; horas → <em>at</em>.' },
    { type: 'order', answer: 'He is always tired after work', explanation: 'Con el verbo <em>be</em>, el adverbio va después: <em>is always</em>.' },
    { type: 'mc', q: 'The keys are ___ the table.', options: ['on', 'in', 'at', 'between'], answer: 0, explanation: 'Sobre una superficie → <em>on</em>.' },
    { type: 'fill', q: 'I never watch TV ___ night. (preposición)', answer: 'at', explanation: 'Combinación fija: <em>at night</em>.' },
    { type: 'mc', q: 'She ___ goes to the gym. (casi nunca)', options: ['rarely', 'always', 'usually', 'often'], answer: 0, explanation: '«Casi nunca» → <em>rarely</em> (o seldom).' },
    { type: 'translate', q: 'El banco está al lado del supermercado.', answer: ['The bank is next to the supermarket'], explanation: '«Al lado de» → <em>next to</em>.' },
    { type: 'match', q: 'Empareja preposición y uso:', pairs: [['in 2026', 'año'], ['on Friday', 'día'], ['at 8 pm', 'hora'], ['in the box', 'dentro']], explanation: 'in (períodos largos/dentro), on (días/superficies), at (horas/puntos).' },
    { type: 'mc', q: 'We usually have lunch ___ the afternoon.', options: ['in', 'on', 'at', 'by'], answer: 0, explanation: 'Partes del día → <em>in</em>: in the morning/afternoon/evening (pero <em>at night</em>).' },
  ],
},

{
  id: 'a2-09',
  title: 'Articles: a, an, the',
  subtitle: 'Cuándo usar artículo y cuándo no',
  theory: [
    { h: 'A / an: primera mención', p: '<code>a</code> antes de sonido de consonante, <code>an</code> antes de sonido de vocal. Solo con contables en singular.',
      examples: [
        { en: 'I saw a dog and an elephant.', es: 'Vi un perro y un elefante.' },
        { en: 'She is an engineer.', es: 'Ella es ingeniera (profesiones llevan a/an).' } ] },
    { h: 'The: algo específico o ya mencionado', examples: [
        { en: 'I saw a dog. The dog was black.', es: 'Vi un perro. El perro era negro (ya sabemos cuál).' },
        { en: 'The sun is very strong today.', es: 'El sol está muy fuerte (único).' } ] },
    { h: 'Sin artículo (zero article)', list: [
        'Generalizaciones en plural: <em>I love dogs</em> (no «the dogs»)',
        'Comidas: <em>have breakfast/lunch/dinner</em>',
        'Países y ciudades: <em>Mexico, London</em> (pero <em>the USA, the UK</em>)',
        'Expresiones: <em>go home, at work, go to bed, at school</em>' ],
      tip: 'Ojo al sonido, no a la letra: <em>an hour</em> (h muda), <em>a university</em> (suena «yu»).' },
  ],
  exercises: [
    { type: 'mc', q: 'She is ___ honest person.', options: ['an', 'a', 'the', '—'], answer: 0, explanation: 'La h de <em>honest</em> es muda: empieza con sonido de vocal → <em>an</em>.' },
    { type: 'mc', q: 'I love ___ music.', options: ['— (sin artículo)', 'the', 'a', 'an'], answer: 0, explanation: 'Generalización → sin artículo: <em>I love music</em>.' },
    { type: 'mc', q: 'Can you close ___ door, please?', options: ['the', 'a', 'an', '—'], answer: 0, explanation: 'Los dos saben qué puerta es (específica) → <em>the</em>.' },
    { type: 'fill', q: 'My sister is ___ nurse. (artículo)', answer: 'a', explanation: 'Profesiones en singular llevan a/an: <em>She is a nurse</em>.' },
    { type: 'mc', q: 'We had ___ dinner at nine.', options: ['— (sin artículo)', 'the', 'a', 'an'], answer: 0, explanation: 'Las comidas no llevan artículo: <em>have dinner</em>.' },
    { type: 'mc', q: 'It takes ___ hour to get there.', options: ['an', 'a', 'the', '—'], answer: 0, explanation: '<em>Hour</em> empieza con sonido de vocal (h muda) → <em>an hour</em>.' },
    { type: 'order', answer: 'The book on the table is mine', explanation: 'Objeto específico (ese libro, esa mesa) → <em>the</em>.' },
    { type: 'mc', q: 'After work I go ___ home.', options: ['— (sin artículo)', 'to the', 'at', 'to a'], answer: 0, explanation: 'Expresión fija: <em>go home</em>, sin «to» y sin artículo.' },
  ],
},

{
  id: 'a2-10',
  title: 'Questions',
  subtitle: 'Formar preguntas correctamente',
  theory: [
    { h: 'Preguntas cerradas (yes/no)', p: 'Con <em>be</em> y modales, se invierte: <em>Are you...? Can she...?</em> Con otros verbos se usa <code>do/does/did</code>.',
      examples: [
        { en: 'Are you from Mexico?', es: '¿Eres de México?' },
        { en: 'Does she work here?', es: '¿Trabaja ella aquí?' },
        { en: 'Did they arrive late?', es: '¿Llegaron tarde?' } ] },
    { h: 'Question words', list: [
        '<code>What</code> (qué) · <code>Where</code> (dónde) · <code>When</code> (cuándo)',
        '<code>Who</code> (quién) · <code>Why</code> (por qué) · <code>How</code> (cómo)',
        '<code>Which</code> (cuál) · <code>Whose</code> (de quién)',
        '<code>How much/many</code> (cuánto/s) · <code>How often</code> (con qué frecuencia) · <code>How long</code> (cuánto tiempo)' ] },
    { h: 'Estructura: QUASV', p: '<strong>Qu</strong>estion word + <strong>A</strong>uxiliar + <strong>S</strong>ujeto + <strong>V</strong>erbo: <em>Where do you live?</em>',
      examples: [
        { en: 'What time does the film start?', es: '¿A qué hora empieza la película?' },
        { en: 'How often do you exercise?', es: '¿Con qué frecuencia haces ejercicio?' } ],
      tip: 'Error típico: <em>Where you live?</em> ❌ Falta el auxiliar: <em>Where do you live?</em> ✅' },
  ],
  exercises: [
    { type: 'mc', q: '___ does the train leave? — At 9:30.', options: ['What time', 'Where', 'Who', 'How many'], answer: 0, explanation: 'La respuesta es una hora → <em>What time...?</em>' },
    { type: 'order', answer: 'Where do you usually have lunch', explanation: 'QUASV: Question word (Where) + auxiliar (do) + sujeto (you) + verbo.' },
    { type: 'mc', q: '___ she like Italian food?', options: ['Does', 'Do', 'Is', 'Has'], answer: 0, explanation: 'Present simple con she → auxiliar <em>does</em>.' },
    { type: 'fill', q: '___ did you go last summer? — To the coast.', answer: 'where', explanation: 'La respuesta es un lugar → <em>Where</em>.' },
    { type: 'mc', q: '___ is that jacket? — It\'s Elisa\'s.', options: ['Whose', 'Who', 'Which', 'What'], answer: 0, explanation: 'Preguntar por el dueño → <em>Whose</em> (¿de quién?).' },
    { type: 'order', answer: 'How often do you play video games', explanation: '<em>How often</em> pregunta por la frecuencia.' },
    { type: 'mc', q: '___ were you late this morning? — Because of the traffic.', options: ['Why', 'When', 'How', 'Where'], answer: 0, explanation: 'La respuesta empieza con «because» → la pregunta es <em>Why</em>.' },
    { type: 'translate', q: '¿Dónde trabajas?', answer: ['Where do you work'], explanation: 'Recuerda el auxiliar: <em>Where do you work?</em>' },
  ],
},

]};
