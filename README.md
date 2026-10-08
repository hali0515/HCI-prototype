# Harbour

A mobile-responsive, interactive housing prototype for international students in Sydney, based on the F1-F4 requirements in the INFO3315 Part 1 Requirements Report. The interface is entirely in English.

## Run

Requires Node.js 18 or later. No dependency installation is needed.

```sh
npm run dev
```

Open <http://localhost:5173>. You can also open `index.html` directly for a quick preview; serving it is recommended for consistent browser storage behavior.

## Figma prototype

[Open the interactive prototype](https://www.figma.com/proto/5iONREmlx4oD7HM4Jsl3m6?node-id=50-1117&starting-point-node-id=50%3A1117&scaling=contain&content-scaling=fixed) · [Edit the design](https://www.figma.com/design/5iONREmlx4oD7HM4Jsl3m6)

Desktop screens are 1920x1080. Listing cards, comparison, filters, detail tabs, personal/shared inspection tabs and expandable explanations are connected. Inspection items use separate status variables and update the checked count. Figma form fields use predefined examples; use the web prototype for arbitrary text entry, uploads and browser persistence. Screen IDs are recorded in `figma-prototype.json`.

## Walkthrough

1. Edit your weekly budget, upfront budget and time zone. Study and visa dates are optional and blank on first use.
2. Filter listings by suburb, accommodation type, budget or lease compatibility.
3. Save places and select two or three for comparison.
4. Click anywhere on a listing card to open it. Save and Compare remain independent controls, and the listing title supports keyboard navigation.
5. Examine rent, estimated bills, transport, security deposit (bond), rent paid ahead and setup costs. Expand the explanations when you need them.
6. Review illustrative cross-check evidence and unresolved warning signs.
7. Use My inspections for your private checklist, notes and request drafts. Other students’ inspections contains attributed fictional examples; reading one never marks your own checks as complete.
8. Import a listing from any source using a link or screenshot and manually entered details. Unknown costs remain unknown.
9. Refresh the page to revisit locally saved listings, preferences, bond records and inspection progress.

## Requirements coverage

| Report requirement | Prototype interaction                                                                                           |
| ------------------ | --------------------------------------------------------------------------------------------------------------- |
| R1-R2, F1          | Address/photo cross-check presentation and warning-sign records, using explicitly fictional examples            |
| R3, F1             | Manual import with a link or screenshot                                                                         |
| R4, F1             | Fictional lived-there review examples, clearly labelled                                                         |
| R5-R6, F2          | Comparable weekly/upfront cost categories and a personal bond status record                                     |
| R7-R8, F3          | Optional date comparisons and early-exit questions; dates are reference points, not mandatory tenancy end dates |
| R9, F4             | Eight-item remote inspection checklist, evidence notes and self-recorded statuses                               |
| R11, F1/F2         | Local shortlist and comparison of up to three listings                                                          |
| R12-R13            | Responsive layout, no account/phone requirement, time-zone-aware inspection request drafts                      |

R10 (held payments) remains future work. R14 (bilingual interface) is excluded in favor of the requested English-only interface.

## Scope

This is a front-end demonstration, not a live accommodation service. Listings, cross-check results and reviews are fictional. Interior photographs are illustrative Unsplash images stored locally. Imported links are not fetched or analyzed. No provider is contacted, no verification is performed, and no payment is collected. Inspection requests are local drafts only. Costs are sample estimates, not current market quotations or legal guidance.

State is stored under `harbour-v1` in browser localStorage. Screenshots are limited to 2 MB each. Clearing site data resets the demo. Google Fonts is optional; the interface falls back to system fonts if unavailable.

## Files

- `index.html`: application entry point.
- `app.js`: sample data, rendering and interactive behavior.
- `style.css`: responsive visual design.
- `server.mjs`: local static server.
- `assets/`: local photographs and brand mark.

Run `npm run check` for JavaScript syntax validation.
