(() => {
  const requestedBooks = [
  {
    "title": "Principles",
    "author": "Ray Dalio",
    "domain": "Management",
    "isbn": "9781501124020"
  },
  {
    "title": "The Checklist Manifesto",
    "author": "Atul Gawande",
    "domain": "Management",
    "isbn": "9780312430009"
  },
  {
    "title": "The Outsiders",
    "author": "William N. Thorndike",
    "domain": "Management",
    "isbn": "9781422162675"
  },
  {
    "title": "In Search of Excellence",
    "author": "Thomas J. Peters and Robert H. Waterman Jr.",
    "domain": "Management",
    "isbn": "9780060548780"
  },
  {
    "title": "Business Adventures",
    "author": "John Brooks",
    "domain": "Management",
    "isbn": "9781497644892"
  },
  {
    "title": "Who Moved My Cheese?",
    "author": "Spencer Johnson",
    "domain": "Management",
    "isbn": "9780399144462"
  },
  {
    "title": "How to Win Friends and Influence People",
    "author": "Dale Carnegie",
    "domain": "Leadership",
    "isbn": "9780671027032"
  },
  {
    "title": "Directors That Work",
    "author": "David S. R. Leighton and Donald H. Thain",
    "domain": "Leadership",
    "isbn": "9780075528340"
  },
  {
    "title": "Influence: The Psychology of Persuasion",
    "author": "Robert B. Cialdini",
    "domain": "Psychology",
    "isbn": "9780062937650"
  },
  {
    "title": "Thinking, Fast and Slow",
    "author": "Daniel Kahneman",
    "domain": "Psychology",
    "isbn": "9780374533557"
  },
  {
    "title": "The Art of Saying No",
    "author": "Damon Zahariades",
    "domain": "Psychology",
    "isbn": "9781549572746"
  },
  {
    "title": "The Defining Decade",
    "author": "Meg Jay",
    "domain": "Psychology",
    "isbn": "9780446561754"
  },
  {
    "title": "Sapiens: A Brief History of Humankind",
    "author": "Yuval Noah Harari",
    "domain": "History",
    "isbn": "9780062316097"
  },
  {
    "title": "The Great Crash 1929",
    "author": "John Kenneth Galbraith",
    "domain": "Economics",
    "isbn": "9780547248165"
  },
  {
    "title": "Freakonomics",
    "author": "Steven D. Levitt and Stephen J. Dubner",
    "domain": "Economics",
    "isbn": "9780060731335"
  },
  {
    "title": "The Biology of Belief",
    "author": "Bruce H. Lipton",
    "domain": "Biology",
    "isbn": "9781401923129"
  },
  {
    "title": "The Innovator’s Dilemma",
    "author": "Clayton M. Christensen",
    "domain": "Business strategy",
    "isbn": "9781633691780"
  },
  {
    "title": "The Great Mental Models, Volume 1: General Thinking Concepts",
    "author": "Shane Parrish and Rhiannon Beaubien",
    "domain": "Business strategy",
    "isbn": "9781999449001"
  },
  {
    "title": "The Great Mental Models, Volume 2: Physics, Chemistry, and Biology",
    "author": "Shane Parrish and Rhiannon Beaubien",
    "domain": "Business strategy",
    "isbn": "9781999449032"
  },
  {
    "title": "Security Analysis",
    "author": "Benjamin Graham & David Dodd",
    "domain": "Finance",
    "isbn": "9780071448208"
  },
  {
    "title": "The Intelligent Investor",
    "author": "Benjamin Graham",
    "domain": "Finance",
    "isbn": "9780060555665"
  },
  {
    "title": "Common Stocks and Uncommon Profits",
    "author": "Philip A. Fisher",
    "domain": "Finance",
    "isbn": "9780471445500"
  },
  {
    "title": "A Random Walk Down Wall Street",
    "author": "Burton G. Malkiel",
    "domain": "Finance",
    "isbn": "9780393358384"
  },
  {
    "title": "The Essays of Warren Buffett",
    "author": "Warren Buffett & Lawrence A. Cunningham",
    "domain": "Finance",
    "isbn": "9781611637588"
  },
  {
    "title": "Margin of Safety",
    "author": "Seth A. Klarman",
    "domain": "Finance",
    "isbn": "9780887305108"
  },
  {
    "title": "The Most Important Thing",
    "author": "Howard Marks",
    "domain": "Finance",
    "isbn": "9780231153683"
  },
  {
    "title": "The Little Book of Common Sense Investing",
    "author": "John C. Bogle",
    "domain": "Finance",
    "isbn": "9781119404507"
  },
  {
    "title": "The Little Book That Still Beats the Market",
    "author": "Joel Greenblatt",
    "domain": "Finance",
    "isbn": "9780470624159"
  },
  {
    "title": "The Psychology of Money",
    "author": "Morgan Housel",
    "domain": "Finance",
    "isbn": "9780857197689"
  },
  {
    "title": "The Power of Compounding",
    "author": "Manoj Arora",
    "domain": "Finance",
    "isbn": "9788194790853"
  },
  {
    "title": "Get Rich with Dividends",
    "author": "Marc Lichtenfeld",
    "domain": "Finance",
    "isbn": "9781118994153"
  },
  {
    "title": "Where Are the Customers’ Yachts?",
    "author": "Fred Schwed Jr.",
    "domain": "Finance",
    "isbn": "9780471770893"
  },
  {
    "title": "The Interpretation of Financial Statements",
    "author": "Benjamin Graham and Spencer B. Meredith",
    "domain": "Finance",
    "isbn": "9780887309137"
  },
  {
    "title": "One Up on Wall Street",
    "author": "Peter Lynch",
    "domain": "Finance",
    "isbn": "9780743200400"
  },
  {
    "title": "Poor Charlie’s Almanack",
    "author": "Charles T. Munger",
    "domain": "Finance",
    "isbn": "9781953953230"
  },
  {
    "title": "Beating the Street",
    "author": "Peter Lynch",
    "domain": "Finance",
    "isbn": "9780671891633"
  },
  {
    "title": "The Snowball",
    "author": "Alice Schroeder",
    "domain": "Finance",
    "isbn": "9780553384611"
  },
  {
    "title": "Devil Take the Hindmost",
    "author": "Edward Chancellor",
    "domain": "Finance",
    "isbn": "9780452281806"
  },
  {
    "title": "Liar’s Poker",
    "author": "Michael Lewis",
    "domain": "Finance",
    "isbn": "9780393338690"
  }
];

  const table = document.querySelector('.reading-table');
  if (!table) return;
  const tbody = table.tBodies[0];
  const normalize = value => value.toLowerCase().replaceAll('’', "'").replace(/[^a-z0-9]+/g, ' ').trim();
  const aliases = new Map([[normalize('Influence: The Psychology of Persuasion'), normalize('Influence')]]);
  const slugify = value => normalize(value).replaceAll(' ', '-');

  requestedBooks.forEach(book => {
    const acceptedTitles = new Set([normalize(book.title), aliases.get(normalize(book.title))]);
    const matches = [...tbody.rows].filter(row => acceptedTitles.has(normalize(row.dataset.title || '')));
    if (matches.length) {
      matches.forEach(row => {
        row.dataset.isbn = book.isbn;
        if (normalize(book.title) === normalize('Influence: The Psychology of Persuasion')) {
          row.dataset.title = book.title;
          row.querySelector('.book-link').textContent = book.title;
          row.querySelector('.favorite-toggle').setAttribute('aria-label', `Mark ${book.title} as a favorite`);
        }
      });
      return;
    }
    const row = document.createElement('tr');
    const id = `${slugify(book.domain)}-${slugify(book.title)}`;
    Object.assign(row.dataset, {author: book.author, domain: book.domain, favorite: 'false', isbn: book.isbn, impact: '3', progress: '○ Not Started', title: book.title});
    row.id = id;
    [book.domain, book.title, book.author].forEach((value, index) => {
      const cell = document.createElement('td');
      cell.dataset.label = ['Domain', 'Title', 'Author'][index];
      if (index === 1) {
        cell.className = 'title';
        const link = document.createElement('a');
        link.className = 'book-link'; link.href = `#${id}`; link.textContent = value; cell.append(link);
      } else cell.textContent = value;
      row.append(cell);
    });
    const progressCell = document.createElement('td'); progressCell.dataset.label = 'Progress';
    const progress = document.createElement('span'); progress.className = 'progress-pill progress-not'; progress.textContent = '○ Not Started'; progressCell.append(progress); row.append(progressCell);
    const favoriteCell = document.createElement('td'); favoriteCell.className = 'favorite-cell'; favoriteCell.dataset.label = 'Favorite';
    const favorite = document.createElement('button'); favorite.type = 'button'; favorite.className = 'favorite-toggle'; favorite.title = 'Toggle favorite'; favorite.setAttribute('aria-label', `Mark ${book.title} as a favorite`); favorite.setAttribute('aria-pressed', 'false'); favorite.textContent = '☆'; favoriteCell.append(favorite); row.append(favoriteCell);
    const impactCell = document.createElement('td'); impactCell.dataset.label = 'Impact';
    const impact = document.createElement('button'); impact.type = 'button'; impact.className = 'badge impact-toggle impact-3'; impact.textContent = 'Useful'; impactCell.append(impact); row.append(impactCell);
    const domainRows = [...tbody.rows].filter(existing => existing.dataset.domain === book.domain);
    domainRows.at(-1).after(row);
  });

  const rows = [...tbody.rows]; const total = rows.length;
  const summaryValues = document.querySelectorAll('.reading-summary-card strong');
  if (summaryValues.length >= 4) {
    summaryValues[0].textContent = total;
    summaryValues[2].textContent = rows.filter(row => row.dataset.impact === '4').length;
    summaryValues[3].textContent = rows.filter(row => row.dataset.impact === '3').length;
  }
  const progressText = document.getElementById('progressText');
  if (progressText) progressText.textContent = `${rows.filter(row => normalize(row.dataset.progress).includes('finished')).length} of ${total} finished`;
  const heroCopy = document.querySelector('.page-hero p:last-child');
  if (heroCopy) heroCopy.textContent = heroCopy.textContent.replace(/\d+ enduring/, `${total} enduring`);

  const describedTitles = [...tbody.querySelectorAll('.book-link[data-description]')];
  if (!describedTitles.length) return;

  const tooltip = document.createElement('div');
  tooltip.id = 'book-description-tooltip';
  tooltip.className = 'book-description-tooltip';
  tooltip.setAttribute('role', 'tooltip');
  tooltip.hidden = true;
  document.body.append(tooltip);

  let activeTitle = null;
  let activeButton = null;
  const viewportGap = 12;
  const tooltipGap = 12;

  describedTitles.forEach(title => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'description-toggle';
    button.setAttribute('aria-label', `Show description for ${title.textContent.trim()}`);
    button.setAttribute('aria-expanded', 'false');
    button.textContent = 'i';
    title.after(button);
  });

  function hideTooltip() {
    if (activeTitle) activeTitle.removeAttribute('aria-describedby');
    if (activeButton) activeButton.setAttribute('aria-expanded', 'false');
    tooltip.hidden = true;
    tooltip.textContent = '';
    activeTitle = null;
    activeButton = null;
  }

  function positionTooltip(anchor, pointer) {
    const anchorRect = anchor.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();
    const preferredX = pointer ? pointer.clientX + tooltipGap : anchorRect.left;
    const preferredY = pointer ? pointer.clientY + tooltipGap : anchorRect.bottom + tooltipGap;
    const maxX = window.innerWidth - tooltipRect.width - viewportGap;
    const maxY = window.innerHeight - tooltipRect.height - viewportGap;
    const left = Math.min(Math.max(viewportGap, preferredX), Math.max(viewportGap, maxX));
    let top = preferredY;

    if (top > maxY) {
      top = (pointer ? pointer.clientY : anchorRect.top) - tooltipRect.height - tooltipGap;
    }
    top = Math.min(Math.max(viewportGap, top), Math.max(viewportGap, maxY));
    tooltip.style.left = `${left}px`;
    tooltip.style.top = `${top}px`;
  }

  function showTooltip(title, anchor = title, pointer = null, button = null) {
    if (activeTitle && activeTitle !== title) hideTooltip();
    activeTitle = title;
    activeButton = button;
    tooltip.textContent = title.dataset.description;
    tooltip.hidden = false;
    title.setAttribute('aria-describedby', tooltip.id);
    if (button) button.setAttribute('aria-expanded', 'true');
    positionTooltip(anchor, pointer);
  }

  document.addEventListener('pointerenter', event => {
    const title = event.target.closest?.('.book-link[data-description]');
    if (title) showTooltip(title, title, event);
  }, true);

  document.addEventListener('pointermove', event => {
    if (activeTitle && event.target.closest?.('.book-link[data-description]') === activeTitle) {
      positionTooltip(activeTitle, event);
    }
  });

  document.addEventListener('pointerleave', event => {
    const title = event.target.closest?.('.book-link[data-description]');
    if (title && title === activeTitle && !activeButton) hideTooltip();
  }, true);

  document.addEventListener('focusin', event => {
    const title = event.target.closest?.('.book-link[data-description]');
    if (title) showTooltip(title);
  });

  document.addEventListener('focusout', event => {
    if (event.target === activeTitle && !activeButton) hideTooltip();
  });

  document.addEventListener('click', event => {
    const button = event.target.closest?.('.description-toggle');
    if (button) {
      const title = button.previousElementSibling;
      if (activeButton === button) hideTooltip();
      else showTooltip(title, button, null, button);
      return;
    }
    if (activeButton) hideTooltip();
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && activeTitle) hideTooltip();
  });

  window.addEventListener('scroll', hideTooltip, true);
  window.addEventListener('resize', hideTooltip);
})();
