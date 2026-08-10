Refactor the existing RGI Contabilidade website code architecture.

IMPORTANT:
This is a CODE ARCHITECTURE refactoring task.

Do NOT redesign the website.

Do NOT change the visual appearance.

Do NOT change layouts, spacing, typography, colors, animations, images, content, interactions, or responsive behavior.

The current implementation is visually approved.

The only objective is to remove inline CSS/styles and organize the styles into maintainable component-specific CSS files.

────────────────────────────────────

## 1. REMOVE INLINE STYLES

Remove inline styling from React components.

Do not use patterns such as:

style={{ ... }}

for visual styling.

Move those declarations into the appropriate CSS file.

Do not replace inline styles with large blocks of duplicated CSS.

────────────────────────────────────

## 2. ONE CSS FILE PER COMPONENT

Each major component/section should have its own CSS file.

Use this structure:

components/
├── Header/
│   ├── Header.tsx
│   └── Header.css
├── Hero/
│   ├── Hero.tsx
│   └── Hero.css
├── Metrics/
│   ├── Metrics.tsx
│   └── Metrics.css
├── Services/
│   ├── Services.tsx
│   └── Services.css
├── ConstructionSpecialty/
│   ├── ConstructionSpecialty.tsx
│   └── ConstructionSpecialty.css
├── About/
│   ├── About.tsx
│   └── About.css
├── Reviews/
│   ├── Reviews.tsx
│   └── Reviews.css
├── FAQ/
│   ├── FAQ.tsx
│   └── FAQ.css
├── Location/
│   ├── Location.tsx
│   └── Location.css
├── Contact/
│   ├── Contact.tsx
│   └── Contact.css
└── Footer/
    ├── Footer.tsx
    └── Footer.css

Adapt the exact names to the existing project structure if equivalent components already exist.

Do NOT unnecessarily rename existing components.

────────────────────────────────────

## 3. COMPONENT CSS OWNERSHIP

Each component's CSS file should contain the styles belonging specifically to that component.

For example:

Hero.tsx
→ Hero.css

Services.tsx
→ Services.css

FAQ.tsx
→ FAQ.css

Footer.tsx
→ Footer.css

Do not place Services styles inside Hero.css.

Do not place FAQ styles inside a global stylesheet.

Keep styles close to the component they belong to.

────────────────────────────────────

## 4. GLOBAL CSS

Create or preserve a global stylesheet only for truly global concerns.

Examples:

• CSS reset
• box-sizing
• body
• html
• root
• global typography defaults
• global font-face declarations
• reusable CSS variables
• accessibility-related global styles

Do NOT move component-specific styles into globals.css.

────────────────────────────────────

## 5. CSS VARIABLES

Create a variables.css file for the project's shared design tokens.

For example:

:root {
  --color-primary: ...;
  --color-secondary: ...;
  --color-background: ...;
  --color-surface: ...;
  --color-text: ...;
  --color-muted: ...;

  --radius-sm: ...;
  --radius-md: ...;
  --radius-lg: ...;

  --spacing-xs: ...;
  --spacing-sm: ...;
  --spacing-md: ...;
  --spacing-lg: ...;

  --transition-fast: ...;
  --transition-normal: ...;
}

IMPORTANT:

Extract the values from the existing implementation.

Do NOT invent a new design system.

Do NOT change existing colors or spacing simply to create variables.

The purpose is to centralize repeated values without changing the visual result.

────────────────────────────────────

## 6. PRESERVE VISUAL FIDELITY

After refactoring, the website must look exactly the same as before.

Pay special attention to the areas that were previously adjusted:

• Hero + Header
• Metrics
• Services carousel
• Full-width Services image
• Construction specialty SVG
• Construction CTA flex/wrap behavior
• About section
• Reviews carousel
• FAQ accordion
• Location/map
• Contact form
• Footer

Do not accidentally change their dimensions or positioning.

────────────────────────────────────

## 7. PRESERVE RESPONSIVENESS

Do not remove or simplify existing responsive behavior.

Keep all existing breakpoints.

Keep:

• Desktop behavior
• Tablet behavior
• Mobile behavior
• Flex wrapping
• Full-width SVG behavior
• Carousel behavior
• Mobile stacking
• Responsive typography

If responsive rules currently exist inline or inside component code, move them into the appropriate component CSS file.

────────────────────────────────────

## 8. PRESERVE ANIMATIONS

Move animation-related CSS into the corresponding component stylesheet.

For example:

Services.css
→ Services carousel transitions

Reviews.css
→ Reviews carousel animation

FAQ.css
→ FAQ accordion transitions

Do not remove animations.

Do not redesign animations.

Do not change animation timing unless necessary to preserve the existing behavior after refactoring.

────────────────────────────────────

## 9. CLASS NAMING

Use clear, semantic class names.

Prefer:

.services
.services__card
.services__content
.services__pagination
.services__button

Instead of generic names such as:

.box
.container2
.card3
.item
.wrapper

Avoid excessive nesting.

Use a consistent naming convention throughout the project.

BEM-style naming is preferred when appropriate.

────────────────────────────────────

## 10. AVOID DUPLICATION

If the same style is repeated across multiple components, determine whether it is truly a shared pattern.

For genuinely global/reusable patterns, create a reusable class or CSS variable.

However, do NOT over-abstract component-specific styling.

Prioritize maintainability and clarity.

────────────────────────────────────

## 11. DO NOT USE CSS-IN-JS

Do not introduce:

• styled-components
• Emotion
• CSS-in-JS
• JavaScript-generated style objects

Use regular CSS files.

The desired architecture is:

React component
+
CSS stylesheet

────────────────────────────────────

## 12. COMPONENT IMPORTS

Each component should import its own stylesheet.

Example:

import "./Hero.css";

The component should not depend on another component's stylesheet for its own layout.

────────────────────────────────────

## 13. INLINE DYNAMIC STYLES

If a style is genuinely dynamic and depends on runtime state, do not blindly convert it into static CSS.

Instead, use CSS custom properties when appropriate.

For example:

style={{ "--progress": `${progress}%` }}

may be acceptable when the value is genuinely dynamic.

However, ordinary static visual properties must be moved to CSS.

The goal is to eliminate unnecessary inline styling, not to break dynamic functionality.

────────────────────────────────────

## 14. DO NOT CHANGE FUNCTIONALITY

Preserve all existing functionality.

Do not modify:

• Carousel logic
• FAQ behavior
• Navigation
• Buttons
• Forms
• Map behavior
• Scroll behavior
• Animations
• Responsive behavior

This is strictly a styling architecture refactor.

────────────────────────────────────

## 15. VERIFY AFTER REFACTORING

After moving the styles:

1. Verify that every component still renders.
2. Verify desktop layout.
3. Verify tablet layout.
4. Verify mobile layout.
5. Verify all interactions.
6. Verify animations.
7. Verify carousel behavior.
8. Verify FAQ accordion.
9. Verify contact form.
10. Verify there is no horizontal overflow.

Compare the result against the current implementation.

The visual result must remain unchanged.

────────────────────────────────────

## FINAL REQUIREMENT

The final project should have:

• No unnecessary inline CSS.
• One CSS file per major component.
• A small global stylesheet.
• A variables/design-token stylesheet.
• Clear component-specific class names.
• No duplicated styling where avoidable.
• No changes to the approved visual design.
• No changes to functionality.

This is a refactoring task, NOT a redesign task.

Preserve the current website exactly as it looks and behaves.