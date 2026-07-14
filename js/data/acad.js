/* Módulo académico — exposiciones, gráficas, datos y argumentación */
window.DATA_ACAD = { lessons: [

{
  id: 'ac-01',
  title: 'Presentations: dar una exposición',
  subtitle: 'Frases para abrir, guiar y cerrar tu presentación',
  theory: [
    { h: 'Abrir la presentación', p: 'Saluda, preséntate y anuncia el tema y la estructura. El público entiende mejor si desde el inicio sabe qué va a escuchar.',
      examples: [
        { en: "Good morning, everyone. Today I'm going to talk about renewable energy.", es: 'Buenos días a todos. Hoy voy a hablar sobre energías renovables.' },
        { en: 'My presentation is divided into three parts.', es: 'Mi presentación está dividida en tres partes.' },
        { en: "First, I'll give some background. Then, I'll present the data. Finally, I'll discuss the results.", es: 'Primero daré contexto. Después presentaré los datos. Al final comentaré los resultados.' } ] },
    { h: 'Guiar al público (signposting)', list: [
        '<code>Let\'s move on to...</code> = pasemos a...',
        '<code>This brings me to my next point.</code> = esto me lleva al siguiente punto',
        '<code>As you can see on this slide...</code> = como pueden ver en esta diapositiva',
        '<code>I\'d like to highlight...</code> = me gustaría destacar...',
        '<code>Going back to what I said earlier...</code> = volviendo a lo que dije antes' ] },
    { h: 'Cerrar y responder preguntas', examples: [
        { en: 'To sum up, there are three key findings.', es: 'En resumen, hay tres hallazgos clave.' },
        { en: 'Thank you for your attention. Are there any questions?', es: 'Gracias por su atención. ¿Hay alguna pregunta?' },
        { en: "That's a very good question. Let me think...", es: 'Muy buena pregunta. Déjenme pensar...' },
        { en: "I'm afraid I don't have that data with me, but I can find out.", es: 'Me temo que no tengo ese dato aquí, pero puedo averiguarlo.' } ],
      tip: 'Ensaya la exposición EN VOZ ALTA al menos dos veces. Usa el botón 🔊 de los ejemplos para imitar la pronunciación.' },
  ],
  exercises: [
    { type: 'mc', q: 'Para empezar la exposición dices:', options: ["Today I'm going to talk about climate change.", 'Today I want talk about climate change.', 'Today I going to talk climate change.', 'Today I talk over climate change.'], answer: 0, explanation: '<em>I\'m going to talk about + tema</em> es la fórmula estándar de apertura.' },
    { type: 'mc', q: 'Para pasar al siguiente punto:', options: ["Let's move on to the next point.", "Let's moving the next point.", 'We go next point now.', 'Next point we see.'], answer: 0, explanation: '<em>Let\'s move on to...</em> es el conector clásico entre secciones.' },
    { type: 'fill', q: 'My presentation is ___ into three parts. (dividida)', answer: 'divided', explanation: '<em>Is divided into</em> = está dividida en.' },
    { type: 'mc', q: 'Señalas algo en tu diapositiva:', options: ['As you can see on this slide...', 'How you can see in this slide...', 'Like you see this slide...', 'As you look the slide...'], answer: 0, explanation: '<em>As you can see...</em> = como pueden ver.' },
    { type: 'order', answer: 'Thank you for your attention', explanation: 'Cierre estándar de toda presentación.' },
    { type: 'mc', q: 'Para resumir al final:', options: ['To sum up, recycling saves money.', 'For sum, recycling saves money.', 'Summing, recycling saves money.', 'To resume, recycling saves money.'], answer: 0, explanation: '<em>To sum up / In summary</em>. Ojo: «resume» significa reanudar, no resumir (falso amigo).' },
    { type: 'mc', q: 'Te hacen una pregunta difícil y ganas tiempo:', options: ["That's a good question. Let me think.", 'Is good question. I think.', 'Good question is. Let me thinking.', "That's question good. Me think."], answer: 0, explanation: '<em>That\'s a (very) good question</em> es la forma natural de ganar unos segundos.' },
    { type: 'translate', q: 'Primero, hablaré sobre la historia del proyecto.', answer: ['First, I will talk about the history of the project', "First, I'll talk about the history of the project", 'First I will talk about the history of the project', "First I'll talk about the history of the project"], explanation: '<em>First, I\'ll talk about...</em> — así anuncias la primera parte.' },
    { type: 'match', q: 'Empareja la frase con su momento:', pairs: [["I'm going to talk about...", 'inicio'], ['This brings me to my next point', 'transición'], ['To sum up...', 'cierre'], ['Are there any questions?', 'preguntas']], explanation: 'Inicio → desarrollo con transiciones → resumen → preguntas: el esqueleto de toda exposición.' },
  ],
},

{
  id: 'ac-02',
  title: 'Describing graphs & charts',
  subtitle: 'Describir gráficas: subidas, bajadas y tendencias',
  theory: [
    { h: 'Tipos de gráficas', list: [
        '<code>line graph</code> = gráfica de líneas · <code>bar chart</code> = de barras',
        '<code>pie chart</code> = de pastel · <code>table</code> = tabla · <code>figure</code> = figura' ],
      examples: [
        { en: 'The line graph shows the population growth between 2000 and 2020.', es: 'La gráfica de líneas muestra el crecimiento de población entre 2000 y 2020.' } ] },
    { h: 'Verbos de tendencia', list: [
        'Subir: <code>increase, rise, grow, climb, go up</code>',
        'Bajar: <code>decrease, fall, drop, decline, go down</code>',
        'Estable: <code>remain stable, stay steady, level off</code>',
        'Extremos: <code>reach a peak</code> (tocar máximo) · <code>hit a low</code> (tocar mínimo)',
        'Fluctuar: <code>fluctuate</code>' ] },
    { h: 'Adverbios: cómo de rápido', list: [
        'Fuerte: <code>sharply, dramatically, significantly</code>',
        'Suave: <code>slightly, gradually, steadily, slowly</code>' ],
      examples: [
        { en: 'Sales rose sharply from 10,000 to 25,000 units.', es: 'Las ventas subieron bruscamente de 10 000 a 25 000 unidades.' },
        { en: 'Unemployment fell slightly in the second quarter.', es: 'El desempleo bajó ligeramente en el segundo trimestre.' },
        { en: 'Prices remained stable throughout the year.', es: 'Los precios se mantuvieron estables durante todo el año.' } ],
      tip: 'Estructura mágica: <em>X + verbo de tendencia + adverbio + from A to B + between/in + fechas</em>.' },
  ],
  exercises: [
    { type: 'mc', q: 'La gráfica de pastel se llama:', options: ['pie chart', 'cake chart', 'circle graph chart', 'round table'], answer: 0, explanation: '<em>Pie chart</em> (literalmente «gráfica de pastel»).' },
    { type: 'mc', q: 'Las ventas subieron BRUSCAMENTE:', options: ['Sales rose sharply.', 'Sales rose slightly.', 'Sales fell sharply.', 'Sales remained stable.'], answer: 0, explanation: '<em>Rise sharply</em> = subir bruscamente; <em>slightly</em> sería «ligeramente».' },
    { type: 'fill', q: 'The number of users ___ (alcanzó) a peak in 2024.', answer: 'reached', explanation: '<em>Reach a peak</em> = alcanzar el punto máximo.' },
    { type: 'mc', q: 'Los precios se mantuvieron estables:', options: ['Prices remained stable.', 'Prices stayed sharp.', 'Prices kept quiet.', 'Prices held even.'], answer: 0, explanation: '<em>Remain stable / stay steady</em> = mantenerse estable.' },
    { type: 'order', answer: 'The graph shows the sales between 2020 and 2025', explanation: 'Primera frase típica al describir una gráfica: <em>The graph shows + qué + período</em>.' },
    { type: 'mc', q: 'El desempleo bajó gradualmente de 10% a 7%:', options: ['Unemployment fell gradually from 10% to 7%.', 'Unemployment felt gradually 10% at 7%.', 'Unemployment down gradually from 10% until 7%.', 'Unemployment falled gradual from 10% to 7%.'], answer: 0, explanation: '<em>fall (fell) + adverbio + from A to B</em>. El pasado de fall es <em>fell</em>.' },
    { type: 'match', q: 'Empareja el verbo con su movimiento:', pairs: [['climb', 'subir'], ['decline', 'bajar'], ['level off', 'estabilizarse'], ['fluctuate', 'variar sin rumbo']], explanation: 'Ten un sinónimo de cada movimiento para no repetir siempre increase/decrease.' },
    { type: 'translate', q: 'La gráfica muestra un aumento del 20 por ciento.', answer: ['The graph shows an increase of 20 percent', 'The graph shows a 20 percent increase', 'The chart shows an increase of 20 percent', 'The chart shows a 20 percent increase'], explanation: '<em>an increase of X percent</em> o <em>a X percent increase</em>.' },
    { type: 'mc', q: '¿Cuál describe una caída dramática?', options: ['Profits dropped dramatically in March.', 'Profits grew steadily in March.', 'Profits levelled off in March.', 'Profits reached a peak in March.'], answer: 0, explanation: '<em>Drop dramatically</em> = caer dramáticamente.' },
  ],
},

{
  id: 'ac-03',
  title: 'Numbers, data & comparisons',
  subtitle: 'Comparar cifras y proporciones como en un informe',
  theory: [
    { h: 'Proporciones', list: [
        '<code>half</code> (la mitad) · <code>a third</code> (un tercio) · <code>a quarter</code> (una cuarta parte)',
        '<code>the majority of</code> (la mayoría) · <code>a minority of</code> (una minoría)',
        '<code>one in five</code> (uno de cada cinco) · <code>three out of four</code> (tres de cada cuatro)' ],
      examples: [
        { en: 'A quarter of the students failed the test.', es: 'Una cuarta parte de los estudiantes reprobó el examen.' },
        { en: 'One in five adults does not exercise.', es: 'Uno de cada cinco adultos no hace ejercicio.' } ] },
    { h: 'Representar y comparar', list: [
        '<code>accounts for / represents</code> = representa: <em>Oil accounts for 40% of exports.</em>',
        '<code>twice as many/much</code> = el doble · <code>three times more</code> = el triple',
        '<code>compared to/with</code> = en comparación con',
        '<code>whereas / while</code> = mientras que' ],
      examples: [
        { en: 'Women read twice as many books as men in this survey.', es: 'Las mujeres leen el doble de libros que los hombres en esta encuesta.' },
        { en: 'Sales grew 5% compared to last year.', es: 'Las ventas crecieron 5% en comparación con el año pasado.' } ] },
    { h: 'Aproximar', list: [
        '<code>approximately / roughly / around</code> = aproximadamente',
        '<code>just over / just under</code> = un poco más de / un poco menos de',
        '<code>nearly / almost</code> = casi' ],
      tip: 'En inglés los decimales van con punto y los miles con coma: <em>1,500.75</em> = mil quinientos punto setenta y cinco.' },
  ],
  exercises: [
    { type: 'mc', q: '«Una cuarta parte de la población» =', options: ['a quarter of the population', 'a fourth part of population', 'the quarter population', 'one quarter from the population'], answer: 0, explanation: '<em>A quarter of + the + sustantivo</em>.' },
    { type: 'mc', q: '«El turismo representa el 30% de la economía» =', options: ['Tourism accounts for 30% of the economy.', 'Tourism accounts 30% the economy.', 'Tourism is 30% for the economy.', 'Tourism represents for 30% of economy.'], answer: 0, explanation: '<em>Accounts for</em> lleva la preposición for; <em>represents</em> va sin preposición.' },
    { type: 'fill', q: 'One ___ five people never reads books. (uno de cada cinco)', answer: 'in', explanation: '<em>One in five</em> = uno de cada cinco.' },
    { type: 'mc', q: '«El doble de estudiantes» =', options: ['twice as many students', 'two times students more', 'double students as', 'twice students many'], answer: 0, explanation: '<em>Twice as many + contable</em> (twice as much + incontable).' },
    { type: 'order', answer: 'The majority of users prefer the mobile app', explanation: '<em>The majority of + plural</em> = la mayoría de.' },
    { type: 'mc', q: '«Un poco menos de la mitad» =', options: ['just under half', 'just down half', 'low half', 'under just the half'], answer: 0, explanation: '<em>Just under</em> = un poco menos de; <em>just over</em> = un poco más de.' },
    { type: 'mc', q: 'Men prefer action films, ___ women prefer drama.', options: ['whereas', 'despite', 'therefore', 'moreover'], answer: 0, explanation: 'Contraste entre dos grupos → <em>whereas / while</em>.' },
    { type: 'translate', q: 'Casi el 60 por ciento votó que sí.', answer: ['Almost 60 percent voted yes', 'Nearly 60 percent voted yes', 'Almost 60% voted yes', 'Nearly 60% voted yes'], explanation: '<em>Almost / nearly + cifra</em>.' },
  ],
},

{
  id: 'ac-04',
  title: 'Opinar y argumentar',
  subtitle: 'Defender ideas con estilo académico',
  theory: [
    { h: 'Dar tu opinión', list: [
        '<code>In my view / In my opinion</code> = en mi opinión',
        '<code>From my point of view</code> = desde mi punto de vista',
        '<code>I strongly believe that</code> = creo firmemente que',
        '<code>It seems to me that</code> = me parece que' ] },
    { h: 'Suavizar afirmaciones (hedging)', p: 'En contextos académicos no se afirma con seguridad total; se matiza:', list: [
        '<code>It seems that / It appears that</code> = parece que',
        '<code>arguably</code> = posiblemente, podría decirse',
        '<code>tends to</code> = tiende a: <em>Prices tend to rise in December.</em>',
        '<code>The data suggests that...</code> = los datos sugieren que...' ] },
    { h: 'Estructurar el argumento', list: [
        '<code>On the one hand... on the other hand...</code> = por un lado... por otro...',
        '<code>However / Nevertheless</code> = sin embargo',
        '<code>Furthermore / Moreover</code> = además',
        '<code>For instance / such as</code> = por ejemplo / como',
        '<code>In conclusion, the evidence suggests that...</code> = en conclusión, la evidencia sugiere que...' ],
      examples: [
        { en: 'On the one hand, remote work saves time. On the other hand, it can be isolating.', es: 'Por un lado, el teletrabajo ahorra tiempo. Por otro, puede aislar.' },
        { en: 'The evidence suggests that daily practice improves fluency.', es: 'La evidencia sugiere que la práctica diaria mejora la fluidez.' } ],
      tip: 'En una exposición o ensayo: opinión → argumento → ejemplo (<em>for instance...</em>) → conclusión.' },
  ],
  exercises: [
    { type: 'mc', q: '«En mi opinión» (formal):', options: ['In my view', 'For my view', 'To my thinking', 'By my opinion'], answer: 0, explanation: '<em>In my view / in my opinion</em>. Nunca «according to me».' },
    { type: 'mc', q: 'Frase con hedging (matizada):', options: ['The data suggests that sales will improve.', 'Sales will improve, sure.', 'Sales improve, that is a fact.', 'I am total sure sales improve.'], answer: 0, explanation: '<em>The data suggests that...</em> matiza la afirmación: estilo académico.' },
    { type: 'fill', q: 'On the one hand it is cheap; on the ___ hand, the quality is low.', answer: 'other', explanation: '<em>On the one hand... on the other hand...</em>' },
    { type: 'mc', q: '«Los precios tienden a subir en diciembre» =', options: ['Prices tend to rise in December.', 'Prices tend rising in December.', 'Prices are tend to rise in December.', 'Prices tends rise in December.'], answer: 0, explanation: '<em>tend + to + infinitivo</em>, sujeto plural sin -s.' },
    { type: 'order', answer: 'In conclusion the evidence suggests that exercise improves memory', explanation: 'Cierre académico: <em>In conclusion, the evidence suggests that...</em>' },
    { type: 'mc', q: 'Para dar un ejemplo:', options: ['For instance, many students use apps.', 'For example of, many students use apps.', 'Like instance, many students use apps.', 'By example, many students use apps.'], answer: 0, explanation: '<em>For instance / for example</em> = por ejemplo.' },
    { type: 'mc', q: 'Conector para AÑADIR un argumento más:', options: ['Furthermore', 'However', 'Whereas', 'Although'], answer: 0, explanation: '<em>Furthermore / moreover</em> añaden; los otros contrastan.' },
    { type: 'translate', q: 'Sin embargo, los resultados fueron diferentes.', answer: ['However, the results were different', 'Nevertheless, the results were different', 'However the results were different'], explanation: '<em>However,</em> + frase completa (con coma).' },
  ],
},

]};
