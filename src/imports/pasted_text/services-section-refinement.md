The Services section has already been implemented.

Do NOT redesign this section.

Instead, refine the existing implementation so that it matches the original Figma design as closely as possible.

The original Figma design is the only source of truth.

Whenever there is a conflict between the current implementation and the Figma design, always prefer the Figma design.

Your priority is visual fidelity, not creativity.

────────────────────────────────────

## Overall Goal

The section should feel like one single composition instead of separate components.

The photograph is the foundation of the entire section.

The service cards float on top of the photograph.

The image should dominate the layout while the cards remain the focal point.

Avoid creating a split-column layout.

────────────────────────────────────

## Layout

Recreate the exact proportions from the Figma design.

The background image must span the entire width of the section.

It must begin at the left edge of the viewport and continue underneath the service cards.

The image is NOT a left column.

The image is NOT contained inside a separate container.

Instead, the image should behave as a full-width background layer for the section.

The white service cards should be positioned above the image.

The image and the cards should feel like one unified composition.

────────────────────────────────────

## Background Image

The background image is the primary visual element.

Requirements:

• Occupy 100% of the section width.

• Fill the entire section height.

• Cover the available space without distortion.

• Preserve the current crop as much as possible.

• Remove unnecessary empty margins around the image.

• Keep the warm and premium visual tone.

Do not reduce the image width.

Do not place the image inside a narrow container.

The image should visually anchor the entire section.

────────────────────────────────────

## Active Service Card

The active card should overlap the background image.

It should not appear detached from the image.

Increase the card size slightly so it matches the proportions of the Figma design.

Increase internal spacing.

Maintain:

• white background

• rounded corners

• soft shadow

• generous padding

The typography hierarchy should remain exactly as designed.

Do not modify colors or fonts.

────────────────────────────────────

## Next Card Preview

Display only a small preview of the following card.

Approximately 25–30% of the next card should remain visible.

The next card should:

• remain behind the active card

• appear blurred

• have reduced opacity

• never compete visually with the active card

Its purpose is only to communicate that more services are available.

────────────────────────────────────

## Floating Label

The "Como ajudamos você" badge should overlap the upper-left area of the image.

It should not be centered.

It should not float independently.

Its placement should exactly match the original Figma layout.

────────────────────────────────────

## Pagination

Place the numbered pagination beneath the active card.

Center it horizontally relative to the active card.

Maintain equal spacing between every number.

The active page should use the burgundy background.

Inactive pages should remain light.

Keep the pagination compact.

────────────────────────────────────

## Spacing

Reduce unnecessary whitespace.

The image, active card, preview card and pagination should feel visually connected.

Do not create large empty areas.

Maintain generous spacing only inside the service card.

────────────────────────────────────

## Layer Structure

The hierarchy should be:

Background Image

↓

Dark gradient overlay

↓

Floating label

↓

Active service card

↓

Preview card

↓

Pagination

All these elements belong to the same composition.

────────────────────────────────────

## Interactions

Keep interactions subtle.

The carousel should support:

• drag

• swipe

• pagination click

• keyboard navigation

The transition between cards should be smooth.

Only one card should be active at a time.

Do not autoplay.

Hover on the active card:

• small elevation

• slightly stronger shadow

• tiny scale increase (approximately 1.01)

The "Conhecer mais" button should include smooth hover, pressed and focus states.

────────────────────────────────────

## Motion

Animations should be almost invisible.

Duration:

200–300ms

Use only:

• fade

• soft translate

• subtle scale

Avoid:

• bounce

• rotation

• exaggerated motion

The experience should feel calm and premium.

────────────────────────────────────

## Responsiveness

Desktop:

Maintain exactly the same composition as the Figma design.

Tablet:

Keep the image full width.

Reduce spacing proportionally.

Mobile:

The image remains full width.

Place the active service card below the image.

Center the pagination beneath the card.

Maintain swipe navigation.

────────────────────────────────────

## Final Objective

The generated result should look visually identical to the original Figma mockup.

Do not reinterpret the layout.

Do not invent new spacing.

Do not reorganize the composition.

Do not transform the layout into two columns.

Faithfully reproduce the original proportions, positioning, layering and visual hierarchy before improving interactions.

Visual fidelity to the Figma design is the highest priority.