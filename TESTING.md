# Prototype verification

## Feedback revision, 8 October 2026

Verified in Chrome at 1920x1080 and 390x844:

- Clicking the listing image or price opens details; Enter on the listing title opens the same view.
- Save and Compare work independently without opening the listing.
- Study and visa dates start blank and can both remain blank when saving preferences.
- The date filter asks for an optional date when none is set. Adding 30 June 2027 returns two matching listings; clearing it resets the filter.
- My inspections and Other students’ inspections show separate records. Reading a fictional shared report leaves all personal checks untouched.
- A personal checked item and notes survive a reload.
- Bond help expands on demand and receipt status can be recorded.
- Import still accepts manually entered listings, escapes markup in titles and retains unknown totals.
- No page errors or horizontal page overflow were observed in these flows.
- JavaScript syntax checks pass for the app, server and capture scene helper.

Figma structural verification: 64 main screens at 1920x1080, 55 visible listing cards connected to details, 26 reusable components and no missing destinations. Checklist dropdowns have independent variables and counter expressions. This verifies the saved prototype structure; the Figma player was not exercised in a signed-in browser.

The checks below describe the earlier version and remain as historical results.

Tested on 24 September 2026 using Chrome at `http://localhost:5173`.

## Functional checks

| Check | Result |
| --- | --- |
| Three initial listings and local images load | Pass |
| Weekly budget filter excludes the $425 option at a $400 budget | Pass |
| Comparison shows $2,120 and $2,490 upfront totals and the late-lease warning | Pass |
| Updated study end date excludes late and unknown lease ends | Pass |
| Import requires a link or screenshot | Pass |
| Imported title containing markup is rendered as text | Pass |
| Missing bills/transport retain an unknown total and a rent-only label | Pass |
| Screenshot import is stored and displayed | Pass |
| Imported costs of $1,400 bond + $700 advance + $50 setup total $2,150 | Pass |
| Cancelling a filled preferences form does not save changes | Pass |
| Inspection checked count updates immediately | Pass |
| Evidence notes and concern status persist locally | Pass |
| Screenshot and inspection state survive a browser reload | Pass |
| 14:00 Sydney converts to 11:00 Shanghai in January and 12:00 in July | Pass |
| Inspection request is saved as a draft with no send claim | Pass |

## Layout and browser checks

- Desktop layout visually reviewed at 1440 px.
- Mobile layout and inspection dialog visually reviewed at 390 px.
- No page-level horizontal overflow at 390 px or 768 px.
- Initial-page buttons have accessible names and images have alt attributes.
- No console errors or warnings observed during the tested flows.
- `npm run check` passes for both JavaScript files.

## Boundaries

This was an interaction and layout check, not a full accessibility audit or participant usability study. Safari and Firefox were not tested. Real listing retrieval, advertiser identity checks, external messaging and payments are outside this prototype. Browser storage can be unavailable or reach its quota; changes then remain in the current session only.

## Suggested participant tasks

1. Find an option under $400 all-in per week and $2,600 upfront, ending by 30 June 2027.
2. Compare Glebe and Newtown. Explain their cost and lease trade-offs.
3. Find the outstanding warning signs for Newtown and decide what you would ask next.
4. Import a listing from a private group with some costs missing. Identify what you still need to know.
5. Prepare a remote inspection, record a concern and save a request in your time zone.

Observe completion, hesitation and interpretation of unknown or illustrative information. Do not treat prototype task completion as proof of listing safety.
