const designView = new URLSearchParams(location.search).get('figmaview');
if (designView) {
  state = structuredClone(defaults);
  state.compare = ['glebe', 'newtown'];
  const modalViews = ['overview', 'costs', 'trust', 'inspection', 'preferences', 'import'];
  page = modalViews.includes(designView) ? 'explore' : designView;
  if (!['explore', 'saved', 'compare', 'inspections', 'guide'].includes(page)) page = 'explore';
  if (designView === 'inspection') {
    state.checks.glebe = { 0: 'checked', 1: 'requested', 2: 'concern' };
    state.notes.glebe = 'Ask for a close-up of the window frame and a live water-pressure check.';
  }
  render();
  if (['overview', 'costs', 'trust', 'inspection'].includes(designView)) detail(designView === 'trust' ? 'newtown' : 'glebe', designView);
  if (designView === 'preferences') preferences();
  if (designView === 'import') importListing();
  document.title = 'Harbour · ' + designView.charAt(0).toUpperCase() + designView.slice(1);
}
