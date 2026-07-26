(() => {
  const table = document.querySelector('.reading-table');
  if (!table) return;

  const STORAGE_KEY = 'readingImpactV1';
  const IMPACTS = {
    5: 'Transformative',
    4: 'High leverage',
    3: 'Useful',
    2: 'Niche',
    1: 'Optional'
  };
  const IMPACT_ORDER = [5, 4, 3, 2, 1];
  let savedImpact = {};

  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    if (stored && typeof stored === 'object' && !Array.isArray(stored)) savedImpact = stored;
  } catch (error) {
    console.warn('Ignoring invalid saved reading impact data.', error);
  }

  const rows = [...table.tBodies[0].rows];

  function defaultImpact(row) {
    return row.dataset.priority === 'High' ? 4 : 3;
  }

  function impactFor(row) {
    const value = Number(savedImpact[row.id]);
    return IMPACTS[value] ? value : defaultImpact(row);
  }

  function saveImpact() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(savedImpact));
    } catch (error) {
      console.warn('Impact changed, but this browser could not save it.', error);
    }
  }

  function renderImpact(row) {
    const value = impactFor(row);
    const label = IMPACTS[value];
    const button = row.querySelector('.impact-toggle');
    row.dataset.impact = String(value);
    row.dataset.priority = `${value} ${label}`;
    button.textContent = `${value} · ${label}`;
    button.classList.remove(...IMPACT_ORDER.map(level => `impact-${level}`));
    button.classList.add(`impact-${value}`);
    button.setAttribute('aria-label', `${row.dataset.title}: impact ${value}, ${label}. Click to change impact.`);
  }

  function updateImpactSummary() {
    const summaryCards = document.querySelectorAll('.reading-summary-card');
    if (summaryCards.length < 4) return;
    const transformative = rows.filter(row => row.dataset.impact === '5').length;
    const highLeverage = rows.filter(row => row.dataset.impact === '4').length;
    summaryCards[2].querySelector('strong').textContent = transformative;
    summaryCards[2].querySelector('span').textContent = 'Transformative';
    summaryCards[3].querySelector('strong').textContent = highLeverage;
    summaryCards[3].querySelector('span').textContent = 'High leverage';
  }

  const header = table.tHead.rows[0].cells[table.tHead.rows[0].cells.length - 1];
  header.textContent = 'Impact';
  table.dataset.labels = table.dataset.labels.replace(/Priority$/, 'Impact');

  rows.forEach(row => {
    const cell = row.cells[row.cells.length - 1];
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'badge impact-toggle';
    cell.dataset.label = 'Impact';
    cell.replaceChildren(button);
    renderImpact(row);

    button.addEventListener('click', event => {
      event.stopPropagation();
      const current = impactFor(row);
      const next = IMPACT_ORDER[(IMPACT_ORDER.indexOf(current) + 1) % IMPACT_ORDER.length];
      savedImpact[row.id] = next;
      saveImpact();
      renderImpact(row);
      updateImpactSummary();
    });
  });

  const intro = document.querySelector('.reading-intro > p');
  if (intro) intro.textContent = intro.textContent.replace('priority', 'impact');

  const progressLegend = document.querySelector('.progress-legend');
  if (progressLegend) {
    const impactLegend = progressLegend.cloneNode(false);
    impactLegend.classList.add('impact-legend');
    impactLegend.setAttribute('aria-label', 'Impact scale');
    const heading = document.createElement('strong');
    heading.textContent = 'Impact:';
    impactLegend.append(heading);
    IMPACT_ORDER.forEach(value => {
      const item = document.createElement('span');
      item.className = `badge impact-${value}`;
      item.textContent = `${value} · ${IMPACTS[value]}`;
      impactLegend.append(item);
    });
    progressLegend.after(impactLegend);
  }

  updateImpactSummary();
})();
