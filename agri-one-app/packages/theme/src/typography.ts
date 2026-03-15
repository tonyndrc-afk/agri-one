// ─── AgriOne Design Tokens — Typographie ────────────

export const fonts = {
  display: 'Unbounded',       // Titres, logotype, heroes
  body:    'Figtree',         // Texte courant
  mono:    'JetBrains Mono',  // Valeurs capteurs, codes
} as const

export const fontSizes = {
  xs:     12,
  sm:     14,
  base:   16,
  lg:     18,
  xl:     20,
  '2xl':  24,
  '3xl':  30,
  '4xl':  36,
  '5xl':  48,
  hero:   64,
} as const

export const fontWeights = {
  light:    '300',
  regular:  '400',
  medium:   '500',
  semibold: '600',
  bold:     '700',
  black:    '900',
} as const

export const lineHeights = {
  tight:   1.1,
  snug:    1.3,
  normal:  1.5,
  relaxed: 1.6,
  loose:   1.8,
} as const

export const letterSpacings = {
  tight:  -0.5,
  normal:  0,
  wide:    0.5,
  wider:   1,
  widest:  2,
} as const

// Styles typographiques prédéfinis
export const textStyles = {
  displayHero: {
    fontFamily:   fonts.display,
    fontSize:     fontSizes.hero,
    fontWeight:   fontWeights.black,
    lineHeight:   fontSizes.hero * lineHeights.tight,
  },
  displayXl: {
    fontFamily:   fonts.display,
    fontSize:     fontSizes['4xl'],
    fontWeight:   fontWeights.bold,
    lineHeight:   fontSizes['4xl'] * lineHeights.tight,
  },
  displayLg: {
    fontFamily:   fonts.display,
    fontSize:     fontSizes['3xl'],
    fontWeight:   fontWeights.bold,
    lineHeight:   fontSizes['3xl'] * lineHeights.snug,
  },
  displayMd: {
    fontFamily:   fonts.display,
    fontSize:     fontSizes['2xl'],
    fontWeight:   fontWeights.semibold,
    lineHeight:   fontSizes['2xl'] * lineHeights.snug,
  },
  bodyLg: {
    fontFamily:   fonts.body,
    fontSize:     fontSizes.lg,
    fontWeight:   fontWeights.regular,
    lineHeight:   fontSizes.lg * lineHeights.relaxed,
  },
  bodyBase: {
    fontFamily:   fonts.body,
    fontSize:     fontSizes.base,
    fontWeight:   fontWeights.regular,
    lineHeight:   fontSizes.base * lineHeights.relaxed,
  },
  bodySm: {
    fontFamily:   fonts.body,
    fontSize:     fontSizes.sm,
    fontWeight:   fontWeights.regular,
    lineHeight:   fontSizes.sm * lineHeights.normal,
  },
  dataXl: {
    fontFamily:   fonts.mono,
    fontSize:     fontSizes['4xl'],
    fontWeight:   fontWeights.bold,
    lineHeight:   fontSizes['4xl'] * lineHeights.tight,
  },
  dataLg: {
    fontFamily:   fonts.mono,
    fontSize:     fontSizes['2xl'],
    fontWeight:   fontWeights.bold,
    lineHeight:   fontSizes['2xl'] * lineHeights.snug,
  },
  label: {
    fontFamily:   fonts.mono,
    fontSize:     fontSizes.xs,
    fontWeight:   fontWeights.medium,
    lineHeight:   fontSizes.xs * lineHeights.normal,
    letterSpacing: letterSpacings.wider,
  },
} as const
