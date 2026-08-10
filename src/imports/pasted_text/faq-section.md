Implement the FAQ section immediately after the Reviews section.

Do NOT modify, recreate, or redesign the existing Reviews section.

Do NOT generate any images.

Use the existing assets and design system from the project.

The Figma design is the source of truth. Reproduce the visual hierarchy, proportions, spacing, typography, colors, and positioning shown in the design.

The FAQ section should feel clean, elegant, informative, and easy to scan.

────────────────────────────────────

## 1. SECTION PURPOSE

The purpose of this section is to help visitors quickly find answers to common questions about RGI's accounting services.

The section should feel useful rather than visually heavy.

The main interaction is the category filter and accordion questions.

Do not add unnecessary cards, illustrations, statistics, or decorative components.

────────────────────────────────────

## 2. SECTION BACKGROUND

Use the same warm off-white / cream background shown in the Figma design.

Maintain the existing RGI color palette.

The section should have generous whitespace.

Do not introduce a strong background color or gradient.

────────────────────────────────────

## 3. HEADING

At the top center, reproduce the heading:

"Ficou com alguma dúvida?"

Use the existing burgundy typography.

The heading should be visually prominent but elegant.

Place it near the top of the section with the same spacing shown in the design.

────────────────────────────────────

## 4. SUPPORTING TEXT

Directly below the heading, include:

"separamos algumas das principais perguntas para te ajudar"

Keep the text smaller and lighter than the heading.

Center-align it.

Do not make the paragraph too wide.

────────────────────────────────────

## 5. FAQ CATEGORY FILTER

Below the supporting text, create the category filter shown in the design.

The categories are:

• perguntas gerais
• construção civil
• abertura de empresa
• serviço de imposto
• folha de pagamento
• Business Compliance & Legalization

Display the categories as compact pill-shaped buttons.

Use the existing cream/beige styling for inactive categories.

The active category should use the RGI burgundy color with light text.

Initially select:

"abertura de empresa"

The active category must be visually obvious.

Maintain the compact spacing between category buttons.

Do not make the category buttons excessively large.

────────────────────────────────────

## 6. CATEGORY INTERACTION

The category buttons must be interactive.

When the user selects a category:

• Update the active category.
• Change the active button to burgundy.
• Return the inactive buttons to the light cream style.
• Update the FAQ questions displayed below.

Use a smooth transition.

Do not reload the page.

Do not create a new section for each category.

The FAQ list should update dynamically within the same section.

────────────────────────────────────

## 7. FAQ QUESTIONS

Below the category filters, create a centered FAQ accordion.

The active category shown initially is "abertura de empresa".

Display these questions:

1. "Como eu faço para abrir uma empresa?"

2. "Quais documentos são necessários para registro?"

3. "Qual é o custo para abrir uma empresa?"

4. "Como posso escolher o tipo de empresa ideal?"

5. "Quais são as obrigações fiscais de uma nova empresa?"

Preserve the exact wording.

Do not invent additional questions.

────────────────────────────────────

## 8. FAQ CONTAINER

The FAQ list should have a constrained width, similar to the Figma design.

Do NOT make the questions span the entire viewport.

Keep the list centered.

Each question should occupy the full width of the FAQ container.

The spacing between questions should be clearly visible.

Avoid excessive vertical gaps.

────────────────────────────────────

## 9. FAQ ITEM DESIGN

Each FAQ item should look like the design:

• Very light cream background
• Minimal or no visible border
• Slightly rounded corners
• Comfortable vertical padding
• Number on the left
• Question text next to the number
• Chevron on the right

Do not turn the FAQ items into heavy cards.

Avoid strong shadows.

The design should remain flat and editorial.

────────────────────────────────────

## 10. QUESTION NUMBER

Each question should have a small numbered box.

Use:

1
2
3
4
5

The number box should have:

• Small dimensions
• Light cream background
• Subtle border
• Slightly rounded corners
• Burgundy/dark text

The number should remain visually secondary to the question.

────────────────────────────────────

## 11. CHEVRON

Place a small downward chevron on the far right of every FAQ item.

The chevron should indicate that the question can be expanded.

When the question is open:

• Rotate the chevron smoothly.
• Change its direction to indicate the expanded state.

Do not use large icons.

────────────────────────────────────

## 12. ACCORDION BEHAVIOR

Each question should be clickable.

When opened:

• Reveal the answer below the question.
• Expand the item smoothly.
• Rotate the chevron.
• Maintain the existing visual style.

When closed:

• Hide the answer.
• Return the chevron to its original position.

Only one FAQ item should be open at a time.

Opening another question should automatically close the previously opened question.

Do not use abrupt height changes.

Use a smooth 200–300ms transition.

────────────────────────────────────

## 13. FAQ ANSWERS

Use the existing project content if answers have already been defined.

Do not invent claims, prices, deadlines, legal requirements, tax information, or other business information.

If an answer is not available in the existing project content, use a clearly structured placeholder that can easily be replaced later.

Do not fabricate accounting information.

────────────────────────────────────

## 14. DECORATIVE RGI ELEMENT

Preserve the large, extremely subtle RGI decorative graphic in the lower-left portion of the section.

It should remain behind the FAQ content.

The decorative element must:

• Have very low visual contrast.
• Remain partially cropped by the viewport.
• Sit behind the FAQ list.
• Never interfere with text readability.
• Never become the primary focus.

Do not add additional decorative graphics.

If the existing RGI decorative asset is available, reuse it.

Do not generate a new image.

────────────────────────────────────

## 15. SCROLL ANIMATION

When the FAQ section enters the viewport:

1. Heading fades in.
2. Supporting text appears.
3. Category filters appear.
4. FAQ items appear with a subtle stagger.
5. Decorative RGI element remains mostly static.

Use subtle movement only.

Recommended:

• opacity
• small upward translation
• soft fade

Avoid:

• bounce
• rotation
• large movement
• excessive stagger
• dramatic scaling

The animation should feel premium and calm.

────────────────────────────────────

## 16. CATEGORY TRANSITION

When switching categories, animate the FAQ list smoothly.

Do not make the entire section jump.

Use a subtle:

• fade
• vertical transition

The category buttons should also transition smoothly between active and inactive states.

────────────────────────────────────

## 17. RESPONSIVE DESIGN

Desktop:

• Center the heading.
• Keep the category filters compact and centered.
• Maintain the FAQ container width shown in the design.
• Keep the decorative RGI element partially visible.

Tablet:

• Allow category buttons to wrap naturally if necessary.
• Keep the FAQ container centered.
• Preserve readable spacing.

Mobile:

• The category buttons should wrap into multiple rows.
• The active category must remain clearly visible.
• FAQ items should use the full available width with appropriate horizontal padding.
• Keep the question number and chevron aligned.
• Allow long questions to wrap naturally.
• Prevent horizontal overflow.

Do not simply shrink the desktop layout.

Maintain the visual hierarchy on smaller screens.

────────────────────────────────────

## 18. ACCESSIBILITY

The FAQ must be fully keyboard accessible.

Requirements:

• Category filters must be keyboard accessible.
• FAQ questions must be keyboard accessible.
• Visible focus states.
• Use semantic buttons for interactive elements.
• Use appropriate ARIA attributes for accordion state.
• Screen readers should understand whether an FAQ item is expanded or collapsed.

Respect prefers-reduced-motion.

When reduced motion is enabled, minimize or disable animations.

────────────────────────────────────

## 19. DESIGN FIDELITY

Do not reinterpret the design.

Do not add:

• Search bars
• Large illustrations
• Additional cards
• Statistics
• Testimonials
• New categories
• Extra buttons
• Unnecessary animations

Preserve:

• Cream background
• Burgundy heading
• Compact category pills
• Centered FAQ container
• Numbered questions
• Chevron icons
• Subtle RGI decorative element
• Generous whitespace

The design should remain minimal.

────────────────────────────────────

## FINAL OBJECTIVE

Create a FAQ section that feels like a natural continuation of the RGI landing page.

The visitor should be able to:

1. Understand that the section contains answers to common questions.
2. Filter questions by topic.
3. Quickly scan the available questions.
4. Open an answer without leaving the page.
5. Navigate the entire section comfortably on desktop and mobile.

The final result should feel:

• Clean
• Professional
• Trustworthy
• Elegant
• Easy to scan
• Interactive without being distracting

Prioritize visual fidelity, usability, and accessibility over unnecessary visual effects.