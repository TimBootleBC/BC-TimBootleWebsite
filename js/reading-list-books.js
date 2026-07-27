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
    ["Remote", "Explains how distributed teams can work effectively without losing alignment or productivity. Offers practical guidance for communication, culture, and workflow in remote environments."],
    ["The Alliance", "Proposes a new employer‑employee relationship built on trust, transparency, and mutually beneficial “tours of duty.” Helps organizations retain and grow talent in a fast‑changing world."],
    ["Humanocracy", "Argues for dismantling bureaucratic structures and empowering people through autonomy and experimentation. Provides a blueprint for more adaptive, human‑centered organizations."],
    ["In Search of Excellence", "Identifies traits of successful companies through empirical research. Highlights customer focus, people orientation, and value‑driven leadership."],
    ["Business Adventures", "A collection of business stories illustrating timeless lessons about risk, leadership, and decision‑making. Offers insights into corporate behavior and market dynamics."],
    ["Who Moved My Cheese?", "A simple parable about adapting to change. Encourages flexibility, awareness, and proactive behavior when circumstances shift."],
    ["Directors That Work", "Explores how boards operate and how directors contribute to organizational governance. Focuses on accountability, oversight, and strategic guidance."],
    ["The Art of Saying No", "Offers practical ways to set boundaries without guilt. Helps readers protect their time, priorities, and wellbeing."],
    ["The Defining Decade", "Explains why the twenties are a formative period in adult life. Offers practical guidance for building careers, relationships, and identity with intention."],
    ["Sapiens: A Brief History of Humankind", "Surveys the history of humankind from early societies to the modern world. Examines how shared beliefs, institutions, and technology shaped civilization."],
    ["The Great Crash 1929", "Reconstructs the events and speculation that led to the 1929 market crash. Draws enduring lessons about financial euphoria, leverage, and crowd behavior."],
    ["Freakonomics", "Uses economic reasoning and data to investigate unexpected questions about incentives and behavior. Shows how careful analysis can challenge conventional explanations."],
    ["The Biology of Belief", "Explores how environment, perception, and behavior may influence biological processes. Encourages readers to reconsider the relationship between mind and body."],
    ["The Great Mental Models, Volume 1: General Thinking Concepts", "Introduces foundational mental models for clearer reasoning and better decisions. Connects ideas such as first principles, inversion, and second-order thinking."],
    ["The Great Mental Models, Volume 2: Physics, Chemistry, and Biology", "Applies concepts from the physical and biological sciences to everyday reasoning. Shows how cross-disciplinary models improve judgment."],
    ["The Little Book of Common Sense Investing", "Makes the case for low-cost, broadly diversified index investing. Explains how fees, compounding, and discipline shape long-term returns."],
    ["The Little Book That Still Beats the Market", "Presents a systematic value-investing approach based on business quality and price. Explains the logic and limitations of applying a repeatable formula."],
    ["The Psychology of Money", "Explores how behavior, personal history, and emotion shape financial decisions. Emphasizes patience, flexibility, and a long-term perspective."],
    ["The Power of Compounding", "Explains how consistent habits and reinvestment can produce substantial long-term growth. Applies compounding principles to money and personal development."],
    ["Get Rich with Dividends", "Presents a long-term strategy centered on dividend growth and reinvestment. Discusses how income, valuation, and compounding affect portfolio results."],
    ["Where Are the Customers’ Yachts?", "Uses humor to expose conflicts of interest and recurring absurdities in financial markets. Encourages skepticism about investment advice and industry incentives."],
    ["The Interpretation of Financial Statements", "Introduces the key figures and relationships found in corporate financial statements. Helps investors assess business strength, earnings, and financial condition."],
    ["Beating the Street", "Explains how individual investors can research companies and develop informed investment ideas. Uses real examples to connect business fundamentals with stock selection."],
    ["The Snowball", "Chronicles Warren Buffett’s life, investing career, and approach to business. Examines the relationships and decisions behind decades of compounded success."],
    ["Devil Take the Hindmost", "Traces major episodes of financial speculation across history. Reveals recurring patterns of leverage, enthusiasm, fraud, and collapse."],
    ["Liar’s Poker", "Recounts life inside a major Wall Street firm during the bond-market boom. Offers a candid view of trading culture, incentives, and financial excess."],
    ["The Leadership Challenge", "Presents a model for effective leadership built around five core practices. Helps leaders inspire, motivate, and guide others through shared values and vision."],
    ["Leaders Eat Last", "Explores how leaders create environments of trust and safety. Shows how prioritizing people leads to stronger teams and better performance."],
    ["Dare to Lead", "Focuses on courage, vulnerability, and empathy as essential leadership skills. Encourages leaders to build cultures of trust and authenticity."],
    ["Extreme Ownership", "Teaches that leaders must take full responsibility for outcomes. Uses battlefield lessons to illustrate accountability, discipline, and clear communication."],
    ["Team of Teams", "Shows how small, empowered teams outperform rigid hierarchies in complex environments. Emphasizes adaptability, trust, and shared consciousness."],
    ["Primal Leadership", "Explains how emotional intelligence drives effective leadership. Shows how leaders influence organizational climate through resonance."],
    ["Leadership on the Line", "Describes the dangers and challenges of leading change. Offers strategies for staying grounded while navigating resistance and conflict."],
    ["The 21 Irrefutable Laws of Leadership", "Outlines foundational principles of leadership that apply across contexts. Focuses on influence, vision, and personal growth."],
    ["On Becoming a Leader", "Explores the qualities and experiences that shape effective leaders. Encourages self‑reflection and personal development."],
    ["The Effective Executive", "Highlights the habits and disciplines that make executives productive. Focuses on time management, decision‑making, and prioritization."],
    ["Start with Why", "Shows how great leaders inspire action by communicating purpose. Emphasizes clarity of mission as a driver of loyalty and performance."],
    ["The Culture Code", "Examines how strong cultures are built through safety, vulnerability, and purpose. Provides practical examples from high‑performing teams."],
    ["Legacy", "Draws leadership lessons from the All Blacks rugby team. Focuses on humility, discipline, and continuous improvement."],
    ["The Captain Class", "Identifies traits of elite team captains who drive sustained excellence. Highlights resilience, selflessness, and quiet leadership."],
    ["Wooden on Leadership", "Shares leadership principles based on character, discipline, and consistency. Offers practical guidance for building winning teams."],
    ["The Score Takes Care of Itself", "Presents a leadership philosophy centered on preparation, discipline, and high standards. Shows how focusing on process leads to results."],
    ["Winning", "Provides practical advice for achieving success in business through clarity, candor, and relentless execution. Emphasizes accountability and performance."],
    ["True North", "Encourages leaders to discover and follow their authentic leadership compass. Focuses on values, purpose, and self‑awareness."],
    ["Leadership in War", "Profiles leaders in wartime to illustrate decision‑making under extreme pressure. Highlights courage, strategy, and moral complexity."],
    ["The Ride of a Lifetime", "Shares leadership lessons from building and transforming a major company. Emphasizes optimism, courage, and long‑term thinking."],
    ["Shoe Dog", "A memoir about building a global brand through persistence, risk‑taking, and unconventional decisions. Highlights the messy reality behind entrepreneurial success."],
    ["Hit Refresh", "Explores organizational transformation through empathy, culture change, and innovation. Shows how reinvention drives long‑term relevance."],
    ["My Life in Full", "A memoir about leadership, resilience, and navigating global business challenges. Highlights the importance of values and determination."],
    ["Act Like a Leader, Think Like a Leader", "Encourages leaders to step into new roles by redefining their identity and behaviors. Focuses on experimentation and learning."],
    ["Immunity to Change", "Explains why people resist change even when they want it. Provides tools for uncovering hidden assumptions and unlocking growth."],
    ["The Practice of Adaptive Leadership", "Offers a framework for leading through complexity and uncertainty. Focuses on experimentation, learning, and mobilizing people."],
    ["Conscious Business", "Teaches how awareness, integrity, and responsibility improve leadership and organizational performance. Encourages mindful communication and decision‑making."],
    ["The Infinite Game", "Argues that leadership is an infinite game focused on long‑term purpose, not short‑term wins. Encourages resilience and ethical decision‑making."],
    ["Think Again", "Explores the power of rethinking and unlearning. Encourages intellectual humility and curiosity."],
    ["Originals", "Examines how non‑conformists drive innovation and change. Highlights the behaviors that help new ideas succeed."],
    ["Give and Take", "Shows how generosity can be a competitive advantage when practiced wisely. Explores different reciprocity styles and their impact on success."],
    ["Quiet", "Explores the strengths of introverts and how they contribute to leadership and creativity. Encourages environments where all personality types thrive."],
    ["Presence", "Shows how body language and mindset influence confidence and performance. Encourages practices that build personal presence."],
    ["The Obstacle Is the Way", "Uses Stoic philosophy to show how adversity becomes a path to growth. Encourages resilience and perspective."],
    ["Ego Is the Enemy", "Explores how ego undermines success and how humility drives long‑term achievement. Encourages discipline and self‑awareness."],
    ["The Motive", "Challenges leaders to examine why they lead and how their motives shape organizational health. Encourages responsibility over reward."],
    ["Unleashed", "Shows how leaders empower others by removing barriers and building trust. Focuses on inclusion and shared success."],
    ["How to Win Friends and Influence People", "A classic guide to interpersonal effectiveness through empathy, listening, and positive influence. Offers timeless principles for building relationships."],
    ["The Republic", "The Republic, by Plato, engages enduring questions about knowledge, ethics, meaning, and the good life, inviting readers to test assumptions and reason more carefully."],
    ["Nicomachean Ethics", "Nicomachean Ethics, by Aristotle, engages enduring questions about knowledge, ethics, meaning, and the good life, inviting readers to test assumptions and reason more carefully."],
    ["Meditations", "Meditations, by Marcus Aurelius, engages enduring questions about knowledge, ethics, meaning, and the good life, inviting readers to test assumptions and reason more carefully."],
    ["Confessions", "Confessions, by Augustine, engages enduring questions about knowledge, ethics, meaning, and the good life, inviting readers to test assumptions and reason more carefully."],
    ["Summa Theologica: Selections", "Summa Theologica: Selections, by Thomas Aquinas, engages enduring questions about knowledge, ethics, meaning, and the good life, inviting readers to test assumptions and reason more carefully."],
    ["Discourse on Method", "Discourse on Method, by René Descartes, engages enduring questions about knowledge, ethics, meaning, and the good life, inviting readers to test assumptions and reason more carefully."],
    ["Leviathan", "Leviathan, by Thomas Hobbes, engages enduring questions about knowledge, ethics, meaning, and the good life, inviting readers to test assumptions and reason more carefully."],
    ["An Essay Concerning Human Understanding", "An Essay Concerning Human Understanding, by John Locke, engages enduring questions about knowledge, ethics, meaning, and the good life, inviting readers to test assumptions and reason more carefully."],
    ["Critique of Pure Reason", "Critique of Pure Reason, by Immanuel Kant, engages enduring questions about knowledge, ethics, meaning, and the good life, inviting readers to test assumptions and reason more carefully."],
    ["Phenomenology of Spirit", "Phenomenology of Spirit, by G.W.F. Hegel, engages enduring questions about knowledge, ethics, meaning, and the good life, inviting readers to test assumptions and reason more carefully."],
    ["On Liberty", "On Liberty, by John Stuart Mill, engages enduring questions about knowledge, ethics, meaning, and the good life, inviting readers to test assumptions and reason more carefully."],
    ["Beyond Good and Evil", "Beyond Good and Evil, by Friedrich Nietzsche, engages enduring questions about knowledge, ethics, meaning, and the good life, inviting readers to test assumptions and reason more carefully."],
    ["The Art of Happiness", "The Art of Happiness, by Epicurus, engages enduring questions about knowledge, ethics, meaning, and the good life, inviting readers to test assumptions and reason more carefully."],
    ["The Principles of Psychology", "The Principles of Psychology, by William James, investigates how people think, feel, and behave, offering a useful lens for understanding motivation, relationships, and decision-making."],
    ["The Interpretation of Dreams", "The Interpretation of Dreams, by Sigmund Freud, investigates how people think, feel, and behave, offering a useful lens for understanding motivation, relationships, and decision-making."],
    ["Modern Man in Search of a Soul", "Modern Man in Search of a Soul, by C.G. Jung, investigates how people think, feel, and behave, offering a useful lens for understanding motivation, relationships, and decision-making."],
    ["Man and His Symbols", "Man and His Symbols, by C.G. Jung, investigates how people think, feel, and behave, offering a useful lens for understanding motivation, relationships, and decision-making."],
    ["Man’s Search for Meaning", "Man’s Search for Meaning, by Viktor E. Frankl, investigates how people think, feel, and behave, offering a useful lens for understanding motivation, relationships, and decision-making."],
    ["Influence", "Influence, by Robert B. Cialdini, investigates how people think, feel, and behave, offering a useful lens for understanding motivation, relationships, and decision-making."],
    ["Influence: The Psychology of Persuasion", "Influence, by Robert B. Cialdini, investigates how people think, feel, and behave, offering a useful lens for understanding motivation, relationships, and decision-making."],
    ["Thinking, Fast and Slow", "Thinking, Fast and Slow, by Daniel Kahneman, investigates how people think, feel, and behave, offering a useful lens for understanding motivation, relationships, and decision-making."],
    ["Judgment under Uncertainty", "Judgment under Uncertainty, by Daniel Kahneman, Paul Slovic & Amos Tversky, investigates how people think, feel, and behave, offering a useful lens for understanding motivation, relationships, and decision-making."],
    ["The Righteous Mind", "The Righteous Mind, by Jonathan Haidt, investigates how people think, feel, and behave, offering a useful lens for understanding motivation, relationships, and decision-making."],
    ["Flow", "Flow, by Mihaly Csikszentmihalyi, investigates how people think, feel, and behave, offering a useful lens for understanding motivation, relationships, and decision-making."],
    ["Mindset", "Mindset, by Carol S. Dweck, investigates how people think, feel, and behave, offering a useful lens for understanding motivation, relationships, and decision-making."],
    ["Attachment", "Attachment, by John Bowlby, investigates how people think, feel, and behave, offering a useful lens for understanding motivation, relationships, and decision-making."],
    ["Psycho-Cybernetics", "Psycho-Cybernetics, by Maxwell Maltz, investigates how people think, feel, and behave, offering a useful lens for understanding motivation, relationships, and decision-making."],
    ["The Laws of Human Nature", "The Laws of Human Nature, by Robert Greene, investigates how people think, feel, and behave, offering a useful lens for understanding motivation, relationships, and decision-making."],
    ["Atomic Habits", "Atomic Habits, by James Clear, investigates how people think, feel, and behave, offering a useful lens for understanding motivation, relationships, and decision-making."],
    ["When the Body Says No", "When the Body Says No, by Gabor Maté, investigates how people think, feel, and behave, offering a useful lens for understanding motivation, relationships, and decision-making."],
    ["The Power of Now", "The Power of Now, by Eckhart Tolle, investigates how people think, feel, and behave, offering a useful lens for understanding motivation, relationships, and decision-making."],
    ["The Drama of the Gifted Child", "The Drama of the Gifted Child, by Alice Miller, investigates how people think, feel, and behave, offering a useful lens for understanding motivation, relationships, and decision-making."],
    ["The Body Keeps the Score", "The Body Keeps the Score, by Bessel van der Kolk, investigates how people think, feel, and behave, offering a useful lens for understanding motivation, relationships, and decision-making."],
    ["The Histories", "The Histories, by Herodotus, uses the people and events of the past to explain how societies change, revealing patterns that continue to inform present-day choices."],
    ["History of the Peloponnesian War", "History of the Peloponnesian War, by Thucydides, uses the people and events of the past to explain how societies change, revealing patterns that continue to inform present-day choices."],
    ["The Decline and Fall of the Roman Empire", "The Decline and Fall of the Roman Empire, by Edward Gibbon, uses the people and events of the past to explain how societies change, revealing patterns that continue to inform present-day choices."],
    ["The Muqaddimah", "The Muqaddimah, by Ibn Khaldun, uses the people and events of the past to explain how societies change, revealing patterns that continue to inform present-day choices."],
    ["The History of the Russian Revolution", "The History of the Russian Revolution, by Leon Trotsky, uses the people and events of the past to explain how societies change, revealing patterns that continue to inform present-day choices."],
    ["The Guns of August", "The Guns of August, by Barbara W. Tuchman, uses the people and events of the past to explain how societies change, revealing patterns that continue to inform present-day choices."],
    ["Postwar", "Postwar, by Tony Judt, uses the people and events of the past to explain how societies change, revealing patterns that continue to inform present-day choices."],
    ["The Rise and Fall of the Third Reich", "The Rise and Fall of the Third Reich, by William L. Shirer, uses the people and events of the past to explain how societies change, revealing patterns that continue to inform present-day choices."],
    ["The Making of the Atomic Bomb", "The Making of the Atomic Bomb, by Richard Rhodes, uses the people and events of the past to explain how societies change, revealing patterns that continue to inform present-day choices."],
    ["Guns, Germs, and Steel", "Guns, Germs, and Steel, by Jared Diamond, uses the people and events of the past to explain how societies change, revealing patterns that continue to inform present-day choices."],
    ["The Silk Roads", "The Silk Roads, by Peter Frankopan, uses the people and events of the past to explain how societies change, revealing patterns that continue to inform present-day choices."],
    ["The Lessons of History", "The Lessons of History, by Will & Ariel Durant, uses the people and events of the past to explain how societies change, revealing patterns that continue to inform present-day choices."],
    ["The Wealth of Nations", "The Wealth of Nations, by Adam Smith, examines how incentives, institutions, trade-offs, and markets shape human behavior and the allocation of scarce resources."],
    ["Principles of Economics", "Principles of Economics, by Alfred Marshall, examines how incentives, institutions, trade-offs, and markets shape human behavior and the allocation of scarce resources."],
    ["Capital: Volume I", "Capital: Volume I, by Karl Marx, examines how incentives, institutions, trade-offs, and markets shape human behavior and the allocation of scarce resources."],
    ["The General Theory of Employment, Interest and Money", "The General Theory of Employment, Interest and Money, by John Maynard Keynes, examines how incentives, institutions, trade-offs, and markets shape human behavior and the allocation of scarce resources."],
    ["Capitalism and Freedom", "Capitalism and Freedom, by Milton Friedman, examines how incentives, institutions, trade-offs, and markets shape human behavior and the allocation of scarce resources."],
    ["The Road to Serfdom", "The Road to Serfdom, by F.A. Hayek, examines how incentives, institutions, trade-offs, and markets shape human behavior and the allocation of scarce resources."],
    ["Human Action", "Human Action, by Ludwig von Mises, examines how incentives, institutions, trade-offs, and markets shape human behavior and the allocation of scarce resources."],
    ["The Theory of Games and Economic Behavior", "The Theory of Games and Economic Behavior, by John von Neumann & Oskar Morgenstern, examines how incentives, institutions, trade-offs, and markets shape human behavior and the allocation of scarce resources."],
    ["Development as Freedom", "Development as Freedom, by Amartya Sen, examines how incentives, institutions, trade-offs, and markets shape human behavior and the allocation of scarce resources."],
    ["Why Nations Fail", "Why Nations Fail, by Daron Acemoglu & James A. Robinson, examines how incentives, institutions, trade-offs, and markets shape human behavior and the allocation of scarce resources."],
    ["Poor Economics", "Poor Economics, by Abhijit V. Banerjee & Esther Duflo, examines how incentives, institutions, trade-offs, and markets shape human behavior and the allocation of scarce resources."],
    ["Capital in the Twenty-First Century", "Capital in the Twenty-First Century, by Thomas Piketty, examines how incentives, institutions, trade-offs, and markets shape human behavior and the allocation of scarce resources."],
    ["The Spirit of the Laws", "The Spirit of the Laws, by Montesquieu, explores the rules, institutions, and reasoning that structure legal systems, clarifying how law affects rights, responsibilities, and public life."],
    ["Commentaries on the Laws of England", "Commentaries on the Laws of England, by William Blackstone, explores the rules, institutions, and reasoning that structure legal systems, clarifying how law affects rights, responsibilities, and public life."],
    ["The Federalist Papers", "The Federalist Papers, by Alexander Hamilton, James Madison & John Jay, explores the rules, institutions, and reasoning that structure legal systems, clarifying how law affects rights, responsibilities, and public life."],
    ["Democracy in America", "Democracy in America, by Alexis de Tocqueville, explores the rules, institutions, and reasoning that structure legal systems, clarifying how law affects rights, responsibilities, and public life."],
    ["On the Duty of Civil Disobedience", "On the Duty of Civil Disobedience, by Henry David Thoreau, explores the rules, institutions, and reasoning that structure legal systems, clarifying how law affects rights, responsibilities, and public life."],
    ["The Common Law", "The Common Law, by Oliver Wendell Holmes Jr., explores the rules, institutions, and reasoning that structure legal systems, clarifying how law affects rights, responsibilities, and public life."],
    ["The Concept of Law", "The Concept of Law, by H.L.A. Hart, explores the rules, institutions, and reasoning that structure legal systems, clarifying how law affects rights, responsibilities, and public life."],
    ["Law’s Empire", "Law’s Empire, by Ronald Dworkin, explores the rules, institutions, and reasoning that structure legal systems, clarifying how law affects rights, responsibilities, and public life."],
    ["A Theory of Justice", "A Theory of Justice, by John Rawls, explores the rules, institutions, and reasoning that structure legal systems, clarifying how law affects rights, responsibilities, and public life."],
    ["Anarchy, State, and Utopia", "Anarchy, State, and Utopia, by Robert Nozick, explores the rules, institutions, and reasoning that structure legal systems, clarifying how law affects rights, responsibilities, and public life."],
    ["The Morality of Law", "The Morality of Law, by Lon L. Fuller, explores the rules, institutions, and reasoning that structure legal systems, clarifying how law affects rights, responsibilities, and public life."],
    ["The Rule of Law", "The Rule of Law, by Tom Bingham, explores the rules, institutions, and reasoning that structure legal systems, clarifying how law affects rights, responsibilities, and public life."],
    ["Politics", "Politics, by Aristotle, studies power, government, and political institutions, offering context for how collective decisions are made and contested."],
    ["The Prince", "The Prince, by Niccolò Machiavelli, studies power, government, and political institutions, offering context for how collective decisions are made and contested."],
    ["The Social Contract", "The Social Contract, by Jean-Jacques Rousseau, studies power, government, and political institutions, offering context for how collective decisions are made and contested."],
    ["Second Treatise of Government", "Second Treatise of Government, by John Locke, studies power, government, and political institutions, offering context for how collective decisions are made and contested."],
    ["Reflections on the Revolution in France", "Reflections on the Revolution in France, by Edmund Burke, studies power, government, and political institutions, offering context for how collective decisions are made and contested."],
    ["The Communist Manifesto", "The Communist Manifesto, by Karl Marx & Friedrich Engels, studies power, government, and political institutions, offering context for how collective decisions are made and contested."],
    ["The Origins of Totalitarianism", "The Origins of Totalitarianism, by Hannah Arendt, studies power, government, and political institutions, offering context for how collective decisions are made and contested."],
    ["The Open Society and Its Enemies", "The Open Society and Its Enemies, by Karl Popper, studies power, government, and political institutions, offering context for how collective decisions are made and contested."],
    ["Political Order in Changing Societies", "Political Order in Changing Societies, by Samuel P. Huntington, studies power, government, and political institutions, offering context for how collective decisions are made and contested."],
    ["Polyarchy", "Polyarchy, by Robert A. Dahl, studies power, government, and political institutions, offering context for how collective decisions are made and contested."],
    ["Seeing Like a State", "Seeing Like a State, by James C. Scott, studies power, government, and political institutions, offering context for how collective decisions are made and contested."],
    ["The End of History and the Last Man", "The End of History and the Last Man, by Francis Fukuyama, studies power, government, and political institutions, offering context for how collective decisions are made and contested."],
    ["Elements", "Elements, by Euclid, develops mathematical ideas and ways of reasoning, showing how abstraction, proof, and quantitative thinking illuminate complex problems."],
    ["The Sand Reckoner", "The Sand Reckoner, by Archimedes, develops mathematical ideas and ways of reasoning, showing how abstraction, proof, and quantitative thinking illuminate complex problems."],
    ["The Nine Chapters on the Mathematical Art", "The Nine Chapters on the Mathematical Art, by Anonymous Chinese scholars, develops mathematical ideas and ways of reasoning, showing how abstraction, proof, and quantitative thinking illuminate complex problems."],
    ["Ars Magna", "Ars Magna, by Gerolamo Cardano, develops mathematical ideas and ways of reasoning, showing how abstraction, proof, and quantitative thinking illuminate complex problems."],
    ["La Géométrie", "La Géométrie, by René Descartes, develops mathematical ideas and ways of reasoning, showing how abstraction, proof, and quantitative thinking illuminate complex problems."],
    ["Principia Mathematica", "Principia Mathematica, by Alfred North Whitehead & Bertrand Russell, develops mathematical ideas and ways of reasoning, showing how abstraction, proof, and quantitative thinking illuminate complex problems."],
    ["A Course of Pure Mathematics", "A Course of Pure Mathematics, by G.H. Hardy, develops mathematical ideas and ways of reasoning, showing how abstraction, proof, and quantitative thinking illuminate complex problems."],
    ["What Is Mathematics?", "What Is Mathematics?, by Richard Courant & Herbert Robbins, develops mathematical ideas and ways of reasoning, showing how abstraction, proof, and quantitative thinking illuminate complex problems."],
    ["How to Solve It", "How to Solve It, by George Pólya, develops mathematical ideas and ways of reasoning, showing how abstraction, proof, and quantitative thinking illuminate complex problems."],
    ["Gödel, Escher, Bach", "Gödel, Escher, Bach, by Douglas Hofstadter, develops mathematical ideas and ways of reasoning, showing how abstraction, proof, and quantitative thinking illuminate complex problems."],
    ["The Princeton Companion to Mathematics", "The Princeton Companion to Mathematics, by Timothy Gowers, June Barrow-Green & Imre Leader, develops mathematical ideas and ways of reasoning, showing how abstraction, proof, and quantitative thinking illuminate complex problems."],
    ["Concrete Mathematics", "Concrete Mathematics, by Ronald Graham, Donald Knuth & Oren Patashnik, develops mathematical ideas and ways of reasoning, showing how abstraction, proof, and quantitative thinking illuminate complex problems."],
    ["Dialogue Concerning the Two Chief World Systems", "Dialogue Concerning the Two Chief World Systems, by Galileo Galilei, explores the principles that govern matter, energy, space, and time, connecting scientific discovery with a deeper picture of the physical world."],
    ["Mathematical Principles of Natural Philosophy", "Mathematical Principles of Natural Philosophy, by Isaac Newton, explores the principles that govern matter, energy, space, and time, connecting scientific discovery with a deeper picture of the physical world."],
    ["Treatise on Electricity and Magnetism", "Treatise on Electricity and Magnetism, by James Clerk Maxwell, explores the principles that govern matter, energy, space, and time, connecting scientific discovery with a deeper picture of the physical world."],
    ["The Evolution of Physics", "The Evolution of Physics, by Albert Einstein & Leopold Infeld, explores the principles that govern matter, energy, space, and time, connecting scientific discovery with a deeper picture of the physical world."],
    ["Relativity", "Relativity, by Albert Einstein, explores the principles that govern matter, energy, space, and time, connecting scientific discovery with a deeper picture of the physical world."],
    ["The Character of Physical Law", "The Character of Physical Law, by Richard Feynman, explores the principles that govern matter, energy, space, and time, connecting scientific discovery with a deeper picture of the physical world."],
    ["The Feynman Lectures on Physics", "The Feynman Lectures on Physics, by Richard Feynman, Robert Leighton & Matthew Sands, explores the principles that govern matter, energy, space, and time, connecting scientific discovery with a deeper picture of the physical world."],
    ["QED", "QED, by Richard Feynman, explores the principles that govern matter, energy, space, and time, connecting scientific discovery with a deeper picture of the physical world."],
    ["The Road to Reality", "The Road to Reality, by Roger Penrose, explores the principles that govern matter, energy, space, and time, connecting scientific discovery with a deeper picture of the physical world."],
    ["The First Three Minutes", "The First Three Minutes, by Steven Weinberg, explores the principles that govern matter, energy, space, and time, connecting scientific discovery with a deeper picture of the physical world."],
    ["A Brief History of Time", "A Brief History of Time, by Stephen Hawking, explores the principles that govern matter, energy, space, and time, connecting scientific discovery with a deeper picture of the physical world."],
    ["The Elegant Universe", "The Elegant Universe, by Brian Greene, explores the principles that govern matter, energy, space, and time, connecting scientific discovery with a deeper picture of the physical world."],
    ["On the Origin of Species", "On the Origin of Species, by Charles Darwin, examines living systems and evolution, showing how organisms adapt, interact, and produce the complexity found in nature."],
    ["The Descent of Man", "The Descent of Man, by Charles Darwin, examines living systems and evolution, showing how organisms adapt, interact, and produce the complexity found in nature."],
    ["The Selfish Gene", "The Selfish Gene, by Richard Dawkins, examines living systems and evolution, showing how organisms adapt, interact, and produce the complexity found in nature."],
    ["The Extended Phenotype", "The Extended Phenotype, by Richard Dawkins, examines living systems and evolution, showing how organisms adapt, interact, and produce the complexity found in nature."],
    ["The Structure of Evolutionary Theory", "The Structure of Evolutionary Theory, by Stephen Jay Gould, examines living systems and evolution, showing how organisms adapt, interact, and produce the complexity found in nature."],
    ["Wonderful Life", "Wonderful Life, by Stephen Jay Gould, examines living systems and evolution, showing how organisms adapt, interact, and produce the complexity found in nature."],
    ["The Double Helix", "The Double Helix, by James D. Watson, examines living systems and evolution, showing how organisms adapt, interact, and produce the complexity found in nature."],
    ["Molecular Biology of the Gene", "Molecular Biology of the Gene, by James D. Watson et al., examines living systems and evolution, showing how organisms adapt, interact, and produce the complexity found in nature."],
    ["The Eighth Day of Creation", "The Eighth Day of Creation, by Horace Freeland Judson, examines living systems and evolution, showing how organisms adapt, interact, and produce the complexity found in nature."],
    ["The Vital Question", "The Vital Question, by Nick Lane, examines living systems and evolution, showing how organisms adapt, interact, and produce the complexity found in nature."],
    ["The Gene", "The Gene, by Siddhartha Mukherjee, examines living systems and evolution, showing how organisms adapt, interact, and produce the complexity found in nature."],
    ["The Song of the Cell", "The Song of the Cell, by Siddhartha Mukherjee, examines living systems and evolution, showing how organisms adapt, interact, and produce the complexity found in nature."],
    ["De Architectura", "De Architectura, by Vitruvius, shows how scientific principles and disciplined design turn constraints into reliable solutions to real-world problems."],
    ["Two New Sciences", "Two New Sciences, by Galileo Galilei, shows how scientific principles and disciplined design turn constraints into reliable solutions to real-world problems."],
    ["On the Art of Building in Ten Books", "On the Art of Building in Ten Books, by Leon Battista Alberti, shows how scientific principles and disciplined design turn constraints into reliable solutions to real-world problems."],
    ["The New Science of Strong Materials", "The New Science of Strong Materials, by J.E. Gordon, shows how scientific principles and disciplined design turn constraints into reliable solutions to real-world problems."],
    ["Structures", "Structures, by J.E. Gordon, shows how scientific principles and disciplined design turn constraints into reliable solutions to real-world problems."],
    ["The Design of Everyday Things", "The Design of Everyday Things, by Don Norman, shows how scientific principles and disciplined design turn constraints into reliable solutions to real-world problems."],
    ["The Sciences of the Artificial", "The Sciences of the Artificial, by Herbert A. Simon, shows how scientific principles and disciplined design turn constraints into reliable solutions to real-world problems."],
    ["To Engineer Is Human", "To Engineer Is Human, by Henry Petroski, shows how scientific principles and disciplined design turn constraints into reliable solutions to real-world problems."],
    ["The Existential Pleasures of Engineering", "The Existential Pleasures of Engineering, by Samuel C. Florman, shows how scientific principles and disciplined design turn constraints into reliable solutions to real-world problems."],
    ["Skunk Works", "Skunk Works, by Ben R. Rich & Leo Janos, shows how scientific principles and disciplined design turn constraints into reliable solutions to real-world problems."],
    ["The Goal", "The Goal, by Eliyahu M. Goldratt, shows how scientific principles and disciplined design turn constraints into reliable solutions to real-world problems."],
    ["How Buildings Learn", "How Buildings Learn, by Stewart Brand, shows how scientific principles and disciplined design turn constraints into reliable solutions to real-world problems."],
    ["The Art of Computer Programming", "The Art of Computer Programming, by Donald E. Knuth, explores computation, software, and information, linking foundational concepts with the systems that shape modern life."],
    ["Structure and Interpretation of Computer Programs", "Structure and Interpretation of Computer Programs, by Harold Abelson & Gerald Jay Sussman, explores computation, software, and information, linking foundational concepts with the systems that shape modern life."],
    ["Introduction to Algorithms", "Introduction to Algorithms, by Thomas H. Cormen et al., explores computation, software, and information, linking foundational concepts with the systems that shape modern life."],
    ["Computer Systems: A Programmer’s Perspective", "Computer Systems: A Programmer’s Perspective, by Randal E. Bryant & David R. O’Hallaron, explores computation, software, and information, linking foundational concepts with the systems that shape modern life."],
    ["Design Patterns", "Design Patterns, by Erich Gamma et al., explores computation, software, and information, linking foundational concepts with the systems that shape modern life."],
    ["The Mythical Man-Month", "The Mythical Man-Month, by Frederick P. Brooks Jr., explores computation, software, and information, linking foundational concepts with the systems that shape modern life."],
    ["Code Complete", "Code Complete, by Steve McConnell, explores computation, software, and information, linking foundational concepts with the systems that shape modern life."],
    ["Clean Code", "Clean Code, by Robert C. Martin, explores computation, software, and information, linking foundational concepts with the systems that shape modern life."],
    ["Refactoring", "Refactoring, by Martin Fowler, explores computation, software, and information, linking foundational concepts with the systems that shape modern life."],
    ["Compilers: Principles, Techniques, and Tools", "Compilers: Principles, Techniques, and Tools, by Alfred V. Aho et al., explores computation, software, and information, linking foundational concepts with the systems that shape modern life."],
    ["Database System Concepts", "Database System Concepts, by Abraham Silberschatz, Henry F. Korth & S. Sudarshan, explores computation, software, and information, linking foundational concepts with the systems that shape modern life."],
    ["Computer Networking: A Top-Down Approach", "Computer Networking: A Top-Down Approach, by James F. Kurose & Keith W. Ross, explores computation, software, and information, linking foundational concepts with the systems that shape modern life."],
    ["Computing Machinery and Intelligence", "Computing Machinery and Intelligence, by Alan M. Turing, examines the methods, possibilities, and consequences of intelligent machines, connecting technical progress with strategic and social questions."],
    ["Perceptrons", "Perceptrons, by Marvin Minsky & Seymour Papert, examines the methods, possibilities, and consequences of intelligent machines, connecting technical progress with strategic and social questions."],
    ["Artificial Intelligence: A Modern Approach", "Artificial Intelligence: A Modern Approach, by Stuart Russell & Peter Norvig, examines the methods, possibilities, and consequences of intelligent machines, connecting technical progress with strategic and social questions."],
    ["Pattern Recognition and Machine Learning", "Pattern Recognition and Machine Learning, by Christopher M. Bishop, examines the methods, possibilities, and consequences of intelligent machines, connecting technical progress with strategic and social questions."],
    ["The Elements of Statistical Learning", "The Elements of Statistical Learning, by Trevor Hastie, Robert Tibshirani & Jerome Friedman, examines the methods, possibilities, and consequences of intelligent machines, connecting technical progress with strategic and social questions."],
    ["Probabilistic Graphical Models", "Probabilistic Graphical Models, by Daphne Koller & Nir Friedman, examines the methods, possibilities, and consequences of intelligent machines, connecting technical progress with strategic and social questions."],
    ["Deep Learning", "Deep Learning, by Ian Goodfellow, Yoshua Bengio & Aaron Courville, examines the methods, possibilities, and consequences of intelligent machines, connecting technical progress with strategic and social questions."],
    ["Reinforcement Learning", "Reinforcement Learning, by Richard S. Sutton & Andrew G. Barto, examines the methods, possibilities, and consequences of intelligent machines, connecting technical progress with strategic and social questions."],
    ["Human Compatible", "Human Compatible, by Stuart Russell, examines the methods, possibilities, and consequences of intelligent machines, connecting technical progress with strategic and social questions."],
    ["The Alignment Problem", "The Alignment Problem, by Brian Christian, examines the methods, possibilities, and consequences of intelligent machines, connecting technical progress with strategic and social questions."],
    ["Superintelligence", "Superintelligence, by Nick Bostrom, examines the methods, possibilities, and consequences of intelligent machines, connecting technical progress with strategic and social questions."],
    ["Life 3.0", "Life 3.0, by Max Tegmark, examines the methods, possibilities, and consequences of intelligent machines, connecting technical progress with strategic and social questions."],
    ["Competitive Strategy", "Competitive Strategy, by Michael E. Porter, examines how organizations choose where to compete, create differentiated value, and sustain an advantage over time."],
    ["Competitive Advantage", "Competitive Advantage, by Michael E. Porter, examines how organizations choose where to compete, create differentiated value, and sustain an advantage over time."],
    ["The Innovator’s Dilemma", "The Innovator’s Dilemma, by Clayton M. Christensen, examines how organizations choose where to compete, create differentiated value, and sustain an advantage over time."],
    ["Crossing the Chasm", "Crossing the Chasm, by Geoffrey A. Moore, examines how organizations choose where to compete, create differentiated value, and sustain an advantage over time."],
    ["The Strategy-Focused Organization", "The Strategy-Focused Organization, by Robert S. Kaplan & David P. Norton, examines how organizations choose where to compete, create differentiated value, and sustain an advantage over time."],
    ["The Fifth Discipline", "The Fifth Discipline, by Peter M. Senge, examines how organizations choose where to compete, create differentiated value, and sustain an advantage over time."],
    ["Built to Last", "Built to Last, by Jim Collins & Jerry I. Porras, examines how organizations choose where to compete, create differentiated value, and sustain an advantage over time."],
    ["The Art of War", "The Art of War, by Sun Tzu, examines conflict through strategy, leadership, technology, and human experience, drawing lessons from the causes and consequences of war."],
    ["The Gallic War", "The Gallic War, by Julius Caesar, examines conflict through strategy, leadership, technology, and human experience, drawing lessons from the causes and consequences of war."],
    ["The Campaigns of Alexander", "The Campaigns of Alexander, by Arrian, examines conflict through strategy, leadership, technology, and human experience, drawing lessons from the causes and consequences of war."],
    ["On War", "On War, by Carl von Clausewitz, examines conflict through strategy, leadership, technology, and human experience, drawing lessons from the causes and consequences of war."],
    ["The Fifteen Decisive Battles of the World", "The Fifteen Decisive Battles of the World, by Edward Shepherd Creasy, examines conflict through strategy, leadership, technology, and human experience, drawing lessons from the causes and consequences of war."],
    ["The Face of Battle", "The Face of Battle, by John Keegan, examines conflict through strategy, leadership, technology, and human experience, drawing lessons from the causes and consequences of war."],
    ["A History of Warfare", "A History of Warfare, by John Keegan, examines conflict through strategy, leadership, technology, and human experience, drawing lessons from the causes and consequences of war."],
    ["Makers of Modern Strategy", "Makers of Modern Strategy, by Peter Paret, Gordon A. Craig & Felix Gilbert, examines conflict through strategy, leadership, technology, and human experience, drawing lessons from the causes and consequences of war."],
    ["The Second World War", "The Second World War, by Winston Churchill, examines conflict through strategy, leadership, technology, and human experience, drawing lessons from the causes and consequences of war."],
    ["A World at Arms", "A World at Arms, by Gerhard L. Weinberg, examines conflict through strategy, leadership, technology, and human experience, drawing lessons from the causes and consequences of war."],
    ["The Rise and Fall of the Great Powers", "The Rise and Fall of the Great Powers, by Paul Kennedy, examines conflict through strategy, leadership, technology, and human experience, drawing lessons from the causes and consequences of war."],
    ["Security Analysis", "Security Analysis, by Benjamin Graham & David Dodd, explains ideas that shape investing, markets, and financial judgment, helping readers evaluate risk, value, and long-term outcomes."],
    ["The Intelligent Investor", "The Intelligent Investor, by Benjamin Graham, explains ideas that shape investing, markets, and financial judgment, helping readers evaluate risk, value, and long-term outcomes."],
    ["Common Stocks and Uncommon Profits", "Common Stocks and Uncommon Profits, by Philip A. Fisher, explains ideas that shape investing, markets, and financial judgment, helping readers evaluate risk, value, and long-term outcomes."],
    ["A Random Walk Down Wall Street", "A Random Walk Down Wall Street, by Burton G. Malkiel, explains ideas that shape investing, markets, and financial judgment, helping readers evaluate risk, value, and long-term outcomes."],
    ["The Essays of Warren Buffett", "The Essays of Warren Buffett, by Warren Buffett & Lawrence A. Cunningham, explains ideas that shape investing, markets, and financial judgment, helping readers evaluate risk, value, and long-term outcomes."],
    ["Against the Gods", "Against the Gods, by Peter L. Bernstein, explains ideas that shape investing, markets, and financial judgment, helping readers evaluate risk, value, and long-term outcomes."],
    ["Capital Ideas", "Capital Ideas, by Peter L. Bernstein, explains ideas that shape investing, markets, and financial judgment, helping readers evaluate risk, value, and long-term outcomes."],
    ["Options, Futures, and Other Derivatives", "Options, Futures, and Other Derivatives, by John C. Hull, explains ideas that shape investing, markets, and financial judgment, helping readers evaluate risk, value, and long-term outcomes."],
    ["The Alchemy of Finance", "The Alchemy of Finance, by George Soros, explains ideas that shape investing, markets, and financial judgment, helping readers evaluate risk, value, and long-term outcomes."],
    ["Margin of Safety", "Margin of Safety, by Seth A. Klarman, explains ideas that shape investing, markets, and financial judgment, helping readers evaluate risk, value, and long-term outcomes."],
    ["When Genius Failed", "When Genius Failed, by Roger Lowenstein, explains ideas that shape investing, markets, and financial judgment, helping readers evaluate risk, value, and long-term outcomes."],
    ["The Most Important Thing", "The Most Important Thing, by Howard Marks, explains ideas that shape investing, markets, and financial judgment, helping readers evaluate risk, value, and long-term outcomes."],
    ["Poor Charlie’s Almanack", "Poor Charlie’s Almanack, by Charles T. Munger, explains ideas that shape investing, markets, and financial judgment, helping readers evaluate risk, value, and long-term outcomes."],
    ["One Up on Wall Street", "One Up on Wall Street, by Peter Lynch, explains ideas that shape investing, markets, and financial judgment, helping readers evaluate risk, value, and long-term outcomes."],
    ["The Four Books of Architecture", "The Four Books of Architecture, by Andrea Palladio, explores how design, materials, place, and human needs come together in the built environment."],
    ["The Seven Lamps of Architecture", "The Seven Lamps of Architecture, by John Ruskin, explores how design, materials, place, and human needs come together in the built environment."],
    ["The Stones of Venice", "The Stones of Venice, by John Ruskin, explores how design, materials, place, and human needs come together in the built environment."],
    ["Towards a New Architecture", "Towards a New Architecture, by Le Corbusier, explores how design, materials, place, and human needs come together in the built environment."],
    ["Complexity and Contradiction in Architecture", "Complexity and Contradiction in Architecture, by Robert Venturi, explores how design, materials, place, and human needs come together in the built environment."],
    ["The Death and Life of Great American Cities", "The Death and Life of Great American Cities, by Jane Jacobs, explores how design, materials, place, and human needs come together in the built environment."],
    ["A Pattern Language", "A Pattern Language, by Christopher Alexander et al., explores how design, materials, place, and human needs come together in the built environment."],
    ["The Timeless Way of Building", "The Timeless Way of Building, by Christopher Alexander, explores how design, materials, place, and human needs come together in the built environment."],
    ["Delirious New York", "Delirious New York, by Rem Koolhaas, explores how design, materials, place, and human needs come together in the built environment."],
    ["Learning from Las Vegas", "Learning from Las Vegas, by Robert Venturi, Denise Scott Brown & Steven Izenour, explores how design, materials, place, and human needs come together in the built environment."],
    ["101 Things I Learned in Architecture School", "101 Things I Learned in Architecture School, by Matthew Frederick, explores how design, materials, place, and human needs come together in the built environment."],
    ["The Iliad", "The Iliad, by Homer, uses narrative, character, and language to illuminate human experience, inviting reflection on identity, society, and moral choice."],
    ["The Odyssey", "The Odyssey, by Homer, uses narrative, character, and language to illuminate human experience, inviting reflection on identity, society, and moral choice."],
    ["The Aeneid", "The Aeneid, by Virgil, uses narrative, character, and language to illuminate human experience, inviting reflection on identity, society, and moral choice."],
    ["The Divine Comedy", "The Divine Comedy, by Dante Alighieri, uses narrative, character, and language to illuminate human experience, inviting reflection on identity, society, and moral choice."],
    ["The Canterbury Tales", "The Canterbury Tales, by Geoffrey Chaucer, uses narrative, character, and language to illuminate human experience, inviting reflection on identity, society, and moral choice."],
    ["Don Quixote", "Don Quixote, by Miguel de Cervantes, uses narrative, character, and language to illuminate human experience, inviting reflection on identity, society, and moral choice."],
    ["Hamlet", "Hamlet, by William Shakespeare, uses narrative, character, and language to illuminate human experience, inviting reflection on identity, society, and moral choice."],
    ["Paradise Lost", "Paradise Lost, by John Milton, uses narrative, character, and language to illuminate human experience, inviting reflection on identity, society, and moral choice."],
    ["Faust", "Faust, by Johann Wolfgang von Goethe, uses narrative, character, and language to illuminate human experience, inviting reflection on identity, society, and moral choice."],
    ["Pride and Prejudice", "Pride and Prejudice, by Jane Austen, uses narrative, character, and language to illuminate human experience, inviting reflection on identity, society, and moral choice."],
    ["War and Peace", "War and Peace, by Leo Tolstoy, uses narrative, character, and language to illuminate human experience, inviting reflection on identity, society, and moral choice."],
    ["Ulysses", "Ulysses, by James Joyce, uses narrative, character, and language to illuminate human experience, inviting reflection on identity, society, and moral choice."],
    ["The Craft of Intelligence", "The Craft of Intelligence, by Allen W. Dulles, explores intelligence gathering, secrecy, analysis, and covert action, revealing how incomplete information shapes national decisions."],
    ["The Spy and the Traitor: The Greatest Espionage Story of the Cold War", "The Spy and the Traitor: The Greatest Espionage Story of the Cold War, by Ben Macintyre, explores intelligence gathering, secrecy, analysis, and covert action, revealing how incomplete information shapes national decisions."],
    ["Legacy of Ashes: The History of the CIA", "Legacy of Ashes: The History of the CIA, by Tim Weiner, explores intelligence gathering, secrecy, analysis, and covert action, revealing how incomplete information shapes national decisions."],
    ["Ghost Wars: The Secret History of the CIA, Afghanistan, and Bin Laden, from the Soviet Invasion to September 10, 2001", "Ghost Wars: The Secret History of the CIA, Afghanistan, and Bin Laden, from the Soviet Invasion to September 10, 2001, by Steve Coll, explores intelligence gathering, secrecy, analysis, and covert action, revealing how incomplete information shapes national decisions."],
    ["The Secret World: A History of Intelligence", "The Secret World: A History of Intelligence, by Christopher Andrew, explores intelligence gathering, secrecy, analysis, and covert action, revealing how incomplete information shapes national decisions."],
    ["Directorate S: The CIA and America’s Secret Wars in Afghanistan and Pakistan", "Directorate S: The CIA and America’s Secret Wars in Afghanistan and Pakistan, by Steve Coll, explores intelligence gathering, secrecy, analysis, and covert action, revealing how incomplete information shapes national decisions."],
    ["The Sword and the Shield: The Mitrokhin Archive and the Secret History of the KGB", "The Sword and the Shield: The Mitrokhin Archive and the Secret History of the KGB, by Christopher Andrew and Vasili Mitrokhin, explores intelligence gathering, secrecy, analysis, and covert action, revealing how incomplete information shapes national decisions."],
    ["Bureaucracy", "Bureaucracy, by Ludwig von Mises, examines how public institutions turn policy into action, with attention to governance, accountability, and effective service."],
    ["Street-Level Bureaucracy: Dilemmas of the Individual in Public Services", "Street-Level Bureaucracy: Dilemmas of the Individual in Public Services, by Michael Lipsky, examines how public institutions turn policy into action, with attention to governance, accountability, and effective service."],
    ["Introducing Public Administration", "Introducing Public Administration, by Jay M. Shafritz, E. W. Russell, Christopher P. Borick, and Albert C. Hyde, examines how public institutions turn policy into action, with attention to governance, accountability, and effective service."],
    ["The Logic of Collective Action: Public Goods and the Theory of Groups", "The Logic of Collective Action: Public Goods and the Theory of Groups, by Mancur Olson, examines how public institutions turn policy into action, with attention to governance, accountability, and effective service."],
    ["The Calculus of Consent: Logical Foundations of Constitutional Democracy", "The Calculus of Consent: Logical Foundations of Constitutional Democracy, by James M. Buchanan and Gordon Tullock, examines how public institutions turn policy into action, with attention to governance, accountability, and effective service."],
    ["Superforecasting: The Art and Science of Prediction", "Superforecasting: The Art and Science of Prediction, by Philip E. Tetlock and Dan Gardner, offers tools for making sound choices under uncertainty, including ways to recognize bias, weigh evidence, and manage risk."],
    ["Sources of Power: How People Make Decisions", "Sources of Power: How People Make Decisions, by Gary Klein, offers tools for making sound choices under uncertainty, including ways to recognize bias, weigh evidence, and manage risk."],
    ["Thinking in Bets: Making Smarter Decisions When You Don’t Have All the Facts", "Thinking in Bets: Making Smarter Decisions When You Don’t Have All the Facts, by Annie Duke, offers tools for making sound choices under uncertainty, including ways to recognize bias, weigh evidence, and manage risk."],
    ["The Black Swan: The Impact of the Highly Improbable", "The Black Swan: The Impact of the Highly Improbable, by Nassim Nicholas Taleb, offers tools for making sound choices under uncertainty, including ways to recognize bias, weigh evidence, and manage risk."],
    ["Fooled by Randomness: The Hidden Role of Chance in Life and in the Markets", "Fooled by Randomness: The Hidden Role of Chance in Life and in the Markets, by Nassim Nicholas Taleb, offers tools for making sound choices under uncertainty, including ways to recognize bias, weigh evidence, and manage risk."],
    ["The Logic of Failure: Recognizing and Avoiding Error in Complex Situations", "The Logic of Failure: Recognizing and Avoiding Error in Complex Situations, by Dietrich Dörner, offers tools for making sound choices under uncertainty, including ways to recognize bias, weigh evidence, and manage risk."],
    ["Made to Stick: Why Some Ideas Survive and Others Die", "Made to Stick: Why Some Ideas Survive and Others Die, by Chip Heath and Dan Heath, explores how ideas are expressed, heard, and understood, with lessons for persuasion, clarity, and stronger professional relationships."],
    ["Thank You for Arguing: What Aristotle, Lincoln, and Homer Simpson Can Teach Us About the Art of Persuasion", "Thank You for Arguing: What Aristotle, Lincoln, and Homer Simpson Can Teach Us About the Art of Persuasion, by Jay Heinrichs, explores how ideas are expressed, heard, and understood, with lessons for persuasion, clarity, and stronger professional relationships."],
    ["Resonate: Present Visual Stories that Transform Audiences", "Resonate: Present Visual Stories that Transform Audiences, by Nancy Duarte, explores how ideas are expressed, heard, and understood, with lessons for persuasion, clarity, and stronger professional relationships."],
    ["On Writing Well: The Classic Guide to Writing Nonfiction", "On Writing Well: The Classic Guide to Writing Nonfiction, by William Zinsser, explores how ideas are expressed, heard, and understood, with lessons for persuasion, clarity, and stronger professional relationships."],
    ["The Pyramid Principle: Logic in Writing and Thinking", "The Pyramid Principle: Logic in Writing and Thinking, by Barbara Minto, explores how ideas are expressed, heard, and understood, with lessons for persuasion, clarity, and stronger professional relationships."],
    ["HBR Guide to Better Business Writing", "HBR Guide to Better Business Writing, by Bryan A. Garner, explores how ideas are expressed, heard, and understood, with lessons for persuasion, clarity, and stronger professional relationships."],
    ["Power: Why Some People Have It—and Others Don’t", "Power: Why Some People Have It—and Others Don’t, by Jeffrey Pfeffer, explores power, influence, and competing interests inside organizations, helping readers navigate informal dynamics more thoughtfully."],
    ["The 48 Laws of Power", "The 48 Laws of Power, by Robert Greene, explores power, influence, and competing interests inside organizations, helping readers navigate informal dynamics more thoughtfully."],
    ["The Dictator’s Handbook: Why Bad Behavior Is Almost Always Good Politics", "The Dictator’s Handbook: Why Bad Behavior Is Almost Always Good Politics, by Bruce Bueno de Mesquita and Alastair Smith, explores power, influence, and competing interests inside organizations, helping readers navigate informal dynamics more thoughtfully."],
    ["Influence Without Authority", "Influence Without Authority, by Allan R. Cohen and David L. Bradford, explores power, influence, and competing interests inside organizations, helping readers navigate informal dynamics more thoughtfully."],
    ["Domain-Driven Design: Tackling Complexity in the Heart of Software", "Domain-Driven Design: Tackling Complexity in the Heart of Software, by Eric Evans, connects business goals with organizational and technology design, showing how coherent systems support change at scale."],
    ["Enterprise Integration Patterns: Designing, Building, and Deploying Messaging Solutions", "Enterprise Integration Patterns: Designing, Building, and Deploying Messaging Solutions, by Gregor Hohpe and Bobby Woolf, connects business goals with organizational and technology design, showing how coherent systems support change at scale."],
    ["Software Architecture in Practice", "Software Architecture in Practice, by Len Bass, Paul Clements, and Rick Kazman, connects business goals with organizational and technology design, showing how coherent systems support change at scale."],
    ["Building Evolutionary Architectures", "Building Evolutionary Architectures, by Neal Ford, Rebecca Parsons, and Patrick Kua, connects business goals with organizational and technology design, showing how coherent systems support change at scale."],
    ["The Art of Scalability: Scalable Web Architecture, Processes, and Organizations for the Modern Enterprise", "The Art of Scalability: Scalable Web Architecture, Processes, and Organizations for the Modern Enterprise, by Martin L. Abbott and Michael T. Fisher, connects business goals with organizational and technology design, showing how coherent systems support change at scale."],
    ["Enterprise Architecture as Strategy: Creating a Foundation for Business Execution", "Enterprise Architecture as Strategy: Creating a Foundation for Business Execution, by Jeanne W. Ross, Peter Weill, and David C. Robertson, connects business goals with organizational and technology design, showing how coherent systems support change at scale."],
    ["Site Reliability Engineering: How Google Runs Production Systems", "Site Reliability Engineering: How Google Runs Production Systems, by Betsy Beyer, Chris Jones, Jennifer Petoff, and Niall Richard Murphy, editors, explains practices for operating dependable technology services, balancing reliability, speed, automation, and continuous learning."],
    ["Seeking SRE: Conversations About Running Production Systems at Scale", "Seeking SRE: Conversations About Running Production Systems at Scale, by David N. Blank-Edelman, editor, explains practices for operating dependable technology services, balancing reliability, speed, automation, and continuous learning."],
    ["Time Management for System Administrators", "Time Management for System Administrators, by Thomas A. Limoncelli, explains practices for operating dependable technology services, balancing reliability, speed, automation, and continuous learning."],
    ["The Practice of Cloud System Administration: Designing and Operating Large Distributed Systems, Volume 2", "The Practice of Cloud System Administration: Designing and Operating Large Distributed Systems, Volume 2, by Thomas A. Limoncelli, Strata R. Chalup, and Christina J. Hogan, explains practices for operating dependable technology services, balancing reliability, speed, automation, and continuous learning."],
    ["Release It!: Design and Deploy Production-Ready Software", "Release It!: Design and Deploy Production-Ready Software, by Michael T. Nygard, explains practices for operating dependable technology services, balancing reliability, speed, automation, and continuous learning."],
    ["Chaos Engineering: System Resiliency in Practice", "Chaos Engineering: System Resiliency in Practice, by Casey Rosenthal and Nora Jones, explains practices for operating dependable technology services, balancing reliability, speed, automation, and continuous learning."],
    ["Titan: The Life of John D. Rockefeller, Sr.", "Titan: The Life of John D. Rockefeller, Sr., by Ron Chernow, traces how ambitious people turn ideas into institutions, technologies, and lasting change through invention and execution."],
    ["Steve Jobs", "Steve Jobs, by Walter Isaacson, traces how ambitious people turn ideas into institutions, technologies, and lasting change through invention and execution."],
    ["Benjamin Franklin: An American Life", "Benjamin Franklin: An American Life, by Walter Isaacson, traces how ambitious people turn ideas into institutions, technologies, and lasting change through invention and execution."],
    ["The Wright Brothers", "The Wright Brothers, by David McCullough, traces how ambitious people turn ideas into institutions, technologies, and lasting change through invention and execution."],
    ["The Last Lion: Visions of Glory, 1874–1932", "The Last Lion: Visions of Glory, 1874–1932, by William Manchester, traces how ambitious people turn ideas into institutions, technologies, and lasting change through invention and execution."],
    ["The Last Lion: Alone, 1932–1940", "The Last Lion: Alone, 1932–1940, by William Manchester, traces how ambitious people turn ideas into institutions, technologies, and lasting change through invention and execution."],
    ["The Last Lion: Defender of the Realm, 1940–1965", "The Last Lion: Defender of the Realm, 1940–1965, by William Manchester and Paul Reid, traces how ambitious people turn ideas into institutions, technologies, and lasting change through invention and execution."],
    ["Lee Kuan Yew: The Grand Master’s Insights on China, the United States, and the World", "Lee Kuan Yew: The Grand Master’s Insights on China, the United States, and the World, by Graham Allison, Robert D. Blackwill, and Ali Wyne, traces how ambitious people turn ideas into institutions, technologies, and lasting change through invention and execution."],
    ["Skunk Works: A Personal Memoir of My Years at Lockheed", "Skunk Works: A Personal Memoir of My Years at Lockheed, by Ben R. Rich and Leo Janos, traces how ambitious people turn ideas into institutions, technologies, and lasting change through invention and execution."],
    ["The Constitution of Liberty", "The Constitution of Liberty, by Friedrich A. Hayek, examines the principles, institutions, and debates that define constitutional democracy and protect individual liberty."],
    ["The Bill of Rights: The Fight to Secure America’s Liberties", "The Bill of Rights: The Fight to Secure America’s Liberties, by Carol Berkin, examines the principles, institutions, and debates that define constitutional democracy and protect individual liberty."],
    ["The Law", "The Law, by Frédéric Bastiat, examines the principles, institutions, and debates that define constitutional democracy and protect individual liberty."],
    ["The Perfectionists: How Precision Engineers Created the Modern World", "The Perfectionists: How Precision Engineers Created the Modern World, by Simon Winchester, traces the people, inventions, and systems behind engineering progress, showing how technical breakthroughs reshape economies and daily life."],
    ["Structures: Or Why Things Don’t Fall Down", "Structures: Or Why Things Don’t Fall Down, by J. E. Gordon, traces the people, inventions, and systems behind engineering progress, showing how technical breakthroughs reshape economies and daily life."],
    ["Engineers of Victory: The Problem Solvers Who Turned the Tide in the Second World War", "Engineers of Victory: The Problem Solvers Who Turned the Tide in the Second World War, by Paul Kennedy, traces the people, inventions, and systems behind engineering progress, showing how technical breakthroughs reshape economies and daily life."],
    ["Empires of Light: Edison, Tesla, Westinghouse, and the Race to Electrify the World", "Empires of Light: Edison, Tesla, Westinghouse, and the Race to Electrify the World, by Jill Jonnes, traces the people, inventions, and systems behind engineering progress, showing how technical breakthroughs reshape economies and daily life."],
    ["The Box: How the Shipping Container Made the World Smaller and the World Economy Bigger", "The Box: How the Shipping Container Made the World Smaller and the World Economy Bigger, by Marc Levinson, traces the people, inventions, and systems behind engineering progress, showing how technical breakthroughs reshape economies and daily life."],
    ["Longitude: The True Story of a Lone Genius Who Solved the Greatest Scientific Problem of His Time", "Longitude: The True Story of a Lone Genius Who Solved the Greatest Scientific Problem of His Time, by Dava Sobel, traces the people, inventions, and systems behind engineering progress, showing how technical breakthroughs reshape economies and daily life."]
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

    title.addEventListener('pointerenter', event => {
      showTooltip(title, title, event);
    });
    title.addEventListener('pointermove', event => {
      if (activeTitle === title) positionTooltip(title, event);
    });
    title.addEventListener('pointerleave', () => {
      if (activeTitle === title && !activeButton) hideTooltip();
    });
    title.addEventListener('focus', () => {
      showTooltip(title);
    });
    title.addEventListener('blur', () => {
      if (activeTitle === title && !activeButton) hideTooltip();
    });
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
