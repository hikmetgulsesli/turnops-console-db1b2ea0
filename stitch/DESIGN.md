---
name: Industrial Precision
colors:
  surface: '#081425'
  surface-dim: '#081425'
  surface-bright: '#2f3a4c'
  surface-container-lowest: '#040e1f'
  surface-container-low: '#111c2d'
  surface-container: '#152031'
  surface-container-high: '#1f2a3c'
  surface-container-highest: '#2a3548'
  on-surface: '#d8e3fb'
  on-surface-variant: '#bec8d2'
  inverse-surface: '#d8e3fb'
  inverse-on-surface: '#263143'
  outline: '#88929b'
  outline-variant: '#3e4850'
  surface-tint: '#89ceff'
  primary: '#89ceff'
  on-primary: '#00344d'
  primary-container: '#0ea5e9'
  on-primary-container: '#003751'
  inverse-primary: '#006591'
  secondary: '#ffb690'
  on-secondary: '#552100'
  secondary-container: '#ec6a06'
  on-secondary-container: '#4a1c00'
  tertiary: '#4edea3'
  on-tertiary: '#003824'
  tertiary-container: '#00b17b'
  on-tertiary-container: '#003b26'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#c9e6ff'
  primary-fixed-dim: '#89ceff'
  on-primary-fixed: '#001e2f'
  on-primary-fixed-variant: '#004c6e'
  secondary-fixed: '#ffdbca'
  secondary-fixed-dim: '#ffb690'
  on-secondary-fixed: '#341100'
  on-secondary-fixed-variant: '#783200'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#081425'
  on-background: '#d8e3fb'
  surface-variant: '#2a3548'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0em
  data-tabular:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  label-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  container-padding: 1rem
  gutter: 0.75rem
  row-height-sm: 2rem
  row-height-md: 2.5rem
---

## Brand & Style

The design system is engineered for the high-stakes environment of airport ground operations. The brand personality is **deterministic, authoritative, and clinical**. It prioritizes information density and situational awareness over aesthetic flourishes. 

The visual style is **Industrial Precision**: a hybrid of high-density functionalism and modern technical aesthetics. It utilizes a deep, low-light foundation to reduce eye strain during extended shifts (night/day transitions) and employs high-chroma utility accents for instant error recognition. Every element is governed by a strict logic of "function over form," removing all unnecessary decorative elements to ensure that critical operational data—flight numbers, gate assignments, and fuel levels—remains the sole focus.

## Colors

The palette is rooted in deep slates and charcoals to create a high-contrast environment for utility-driven color signaling.

- **Foundations:** Use `#0F172A` for the primary background and `#1E293B` for containers and surface layers.
- **Action & Status:** 
    - **Sky Blue (#0EA5E9):** Indicates active tasks, primary actions, and ongoing operations.
    - **Aviation Orange (#F97316):** Reserved for critical alerts and immediate attention.
    - **Emerald (#10B981):** Signifies successful completion or "safe" status.
    - **Amber (#F59E0B):** Used for warnings, delays, or impending deadlines.
- **Neutral Accents:** Borders should use `#334155` to maintain structure without creating visual noise.

## Typography

This design system uses **Inter** exclusively to leverage its exceptional legibility and robust OpenType features. 

**Tabular Figures:** For all flight numbers, timestamps, coordinates, and countdowns, the `tnum` (tabular figures) setting must be enabled to ensure vertical alignment in data tables. 

**Hierarchy:**
- **Labels:** Use uppercase for metadata categories (e.g., GATE, ETA) at 11px to differentiate from dynamic data.
- **Data:** Primary body text is set at 14px for optimal density. 12px is used for secondary support text.
- **Contrast:** Always use pure white (#FFFFFF) for primary data and Slate-400 (#94A3B8) for labels and disabled states.

## Layout & Spacing

A **fixed-fluid hybrid grid** is employed. The side navigation remains at a fixed width of 64px (collapsed) or 240px (expanded), while the main dashboard area scales to fill the screen.

- **Rhythm:** A strict 4px baseline grid ensures vertical consistency.
- **Density:** Use "Compact" spacing as the default. Component margins are minimized to maximize information per square inch.
- **Data Tables:** Columns use a 12px gutter. Row height is strictly capped at 32px or 40px depending on the data type (Single vs. Multi-line).
- **Breakpoints:** Mobile is treated as a secondary "Read-Only" view. Tablet (768px) and Desktop (1280px+) are the primary operational environments.

## Elevation & Depth

This design system avoids traditional shadows in favor of **Tonal Layering** and **Low-Contrast Outlines**.

- **Surfaces:** Use `#0F172A` for the "Ground" layer. Secondary containers or cards use `#1E293B`.
- **Borders:** Depth is defined by 1px solid borders in `#334155`. 
- **Active States:** Active cards or focused inputs use a 1px border of the primary color (#0EA5E9) rather than a shadow.
- **Status Glows:** High-priority alerts may use a subtle, 4px blur outer glow of the status color (e.g., Aviation Orange) to draw the eye without obscuring text.

## Shapes

The shape language is **Soft (0.25rem)**. This provides a subtle modern feel while maintaining the structural rigidity required for a professional tool.

- **Buttons & Inputs:** 4px (0.25rem) corner radius.
- **Cards & Modals:** 8px (0.5rem) corner radius for larger structural elements.
- **Badges:** Fully pill-shaped (999px) for status indicators to distinguish them from interactive buttons.

## Components

- **Data Tables:** The core of the system. Use zebra-striping with `#1E293B` and `#0F172A`. On hover, rows should highlight in `#334155`. Headers are sticky and use `label-caps` typography.
- **Buttons:** 
    - **Primary:** Solid `#0EA5E9` with White text.
    - **Secondary:** Ghost style with `#334155` border.
    - **Alert:** Solid `#F97316` for "Cancel" or "Stop" operations.
- **Status Badges:** Subtle background tints (15% opacity of the status color) with high-chroma solid text.
- **Input Fields:** Dark fill (`#0F172A`) with a `#334155` border. Focus state changes border to `#0EA5E9`.
- **Side Navigation:** High-contrast rail. Icons should be 20px, stroke-based (2px weight), and use #94A3B8 in inactive states.
- **Gantt/Timeline:** Use narrow bars with sharp edges. Progress is indicated by a saturated fill against a muted background version of the same hue.