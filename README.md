# Inglés A2 → B2 🇬🇧

Aplicación web para aprender inglés del nivel A2 al B2 (marco CEFR), pensada para usarse desde el celular. Sin instalación, sin servidor: es un sitio estático.

## Cómo usarla

**Opción 1 — GitHub Pages (recomendada):**
1. En GitHub: *Settings → Pages → Source: Deploy from a branch → Branch: `main` / (root)* → Save.
2. Abre `https://rmitheber.github.io/ingles/` desde el celular.
3. En el navegador del celular: menú → *Añadir a pantalla de inicio* para tenerla como app.

**Opción 2 — local:** abre `index.html` en cualquier navegador.

## Qué incluye

- **2 perfiles** (Heber y Elisa) con progreso independiente, guardado en el dispositivo (localStorage).
- **Examen de nivel** de 12 preguntas que recomienda por dónde empezar.
- **30 lecciones** de gramática (10 por nivel A2, B1 y B2) siguiendo el currículo CEFR, con teoría explicada en español, ejemplos con audio (pronunciación con voz del navegador) y consejos sobre errores típicos.
- **~250 ejercicios** de 5 tipos: opción múltiple, completar huecos, ordenar frases, emparejar y traducir — todos con feedback inmediato que explica el porqué.
- **150 tarjetas de vocabulario** por temas, con **repetición espaciada** (sistema Leitner): las palabras que fallas vuelven pronto, las que dominas se espacian hasta 30 días.
- **Progreso y motivación**: racha diaria 🔥, puntos XP, porcentaje por nivel y estadísticas.

## Método

Basado en lo que la investigación señala como más eficaz para aprender idiomas:

- **Práctica activa (active recall)**: todos los ejercicios te obligan a producir la respuesta, no solo a releer.
- **Repetición espaciada**: el repaso de vocabulario usa intervalos crecientes (1, 2, 4, 8, 15 y 30 días).
- **Feedback inmediato**: cada error viene con la explicación de la regla.
- **Constancia**: mejor 15 minutos al día que 2 horas un domingo. La racha te ayuda a mantenerlo.

Una lección se marca como completada al lograr **70% o más** de aciertos; puedes repetirla las veces que quieras para mejorar tu puntuación.

## Estructura del código

```
index.html          Estructura de la app (SPA con rutas por hash)
css/styles.css      Estilos mobile-first
js/app.js           Motor: navegación, ejercicios, SRS, progreso
js/data/a2.js       10 lecciones nivel A2
js/data/b1.js       10 lecciones nivel B1
js/data/b2.js       10 lecciones nivel B2
js/data/vocab.js    150 tarjetas de vocabulario
js/data/test.js     Examen de nivel
manifest.json       Manifiesto PWA (añadir a pantalla de inicio)
```

Para añadir lecciones o vocabulario solo hay que editar los archivos de `js/data/` siguiendo el mismo formato.
