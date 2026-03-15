export * from './colors'
export * from './typography'
export * from './spacing'

// Gradients de marque
export const gradients = {
  logoVertical:   ['#0F7A4A', '#1DB863', '#42D97E'] as const,
  ctaHorizontal:  ['#1E8C5A', '#1DB863'] as const,
  cardHero:       ['#0F7A4A', '#1E8C5A', '#1DB863'] as const,
  bgDark:         ['#0A1F13', '#122B1C'] as const,
}

// Durées d'animation
export const durations = {
  fast:   150,
  base:   250,
  slow:   400,
  slower: 600,
} as const

// Easings
export const easings = {
  spring: [0.34, 1.56, 0.64, 1] as const,
  smooth: [0.4, 0, 0.2, 1]     as const,
  in:     [0.4, 0, 1, 1]       as const,
  out:    [0, 0, 0.2, 1]       as const,
} as const
