# Motion UI Demo Library

A production-quality Motion UI style demo built with plain HTML, CSS, and vanilla JS. The page showcases reusable motion utilities, animation presets, and interactive components including buttons, cards, banners, modals, and navigation transitions.

## Features

- Motion utility classes for glow, float, and bounce
- Preset animations: fade, slide, scale, spin
- Live preview playground to trigger motion in/out
- Modal, banner, card, and button demos
- Responsive layout for mobile and desktop

## Project Structure

- index.html: main layout and demo sections
- portfolio.css: theme, layout, and motion utilities
- portfolio.js: lightweight interactions and toggles

## How To Run

Open index.html in any modern browser.

## How To Use

- Use the top navigation buttons (Fade, Slide, Scale, Spin) to select a motion preset.
- In the playground, click Animate In or Animate Out to see the preset on the preview card.
- Toggle Glow, Float, and Bounce to apply motion utilities to the preview card.
- Click Open Modal in the component grid to view the modal animation.
- Dismiss the banner to see its exit animation.

## Customization

- Adjust theme variables in :root inside portfolio.css (colors, spacing, durations).
- Add new presets by creating keyframes and mapping them in the motion-enter/motion-exit classes.
- Add more demo cards in index.html and reuse existing utility classes.
