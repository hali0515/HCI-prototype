# Harbour

A mobile-responsive, interactive housing prototype for international students in Sydney, based on the F1-F4 requirements in the INFO3315 Part 1 Requirements Report. The interface is entirely in English.

## Run

Requires Node.js 18 or later. No dependency installation is needed.

```sh
npm run dev
```

Open http://localhost:5173. You can also open `index.html` directly for a quick preview; serving it is recommended for consistent browser storage behavior.

## Walkthrough

1. Edit your weekly budget, upfront budget, study end date, visa end date and time zone.
2. Filter listings by suburb, accommodation type, budget or lease compatibility.
3. Save places and select two or three for comparison.
4. Open a listing to examine rent, estimated bills, transport, bond, advance rent and setup costs.
5. Review illustrative cross-check evidence and unresolved warning signs.
6. Complete a remote inspection checklist, record notes and save a live-video request draft with a time-zone conversion.
7. Import a listing from any source using a link or screenshot and manually entered details. Unknown costs remain unknown.
8. Refresh the page to revisit locally saved listings, preferences, bond records and inspection progress.

## Requirements coverage

| Report requirement | Prototype interaction |
| --- | --- |
| R1-R2, F1 | Address/photo cross-check presentation and warning-sign records, using explicitly fictional examples |
| R3, F1 | Manual import with a link or screenshot |
| R4, F1 | Fictional lived-there review examples, clearly labelled |
| R5-R6, F2 | Comparable weekly/upfront cost categories and a personal bond status record |
| R7-R8, F3 | Filters and warnings against study/visa end dates, plus early-exit questions |
| R9, F4 | Eight-item remote inspection checklist, evidence notes and self-recorded statuses |
| R11, F1/F2 | Local shortlist and comparison of up to three listings |
| R12-R13 | Responsive layout, no account/phone requirement, time-zone-aware inspection request drafts |

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
