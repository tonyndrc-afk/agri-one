# Charte Graphique — AgriOne
> Agriculture urbaine connectée · App Mobile (React Native / Expo)

---

## 1. Identité visuelle

**Concept** : Nature + Technologie — le vivant rencontre le circuit imprimé.
**Ton** : Sérieux, innovant, accessible, eco-responsable.

---

## 2. Palette de couleurs

### Couleurs primaires (extraites du logo)

| Nom            | Hex       | Usage                                      |
|----------------|-----------|--------------------------------------------|
| Emerald Deep   | `#0F7A4A` | Contours feuille, états actifs, CTA fort   |
| Forest Green   | `#1E8C5A` | Gradient intermédiaire, headers            |
| Leaf Green     | `#2DB866` | Couleur principale de marque, boutons      |
| Fresh Green    | `#42C97A` | Accents, badges de succès, progress bars   |
| Nature Light   | `#7DD9A3` | Backgrounds légers, chips, tags            |

### Couleurs secondaires (tech/circuit)

| Nom            | Hex       | Usage                                      |
|----------------|-----------|--------------------------------------------|
| Circuit Silver | `#A8AAAD` | Icônes inactives, bordures, circuit UI     |
| Text Gray      | `#888B8D` | Labels secondaires, placeholders           |
| Slate Dark     | `#3D4246` | Texte principal sur fond clair             |

### Couleurs de fond (Light mode)

| Nom            | Hex       | Usage                                      |
|----------------|-----------|--------------------------------------------|
| White          | `#FFFFFF` | Fond principal                             |
| Eco White      | `#F4FAF7` | Fond secondaire, cards, surfaces           |
| Mist Green     | `#E8F5EE` | Inputs, zones inactives                    |

### Couleurs de fond (Dark mode)

| Nom            | Hex       | Usage                                      |
|----------------|-----------|--------------------------------------------|
| Deep Earth     | `#0A1F13` | Fond principal dark                        |
| Night Forest   | `#122B1C` | Surface cards dark                         |
| Dark Moss      | `#1C3D27` | Bordures, séparateurs dark                 |

### Couleurs sémantiques

| Nom            | Hex       | Usage                                      |
|----------------|-----------|--------------------------------------------|
| Success        | `#2DB866` | Confirmation, récolte prête                |
| Warning        | `#F5A623` | Alerte (pH, température)                   |
| Danger         | `#E84040` | Problème critique capteur                  |
| Info           | `#3B82F6` | Notifications informatives                 |

---

## 3. Typographie

### Polices recommandées (Google Fonts / Expo)

| Rôle            | Police             | Variantes         |
|-----------------|--------------------|-------------------|
| **Display**     | Space Grotesk      | 500, 600, 700     |
| **Body**        | Inter              | 400, 500          |
| **Data/Capteurs** | Space Mono       | 400, 700          |

> Space Grotesk : moderne, géométrique → renforce l'aspect tech
> Inter : lisible sur mobile, universel
> Space Mono : parfait pour afficher les valeurs de capteurs (température, pH...)

### Échelle typographique

| Token       | Size  | Weight | Line Height | Usage                    |
|-------------|-------|--------|-------------|--------------------------|
| `display-xl`| 32px  | 700    | 40px        | Titres de section hero   |
| `display-lg`| 24px  | 700    | 32px        | Titres de page           |
| `display-md`| 20px  | 600    | 28px        | Sous-titres, cards       |
| `body-lg`   | 16px  | 500    | 24px        | Texte principal          |
| `body-md`   | 14px  | 400    | 20px        | Texte courant            |
| `body-sm`   | 12px  | 400    | 18px        | Captions, labels         |
| `data-lg`   | 28px  | 700    | 36px        | Valeurs capteurs grandes |
| `data-md`   | 18px  | 700    | 24px        | Valeurs capteurs moyennes|

---

## 4. Iconographie

- Style : **Outlined** avec strokeWidth 1.5–2 (ex: Lucide Icons ou Phosphor Icons)
- Taille standard : 24px (nav), 20px (in-card), 16px (inline)
- Couleur active : `#2DB866` (Leaf Green)
- Couleur inactive : `#A8AAAD` (Circuit Silver)

---

## 5. Espacement & Grille

Système basé sur une grille de **8px** :

| Token    | Value |
|----------|-------|
| `xs`     | 4px   |
| `sm`     | 8px   |
| `md`     | 16px  |
| `lg`     | 24px  |
| `xl`     | 32px  |
| `2xl`    | 48px  |
| `3xl`    | 64px  |

---

## 6. Border Radius

| Token      | Value | Usage                         |
|------------|-------|-------------------------------|
| `sm`       | 6px   | Tags, badges                  |
| `md`       | 12px  | Boutons, inputs               |
| `lg`       | 16px  | Cards                         |
| `xl`       | 24px  | Modals, bottom sheets         |
| `full`     | 999px | Pills, avatars                |

---

## 7. Ombres

| Token         | Value                                      |
|---------------|--------------------------------------------|
| `shadow-sm`   | `0 1px 3px rgba(15, 122, 74, 0.08)`        |
| `shadow-md`   | `0 4px 12px rgba(15, 122, 74, 0.12)`       |
| `shadow-lg`   | `0 8px 24px rgba(15, 122, 74, 0.16)`       |
| `shadow-card` | `0 2px 8px rgba(0, 0, 0, 0.08)`            |

---

## 8. Composants UI — Spécifications

### Bouton primaire
- Background : `#2DB866` → `#1E8C5A` (gradient)
- Texte : `#FFFFFF`, Space Grotesk 600, 16px
- Height : 52px
- Border radius : 12px
- Shadow : `shadow-md`

### Bouton secondaire
- Background : transparent
- Border : 1.5px `#2DB866`
- Texte : `#2DB866`, Space Grotesk 600, 16px

### Card capteur IoT
- Background : `#FFFFFF` (light) / `#122B1C` (dark)
- Border radius : 16px
- Padding : 16px
- Shadow : `shadow-card`
- Valeur : Space Mono 700, 28px, `#0F7A4A`
- Label : Inter 400, 12px, `#888B8D`

### Badge de statut
- "Actif" : bg `#E8F5EE`, texte `#0F7A4A`
- "Alerte" : bg `#FFF4E5`, texte `#F5A623`
- "Critique" : bg `#FFEBEB`, texte `#E84040`

---

## 9. Gradients de marque

```
Gradient vertical logo : linear-gradient(180deg, #0F7A4A 0%, #2DB866 60%, #42C97A 100%)
Gradient horizontal CTA : linear-gradient(135deg, #1E8C5A 0%, #2DB866 100%)
Gradient card hero : linear-gradient(135deg, #0F7A4A 0%, #1E8C5A 50%, #2DB866 100%)
```

---

## 10. Ton & Voix

- **Court, actionnable** : "Arroser maintenant", "Récolter aujourd'hui"
- **Encourageant** : "Vos plants de basilic se portent bien !"
- **Data-driven** : Toujours afficher les chiffres avec les unités (23.4°C, pH 6.2)
- **Éco-conscient** : Mettre en avant les économies (eau économisée, CO₂)
