# Modal Window Project

A simple HTML, CSS, and JavaScript project demonstrating a modal window with animations and interactivity.

## Features

- Modal window triggered by clicking an animated image
- Modal closes via:
  - Close button
  - Click on background overlay
  - Pressing the `Escape` key
- Animated GIFs integrated into the layout
- Typing-style animated dialogue text
- Responsive layout for desktop and mobile
- Gradient background using CSS
- Custom status bar color on mobile devices
- Layered visual structure using `z-index`

## Animations

### Head and Transition Animations

The project uses the following visual assets:

- `head-ts.png` – static image representing the head
- `explosion-ts.gif` – head explosion animation
- `return-ts.gif` – head return animation

Each asset is layered above dialogue text using CSS and animated through timed visibility.

### Typing Text Animation

Dialogue text appears line-by-line using JavaScript timeouts, simulating a typing or speaking effect:

```js
setTimeout(() => {
  text1.style.visibility = 'visible';
}, 1000);
```

## File Structure

```
📦modal-window-project
 ┣ 📂img
 ┃ ┣ 📄head-ts.png
 ┃ ┣ 📄explosion-ts.gif
 ┃ ┗ 📄return-ts.gif
 ┣ 📄index.html
 ┣ 📄style.css
 ┣ 📄script.js
 ┗ 📄README.md
```

## Demo

Live version available at:
[https://hellrainy.github.io/modal-window-project/](https://hellrainy.github.io/modal-window-animation-practice/)

## Technologies Used

HTML5

CSS3 (Flexbox, gradients, layering)

JavaScript (DOM interaction, event handling, animation)

Animated images (GIF and PNG)

## Author

Created by Hellrain / Артур Целищев

GIF by @ioanasopov on giphy.com

This project was developed as part of a self-learning path in frontend development.

[🇷🇺 Читать на русском](./README-RU.md)
