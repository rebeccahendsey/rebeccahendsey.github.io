import './App.css'

type Tag = 'added' | 'changed' | 'fixed' | 'breaking'

interface Release {
  version: string
  date: string
  title: string
  org: string
  notes: [Tag, string][]
}

const EMAIL = 'rebeccahendsey@gmail.com'
const GITHUB = 'https://github.com/rebeccahendsey'

const RELEASES: Release[] = [
  {
    version: '3.0.0',
    date: 'Sep 2026',
    title: 'Project Manager',
    org: 'IBM Expert Labs · New York',
    notes: [
      ['changed', 'Moved from building the software to running the projects around it.'],
      ['added', 'Client software migration projects in the Software Migration Project Office: timelines, resources, and delivery across technical teams and client stakeholders.']
    ]
  },
  {
    version: '2.0.0',
    date: 'Oct 2024',
    title: 'AI Engineer & Product Owner',
    org: 'IBM · New York',
    notes: [
      ['breaking', 'Started owning the roadmap, not just the tickets.'],
      ['added', 'Product ownership of STARS: 17K+ users, 100K+ visits, four organizations.'],
      ['added', 'An AI concierge for IBM TechXchange 2025, built front to back.'],
      ['added', 'Front-end lead on IBM Agentrix, a multi-agent AI playground. Ran stand-ups, PR reviews, and sprint tracking.'],
      ['added', 'Mentoring for junior engineers.']
    ]
  },
  {
    version: '1.1.0',
    date: 'Jun 2022',
    title: 'Software Developer',
    org: 'IBM Research · Yorktown Heights',
    notes: [
      ['added', 'Full-stack apps (React, Node, Go, SQL) used across IBM Research.'],
      ['added', 'Python pipelines that turned 3,600+ researchers’ activity into personalized year-end reports.'],
      ['fixed', 'Test coverage. Kept above 80%, with CI/CD and pre-merge security checks.']
    ]
  },
  {
    version: '1.0.0',
    date: 'May 2022',
    title: 'B.S. Computer Science',
    org: 'Fordham University · Bronx',
    notes: [['added', 'First stable release.']]
  },
  {
    version: '0.2.0',
    date: 'Feb 2020',
    title: 'Research Assistant',
    org: 'Laboratory of Informatics and Data Mining · Bronx',
    notes: [['added', 'Combinatorial fusion analysis on problems like judge bias in figure skating. Two IEEE publications.']]
  },
  {
    version: '0.1.0',
    date: 'Sep 2019',
    title: 'Co-President',
    org: 'Girls Who Code College Loops · Fordham',
    notes: [['added', 'Talks and coding challenges for 50+ members, and a lot of encouraging women into tech.']]
  }
]

const SKILLS = [
  'Roadmapping', 'Stakeholder management', 'User research', 'Sprint planning', 'Agile / Scrum',
  'Generative & agentic AI', 'Prompt engineering', 'React', 'TypeScript', 'Python', 'SQL',
  'Figma', 'watsonx Orchestrate', 'IBM Cloud', 'Docker & Podman', 'CI/CD'
]

function App() {
  return (
    <>
      <div className="strip">
        <span className="strip-side">New York, NY</span>
        <nav className="strip-nav" aria-label="Sections">
          <span aria-hidden="true">→</span>
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#timeline">Timeline</a>
          <a href="#contact">Contact</a>
          <span aria-hidden="true">←</span>
        </nav>
        <a className="strip-side strip-cta" href="#contact">Let’s work together</a>
      </div>

      <header className="hero">
        <img src="/hero-image.jpeg" alt="" className="hero-bg" />
        <div className="hero-inner">
          <span className="hero-flank hero-flank-l">Product</span>
          <h1 className="hero-name">rebecca<br />hendsey</h1>
          <span className="hero-flank hero-flank-r">&amp; AI</span>
          <a href="#work" className="pill pill-light hero-pill">See my work</a>
        </div>
      </header>

      <section className="statement">
        <p className="statement-text">
          Four years of shipping AI tools at IBM taught me the code is the easy part.{' '}
          <em>Now I’m working on everything else.</em>
        </p>
        <p className="statement-sub">Engineer turned project manager, moving into product management &amp; product ops.</p>
      </section>

      <div className="band">What I do</div>

      <section className="trio">
        <article className="trio-col">
          <h2><span>1.</span> Own the roadmap</h2>
          <p>
            As product owner of STARS, I decided what got built next for 17K+ users across four
            organizations, then did the convincing to get them to use it.
          </p>
          <p className="trio-meta">Roadmapping · stakeholders · adoption</p>
        </article>
        <article className="trio-col trio-col-mid">
          <figure className="frame">
            <video
              src="/work/concierge-demo.mp4"
              poster="/work/concierge-demo-poster.jpg"
              autoPlay
              muted
              loop
              playsInline
              aria-label="Screen recording of the TechXchange AI Concierge chat"
            />
          </figure>
          <h2><span>2.</span> Build the thing</h2>
          <p>I still ship. I designed and built IBM’s TechXchange 2025 AI concierge from the first sketch to the show floor.</p>
        </article>
        <article className="trio-col">
          <h2><span>3.</span> Bring people with me</h2>
          <p>
            Stand-ups, PR reviews, sprint tracking, mentoring. These days I run client migration
            projects at IBM Expert Labs.
          </p>
          <p className="trio-meta">Delivery · Agile · communication</p>
        </article>
      </section>

      <section id="about" className="about">
        <h2 className="about-giant" aria-label="About me">About<br />me</h2>
        <figure className="about-photo">
          <img src="/hero-image.jpeg" alt="Foggy Manhattan skyline over rooftops" />
        </figure>
        <div className="about-text">
          <p className="about-hello">Nice to meet you,<br /><em>I’m Rebecca.</em></p>
          <p className="about-kicker">Engineer · product person · New Yorker</p>
          <p>
            I studied computer science at Fordham, spent two years as a developer at IBM Research,
            then moved into AI engineering and product ownership. Somewhere along the way I noticed
            I cared less about which framework we picked and more about whether anyone needed the
            thing we were building.
          </p>
          <p>
            Today I’m a project manager at IBM Expert Labs and a part-time M.S. Data Science student
            at Columbia, where I’m taking Product Management and the Innovation and Design Lab. I love
            design, brands, and the products that shape culture, and one day I’d like to build one of
            my own.
          </p>
        </div>
      </section>

      <div className="band" id="work">Product work</div>

      <section className="work">
        <article className="project project-pgo">
          <div className="project-copy">
            <p className="project-no">No. 01 · Columbia Business School, 2026</p>
            <h3>Pinterest <em>Go</em></h3>
            <p className="project-dek">Turning inspiration into adventure.</p>
            <p>
              A product concept that turns a Pinterest travel board into a bookable itinerary. “I have
              40 Pins saved for Kyoto and zero idea what to actually book” was the problem; five taps
              from a saved board to a booked trip was the answer.
            </p>
            <p>
              Built by a five-person team for Product Management at CBS. Together we wrote the product
              vision, jobs-to-be-done, business model, and Agile plan, and tested a prototype with three
              users in Berlin, London, and New York. <strong>I pitched the original concept and led the
              persona and problem framing.</strong>
            </p>
            <dl className="stats stats-inline">
              <div><dt>5</dt><dd>taps, board to booking</dd></div>
              <div><dt>$54.4M</dt><dd>est. yearly ad revenue</dd></div>
            </dl>
            <a className="project-link" href="https://board-to-dream-trip.lovable.app/" target="_blank" rel="noopener noreferrer">Try the prototype →</a>
          </div>
          <ol className="phones" aria-label="Pinterest Go prototype walkthrough">
            {['feed', 'boards', 'review', 'setup', 'book'].map((step, i) => (
              <li key={step} className="phone">
                <img src={`/work/pinterest-go-${step}.jpg`} alt={`Pinterest Go prototype, step ${i + 1}: ${step}`} loading="lazy" />
                <span>{i + 1} · {step}</span>
              </li>
            ))}
          </ol>
        </article>

        <article className="project project-mosaic">
          <div className="mosaic-media">
            <img className="mosaic-poster" src="/work/mosaic-poster.jpg" alt="Mosaic poster: Stop saving. Start living." loading="lazy" />
            <img className="mosaic-sketch" src="/work/mosaic-sketch-origin.jpg" alt="Rebecca’s hand-drawn sketch exploring meaning, adversity, passage, and signal" loading="lazy" />
          </div>
          <div className="project-copy">
            <p className="project-no">No. 02 · Solo concept</p>
            <h3>Mosaic</h3>
            <p className="project-dek">Live your board.</p>
            <blockquote className="pullquote">Full boards. Empty weekends.</blockquote>
            <p>
              We save hundreds of pins, reels, and threads about the life we want, then never act on
              them. Mosaic connects to everything you’ve already saved, across Pinterest, Notion,
              Instagram, Reddit, and TikTok, and turns it into one clear action a day. At the end of
              each month it gives you a private portrait of who you’re becoming. No feed, no followers.
            </p>
            <p>My idea from first sketch to prototype: the problem, the persona, the poster, and the product.</p>
            <a className="project-link" href="https://www.figma.com/make/BBeavtOs66Pjj32RwD0VNr/Mosaic?p=f&t=sBxtjsqPPdD5rKlN-0" target="_blank" rel="noopener noreferrer">See the Figma prototype →</a>
          </div>
          <figure className="mosaic-proto">
            <img src="/work/mosaic-prototype.jpg" alt="Three Mosaic prototype screens: today’s action, your monthly mosaic, and taste insights" loading="lazy" />
            <img src="/work/mosaic-sketch-vehicle.jpg" alt="Rebecca’s hand-drawn sketch of the Mosaic vehicle metaphor" loading="lazy" />
          </figure>
        </article>
      </section>

      <div className="band">Built at IBM</div>

      <section className="work">
        <article className="project project-concierge">
          <div className="project-media collage">
            <img className="collage-main" src="/work/concierge-launchpad.jpg" alt="The AI Concierge on a kiosk in the TechXchange 2025 LaunchPad area" loading="lazy" />
            <img className="collage-inset" src="/work/concierge-onsite.jpg" alt="AI Concierge screen at the TechXchange venue entrance" loading="lazy" />
          </div>
          <div className="project-copy">
            <p className="project-no">No. 03 · 2025</p>
            <h3>TechXchange <em>AI Concierge</em></h3>
            <p>
              An AI assistant that helped TechXchange 2025 attendees find sessions, coffee, menus, and
              their way around the venue. I built it end to end: a React and Carbon chat front end, a
              watsonx Orchestrate agent running Llama 3 405B, and a Code Engine deployment. It lived on
              kiosks on the show floor.
            </p>
            <ul className="pills">
              <li className="pill">React</li><li className="pill">Carbon</li><li className="pill">watsonx Orchestrate</li><li className="pill">IBM Cloud</li>
            </ul>
            <a className="project-link" href={`${GITHUB}/ibm-txc-ai-concierge`} target="_blank" rel="noopener noreferrer">View on GitHub →</a>
          </div>
        </article>

        <article className="project project-stars">
          <div className="project-copy">
            <p className="project-no">No. 04 · 2024–2026</p>
            <h3>STARS</h3>
            <p>
              IBM’s internal home for client success stories. As product owner I ran the roadmap:
              talking to the teams who used it, deciding what shipped next, and driving adoption across
              Client Engineering, Technology Sales, Expert Labs, and Customer Success.
            </p>
          </div>
          <dl className="stats">
            <div><dt>17K<span>+</span></dt><dd>unique users</dd></div>
            <div><dt>100K<span>+</span></dt><dd>lifetime visits</dd></div>
            <div><dt>4</dt><dd>organizations</dd></div>
          </dl>
        </article>

        <article className="project project-yearend">
          <div className="project-copy">
            <p className="project-no">No. 05 · IBM Research</p>
            <h3>Year-End <em>Summaries</em></h3>
            <p>
              A personalized “year in review” email for every IBM researcher, pulling publications,
              patents, projects, GitHub contributions, and more from a dozen sources into one page
              people actually wanted to read.
            </p>
            <dl className="stats stats-inline">
              <div><dt>4,010</dt><dd>researchers, 1H 2024</dd></div>
              <div><dt>1,104</dt><dd>emails sent</dd></div>
            </dl>
            <ul className="pills">
              <li className="pill">Python</li><li className="pill">Go templates</li><li className="pill">Kafka</li>
            </ul>
            <a className="project-link" href={`${GITHUB}/ibm-research-year-end-summaries`} target="_blank" rel="noopener noreferrer">View on GitHub →</a>
          </div>
          <div className="project-media">
            <img className="shot" src="/work/year-end-email.jpg" alt="Example year-end summary email" loading="lazy" />
          </div>
        </article>

        <p className="more-link">
          <a href={GITHUB} target="_blank" rel="noopener noreferrer">More on GitHub →</a>
        </p>
      </section>

      <div className="band" id="timeline">Timeline</div>

      <section className="timeline">
        <p className="timeline-note">My career, written as release notes. Newest first.</p>
        <ol className="releases">
          {RELEASES.map((r) => (
            <li key={r.version} className="release">
              <div className="release-head">
                <span className="release-version">v{r.version}</span>
                <span className="release-date">{r.date}</span>
              </div>
              <div className="release-body">
                <h3>{r.title}</h3>
                <p className="release-org">{r.org}</p>
                <ul>
                  {r.notes.map(([tag, text]) => (
                    <li key={text}>
                      <span className={`tag tag-${tag}`}>{tag}</span>
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="roadmap">
        <div className="roadmap-col">
          <p className="roadmap-label">Now</p>
          <p>Running client migrations at IBM Expert Labs, and an M.S. in Data Science at Columbia (Dec 2027).</p>
        </div>
        <div className="roadmap-col roadmap-next">
          <p className="roadmap-label">Next</p>
          <p className="roadmap-big">A product management or product ops role.</p>
        </div>
        <div className="roadmap-col">
          <p className="roadmap-label">Someday</p>
          <p>A product, and a brand, of my own.</p>
        </div>
      </section>

      <section className="skills">
        <p className="roadmap-label">Toolkit</p>
        <ul className="pills pills-wrap">
          {SKILLS.map((s) => <li key={s} className="pill">{s}</li>)}
        </ul>
      </section>

      <section id="contact" className="contact">
        <p className="contact-kicker">Contact</p>
        <h2>Let’s work <em>together.</em></h2>
        <p className="contact-sub">Hiring for product management or product ops? I’d love to hear what you’re building.</p>
        <a className="contact-email" href={`mailto:${EMAIL}`}>{EMAIL}</a>
        <ul className="pills contact-links">
          <li><a className="pill pill-light" href="https://www.linkedin.com/in/rebeccahendsey/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a className="pill pill-light" href={GITHUB} target="_blank" rel="noopener noreferrer">GitHub</a></li>
        </ul>
      </section>

      <footer className="footer">
        <span>© 2026 Rebecca Hendsey</span>
        <span>Made in New York</span>
      </footer>
    </>
  )
}

export default App
