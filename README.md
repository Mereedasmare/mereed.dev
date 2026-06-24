# mereed.dev

Personal portfolio site for Mereed Asmare.

## Contents

- `index.html` - the main portfolio page
- `styles.css` - layout, visuals, and responsive styling
- `script.js` - small reveal animation and footer year
- `ops/mereed.dev/` - deployment notes and Nginx assets

## Deployment

The live site is served by Nginx from:

`/var/www/mereed.dev`

To deploy the current site to the server:

1. Copy `index.html`, `styles.css`, and `script.js` to the server.
2. Place them in `/var/www/mereed.dev/`.
3. Reload Nginx if the server config changes.

## Next planned update

- add resume section or downloadable resume
- add more project entries or case studies
