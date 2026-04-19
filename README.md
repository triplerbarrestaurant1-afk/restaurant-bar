# Triple R Bar Restaurant — Website

Official website for **Triple R Bar Restaurant**, located in Sandy Ground, Saint Martin. Cinematic island dining, craft cocktails & DJ vibes.

## Live Pages

| Page | Description |
|------|-------------|
| `index.html` | Homepage — hero, featured dishes, vibes |
| `menu.html` | Full food & drinks menu |
| `ambiance.html` | Photo & video gallery |
| `reservations.html` | Reservation form |
| `about.html` | Our story |
| `blog.html` | News & events |

## Tech Stack

- **HTML5 / CSS3** — static, no build step required
- **Tailwind CSS** (CDN) — utility-first styling
- **GSAP + ScrollTrigger** — scroll animations
- **Google Fonts** — Cinzel, Montserrat, Cormorant Garamond
- **Netlify CMS** (`admin/`) — content management

## Local Development

No build step needed. Open any `.html` file directly in a browser, or serve locally:

```bash
npx serve .
# → http://localhost:3000
```

## Content Management

The site uses Netlify CMS for non-technical edits.

- Admin panel: `/admin/index.html`
- Content data: `_data/content.json`

## Deployment

Deploy to any static host (Netlify, Vercel, GitHub Pages). For Netlify CMS to work, deploy on Netlify and enable Git Gateway in Identity settings.

## Media

Photos and videos are in `pictures & videos/`. Do not commit large video files — use a CDN or Git LFS.

## Contact

**Triple R Bar Restaurant** · Sandy Ground, Saint Martin  
rxmarketing09@gmail.com
