// ─── AgriOne Design Tokens — Espacement (grille 8px) ─

export const spacing = {
  0:    0,
  1:    4,
  2:    8,
  3:    12,
  4:    16,
  5:    20,
  6:    24,
  7:    28,
  8:    32,
  10:   40,
  12:   48,
  14:   56,
  16:   64,
  20:   80,
  24:   96,
} as const

export const radii = {
  none:   0,
  xs:     4,
  sm:     6,
  md:     10,
  lg:     16,
  xl:     24,
  '2xl':  32,
  full:   9999,
} as const

export const shadows = {
  sm: {
    shadowColor:   '#0F7A4A',
    shadowOffset:  { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius:  3,
    elevation:     2,
  },
  md: {
    shadowColor:   '#0F7A4A',
    shadowOffset:  { width: 0, height: 4 },
    shadowOpacity: 0.10,
    shadowRadius:  12,
    elevation:     4,
  },
  lg: {
    shadowColor:   '#0F7A4A',
    shadowOffset:  { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius:  24,
    elevation:     8,
  },
  glow: {
    shadowColor:   '#1DB863',
    shadowOffset:  { width: 0, height: 0 },
    shadowOpacity: 0.35,
    shadowRadius:  16,
    elevation:     6,
  },
} as const
