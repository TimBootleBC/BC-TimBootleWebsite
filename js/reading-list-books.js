(() => {
  const bookDescriptions = new Map([
    ["Good to Great", "Explains why certain companies break away from the pack and sustain exceptional performance. Highlights disciplined leadership, focused strategy, and the flywheel effect as core drivers of long‑term success."],
    ["The First 90 Days", "Provides a structured plan for leaders entering new roles. Focuses on accelerating learning, building credibility, and securing early wins to establish momentum."],
    ["The Five Dysfunctions of a Team", "Identifies the core behavioral issues that undermine team performance. Offers a practical model for building trust, embracing conflict, committing to decisions, and driving results."],
    ["Essentialism", "A guide to eliminating non‑essential work and focusing on what truly matters. Encourages intentional decision‑making and disciplined simplicity to improve clarity and impact."],
    ["Measure What Matters", "Introduces the OKR goal‑setting framework and shows how clear objectives drive alignment and execution. Uses real‑world examples to illustrate how organizations stay focused on what matters most."],
    ["The Hard Thing About Hard Things", "A candid look at the toughest challenges leaders face, from layoffs to pivots to existential crises. Offers practical advice for navigating uncertainty and making painful decisions."],
    ["Radical Candor", "Teaches leaders how to give direct, honest feedback while maintaining genuine care for their people. Helps build trust, improve communication, and avoid toxic workplace behaviors."],
    ["No Rules Rules", "Explores Netflix’s unconventional culture built on freedom, responsibility, and radical transparency. Shows how removing unnecessary controls can increase innovation and accountability."],
    ["Rework", "Challenges traditional business assumptions and promotes simplicity, speed, and pragmatism. Encourages building only what’s essential and avoiding corporate busywork."],
    ["The Culture Map", "Provides a framework for understanding how cultural differences shape communication, leadership, and decision‑making. Helps global teams collaborate more effectively."],
    ["Multipliers", "Shows how great leaders amplify the intelligence and capability of their teams. Identifies behaviors that unlock potential and avoid unintentionally diminishing others."],
    ["The Advantage", "Argues that organizational health is the ultimate competitive advantage. Offers a practical approach to building clarity, alignment, and cohesive leadership teams."],
    ["The Making of a Manager", "A practical guide for new managers learning how to lead, give feedback, and grow into leadership. Shares real‑world lessons from early management experiences."],
    ["The Manager’s Path", "A roadmap for engineering leadership, covering mentorship, tech lead roles, management, and organizational leadership. Explains how technical leaders evolve through each stage."],
    ["Drive", "Reveals that autonomy, mastery, and purpose—not rewards—are the true drivers of motivation. Reframes how leaders should inspire performance and engagement."],
    ["The Fearless Organization", "Explains psychological safety and why it’s essential for innovation and learning. Provides tools for creating environments where people feel safe speaking up."],
    ["Reinventing Organizations", "Explores self‑managed, purpose‑driven organizational models. Presents a vision for more adaptive, human‑centered workplaces."],
    ["An Everyone Culture", "Describes organizations that embed employee development into daily work. Blends psychology with organizational strategy to create continuous growth environments."],
    ["Work Rules!", "Shares principles for building high‑performing cultures through transparency, empowerment, and data‑driven people practices. Highlights lessons from modern talent‑driven organizations."],
    ["Powerful", "Advocates for treating employees like adults and removing unnecessary processes. Focuses on candor, accountability, and building high‑trust environments."],
    ["Scrum", "Explains the origins and principles of Scrum and how iterative work increases productivity. Provides practical guidance for implementing agile practices."],
    ["The Lean Startup", "Introduces rapid experimentation, validated learning, and build‑measure‑learn cycles. Helps teams reduce waste and build products that customers actually want."],
    ["Scaling Up Excellence", "Examines how organizations scale behaviors, not just processes. Highlights the cultural and operational challenges of growth."],
    ["Execution", "Argues that execution is a discipline requiring clear goals, accountability, and follow‑through. Shows how leaders connect strategy to daily actions."],
    ["Decisive", "Provides a framework for making better decisions by widening options, testing assumptions, and preparing for uncertainty. Helps reduce common cognitive traps."],
    ["Nine Lies About Work", "Challenges popular management myths and reframes how organizations should measure performance and build teams. Emphasizes strengths‑based leadership."],
    ["Team Topologies", "Presents a model for structuring software teams to improve flow, reduce cognitive load, and scale effectively. Focuses on clear interaction modes and team boundaries."],
    ["The Phoenix Project", "A novel that illustrates DevOps principles through a fictional IT rescue mission. Shows how workflow, bottlenecks, and collaboration shape organizational performance."],
    ["Accelerate", "Summarizes research on high‑performing technology organizations and identifies key practices that drive speed and stability. Provides evidence‑based guidance for DevOps transformation."],
    ["The DevOps Handbook", "A comprehensive guide to implementing DevOps practices across development and operations. Focuses on flow, feedback, and continuous learning."],
    ["The 4 Disciplines of Execution", "Introduces a system for achieving strategic goals through focus, leverage, engagement, and accountability. Helps teams execute on their most important priorities."],
    ["Great by Choice", "Examines companies that thrive in uncertainty and identifies behaviors that drive consistent performance. Highlights discipline, empirical decision‑making, and productive paranoia."],
    ["Turn the Ship Around!", "Shows how empowering people at every level transforms performance. Demonstrates how intent‑based leadership builds ownership and accountability."],
    ["The Coaching Habit", "Teaches simple coaching questions that help leaders guide others more effectively. Encourages curiosity over advice‑giving."],
    ["Trillion Dollar Coach", "Shares leadership lessons focused on trust, candor, and team cohesion. Highlights coaching as a force multiplier."],
    ["Principles", "Outlines a system of decision‑making and life management built on clear principles. Encourages radical transparency and thoughtful reflection."],
    ["The Checklist Manifesto", "Shows how checklists improve reliability in complex environments. Demonstrates their impact in medicine, aviation, and business."],
    ["Thinking in Systems", "Introduces systems thinking and explains how feedback loops, delays, and structures shape behavior. Helps leaders understand complex dynamics."],
    ["Good Strategy/Bad Strategy", "Explains what makes strategy effective and why many plans fail. Emphasizes clear diagnosis, guiding policies, and coherent actions."],
    ["Blue Ocean Strategy", "Shows how companies create uncontested market space by shifting focus from competition to value innovation. Provides tools for strategic differentiation."],
    ["Playing to Win", "Presents a practical strategy framework built around choices about where to play and how to win. Helps leaders make clear, decisive strategic decisions."],
    ["Competing Against Luck", "Introduces Jobs‑to‑Be‑Done theory and explains how understanding customer motivations drives innovation. Helps teams build products that solve real problems."],
    ["The Innovator’s Solution", "Explores how companies can create and sustain disruptive innovation. Provides guidance for identifying new growth opportunities."],
    ["The Outsiders", "Profiles unconventional CEOs who delivered exceptional returns through disciplined capital allocation. Highlights independent thinking and decentralized management."],
    ["The Everything Store", "Chronicles the rise of Amazon and the principles behind its relentless customer focus and long‑term thinking. Reveals how bold bets shaped the company."],
    ["Creativity, Inc.", "Explores how creative cultures balance artistry and discipline. Offers lessons on leadership, candor, and protecting creative processes."],
    ["The Amazon Management System", "Breaks down Amazon’s operating principles, including mechanisms, metrics, and leadership behaviors. Shows how disciplined systems drive innovation."],
    ["Remote", "Advocates for remote work and explains how distributed teams can be productive, aligned, and engaged. Offers practical guidance for modern work environments."]
  ]);

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
      "isbn": "9780060548780",
      "description": "Identifies traits of successful companies through empirical research. Highlights customer focus, people orientation, and value‑driven leadership."
    },
    {
      "title": "Business Adventures",
      "author": "John Brooks",
      "domain": "Management",
      "isbn": "9781497644892",
      "description": "A collection of business stories illustrating timeless lessons about risk, leadership, and decision‑making. Offers insights into corporate behavior and market dynamics."
    },
    {
      "title": "Who Moved My Cheese?",
      "author": "Spencer Johnson",
      "domain": "Management",
      "isbn": "9780399144462",
      "description": "A simple parable about adapting to change. Encourages flexibility, awareness, and proactive behavior when circumstances shift."
    },
    {
      "title": "How to Win Friends and Influence People",
      "author": "Dale Carnegie",
      "domain": "Leadership",
      "isbn": "9780671027032",
      "description": "A classic guide to interpersonal effectiveness through empathy, listening, and positive influence. Offers timeless principles for building relationships."
    },
    {
      "title": "Directors That Work",
      "author": "David S. R. Leighton and Donald H. Thain",
      "domain": "Leadership",
      "isbn": "9780075528340",
      "description": "Explores how boards operate and how directors contribute to organizational governance. Focuses on accountability, oversight, and strategic guidance."
    },
    {
      "title": "Influence: The Psychology of Persuasion",
      "author": "Robert B. Cialdini",
      "domain": "Psychology",
      "isbn": "9780062937650",
      "description": "Identifies key principles that shape human decision‑making. Explains how persuasion works in everyday life."
    },
    {
      "title": "Thinking, Fast and Slow",
      "author": "Daniel Kahneman",
      "domain": "Psychology",
      "isbn": "9780374533557",
      "description": "Describes two systems of thought—intuitive and analytical—and how they shape judgment. Highlights cognitive biases that influence decisions."
    },
    {
      "title": "The Art of Saying No",
      "author": "Damon Zahariades",
      "domain": "Psychology",
      "isbn": "9781549572746",
      "description": "Teaches how to set boundaries without guilt. Helps readers prioritize their time and energy."
    },
    {
      "title": "The Defining Decade",
      "author": "Meg Jay",
      "domain": "Psychology",
      "isbn": "9780446561754",
      "description": "Explains why the twenties are a critical period for career, relationships, and identity. Encourages intentional choices during early adulthood."
    },
    {
      "title": "Sapiens: A Brief History of Humankind",
      "author": "Yuval Noah Harari",
      "domain": "History",
      "isbn": "9780062316097",
      "description": "Traces humanity’s evolution from early hominids to modern societies. Explores how culture, technology, and shared myths shape civilization."
    },
    {
      "title": "The Great Crash 1929",
      "author": "John Kenneth Galbraith",
      "domain": "Economics",
      "isbn": "9780547248165",
      "description": "Recounts the events leading to the stock market crash. Highlights speculation, psychology, and systemic fragility."
    },
    {
      "title": "Freakonomics",
      "author": "Steven D. Levitt and Stephen J. Dubner",
      "domain": "Economics",
      "isbn": "9780060731335",
      "description": "Uses unconventional questions to reveal hidden incentives behind everyday behavior. Blends economics with storytelling."
    },
    {
      "title": "The Biology of Belief",
      "author": "Bruce H. Lipton",
      "domain": "Biology",
      "isbn": "9781401923129",
      "description": "Argues that thoughts and beliefs influence biological processes. Explores mind‑body interactions."
    },
    {
      "title": "The Innovator’s Dilemma",
      "author": "Clayton M. Christensen",
      "domain": "Business strategy",
      "isbn": "9781633691780",
      "description": "Shows how disruptive technologies cause successful companies to fail. Explains why incumbents struggle with innovation."
    },
    {
      "title": "The Great Mental Models, Volume 1: General Thinking Concepts",
      "author": "Shane Parrish and Rhiannon Beaubien",
      "domain": "Business strategy",
      "isbn": "9781999449001",
      "description": "Introduces foundational thinking tools from multiple disciplines. Helps readers make clearer, more rational decisions."
    },
    {
      "title": "The Great Mental Models, Volume 2: Physics, Chemistry, and Biology",
      "author": "Shane Parrish and Rhiannon Beaubien",
      "domain": "Business strategy",
      "isbn": "9781999449032",
      "description": "Explores models from physics, chemistry, and biology. Shows how scientific principles improve reasoning."
    },
    {
      "title": "Security Analysis",
      "author": "Benjamin Graham & David Dodd",
      "domain": "Finance",
      "isbn": "9780071448208",
      "description": "A foundational text on value investing. Explains how to evaluate securities based on fundamentals."
    },
    {
      "title": "The Intelligent Investor",
      "author": "Benjamin Graham",
      "domain": "Finance",
      "isbn": "9780060555665",
      "description": "Provides principles for long-term investing. Emphasizes discipline, risk management, and value."
    },
    {
      "title": "Common Stocks and Uncommon Profits",
      "author": "Philip A. Fisher",
      "domain": "Finance",
      "isbn": "9780471445500",
      "description": "Explores how to identify growth companies. Focuses on qualitative analysis."
    },
    {
      "title": "A Random Walk Down Wall Street",
      "author": "Burton G. Malkiel",
      "domain": "Finance",
      "isbn": "9780393358384",
      "description": "Argues that markets are largely efficient. Explains investing strategies for individuals."
    },
    {
      "title": "The Essays of Warren Buffett",
      "author": "Warren Buffett & Lawrence A. Cunningham",
      "domain": "Finance",
      "isbn": "9781611637588",
      "description": "Summarizes key principles of value investing and corporate governance. Offers practical wisdom on business."
    },
    {
      "title": "Margin of Safety",
      "author": "Seth A. Klarman",
      "domain": "Finance",
      "isbn": "9780887305108",
      "description": "Advocates for conservative investing and risk avoidance. Emphasizes buying undervalued assets."
    },
    {
      "title": "The Most Important Thing",
      "author": "Howard Marks",
      "domain": "Finance",
      "isbn": "9780231153683",
      "description": "Explores key principles of risk, cycles, and investor behavior. Emphasizes thoughtful decision-making."
    },
    {
      "title": "The Little Book of Common Sense Investing",
      "author": "John C. Bogle",
      "domain": "Finance",
      "isbn": "9781119404507",
      "description": "Advocates for low-cost index investing. Explains why simplicity often outperforms complexity."
    },
    {
      "title": "The Little Book That Still Beats the Market",
      "author": "Joel Greenblatt",
      "domain": "Finance",
      "isbn": "9780470624159",
      "description": "Introduces a formula-based investing strategy. Focuses on value and quality."
    },
    {
      "title": "The Psychology of Money",
      "author": "Morgan Housel",
      "domain": "Finance",
      "isbn": "9780857197689",
      "description": "Explores how emotions and behavior shape financial decisions. Highlights timeless lessons about wealth."
    },
    {
      "title": "The Power of Compounding",
      "author": "Manoj Arora",
      "domain": "Finance",
      "isbn": "9788194790853",
      "description": "Explains how small, consistent investments grow over time. Emphasizes patience and discipline."
    },
    {
      "title": "Get Rich with Dividends",
      "author": "Marc Lichtenfeld",
      "domain": "Finance",
      "isbn": "9781118994153",
      "description": "Presents a dividend-based investing strategy. Focuses on long-term income growth."
    },
    {
      "title": "Where Are the Customers’ Yachts?",
      "author": "Fred Schwed Jr.",
      "domain": "Finance",
      "isbn": "9780471770893",
      "description": "A humorous critique of Wall Street culture. Highlights contradictions in financial advice."
    },
    {
      "title": "The Interpretation of Financial Statements",
      "author": "Benjamin Graham and Spencer B. Meredith",
      "domain": "Finance",
      "isbn": "9780887309137",
      "description": "Explains how to read balance sheets, income statements, and cash flow statements. Helps investors understand the fundamentals behind a company’s numbers."
    },
    {
      "title": "One Up on Wall Street",
      "author": "Peter Lynch",
      "domain": "Finance",
      "isbn": "9780743200400",
      "description": "Shows how individual investors can find opportunities through observation. Encourages simple, practical strategies."
    },
    {
      "title": "Poor Charlie’s Almanack",
      "author": "Charles T. Munger",
      "domain": "Finance",
      "isbn": "9781953953230",
      "description": "A collection of wisdom on investing, decision-making, and life. Highlights multidisciplinary thinking."
    },
    {
      "title": "Beating the Street",
      "author": "Peter Lynch",
      "domain": "Finance",
      "isbn": "9780671891633",
      "description": "Shows how individual investors can outperform professionals by researching companies and spotting opportunities. Encourages hands‑on analysis and long‑term thinking."
    },
    {
      "title": "The Snowball",
      "author": "Alice Schroeder",
      "domain": "Finance",
      "isbn": "9780553384611",
      "description": "A comprehensive biography capturing the life, philosophy, and investing approach of Warren Buffett. Highlights discipline, patience, and rational decision‑making."
    },
    {
      "title": "Devil Take the Hindmost",
      "author": "Edward Chancellor",
      "domain": "Finance",
      "isbn": "9780452281806",
      "description": "A history of financial speculation across centuries. Shows how greed, fear, and crowd psychology drive market booms and busts."
    },
    {
      "title": "Liar’s Poker",
      "author": "Michael Lewis",
      "domain": "Finance",
      "isbn": "9780393338690",
      "description": "A behind‑the‑scenes look at Wall Street culture during the 1980s. Highlights risk‑taking, excess, and the human side of finance."
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
        const link = row.querySelector('.book-link');
        if (book.description && link) {
          link.classList.add('has-description');
          link.dataset.description = book.description;
        }
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
        link.className = book.description ? 'book-link has-description' : 'book-link';
        link.href = `#${id}`;
        link.textContent = value;
        if (book.description) link.dataset.description = book.description;
        cell.append(link);
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

  tbody.querySelectorAll('.book-link').forEach(title => {
    const description = bookDescriptions.get(title.textContent.trim());
    if (!description) return;
    title.dataset.description = description;
    title.classList.add('has-description');
  });

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
