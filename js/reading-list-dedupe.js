(() => {
  const table = document.querySelector('.reading-table');
  if (!table) return;

  const normalize = value => value
    .toLowerCase()
    .replaceAll('’', "'")
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
  const preferredDomains = {
    'Good to Great': 'Management',
    'The First 90 Days': 'Leadership',
    'The Five Dysfunctions of a Team': 'Leadership',
    'The Hard Thing About Hard Things': 'Management',
    'Radical Candor': 'Leadership',
    'No Rules Rules': 'Management',
    'Multipliers': 'Leadership',
    'The Lean Startup': 'Business strategy',
    'Execution': 'Management',
    'Turn the Ship Around!': 'Leadership',
    'Trillion Dollar Coach': 'Leadership',
    'Principles': 'Management',
    'Good Strategy/Bad Strategy': 'Business strategy',
    'Blue Ocean Strategy': 'Business strategy',
    'The Innovator’s Solution': 'Business strategy',
    'The Outsiders': 'Management',
    'Creativity, Inc.': 'Management',
    'History of the Peloponnesian War': 'Military history',
    'De Architectura': 'Architecture'
  };
  const preferredDomainByTitle = new Map(
    Object.entries(preferredDomains).map(([title, domain]) => [normalize(title), domain])
  );
  const rowsByTitle = new Map();

  [...table.tBodies[0].rows].forEach(row => {
    const title = normalize(row.dataset.title || '');
    const matches = rowsByTitle.get(title) || [];
    matches.push(row);
    rowsByTitle.set(title, matches);
  });

  rowsByTitle.forEach((matches, title) => {
    if (matches.length < 2) return;
    const preferredDomain = preferredDomainByTitle.get(title);
    const keeper = matches.find(row => row.dataset.domain === preferredDomain) || matches[0];
    matches.forEach(row => {
      if (row !== keeper) row.remove();
    });
  });

  const rows = [...table.tBodies[0].rows];
  const summaryValues = document.querySelectorAll('.reading-summary-card strong');
  if (summaryValues.length >= 4) {
    summaryValues[0].textContent = rows.length;
    summaryValues[2].textContent = rows.filter(row => row.dataset.priority === 'High').length;
    summaryValues[3].textContent = rows.filter(row => row.dataset.priority === 'Medium').length;
  }
  const progressText = document.getElementById('progressText');
  if (progressText) {
    const finished = rows.filter(row => normalize(row.dataset.progress).includes('finished')).length;
    progressText.textContent = `${finished} of ${rows.length} finished`;
  }
  const heroCopy = document.querySelector('.page-hero p:last-child');
  if (heroCopy) heroCopy.textContent = heroCopy.textContent.replace(/\d+ enduring/, `${rows.length} enduring`);
})();
