const icons = {
  grid: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
  heart:
    '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/>',
  compare: '<path d="M8 3v18M16 3v18M3 8l5-5 5 5M11 16l5 5 5-5"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  shield:
    '<path d="m12 3 8 3v6c0 5-8 9-8 9S4 17 4 12V6l8-3Z"/><path d="m8 11 3 3 5-5"/>',
  clipboard:
    '<rect x="5" y="5" width="14" height="16" rx="2"/><rect x="9" y="2" width="6" height="5" rx="1"/><path d="m8 14 2 2 5-5"/>',
  book: '<path d="M12 5v16M12 5C9 2 5 3 2 4v15c3-1 7-1 10 2 3-3 7-3 10-2V4c-3-1-7-2-10 1Z"/>',
  arrow: '<path d="M4 12h16m-6-6 6 6-6 6"/>',
  chevron: '<path d="m9 5 7 7-7 7"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  pin: '<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
  search: '<circle cx="10.5" cy="10.5" r="7"/><path d="m16 16 5 5"/>',
  sliders:
    '<path d="M4 6h16M4 12h16M4 18h16"/><circle cx="9" cy="6" r="2" fill="white"/><circle cx="16" cy="12" r="2" fill="white"/><circle cx="8" cy="18" r="2" fill="white"/>',
  bed: '<path d="M3 18V8m18 10V8M3 15h18M3 10h18v5M6 10V5h12v5M12 5v5"/>',
  bath: '<path d="M3 12h18v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-3Zm2 0V5a2 2 0 0 1 4 0M6 19v2m12-2v2"/>',
  train:
    '<rect x="6" y="3" width="12" height="15" rx="3"/><path d="M6 11h12M8 21l2-3m6 3-2-3M9 15h.1M15 15h.1"/>',
  alert: '<path d="m12 3 10 18H2L12 3Zm0 6v5m0 3h.01"/>',
  calendar:
    '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 11h18M8 15h2m4 0h2"/>',
  close: '<path d="m6 6 12 12M6 18 18 6"/>',
  globe:
    '<circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/><path d="M3 12h18"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/>',
  home: '<path d="m3 10 9-7 9 7M5 9v12h14V9M9 21v-8h6v8"/>',
};
const icon = (name) =>
  `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${icons[name] || icons.home}</svg>`;
const esc = (value) =>
  String(value ?? "").replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
const money = (n) =>
  n == null ? "Not provided" : "$" + Number(n).toLocaleString("en-AU");
const date = (s) =>
  s
    ? new Intl.DateTimeFormat("en-AU", {
        day: "numeric",
        month: "short",
        year: "numeric",
        timeZone: "UTC",
      }).format(new Date(s + "T00:00:00Z"))
    : "Not provided";
const seeds = [
  {
    id: "glebe",
    title: "A little space to call yours",
    suburb: "Glebe",
    address: "Glebe Point Road, Glebe",
    source: "Flatmates",
    kind: "Share house",
    rent: 340,
    bills: 25,
    transport: 15,
    bond: 1360,
    advance: 680,
    setup: 80,
    end: "2027-06-30",
    beds: "Private room",
    bath: "Shared bath",
    commute: 14,
    image: "assets/room-1.jpg",
    trust: "reviewed",
    tag: "Close to campus",
    exit: "Ask the provider for the written early-exit terms. No exit amount has been supplied.",
    review:
      "The walk to campus was easy. Ask to see the kitchen at a busy time and check how bills are split.",
  },
  {
    id: "newtown",
    title: "Light-filled living in Newtown",
    suburb: "Newtown",
    address: "King Street, Newtown",
    source: "Domain",
    kind: "Studio",
    rent: 395,
    bills: 30,
    transport: 0,
    bond: 1580,
    advance: 790,
    setup: 120,
    end: "2027-12-15",
    beds: "Studio",
    bath: "Private bath",
    commute: 12,
    image: "assets/room-2.jpg",
    trust: "attention",
    tag: "Your own little corner",
    exit: "If you want to leave before the listed end date, ask whether a shorter agreement is available. Leaving early may involve rent or fees; request the written terms.",
    review: null,
  },
  {
    id: "redfern",
    title: "Settle into student life",
    suburb: "Redfern",
    address: "Cleveland Street, Redfern",
    source: "Student housing",
    kind: "Student housing",
    rent: 370,
    bills: 0,
    transport: 10,
    bond: 1480,
    advance: 740,
    setup: 0,
    end: "2027-06-30",
    beds: "Private room",
    bath: "Private bath",
    commute: 18,
    image: "assets/room-3.jpg",
    trust: "reviewed",
    tag: "Bills included",
    exit: "A replacement-tenant process is mentioned in the example listing. Any costs or approval conditions still need to be confirmed.",
    review:
      "The shared study space was handy. I would still ask for a live tour of the exact room, rather than a display room.",
  },
];
const defaults = {
  saved: ["glebe", "redfern"],
  compare: [],
  custom: [],
  prefs: {
    budget: 400,
    upfront: 2600,
    course: "",
    visa: "",
    zone: "Asia/Shanghai",
  },
  checks: {},
  notes: {},
  bond: {},
  requests: {},
};
let state;
try {
  const stored = JSON.parse(localStorage.getItem("harbour-v1") || "null");
  state = stored
    ? {
        ...structuredClone(defaults),
        ...stored,
        prefs: { ...defaults.prefs, ...stored.prefs },
      }
    : structuredClone(defaults);
} catch {
  state = structuredClone(defaults);
}
let page = ["explore", "saved", "compare", "inspections", "guide"].includes(
  location.hash.slice(1),
)
  ? location.hash.slice(1)
  : "explore";
let query = "",
  type = "all",
  sort = "recommended",
  budgetOnly = false,
  alignedOnly = false;
let currentId = null,
  detailTab = "overview",
  inspectionView = "mine",
  toastTimer;
const listings = () => [...seeds, ...state.custom];
const get = (id) => listings().find((x) => x.id === id);
const weekly = (x) =>
  x.bills == null || x.transport == null
    ? null
    : x.rent + x.bills + x.transport;
const upfront = (x) =>
  [x.bond, x.advance, x.setup].some((n) => n == null)
    ? null
    : x.bond + x.advance + x.setup;
const leaseLimit = () =>
  [state.prefs.course, state.prefs.visa].filter(Boolean).sort()[0];
const aligned = (x) => (!x.end || !leaseLimit() ? null : x.end <= leaseLimit());
const leaseSummary = (x) =>
  !x.end
    ? "End date not provided"
    : !leaseLimit()
      ? "Add your dates to compare"
      : aligned(x)
        ? "Ends by your reference date"
        : "Ends after your reference date";
const checkedCount = (id) =>
  Object.values(state.checks[id] || {}).filter((x) => x === "checked").length;
function persist() {
  try {
    localStorage.setItem("harbour-v1", JSON.stringify(state));
  } catch {
    toast(
      "Browser storage is full or unavailable. This session still works, but changes may not survive a refresh.",
    );
  }
}
function toast(message) {
  const el = document.querySelector("#toast");
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 4300);
}
const button = (text, action, ico, primary = false, extra = "") =>
  `<button type="button" class="btn ${primary ? "primary" : ""}" data-action="${action}" ${extra}>${ico ? icon(ico) : ""}${text}</button>`;
const art = `<svg class="hero-art" viewBox="0 0 300 190" fill="none" aria-hidden="true"><circle cx="173" cy="100" r="82" fill="#dfe8cc"/><path d="M16 166h274" stroke="#9bab86"/><path d="M77 165V73l57-34 58 34v92" fill="#f6f7e8" stroke="#819573" stroke-width="1.5"/><path d="m68 78 66-42 67 42" stroke="#819573" stroke-width="2"/><path d="M122 165v-53h28v53" fill="#abc49b" stroke="#819573"/><path d="M91 84h22v26H91zm65 0h22v26h-22z" fill="#d0ddbb" stroke="#819573"/><path d="M102 84v26m65-26v26M91 97h22m43 0h22" stroke="#819573"/><path d="M219 165V98m0 35c-35-13-40-42-27-47 17-7 30 16 27 47Zm0-15c-5-37 18-57 30-47 13 14-3 39-30 47Zm0 27c32-5 41-27 29-34-15-8-27 9-29 34Z" fill="#9db687" stroke="#819573"/><path d="M204 147h31l-5 19h-21l-5-19Z" fill="#d6b58c" stroke="#aa916d"/><path d="M43 165v-28m0 12c-21-10-22-25-14-29 10-4 17 14 14 29Zm0 3c23-8 26-25 17-29-10-4-19 14-17 29Z" fill="#abc49b" stroke="#819573"/><path d="M139 139h3" stroke="#65805d" stroke-width="2"/><path d="M130 171h24m-34 6h45" stroke="#9bab86"/><path d="m48 47 6-6 6 6m174-17 5-5 5 5" stroke="#a0b18c" stroke-width="2"/></svg>`;
function render() {
  const titles = {
    explore: [
      "A new city. A place for you.",
      "A little less uncertainty. A little closer to home.",
    ],
    saved: [
      "Your shortlist, all together.",
      "Good places deserve a second look.",
    ],
    compare: [
      "See the whole picture.",
      "The same cost terms. A clearer comparison.",
    ],
    inspections: [
      "Your inspections, clearly organised.",
      "Keep your own checks separate from other students’ experiences.",
    ],
    guide: [
      "Make yourself at home.",
      "A few rental terms, made a little more familiar.",
    ],
  };
  const nav = [
    ["explore", "grid", "Find a place"],
    ["saved", "heart", "Saved places"],
    ["compare", "compare", "Compare"],
    ["inspections", "clipboard", "Inspections"],
    ["guide", "book", "Rental guide"],
  ];
  document.querySelector("#app").innerHTML =
    `<aside class="sidebar"><a href="#explore" class="brand"><img src="assets/mark.svg" alt="">harbour<span style="color:#a4b98a">.</span></a><div class="brand-sub">LAND SOMEWHERE GOOD</div><div class="nav-label">YOUR NEXT CHAPTER</div><nav class="nav" aria-label="Main navigation">${nav.map(([id, ico, label]) => `<button data-action="nav" data-page="${id}" class="${page === id ? "active" : ""}" ${page === id ? 'aria-current="page"' : ""}>${icon(ico)}${label}${id === "saved" ? `<span class="count">${state.saved.length}</span>` : ""}</button>`).join("")}</nav><div class="side-bottom"><div class="side-tip">${icon("globe")}<strong>A new city, not on your own.</strong>Start your search from anywhere. No Australian phone number needed.<button data-action="nav" data-page="guide">A little guidance ${icon("arrow")}</button></div><div class="profile"><span class="avatar">Y</span><div>Your next chapter<small>International student</small></div><button data-action="preferences" aria-label="Edit preferences">${icon("sliders")}</button></div></div></aside><div class="shell"><header class="topbar"><div class="topbar-left">Your housing journey ${icon("chevron")}<span>${nav.find((x) => x[0] === page)[2]}</span></div><a class="brand mobile-brand" href="#explore"><img src="assets/mark.svg" alt="">harbour.</a><div class="topbar-right"><span class="location">${icon("pin")}Sydney, Australia</span><span class="divider"></span><span class="demo">INTERACTIVE DEMO</span></div></header><main class="main"><div class="heading"><div><h1>${titles[page][0]}</h1><p>${titles[page][1]}</p></div>${button("Add a listing", "import", "plus", true)}</div>${page === "explore" ? `<section class="hero"><div class="hero-copy"><h2>Find a place.<br>Feel at home.</h2><p>Found rooms on different websites or in a group chat?<br>Bring them here to compare total costs and plan your checks.</p></div><div class="hero-pill">${icon("shield")} Your listings. One clear comparison.</div>${art}</section>` : ""}${["explore", "saved"].includes(page) ? preferencesBar() + listingSection() : page === "compare" ? comparison() : page === "inspections" ? inspections() : guide()}<footer class="footer"><span>Made for your next chapter in Sydney.</span><span>Demonstration only · Fictional listings · All amounts in AUD</span></footer></main></div>${state.compare.length && page !== "compare" ? `<div class="compare-dock"><span>${state.compare.length} ${state.compare.length === 1 ? "place" : "places"} selected</span><button data-action="clear-compare">Clear</button>${button("Compare places", "nav", "compare", false, `data-page="compare" ${state.compare.length < 2 ? "disabled" : ""}`)}</div>` : ""}`;
}
function preferencesBar() {
  return `<section class="preferences" aria-label="Your housing preferences"><div class="pref-icon">${icon("sliders")}</div><div class="pref-item"><small>Weekly budget, including bills</small><strong>${money(state.prefs.budget)}</strong></div><div class="pref-item"><small>Cash before move-in</small><strong>${money(state.prefs.upfront)}</strong></div><div class="pref-item"><small>Date to compare against</small><strong>${leaseLimit() ? date(leaseLimit()) : "Optional · Not set"}</strong></div><button class="text-btn" data-action="preferences">Edit preferences ${icon("chevron")}</button></section>`;
}
function filtered() {
  return listings()
    .filter(
      (x) =>
        (page !== "saved" || state.saved.includes(x.id)) &&
        `${x.title} ${x.suburb} ${x.source}`
          .toLowerCase()
          .includes(query.toLowerCase()) &&
        (type === "all" || x.kind === type) &&
        (!budgetOnly ||
          (weekly(x) != null && weekly(x) <= state.prefs.budget)) &&
        (!alignedOnly || aligned(x)),
    )
    .sort((a, b) =>
      sort === "weekly"
        ? (weekly(a) ?? Infinity) - (weekly(b) ?? Infinity)
        : sort === "upfront"
          ? (upfront(a) ?? Infinity) - (upfront(b) ?? Infinity)
          : 0,
    );
}
function listingSection() {
  return `<section><div class="section-head"><div><h2>${page === "saved" ? "Places worth keeping" : "A few places to begin"}</h2><p>${page === "saved" ? "Your saved listings, across every platform." : "Different sources. One place to make sense of them."}</p></div><small id="result-count">${filtered().length} places</small></div><div class="toolbar"><label class="search">${icon("search")}<input id="search" aria-label="Search listings" placeholder="Try a suburb, a place or a source..." value="${esc(query)}"></label><select id="type-filter" class="filter" aria-label="Accommodation type">${["all", "Share house", "Studio", "Student housing"].map((t) => `<option value="${t}" ${type === t ? "selected" : ""}>${t === "all" ? "All home types" : t}</option>`).join("")}</select><select id="sort" class="filter" aria-label="Sort listings"><option value="recommended" ${sort === "recommended" ? "selected" : ""}>Sort: suggested</option><option value="weekly" ${sort === "weekly" ? "selected" : ""}>Lowest weekly cost</option><option value="upfront" ${sort === "upfront" ? "selected" : ""}>Lowest upfront cost</option></select><label class="toggle"><input id="budget-filter" type="checkbox" ${budgetOnly ? "checked" : ""}>Within budget</label><label class="toggle"><input id="lease-filter" type="checkbox" ${alignedOnly ? "checked" : ""}>Ends by my date</label></div><div class="cards" id="cards">${cardsHTML()}</div></section><section class="support"><button class="support-card" data-action="import"><span class="icon-box">${icon("plus")}</span><div><h3>Found a place somewhere else?</h3><p>A link or a screenshot. Bring it into the picture.</p></div>${icon("arrow")}</button><button class="support-card" data-action="nav" data-page="inspections"><span class="icon-box">${icon("clipboard")}</span><div><h3>A video tour is just the beginning.</h3><p>A simple checklist for the things photos don't tell you.</p></div>${icon("arrow")}</button></section>`;
}
function empty(title, description) {
  return `<div class="empty">${icon("home")}<h3>${title}</h3><p>${description}</p>${button("Find a place", "nav", "arrow", true, 'data-page="explore"')}</div>`;
}
function cardsHTML() {
  return (
    filtered().map(card).join("") ||
    `<div class="empty">${icon("search")}<h3>No places here just yet</h3><p>${page === "saved" ? "Save a listing with its heart button, or try changing your filters." : "Try a different suburb or loosen your filters."}</p>${button("Reset filters", "reset-filters", "sliders")}</div>`
  );
}
function leaseBadge(x) {
  return x.end
    ? `${icon(aligned(x) === false ? "alert" : "calendar")}${!leaseLimit() ? "Listed end: " + date(x.end) : leaseSummary(x)}`
    : `${icon("calendar")}End date not provided`;
}
function card(x) {
  return `<article class="card"><div class="photo-wrap"><img src="${esc(x.image || "assets/room-1.jpg")}" alt="${x.screenshot ? "Uploaded listing screenshot" : x.custom ? "Reference interior, not the imported property" : "Illustrative interior for " + esc(x.title)}"><span class="source"><i class="source-dot"></i>${esc(x.source)}</span><button class="save ${state.saved.includes(x.id) ? "selected" : ""}" data-action="save" data-id="${x.id}" aria-label="${state.saved.includes(x.id) ? "Unsave" : "Save"} ${esc(x.title)}" aria-pressed="${state.saved.includes(x.id)}">${icon("heart")}</button><span class="photo-tag">${esc(x.tag || "Added by you")}</span></div><div class="card-body"><button class="card-title" data-action="detail" data-id="${x.id}" aria-label="View ${esc(x.title)}">${esc(x.title)}</button><div class="address">${icon("pin")}${esc(x.address)}</div><div class="features"><span>${icon("bed")}${esc(x.beds)}</span><span>${icon("bath")}${esc(x.bath)}</span><span>${icon("train")}${x.commute ? x.commute + " min" : "TBC"}</span></div><div class="price-row"><span class="price">${money(weekly(x) ?? x.rent)}<small> / week</small></span><span class="all-in">${weekly(x) == null ? "RENT ONLY" : "EST. ALL-IN"}</span></div><p class="cost-label">${weekly(x) == null ? "Bills and transport still need checking" : `Rent ${money(x.rent)} + bills ${money(x.bills)} + transport ${money(x.transport)}`}</p><div class="upfront"><span>Cash before move-in</span><strong>${money(upfront(x))}</strong></div><div class="badges"><span class="badge ${x.trust === "attention" ? "warn" : x.custom ? "neutral" : ""}">${icon(x.trust === "attention" ? "alert" : "shield")}${x.custom ? "Not checked yet" : x.trust === "attention" ? "2 warning signs to review" : "Example cross-checks available"}</span><span class="badge ${aligned(x) === false ? "warn" : "neutral"}">${leaseBadge(x)}</span></div><div class="card-footer"><label class="compare-check"><input type="checkbox" data-compare="${x.id}" ${state.compare.includes(x.id) ? "checked" : ""}>Compare</label><button class="text-btn" data-action="detail" data-id="${x.id}">View listing ${icon("arrow")}</button></div></div></article>`;
}
function comparison() {
  const xs = state.compare.map(get).filter(Boolean);
  if (xs.length < 2)
    return empty(
      "A little perspective helps",
      "Select Compare on at least two listings to see them side by side.",
    );
  const rows = [
    ["Base rent", (x) => money(x.rent) + "/week"],
    ["Bills (estimate)", (x) => money(x.bills)],
    ["Transport (estimate)", (x) => money(x.transport)],
    [
      "All-in weekly cost",
      (x) =>
        `<strong>${money(weekly(x))}</strong>${weekly(x) > state.prefs.budget ? "<br><small>Above your weekly budget</small>" : ""}`,
    ],
    ["Security deposit (bond)", (x) => money(x.bond)],
    ["Rent paid ahead", (x) => money(x.advance)],
    ["Setup costs (estimate)", (x) => money(x.setup)],
    [
      "Cash before move-in",
      (x) =>
        `<strong>${money(upfront(x))}</strong>${upfront(x) > state.prefs.upfront ? "<br><small>Above your upfront budget</small>" : ""}`,
    ],
    ["Lease end", (x) => `${date(x.end)}<br><small>${leaseSummary(x)}</small>`],
    [
      "Checks",
      (x) =>
        x.custom
          ? "Not checked"
          : x.trust === "attention"
            ? "2 warning signs (demo)"
            : "Cross-check records (demo)",
    ],
    [
      "My inspection",
      (x) => `${checkedCount(x.id)} of ${checklist.length} checked by me`,
    ],
    [
      "Next step",
      (x) =>
        button("View details", "detail", "arrow", false, `data-id="${x.id}"`),
    ],
  ];
  return `<div class="notice">${icon("compare")}Comparing ${xs.length} places. Weekly totals include the same cost categories. Unknown amounts stay unknown.</div><div class="table-wrap"><table><thead><tr><th scope="col">The things that matter</th>${xs.map((x) => `<th scope="col">${esc(x.suburb)}<br><small>${esc(x.kind)}</small><br><button class="text-btn" data-action="remove-compare" data-id="${x.id}">Remove</button></th>`).join("")}</tr></thead><tbody>${rows.map(([label, fn]) => `<tr><th scope="row">${label}</th>${xs.map((x) => `<td>${fn(x)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
}
const checklist = [
  [
    "Room size & layout",
    "Ask for measurements and a continuous live walkthrough.",
  ],
  ["Water pressure", "Ask to see the shower and taps running."],
  ["Damp & ventilation", "Check ceilings, window frames and corners for damp."],
  [
    "Furniture & mattress",
    "Request close-ups of the actual furniture and mattress.",
  ],
  [
    "Noise & temperature",
    "Ask about street noise, insulation, heating and cooling.",
  ],
  ["Phone reception", "Ask for a reception check inside the room."],
  [
    "Walk to transport",
    "Confirm the route and actual walk time to the station.",
  ],
  [
    "Street after dark",
    "Ask someone local to describe lighting and the street at night.",
  ],
];
const sharedInspections = [
  {
    id: "glebe",
    author: "Maya",
    visited: "2026-09-28",
    summary: "Easy walk to campus. The kitchen felt busy in the evening.",
    observations: [
      [
        "Room & furniture",
        "The room had space for a desk. I saw the bed and wardrobe on a live tour.",
      ],
      [
        "Water & ventilation",
        "I did not see the shower running. Ask about water pressure and ventilation.",
      ],
      [
        "Shared spaces",
        "Ask how many people use the kitchen and how bills are split.",
      ],
    ],
  },
  {
    id: "redfern",
    author: "Alex",
    visited: "2026-10-01",
    summary: "Useful study space. Ask to see the exact room you would rent.",
    observations: [
      [
        "Room shown",
        "The tour showed a display room. I have not checked the room in this listing.",
      ],
      [
        "Shared spaces",
        "The study area looked useful. Ask about access hours and noise.",
      ],
      [
        "Still to check",
        "Ask for a live tour of your room and confirm which bills are included.",
      ],
    ],
  },
];
function inspections() {
  const shared = inspectionView === "shared";
  const tabs = `<div class="tabs inspection-tabs" aria-label="Inspection records"><button data-action="inspection-view" data-view="mine" class="${!shared ? "active" : ""}" aria-pressed="${!shared}">My inspections</button><button data-action="inspection-view" data-view="shared" class="${shared ? "active" : ""}" aria-pressed="${shared}">Other students’ inspections</button></div>`;
  if (shared)
    return (
      tabs +
      `<p class="inspection-intro">See what another student noticed, then decide what you want to check yourself. These are fictional examples, not current property reports.</p>${sharedInspections
        .map((report) => {
          const x = get(report.id);
          return `<article class="inspection-card"><img src="${esc(x.image)}" alt="Illustrative interior"><div><span class="record-owner">Shared by ${report.author} · Example visit ${date(report.visited)}</span><h3>${esc(x.title)}</h3><p>${report.summary}</p></div>${button("Read shared inspection", "shared-inspection", "arrow", false, `data-id="${x.id}"`)}</article>`;
        })
        .join("")}`
    );
  const xs = listings().filter(
    (x) =>
      state.saved.includes(x.id) || state.checks[x.id] || state.requests[x.id],
  );
  return (
    tabs +
    `<p class="inspection-intro">Only checks and notes you add appear here. Saving a listing gives you a blank checklist; it does not mean you have inspected it.</p>${xs.length ? xs.map((x) => `<article class="inspection-card"><img src="${esc(x.image || "assets/room-1.jpg")}" alt="Illustrative interior"><div><span class="record-owner">Your private record</span><h3>${esc(x.title)}</h3><p>${checkedCount(x.id)} of ${checklist.length} checked by you${state.requests[x.id] ? " · Request draft saved" : ""}</p><div class="progress"><div style="width:${(checkedCount(x.id) / checklist.length) * 100}%"></div></div></div>${button(Object.keys(state.checks[x.id] || {}).length ? "Continue my inspection" : "Start my inspection", "inspection", "clipboard", false, `data-id="${x.id}"`)}</article>`).join("") : empty("Choose a place to inspect", "Save a listing to start your own checklist.")}`
  );
}
function sharedInspection(id) {
  const report = sharedInspections.find((r) => r.id === id),
    x = get(id);
  if (!report || !x) return;
  openModal(
    "Shared inspection · " + esc(x.suburb),
    `By ${report.author} · Example visit ${date(report.visited)}`,
    `<div class="notice">${icon("book")}This is ${report.author}’s fictional example, not your inspection. Their observations do not mark anything as checked on your checklist.</div><h3>${esc(x.title)}</h3><p>${report.summary}</p><div class="status-list shared-observations">${report.observations.map(([title, text]) => `<article class="status-item"><div><strong>${title}</strong><p>${text}</p></div></article>`).join("")}</div><p class="inspection-intro">Conditions can change, and the room shown may differ from yours. Confirm the details during your own visit or live tour.</p><div class="form-actions">${button("Start my own inspection", "inspection", "clipboard", true, `data-id="${id}"`)}</div>`,
  );
}
function guide() {
  return `<p class="inspection-intro">New to renting? Start with what you need to pay and what you need to check. Open a question when you need more detail.</p><div class="glossary">${[
    [
      "What will I spend each week?",
      "Rent + estimated bills + transport. This makes prices from different sources easier to compare.",
      "For example: $340 rent + $25 bills + $15 transport = $380 a week. Ask which bills are included and whether there are usage limits.",
    ],
    [
      "How much cash do I need to move in?",
      "Your security deposit, rent paid ahead and any setup costs. This is separate from the weekly total.",
      "A deposit may be refundable, but you still need that money available at the start. Unknown amounts stay unknown until you confirm them.",
    ],
    [
      "What is a bond?",
      "A security deposit held during your tenancy, separate from rent.",
      "Ask who will hold it, how it will be lodged and how you will receive a receipt. Keep that record with the listing.",
    ],
    [
      "What is advance rent?",
      "Rent you pay ahead of time, covering the first part of your stay.",
      "It is included in the cash you need before moving in. It is not an extra charge on top of rent for the same period. Ask which dates the payment covers.",
    ],
    [
      "Does my lease need a fixed end date?",
      "Add the listed end date if there is one. Your study and visa dates are optional reference points.",
      "Harbour compares the listed end with the dates you choose; it does not decide when your tenancy must end. Confirm the agreement, start date and any gap in accommodation with the provider.",
    ],
    [
      "What if I need to leave early?",
      "Ask for the written terms before you agree to a place.",
      "Costs and options depend on your agreement and circumstances. Ask about a shorter agreement, notice, replacement tenants and any amounts you may owe.",
    ],
    [
      "What do listing checks tell me?",
      "They highlight things to ask about, such as different prices for the same address.",
      "Matching photos or addresses cannot prove that a listing or advertiser is genuine. Review the sources, dates and anything that does not match. This demo uses fictional check records.",
    ],
    [
      "How do I inspect from overseas?",
      "Arrange a live tour of the exact room and keep your own checklist.",
      "Ask to see taps running, window frames, furniture and the route to transport. Other students’ notes can suggest questions; only mark something as checked when you have your own evidence.",
    ],
  ]
    .map(
      ([title, summary, more]) =>
        `<article><h3>${title}</h3><p>${summary}</p><details class="explanation"><summary>More detail</summary><p>${more}</p></details></article>`,
    )
    .join("")}</div>`;
}
function openModal(title, subtitle, body) {
  const dialog = document.querySelector("#modal");
  dialog.innerHTML = `<div class="modal-head"><div><h2>${title}</h2><p>${subtitle}</p></div><button class="close" data-action="close" aria-label="Close dialog">${icon("close")}</button></div><div class="modal-body">${body}</div>`;
  dialog.setAttribute("aria-label", title);
  if (!dialog.open) dialog.showModal();
}
function preferences() {
  openModal(
    "Make it fit your plans",
    "Set your budgets. Add dates only if they help your search.",
    `<form id="preferences-form"><div class="form-grid"><label class="field">Weekly budget including bills & transport (AUD)<input name="budget" type="number" min="1" max="10000" required value="${state.prefs.budget}"></label><label class="field">Cash available before move-in (AUD)<input name="upfront" type="number" min="0" max="100000" required value="${state.prefs.upfront}"></label><label class="field">Study end date (optional)<input name="course" type="date" value="${state.prefs.course}"></label><label class="field">Visa end date (optional)<input name="visa" type="date" value="${state.prefs.visa}"></label><p class="full">If you add dates, we compare the listed lease end with the earlier one. This helps you spot a possible mismatch; your lease does not have to end on that date. Leave both blank to skip date comparisons.</p><label class="field full">Your time zone<select name="zone">${["Asia/Shanghai", "Asia/Kuala_Lumpur", "Asia/Ho_Chi_Minh", "Asia/Kolkata", "Australia/Sydney", "Europe/London", "America/Los_Angeles"].map((z) => `<option ${state.prefs.zone === z ? "selected" : ""}>${z}</option>`).join("")}</select><small>Inspection drafts show the proposed time in Sydney and in your time zone.</small></label></div><div class="form-actions">${button("Cancel", "close")}<button class="btn primary" type="submit">Save preferences</button></div></form>`,
  );
}
function importListing() {
  openModal(
    "Bring another place into the picture",
    "Save a listing from any channel.",
    `<div class="notice">${icon("plus")}Add a link or screenshot, then enter the details you know. This prototype stores your entry locally; it does not fetch listings or run verification.</div><form id="import-form"><div class="form-grid"><label class="field full">Listing link<input type="url" name="url" placeholder="https://..."><small>A link or a screenshot is required. Use a screenshot for private groups.</small></label><label class="field full">Or attach a screenshot<input name="screenshot" type="file" accept="image/png,image/jpeg,image/webp"><small>PNG, JPEG or WebP, up to 2 MB. Stored only in this browser.</small></label><label class="field full">Listing title<input name="title" required maxlength="80" placeholder="e.g. Sunny room near campus"></label><label class="field">Suburb<input name="suburb" required maxlength="60" placeholder="e.g. Glebe"></label><label class="field">Source<input name="source" required maxlength="40" placeholder="e.g. WeChat"></label><label class="field">Home type<select name="kind"><option>Share house</option><option>Studio</option><option>Student housing</option></select></label><label class="field">Weekly rent (AUD)<input name="rent" type="number" min="1" max="10000" required placeholder="350"></label><label class="field">Weekly bills (AUD)<input name="bills" type="number" min="0" max="10000" placeholder="Leave blank if unknown"></label><label class="field">Weekly transport (AUD)<input name="transport" type="number" min="0" max="10000" placeholder="Leave blank if unknown"></label><label class="field">Bond (AUD)<input name="bond" type="number" min="0" max="100000" placeholder="Unknown"></label><label class="field">Advance rent (AUD)<input name="advance" type="number" min="0" max="100000" placeholder="Unknown"></label><label class="field">Setup costs (AUD)<input name="setup" type="number" min="0" max="100000" placeholder="Unknown"></label><label class="field">Lease end date<input name="end" type="date"></label></div><p id="import-error" class="errors" role="alert"></p><div class="form-actions">${button("Cancel", "close")}<button class="btn primary" type="submit">Save listing</button></div></form>`,
  );
}
function detail(id, tab = "overview") {
  currentId = id;
  detailTab = tab;
  const x = get(id);
  if (!x) return;
  openModal(
    esc(x.title),
    `${esc(x.address)} · ${esc(x.source)}`,
    `<div class="tabs" role="tablist" aria-label="Listing details">${[
      ["overview", "Overview"],
      ["costs", "Costs explained"],
      ["trust", "Listing checks"],
      ["inspection", "My inspection"],
    ]
      .map(
        ([v, t]) =>
          `<button role="tab" aria-selected="${tab === v}" data-action="tab" data-tab="${v}" class="${tab === v ? "active" : ""}">${t}</button>`,
      )
      .join(
        "",
      )}</div><div role="tabpanel">${tab === "overview" ? overview(x) : tab === "costs" ? costs(x) : tab === "trust" ? trust(x) : inspection(x)}</div>`,
  );
}
function overview(x) {
  return `<img class="detail-photo" src="${esc(x.image || "assets/room-1.jpg")}" alt="${x.screenshot ? "Uploaded listing screenshot" : "Illustrative room interior"}"><div class="notice ${aligned(x) === false ? "amber" : ""}">${icon(aligned(x) === false ? "alert" : "calendar")}<div>${x.end ? `Listed lease end: ${date(x.end)}. ${!leaseLimit() ? "Your dates are optional. Add them in preferences if you want to compare." : aligned(x) ? "This ends by your reference date. Confirm the start date and whether you need accommodation afterwards." : "This is after your reference date. Ask whether a shorter agreement is available if you plan to leave sooner."}` : "No end date has been provided. Ask whether the agreement has a fixed end date."}</div></div><div class="detail-grid"><div class="info-block"><h4>${money(weekly(x))} / week</h4><p>Rent + estimated bills + transport.</p></div><div class="info-block"><h4>${money(upfront(x))} before move-in</h4><p>Security deposit, rent paid ahead and setup costs.</p></div></div><h3>Before you decide</h3><p>Check the cost breakdown and questions about this listing, then plan a live tour of the actual room.</p>${x.url ? `<p style="margin-top:12px"><a href="${esc(x.url)}" target="_blank" rel="noopener noreferrer">Open original listing</a></p>` : ""}<div class="form-actions">${button(state.saved.includes(x.id) ? "Saved to your shortlist" : "Save this place", "save-detail", "heart", false, `data-id="${x.id}"`)}${button("Understand the costs", "tab", "arrow", true, 'data-tab="costs"')}</div>`;
}
function costLine(label, value, sub = "", total = false) {
  return `<div class="cost-line ${total ? "total" : ""}"><div>${label}${sub ? `<small>${sub}</small>` : ""}</div><span>${value}</span></div>`;
}
function costs(x) {
  return `<h3>Each week</h3>${costLine("Rent", money(x.rent))}${costLine("Bills", money(x.bills), x.bills === 0 ? "Included in this example. Ask about usage limits." : "Estimate; ask which bills are included.")}${costLine("Transport", money(x.transport), "Estimated travel cost for this example.")}${costLine("Estimated weekly total", money(weekly(x)), "Rent + bills + transport. All amounts in AUD.", true)}${weekly(x) > state.prefs.budget ? `<div class="notice amber budget-notice">${icon("alert")}${money(weekly(x) - state.prefs.budget)} above your weekly budget.</div>` : ""}<h3>Before you move in</h3>${costLine("Security deposit (bond)", money(x.bond), "Money held during your tenancy, separate from rent.")}${costLine("Rent paid ahead (advance rent)", money(x.advance), "Pays for the first part of your stay; not an extra rent charge.")}${costLine("Setup costs", money(x.setup), "Estimated purchases or disclosed charges to get started.")}${costLine("Cash needed before move-in", money(upfront(x)), "Includes the security deposit.", true)}${upfront(x) > state.prefs.upfront ? `<div class="notice amber budget-notice">${icon("alert")}${money(upfront(x) - state.prefs.upfront)} above your upfront budget.</div>` : ""}<details class="explanation"><summary>Can I get the bond back, and what should I keep?</summary><p>The bond is a security deposit that may be refundable. Ask who holds it, how it will be lodged and how you will receive a receipt. The agreement and your circumstances affect any deductions.</p><label class="field">My bond receipt record<select id="bond-status" data-id="${x.id}">${["Not confirmed", "Asked provider", "Receipt received"].map((s) => `<option ${state.bond[x.id] === s ? "selected" : ""}>${s}</option>`).join("")}</select><small>Your private record. Harbour does not confirm that the bond has been lodged.</small></label></details><details class="explanation"><summary>What if I leave before the lease ends?</summary><p>${esc(x.exit || "Early-exit costs have not been provided. Ask for the written terms before signing.")}</p></details><div class="form-actions">${button("See questions about this listing", "tab", "arrow", true, 'data-tab="trust"')}</div>`;
}
function trust(x) {
  const records = x.custom
    ? [
        [
          "Pending",
          "Address and photos",
          "No cross-platform check has been performed for this imported listing.",
        ],
      ]
    : x.trust === "attention"
      ? [
          [
            "Review",
            "Address & price discrepancy",
            "Demo record: a second listing for the same address shows $450/week instead of $395. Confirm whether the room, dates and included costs are the same.",
          ],
          [
            "Review",
            "Payment pressure",
            "Demo message: the advertiser requests a deposit before a live inspection. Ask for a viewing and clarify the payment process.",
          ],
          [
            "Pending",
            "Advertiser identity",
            "No independent identity confirmation is present in this example.",
          ],
        ]
      : [
          [
            "Example",
            "Address cross-check",
            "Demo record: the suburb and street agree across two sample sources. This does not establish who controls the property.",
          ],
          [
            "Example",
            "Photo cross-check",
            "Demo record: no reuse is shown in the sample data. A clean result cannot prove that photos are current or genuine.",
          ],
          [
            "Pending",
            "Advertiser identity",
            "Ask for independent confirmation that this person can offer the room.",
          ],
        ];
  return `<div class="notice amber">${icon("shield")}Example check records · Harbour has not verified this listing or advertiser.</div><div class="status-list">${records.map(([s, t, p]) => `<article class="status-item ${s === "Review" ? "warn" : ""}">${icon(s === "Review" ? "alert" : "shield")}<div><strong>${t} · ${s}</strong><p>${p}</p></div></article>`).join("")}</div><details class="explanation"><summary>What should make me pause?</summary><p>If someone asks you to pay before viewing, refuses a live tour or pressures you to decide quickly, pause and ask for more information. Clarify payment requests outside the original platform.</p></details><h3>Someone who lived there</h3>${x.review ? `<div class="review">“${esc(x.review)}”<small>Fictional student review · Demonstration content · Not verified</small></div>` : "<p>No resident review is available. An absence of reviews is not a verification result.</p>"}<div class="form-actions">${button("Start my inspection", "tab", "clipboard", true, 'data-tab="inspection"')}</div>`;
}
function inspection(x) {
  return `<div class="notice">${icon("clipboard")}My inspection · Only you update this checklist. Other students’ reports do not fill it in for you.</div><div class="section-head"><h3 style="margin:0">My checks for this place</h3><small id="check-count">${checkedCount(x.id)} / ${checklist.length} checked</small></div><div class="progress"><div id="check-progress" style="width:${(checkedCount(x.id) / checklist.length) * 100}%"></div></div>${checklist
    .map(
      ([title, help], i) =>
        `<div class="check-row"><span class="check-number">0${i + 1}</span><div><strong>${title}</strong><small>${help}</small></div><select aria-label="${title} status" data-check="${i}" data-id="${x.id}">${[
          ["pending", "Not checked"],
          ["requested", "Evidence requested"],
          ["checked", "Self-checked"],
          ["concern", "Concern found"],
        ]
          .map(
            ([v, l]) =>
              `<option value="${v}" ${(state.checks[x.id]?.[i] || "pending") === v ? "selected" : ""}>${l}</option>`,
          )
          .join("")}</select></div>`,
    )
    .join(
      "",
    )}<label class="field" style="margin-top:20px">My notes & questions<textarea id="inspection-notes" data-id="${x.id}" maxlength="3000" placeholder="What did you see? What still needs an answer?">${esc(state.notes[x.id] || "")}</textarea><small>Notes save automatically in this browser.</small></label><h3>Prepare a live-video request</h3><p>Choose a Sydney time. Save a draft to copy to your provider; nothing is sent automatically.</p><form id="request-form" data-id="${x.id}" style="margin-top:14px"><label class="field">Proposed time in Sydney<input type="datetime-local" id="request-time" name="time" required value="${esc(state.requests[x.id]?.time || "")}"></label><p id="time-preview" style="margin-top:8px">${state.requests[x.id] ? esc(requestPreview(state.requests[x.id].time)) : ""}</p><div class="form-actions"><button class="btn primary" type="submit">Save request draft</button></div></form>${state.requests[x.id] ? `<label class="field">Your request draft<textarea readonly rows="5">${esc(requestText(x, state.requests[x.id].time))}</textarea></label>` : ""}`;
}
function sydneyInstant(value) {
  const [d, t] = value.split("T");
  let utc = new Date(`${d}T${t}:00Z`);
  for (let i = 0; i < 3; i++) {
    const local = new Intl.DateTimeFormat("sv-SE", {
      timeZone: "Australia/Sydney",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hourCycle: "h23",
    }).format(utc);
    const delta =
      new Date(local.replace(" ", "T") + ":00Z") - new Date(`${d}T${t}:00Z`);
    utc = new Date(+utc - delta);
  }
  return utc;
}
function requestPreview(value) {
  if (!value) return "";
  const instant = sydneyInstant(value);
  return (
    new Intl.DateTimeFormat("en-AU", {
      timeZone: state.prefs.zone,
      dateStyle: "medium",
      timeStyle: "short",
    }).format(instant) + ` (${state.prefs.zone})`
  );
}
function requestText(x, value) {
  return `Hello, I am interested in ${x.title}. Could we arrange a live-video inspection on ${value.replace("T", " at ")} (Sydney time)? That is ${requestPreview(value)} for me. Please show the actual room, water pressure, window frames, furniture and mattress. I would also like to confirm the full costs and lease dates. Thank you.`;
}
function navigate(next) {
  page = next;
  location.hash = next;
  render();
  window.scrollTo({ top: 0, behavior: "instant" });
}
document.addEventListener("click", (event) => {
  const el = event.target.closest("[data-action]");
  if (!el) return;
  const id = el.dataset.id;
  switch (el.dataset.action) {
    case "nav":
      navigate(el.dataset.page);
      break;
    case "preferences":
      preferences();
      break;
    case "import":
      importListing();
      break;
    case "close":
      document.querySelector("#modal").close();
      break;
    case "detail":
      detail(id);
      break;
    case "inspection":
      detail(id, "inspection");
      break;
    case "inspection-view":
      inspectionView = el.dataset.view;
      render();
      document.querySelector(`[data-view="${inspectionView}"]`).focus();
      break;
    case "shared-inspection":
      sharedInspection(id);
      break;
    case "tab":
      detail(currentId, el.dataset.tab);
      break;
    case "save":
    case "save-detail": {
      const saving = !state.saved.includes(id);
      state.saved = saving
        ? [...state.saved, id]
        : state.saved.filter((v) => v !== id);
      persist();
      render();
      if (el.dataset.action === "save-detail") detail(id, detailTab);
      toast(
        saving ? "Saved to your shortlist." : "Removed from your shortlist.",
      );
      break;
    }
    case "clear-compare":
      state.compare = [];
      persist();
      render();
      break;
    case "remove-compare":
      state.compare = state.compare.filter((x) => x !== id);
      persist();
      render();
      break;
    case "reset-filters":
      query = "";
      type = "all";
      sort = "recommended";
      budgetOnly = false;
      alignedOnly = false;
      render();
      break;
  }
});
function updateCards() {
  document.querySelector("#cards").innerHTML = cardsHTML();
  document.querySelector("#result-count").textContent =
    filtered().length + " places";
}
document.addEventListener("input", (event) => {
  const el = event.target;
  if (el.id === "search") {
    query = el.value;
    updateCards();
  }
  if (el.id === "inspection-notes") {
    state.notes[el.dataset.id] = el.value;
    persist();
  }
  if (el.id === "request-time") {
    try {
      document.querySelector("#time-preview").textContent = requestPreview(
        el.value,
      );
    } catch {
      document.querySelector("#time-preview").textContent =
        "Choose a valid date and time.";
    }
  }
});
document.addEventListener("change", (event) => {
  const el = event.target;
  if (el.dataset.compare) {
    const id = el.dataset.compare;
    if (el.checked && state.compare.length >= 3) {
      el.checked = false;
      toast("Compare up to 3 places at a time. Remove one to add another.");
      return;
    }
    state.compare = el.checked
      ? [...new Set([...state.compare, id])]
      : state.compare.filter((x) => x !== id);
    persist();
    render();
  }
  if (el.id === "type-filter") {
    type = el.value;
    updateCards();
  }
  if (el.id === "sort") {
    sort = el.value;
    updateCards();
  }
  if (el.id === "budget-filter") {
    budgetOnly = el.checked;
    updateCards();
  }
  if (el.id === "lease-filter") {
    if (el.checked && !leaseLimit()) {
      el.checked = false;
      preferences();
      toast("Add an optional date to use this filter.");
      return;
    }
    alignedOnly = el.checked;
    updateCards();
  }
  if (el.dataset.check) {
    (state.checks[el.dataset.id] ??= {})[el.dataset.check] = el.value;
    persist();
    document.querySelector("#check-count").textContent =
      `${checkedCount(el.dataset.id)} / ${checklist.length} checked`;
    document.querySelector("#check-progress").style.width =
      (checkedCount(el.dataset.id) / checklist.length) * 100 + "%";
    render();
  }
  if (el.id === "bond-status") {
    state.bond[el.dataset.id] = el.value;
    persist();
    toast("Bond record saved.");
  }
});
document.addEventListener("submit", async (event) => {
  event.preventDefault();
  const form = event.target;
  const data = Object.fromEntries(new FormData(form));
  if (form.id === "preferences-form") {
    state.prefs = {
      budget: Number(data.budget),
      upfront: Number(data.upfront),
      course: data.course,
      visa: data.visa,
      zone: data.zone,
    };
    if (!leaseLimit()) alignedOnly = false;
    persist();
    document.querySelector("#modal").close();
    render();
    toast("Preferences saved.");
  }
  if (form.id === "import-form") {
    const error = document.querySelector("#import-error");
    const file = form.elements.screenshot.files[0];
    if (!data.url && !file) {
      error.textContent = "Add a listing link or screenshot to continue.";
      return;
    }
    if (data.url && !/^https?:\/\//i.test(data.url)) {
      error.textContent = "Use a link beginning with https:// or http://.";
      return;
    }
    if (!data.title.trim() || !data.suburb.trim() || !data.source.trim()) {
      error.textContent = "Enter a title, suburb and source.";
      return;
    }
    if (
      file &&
      (file.size > 2 * 1024 * 1024 ||
        !["image/png", "image/jpeg", "image/webp"].includes(file.type))
    ) {
      error.textContent = "Choose a PNG, JPEG or WebP image smaller than 2 MB.";
      return;
    }
    let image = "";
    if (file) {
      try {
        image = await new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result);
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });
      } catch {
        error.textContent =
          "The screenshot could not be read. Please choose it again.";
        return;
      }
    }
    const x = {
      id: "custom-" + crypto.randomUUID(),
      title: data.title.trim(),
      suburb: data.suburb.trim(),
      address: data.suburb.trim(),
      source: data.source.trim(),
      kind: data.kind,
      rent: Number(data.rent),
      end: data.end,
      url: data.url,
      image,
      screenshot: Boolean(file),
      custom: true,
      trust: "pending",
      beds: data.kind === "Studio" ? "Studio" : "Private room",
      bath: "To confirm",
      tag: file ? "Your screenshot" : "Imported · Image illustrative",
    };
    for (const k of ["bills", "transport", "bond", "advance", "setup"])
      x[k] = data[k] === "" ? null : Number(data[k]);
    state.custom.push(x);
    state.saved.push(x.id);
    persist();
    document.querySelector("#modal").close();
    query = "";
    type = "all";
    budgetOnly = false;
    alignedOnly = false;
    navigate("saved");
    toast("Listing saved. Unknown costs and checks are marked for follow-up.");
  }
  if (form.id === "request-form") {
    state.requests[form.dataset.id] = { time: data.time };
    persist();
    detail(form.dataset.id, "inspection");
    render();
    toast("Request draft saved. Copy it to your provider when you are ready.");
  }
});
window.addEventListener("hashchange", () => {
  const next = location.hash.slice(1);
  if (
    ["explore", "saved", "compare", "inspections", "guide"].includes(next) &&
    page !== next
  ) {
    page = next;
    render();
  }
});
document.querySelector("#modal").addEventListener("click", (event) => {
  if (event.target === event.currentTarget) {
    const r = event.currentTarget.getBoundingClientRect();
    if (
      event.clientX < r.left ||
      event.clientX > r.right ||
      event.clientY < r.top ||
      event.clientY > r.bottom
    )
      event.currentTarget.close();
  }
});
render();
