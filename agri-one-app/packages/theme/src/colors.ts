// ─── AgriOne Design Tokens — Couleurs ───────────────
// Extraites du logo (gradient émeraude → feuille verte)

export const colors = {
  // Verts primaires (logo)
  emeraldDeep:   '#0F7A4A',
  forestGreen:   '#1E8C5A',
  greenCore:     '#1DB863',  // ← couleur principale de marque
  greenBright:   '#42D97E',
  natureMist:    '#7DD9A3',
  greenPale:     '#C2F5D8',

  // Tech / Circuit (argent du logo)
  circuitSilver: '#A8AAAD',
  textGray:      '#888B8D',
  slateDark:     '#3D4246',

  // Fonds dark
  bgPrimary:     '#080F0A',
  bgSecondary:   '#0D1A0F',
  bgSurface:     '#0F2115',
  bgCard:        '#162B1C',
  bgBorder:      '#1E3D27',
  bgBorderLight: '#2A5536',

  // Textes
  textPrimary:   '#FFFFFF',
  textSecondary: '#D4E0DB',
  textMuted:     '#A8B8B0',
  textDisabled:  '#4A5550',

  // Sémantiques
  success:       '#1DB863',
  successBg:     '#051A0D',
  warning:       '#F5A623',
  warningBg:     '#1F1505',
  danger:        '#E84040',
  dangerBg:      '#1F0505',
  info:          '#3B9BF6',
  infoBg:        '#05111F',

  // Utils
  white:         '#FFFFFF',
  black:         '#000000',
  transparent:   'transparent',
} as const

export type ColorKey = keyof typeof colors
