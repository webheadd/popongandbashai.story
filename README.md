# S & R — Interactive Single-Page Wedding Website

A framework-free, single-page wedding website built with HTML, CSS, and vanilla JavaScript.

## Core behavior

The website uses one `index.html` document. JavaScript replaces the content inside `#app` when the visitor selects a section.

The background music `<audio>` element is outside `#app`, so it persists while navigating between sections.

## Sections

- Landing
- Main
- Our Story
- The Details
- RSVP

## Music

Put the actual wedding song at:

```text
assets/music/wedding-song.mp3
```

The visitor must click **Enter the Wedding** before music begins.

## Run locally

Because this project uses JavaScript modules, run it from a local web server rather than opening `index.html` directly with `file://`.

Examples:

### Python

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

### VS Code

Use the Live Server extension and open `index.html`.

## Customize

Replace placeholder wedding information in:

```text
js/pages/main.js
js/pages/details.js
js/pages/rsvp.js
js/pages/story.js
```

Replace the placeholder hero/story areas with actual images.

Add the wedding music:

```text
assets/music/wedding-song.mp3
```

## RSVP integration

The current RSVP form is demo-only. Connect it to Google Forms, Formspree, a custom API, or another backend before launch.

## Navigation architecture

The site deliberately does not navigate between HTML files.

```text
index.html
  |
  +-- persistent music
  +-- persistent player
  +-- persistent navigation
  |
  +-- #app
       +-- landing
       +-- main
       +-- story
       +-- details
       +-- rsvp
```

This keeps the wedding experience continuous and allows the same music to play throughout.
