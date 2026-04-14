# Camplo — tokens de marque

## Couleurs

| Token | Hex | Usage |
|---|---|---|
| `--fern` | `#3E6B31` | Primaire · pin, texte, surfaces foncées |
| `--fern-deep` | `#2A4A22` | Sections sombres |
| `--marmalade` | `#E8853B` | Accent · tente, CTA, citations |
| `--paper` | `#F6F0E0` | Fond crème dominant |
| `--paper-warm` | `#EEE4CC` | Variante paper (FAQ, sections douces) |
| `--ink` | `#1C1C1A` | Texte principal |

## Typographie

- **Wordmark / display / titres** : Sentient 500 / 700 / 800 (serif, squared terminals)
- **UI / body** : Satoshi 500 / 700
- **Secondaire / labels** : General Sans 500 / 600

Fontshare : https://api.fontshare.com/v2/css?f[]=sentient@800,700,500&f[]=satoshi@700,500&f[]=general-sans@600,500&display=swap

## Assets

Tous les assets finaux sont dans `brand/final/` :

- `camplo-mark-squared.svg` — logomark seul, coins squared
- `camplo-mark-2048.png` — logomark sur paper
- `camplo-mark-2048-transparent.png` — logomark fond transparent
- `camplo-wordmark-below-2048.png` / `-4096.png` — lockup vertical
- `camplo-wordmark-integrated-2048.png` / `-4096.png` — wordmark intégré (pin+tente = lettre a)
- `brand-sheet.html` — planche de marque complète (ouvrir dans le browser)
- `sentient-700.woff2` — font display self-hosted

Version utilisée en production :
- Nav (top-left) : `public/camplo-wordmark.png` (copie du wordmark-integrated tight-crop)
- Favicon : `public/favicon.svg` (logomark squared)
