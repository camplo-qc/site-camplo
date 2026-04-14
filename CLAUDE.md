# site-camplo

Presentation site + CRM pitch for **Camplo**, an agency that builds websites and CRMs for campgrounds.

## Brand

All brand assets live in `brand/final/`:
- `brand-sheet.html` — planche de marque complète
- `camplo-mark-squared.svg` — logomark SVG (coins squared)
- `camplo-mark-2048.png` / `-transparent.png` — logomark PNG
- `camplo-wordmark-below-*.png` — logo + "Camplo" dessous
- `camplo-wordmark-integrated-*.png` — "C[logo]mplo" intégré
- `sentient-700.woff2` — display font self-hosted

En production dans le site :
- `public/camplo-wordmark.png` — wordmark du nav (tight crop)
- `public/favicon.svg` — favicon (logomark squared)

Primary palette:
- `--fern` `#3E6B31` — primary green
- `--marmalade` `#E8853B` — accent orange
- `--paper` `#F6F0E0` — cream background

Typography (via Fontshare):
- **Sentient 500/700/800** — wordmark, display (serif, squared terminals)
- Satoshi 500/700 — UI, body
- General Sans 500/600 — labels, secondary

## gstack

Use `/browse` from gstack for all web browsing. Never use `mcp__claude-in-chrome__*` tools.

Available skills: `/office-hours`, `/plan-ceo-review`, `/plan-eng-review`, `/plan-design-review`, `/design-consultation`, `/design-shotgun`, `/design-html`, `/review`, `/ship`, `/land-and-deploy`, `/canary`, `/benchmark`, `/browse`, `/open-gstack-browser`, `/qa`, `/qa-only`, `/design-review`, `/setup-browser-cookies`, `/setup-deploy`, `/retro`, `/investigate`, `/document-release`, `/codex`, `/cso`, `/autoplan`, `/pair-agent`, `/careful`, `/freeze`, `/guard`, `/unfreeze`, `/gstack-upgrade`, `/learn`.

## Skill routing

- New feature / product idea → `/office-hours` first, then `/autoplan`.
- Before code on a UI surface → `/plan-design-review`.
- Before code on architecture → `/plan-eng-review`.
- After a branch has changes → `/review`.
- After deploy to staging → `/qa <url>`.
- Ready to merge → `/ship`, then `/land-and-deploy`.
