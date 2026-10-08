const designParams = new URLSearchParams(location.search);
const designView = designParams.get('figmaview');
if (designView) {
  state = structuredClone(defaults);
  state.compare = ['glebe', 'newtown'];
  if (designParams.has('compare')) state.compare = designParams.get('compare').split(',').filter(Boolean);
  if (designParams.has('saved')) state.saved = designParams.get('saved').split(',').filter(Boolean);
  const designState = designParams.get('state');
  const designId = designParams.get('listing') || 'glebe';
  if (designState === 'unselected') state.compare = [];
  if (designState === 'selected-one') state.compare = ['glebe'];
  if (designState === 'saved-all') state.saved = ['glebe', 'newtown', 'redfern'];
  if (designState === 'unsaved') state.saved = ['redfern'];
  if (designState === 'preferences-updated') {
    state.prefs.budget = 450;
    state.prefs.course = '2027-06-30';
  }
  if (designState === 'checked' || designState === 'request-saved') {
    state.checks[designId] = Object.fromEntries(checklist.map((_, i) => [i, 'checked']));
    state.notes[designId] = 'Live walkthrough complete. Confirm the written lease and bond receipt before deciding.';
  }
  if (designState === 'request-saved') state.requests[designId] = { time: '2026-10-15T15:00' };
  if (designState === 'imported') {
    const imported = { ...seeds[0], id: 'imported-demo', title: 'Sunny room near campus', source: 'WeChat', custom: true, trust: 'pending', url: 'https://example.com/room', tag: 'Imported · Image illustrative', bills: null, transport: null, bond: null, advance: null, setup: null };
    state.custom.push(imported);
    state.saved.push(imported.id);
  }
  if (designState === 'budget') budgetOnly = true;
  if (designState === 'dates') { state.prefs.course = '2027-06-30'; alignedOnly = true; }
  if (designState === 'shared') inspectionView = 'shared';
  if (designState === 'studio') type = 'Studio';
  if (designState === 'share') type = 'Share house';
  if (designState === 'student') type = 'Student housing';
  if (designState === 'weekly') sort = 'weekly';
  if (designState === 'upfront') sort = 'upfront';
  if (designState === 'search') query = 'Glebe';
  if (designState === 'empty') query = 'No matching suburb';
  const modalViews = ['overview', 'costs', 'trust', 'inspection', 'preferences', 'import'];
  page = modalViews.includes(designView) ? 'explore' : designView;
  if (!['explore', 'saved', 'compare', 'inspections', 'guide'].includes(page)) page = 'explore';
  if (designView === 'inspection' && !['checked', 'request-saved'].includes(designState)) {
    state.checks[designId] = {};
  }
  render();
  if (designState === 'bond-recorded') state.bond[designId] = 'Receipt received';
  if (['overview', 'costs', 'trust', 'inspection'].includes(designView)) detail(designId, designView);
  if (designView === 'shared-inspection') sharedInspection(designId);
  if (designView === 'preferences') preferences();
  if (designView === 'import') importListing();
  if (designView === 'import' && designState === 'filled') {
    const values = { url: 'https://example.com/room', title: 'Sunny room near campus', suburb: 'Glebe', source: 'WeChat', rent: '340', end: '2027-06-30' };
    for (const [name, value] of Object.entries(values)) document.querySelector('#import-form').elements[name].value = value;
  }
  if (designView === 'preferences' && designState === 'filled') {
    document.querySelector('#preferences-form').elements.budget.value = '450';
    document.querySelector('#preferences-form').elements.course.value = '2027-06-30';
  }
  if (designView === 'inspection' && designState === 'request-filled') {
    document.querySelector('#request-time').value = '2026-10-15T15:00';
    document.querySelector('#time-preview').textContent = requestPreview('2026-10-15T15:00');
  }
  document.title = 'Harbour · ' + designView.charAt(0).toUpperCase() + designView.slice(1) + (designParams.get('label') ? ' · ' + designParams.get('label') : '');
}
