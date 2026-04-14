# site-camplo

Presentation site + CRM pitch for **Camplo**, an agency that builds websites and CRMs for campgrounds.

## Brand

Brand assets live in `brand/`:
- `brand/camplo-mark.svg` — the logo mark (pine + tent)
- `brand/camplo-brand-sheet.html` — full brand system
- `brand/colors.md` — color and typography tokens

Primary palette (only two colors):
- `--fern` `#3E6B31` — primary green
- `--marmalade` `#E8853B` — accent orange
- `--paper` `#F6F0E0` — cream background (support, not a brand color)

Typography (via Fontshare):
- Cabinet Grotesk 800 — wordmark, display
- Satoshi 500/700/900 — UI, body
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
