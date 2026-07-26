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
  },
  {
    "title": "The Box: How the Shipping Container Made the World Smaller and the World Economy Bigger",
    "author": "Marc Levinson",
    "domain": "Navy Reading",
    "isbn": "9780691170817"
  },
  {
    "title": "Freedom’s Forge: How American Business Produced Victory in World War II",
    "author": "Arthur Herman",
    "domain": "Navy Reading",
    "isbn": "9780812982046"
  },
  {
    "title": "Skunk Works",
    "author": "Ben R. Rich and Leo Janos",
    "domain": "Navy Reading",
    "isbn": "9780316743006"
  },
  {
    "title": "The Origins of Victory: How Disruptive Military Innovation Determines the Fates of Great Powers",
    "author": "Andrew F. Krepinevich Jr.",
    "domain": "Navy Reading",
    "isbn": "9780300234091"
  },
  {
    "title": "Innovating Victory: Naval Technology in Three Wars",
    "author": "Vincent P. O’Hara and Leonard R. Heinz",
    "domain": "Navy Reading",
    "isbn": "9781682477328"
  },
  {
    "title": "Six Frigates: The Epic History of the Founding of the U.S. Navy",
    "author": "Ian W. Toll",
    "domain": "Navy Reading",
    "isbn": "9780393330328"
  },
  {
    "title": "The Last Stand of the Tin Can Sailors",
    "author": "James D. Hornfischer",
    "domain": "Navy Reading",
    "isbn": "9780553381481"
  },
  {
    "title": "A Brief Guide to Maritime Strategy",
    "author": "James R. Holmes",
    "domain": "Navy Reading",
    "isbn": "9781682473351"
  },
  {
    "title": "Deterrence",
    "author": "Lawrence Freedman",
    "domain": "Navy Reading",
    "isbn": "9780745641133"
  },
  {
    "title": "The Eurasian Century: Hot Wars, Cold Wars, and the Making of the Modern World",
    "author": "Hal Brands",
    "domain": "Navy Reading",
    "isbn": "9781324035862"
  },
  {
    "title": "Under the Southern Cross: The South Pacific Air Campaign Against Rabaul",
    "author": "Thomas McKelvey Cleaver",
    "domain": "Navy Reading",
    "isbn": "9781472846334"
  },
  {
    "title": "The Battle of Tassafaronga",
    "author": "Russell Crenshaw Jr.",
    "domain": "Navy Reading",
    "isbn": "9781591141457"
  },
  {
    "title": "Fleet Tactics and Naval Operations, Third Edition",
    "author": "Wayne P. Hughes Jr. and Robert P. Girrier",
    "domain": "Navy Reading",
    "isbn": "9781682473375"
  },
  {
    "title": "AI at War: How Big Data, Artificial Intelligence, and Machine Learning Are Changing Naval Warfare",
    "author": "Sam J. Tangredi and George Galdorisi",
    "domain": "Navy Reading",
    "isbn": "9781682476062"
  },
  {
    "title": "The Neptune Factor: Alfred Thayer Mahan and the Concept of Sea Power",
    "author": "Nicholas A. Lambert",
    "domain": "Navy Reading",
    "isbn": "9780300270051"
  },
  {
    "title": "Meditations",
    "author": "Marcus Aurelius; adapted by James Harris",
    "domain": "Navy Reading",
    "isbn": "9781956791761"
  },
  {
    "title": "Legacy",
    "author": "James Kerr",
    "domain": "Navy Reading",
    "isbn": "9781472103536"
  },
  {
    "title": "Man’s Search for Meaning",
    "author": "Viktor E. Frankl",
    "domain": "Navy Reading",
    "isbn": "9780807014295"
  },
  {
    "title": "So Good They Can’t Ignore You",
    "author": "Cal Newport",
    "domain": "Navy Reading",
    "isbn": "9781455509126"
  },
  {
    "title": "The Design of Everyday Things",
    "author": "Don Norman",
    "domain": "Navy Reading",
    "isbn": "9780465050659"
  },
  {
    "title": "The Talent Code",
    "author": "Daniel Coyle",
    "domain": "Navy Reading",
    "isbn": "9780553806847"
  },
  {
    "title": "Thinking in Bets",
    "author": "Annie Duke",
    "domain": "Navy Reading",
    "isbn": "9780735216358"
  },
  {
    "title": "Farsighted",
    "author": "Steven Johnson",
    "domain": "Navy Reading",
    "isbn": "9781594488214"
  },
  {
    "title": "Predictably Irrational, Revised and Expanded Edition",
    "author": "Dan Ariely",
    "domain": "Navy Reading",
    "isbn": "9780061353246"
  },
  {
    "title": "Peak: The New Science of Athletic Performance That Is Revolutionizing Sports",
    "author": "Marc Bubbs",
    "domain": "Navy Reading",
    "isbn": "9781603588096"
  },
  {
    "title": "The Performance Cortex",
    "author": "Zach Schonbrun",
    "domain": "Navy Reading",
    "isbn": "9781101870426"
  },
  {
    "title": "Why We Sleep",
    "author": "Matthew Walker",
    "domain": "Navy Reading",
    "isbn": "9781501144325"
  },
  {
    "title": "Grit",
    "author": "Angela Duckworth",
    "domain": "Navy Reading",
    "isbn": "9781501111105"
  },
  {
    "title": "Can’t Hurt Me",
    "author": "David Goggins",
    "domain": "Navy Reading",
    "isbn": "9781544512280"
  },
  {
    "title": "Endurance: Shackleton’s Incredible Voyage",
    "author": "Alfred Lansing",
    "domain": "Navy Reading",
    "isbn": "9780465062881"
  }
];

  const table = document.querySelector('.reading-table');
  if (!table) return;
  const tbody = table.tBodies[0];
  const normalize = value => value.toLowerCase().replaceAll('’', "'").replace(/[^a-z0-9]+/g, ' ').trim();
  const aliases = new Map([[normalize('Influence: The Psychology of Persuasion'), normalize('Influence')]]);
  const slugify = value => normalize(value).replaceAll(' ', '-');

  const navyDomain = 'Navy Reading';
  const domainFilters = document.querySelector('.domain-filters');
  if (domainFilters && !domainFilters.querySelector(`[data-domain="${navyDomain}"]`)) {
    const navyFilter = document.createElement('button');
    navyFilter.type = 'button';
    navyFilter.className = 'domain-chip';
    navyFilter.dataset.domain = navyDomain;
    navyFilter.textContent = navyDomain;
    domainFilters.append(navyFilter);
  }

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
    Object.assign(row.dataset, {author: book.author, domain: book.domain, favorite: 'false', isbn: book.isbn, priority: 'Medium', progress: '○ Not Started', title: book.title});
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
    const priorityCell = document.createElement('td'); priorityCell.dataset.label = 'Priority';
    const priority = document.createElement('span'); priority.className = 'badge priority-medium'; priority.textContent = 'Medium'; priorityCell.append(priority); row.append(priorityCell);
    const domainRows = [...tbody.rows].filter(existing => existing.dataset.domain === book.domain);
    if (domainRows.length) domainRows.at(-1).after(row);
    else tbody.append(row);
  });

  const rows = [...tbody.rows]; const total = rows.length;
  const summaryValues = document.querySelectorAll('.reading-summary-card strong');
  if (summaryValues.length >= 4) {
    summaryValues[0].textContent = total;
    summaryValues[1].textContent = new Set(rows.map(row => row.dataset.domain)).size;
    summaryValues[2].textContent = rows.filter(row => row.dataset.priority === 'High').length;
    summaryValues[3].textContent = rows.filter(row => row.dataset.priority === 'Medium').length;
  }
  const progressText = document.getElementById('progressText');
  if (progressText) progressText.textContent = `${rows.filter(row => normalize(row.dataset.progress).includes('finished')).length} of ${total} finished`;
  const heroCopy = document.querySelector('.page-hero p:last-child');
  if (heroCopy) heroCopy.textContent = heroCopy.textContent.replace(/\d+ enduring/, `${total} enduring`);
})();
