Implement the Contact section as the final conversion section of the RGI landing page.

Do NOT modify, recreate, or redesign the sections that have already been implemented.

Do NOT generate any images.

Use the existing image asset from the project for the left side of this section.

The Figma design is the source of truth.

The goal is to reproduce the exact visual composition while adding realistic form interactions and validation.

────────────────────────────────────

## 1. SECTION CONCEPT

This section should feel like a final invitation to contact RGI.

The composition consists of:

LEFT:
A large professional photograph of a woman in a business environment.

RIGHT:
A cream contact form panel positioned over the right side of the photograph/background.

The photograph and form should feel like one unified composition.

Do NOT create a conventional form below the image.

Do NOT place the image and form in completely separate sections.

────────────────────────────────────

## 2. SECTION BACKGROUND

The photograph should act as the visual foundation of the section.

It should occupy the entire section.

The image should:

• Fill the available section area.
• Cover the section without distortion.
• Maintain the crop shown in the Figma design.
• Extend to the edges of the section.
• Never be constrained by the normal page content container.

Do not add unnecessary margins around the image.

────────────────────────────────────

## 3. IMAGE

Use the existing project image.

Do not generate a new image.

Do not replace the image with another photograph.

Preserve the existing crop and visual composition as much as possible.

The image should remain visible behind and around the contact form.

Maintain the professional, welcoming atmosphere shown in the design.

────────────────────────────────────

## 4. CONTACT FORM PANEL

Position the cream form panel on the right side of the section.

The panel should have:

• Warm off-white / cream background
• Clean rectangular shape
• Slightly rounded corners if present in the design
• Generous internal padding
• Clear typography hierarchy

The panel should visually float over the background image.

Do not make it full width on desktop.

Do not add a heavy shadow unless it already exists in the design.

────────────────────────────────────

## 5. FORM HEADER

At the top of the panel, display:

"Envio de Mensagem"

Use the existing RGI burgundy typography.

Below the heading, include the supporting text shown in the design:

"Envie sua mensagem diretamente para o nosso e-mail. Estamos prontos para ouvir você."

Keep this text smaller and lighter than the heading.

The text should remain concise.

────────────────────────────────────

## 6. FORM FIELDS

Create the following fields in the same order shown in the Figma design:

1. E-mail

2. Nome

3. Número de telefone

4. Mensagem

Each field should have:

• Label
• Input or textarea
• Placeholder
• Clear spacing between fields

Use the existing minimalist field styling from the design.

Avoid heavy borders.

The fields should feel lightweight and elegant.

────────────────────────────────────

## 7. E-MAIL FIELD

Label:

"E-mail"

Placeholder:

"digite o seu e-mail"

Validation:

• Required
• Must contain a valid email format

Display a subtle validation message if the user enters an invalid email.

Do not validate aggressively while the user is typing.

Prefer validation on blur or submit.

────────────────────────────────────

## 8. NAME FIELD

Label:

"Nome"

Placeholder:

"digite o seu nome"

Validation:

• Required
• Should contain a reasonable name value

Do not impose unnecessary restrictions on names.

────────────────────────────────────

## 9. PHONE FIELD

Label:

"Número de telefone"

Placeholder:

"digite o seu número de telefone"

Allow Brazilian phone numbers.

Format the number naturally as the user types if possible.

Do not prevent users from entering numbers manually.

The field should remain accessible on mobile.

────────────────────────────────────

## 10. MESSAGE FIELD

Label:

"Mensagem"

Create a multiline textarea.

Placeholder:

"digite a sua mensagem"

The textarea should have enough vertical space for a short message.

Do not make it excessively large.

Maintain the proportions shown in the Figma design.

────────────────────────────────────

## 11. SUBMIT BUTTON

At the bottom of the form, create the button:

"enviar e-mail"

Use the existing RGI burgundy button style.

The button should be centered horizontally within the form panel.

It should have:

• Hover state
• Pressed state
• Focus state
• Disabled state when submitting

Use subtle transitions.

Do not make the button excessively large.

────────────────────────────────────

## 12. FORM VALIDATION

The form should behave like a realistic prototype.

When the user submits the form:

If required fields are empty:

• Prevent submission.
• Highlight the relevant fields subtly.
• Display a short validation message.
• Keep the user's existing input.

If the fields are valid:

• Show a loading state on the button.
• Simulate submission.
• Then display a success state.

Do not actually send an email unless a backend/email service is already connected.

This is a frontend prototype.

────────────────────────────────────

## 13. SUCCESS STATE

After a successful simulated submission:

Replace or update the form feedback area with a clear success message.

Example:

"Mensagem enviada com sucesso!"

Supporting text:

"Obrigado pelo contato. Nossa equipe entrará em contato em breve."

Keep the success state visually consistent with the RGI design.

Provide an option to return to the form if appropriate.

Do not create a large modal.

────────────────────────────────────

## 14. ERROR STATE

If submission fails:

Display a subtle error message near the form.

Example:

"Não foi possível enviar sua mensagem. Tente novamente."

Do not clear the user's information.

Allow the user to submit again.

────────────────────────────────────

## 15. FORM INTERACTIONS

Inputs should have subtle focus states.

On focus:

• Slightly stronger border or underline
• Smooth transition
• Clear visual indication

On hover:

Use only a subtle visual change.

Do not introduce large animations.

The form should feel calm and professional.

────────────────────────────────────

## 16. SECTION ENTRANCE ANIMATION

When the section enters the viewport:

The photograph should remain mostly static.

The form panel should:

• Fade in
• Move upward very slightly

The animation should be subtle.

Recommended duration:

250–400ms

Do not animate each input independently.

Do not use:

• Bounce
• Rotation
• Large movement
• Dramatic scaling

────────────────────────────────────

## 17. DESKTOP LAYOUT

On desktop:

• The image occupies the full section.
• The contact panel sits on the right side.
• The panel should have a fixed/max width similar to the Figma design.
• The panel should remain vertically balanced within the section.
• The image should remain clearly visible on the left.
• The form should not cover the entire image.

Preserve the approximate proportions of the Figma design.

────────────────────────────────────

## 18. TABLET LAYOUT

On tablet:

Maintain the split composition if enough space is available.

Reduce:

• Form width
• Internal spacing
• Image crop

If the split layout becomes too constrained, transition gracefully into a stacked layout.

Do not allow the form to become cramped.

────────────────────────────────────

## 19. MOBILE LAYOUT

On mobile, do not simply shrink the desktop composition.

Stack the elements vertically:

1. Image
2. Contact form

The image should remain visually strong.

The form should become nearly full width with appropriate horizontal padding.

All fields must remain easy to interact with using touch.

The button should remain easily accessible.

Avoid horizontal overflow.

────────────────────────────────────

## 20. ACCESSIBILITY

The form must be accessible.

Requirements:

• Every input has an associated label.
• Inputs are keyboard accessible.
• Visible focus states.
• Appropriate input types.
• Proper autocomplete attributes where applicable.
• Accessible validation messages.
• Submit button has a clear accessible name.
• Error and success messages should be announced appropriately.

Respect prefers-reduced-motion.

────────────────────────────────────

## 21. DESIGN SYSTEM

Reuse the existing RGI design system.

Preserve:

• Burgundy color
• Cream background
• Typography
• Button style
• Border radius
• Spacing
• Shadows
• Input styling

Do not introduce a new visual language for the contact section.

────────────────────────────────────

## 22. IMPORTANT CONTENT RULE

Do not invent:

• Phone numbers
• Email addresses
• Office information
• Social media links
• Claims
• Response times
• Guarantees

Use only information already provided by the project.

The form should remain a frontend prototype unless an existing email/backend integration is available.

────────────────────────────────────

## FINAL OBJECTIVE

Reproduce the Figma contact section as faithfully as possible.

The final composition should communicate:

"RGI is approachable, professional, and ready to help."

The visual hierarchy should be:

Large welcoming photograph
        ↓
Contact form
        ↓
Clear action: "enviar e-mail"

The section should feel:

• Professional
• Human
• Welcoming
• Premium
• Simple
• Trustworthy

Prioritize visual fidelity and usability over unnecessary animation.

Do not redesign the composition.