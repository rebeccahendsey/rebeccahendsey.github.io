import { useEffect, useState } from 'react'
import './App.css'

type Tag = 'added' | 'changed' | 'fixed' | 'breaking'

interface Release {
  version: string
  date: string
  title: string
  org: string
  notes: [Tag, string][]
}

interface Feature {
  id: string
  name: string
  role: string
  summary: string
  stat?: { value: string; label: string }
  details: string[]
}

const SECTIONS = [
  { id: 'overview', label: 'Overview' },
  { id: 'changelog', label: 'Changelog' },
  { id: 'shipped', label: 'Shipped' },
  { id: 'roadmap', label: 'Roadmap' },
  { id: 'requirements', label: 'Requirements' },
  { id: 'issues', label: 'Known issues' },
  { id: 'contact', label: 'Contact' }
]

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
      ['added', 'Front-end lead on IBM Agentrix. Ran stand-ups, PR reviews, and sprint tracking.'],
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

const FEATURES: Feature[] = [
  {
    id: 'STARS',
    name: 'STARS',
    role: 'Product owner',
    summary: 'IBM’s internal platform for client success stories. I owned the roadmap: talking to the teams who used it, deciding what got built next, and getting four organizations to actually adopt it.',
    stat: { value: '17K+', label: 'unique users' },
    details: ['100K+ lifetime visits', 'Client Engineering, Technology Sales, Expert Labs, Customer Success']
  },
  {
    id: 'TXC-25',
    name: 'TechXchange AI Concierge',
    role: 'Design + build',
    summary: 'An AI assistant for attendees of IBM TechXchange 2025. I took it from idea to launch myself: React front end, watsonx Orchestrate agent, Code Engine deployment.',
    details: ['React', 'watsonx Orchestrate', 'IBM Cloud Code Engine']
  },
  {
    id: 'AGX',
    name: 'IBM Agentrix',
    role: 'Front-end lead',
    summary: 'A playground for multi-agent AI. I wrote production React with the Carbon Design System and ran the front-end team’s day-to-day delivery.',
    details: ['Stand-ups', 'PR reviews', 'Sprint tracking']
  },
  {
    id: 'YIR',
    name: 'Research year-in-review',
    role: 'Data pipelines',
    summary: 'Personalized year-end reports for IBM researchers, built from projects, publications, and code pulled from several sources, including GitHub’s GraphQL API.',
    stat: { value: '3,600+', label: 'profiles' },
    details: ['Python', 'GraphQL', 'Kafka notifications']
  }
]

const REQUIREMENTS: { group: string; items: string[] }[] = [
  {
    group: 'Product',
    items: ['Roadmapping', 'Stakeholder management', 'User research', 'Sprint planning', 'Agile / Scrum', 'Writing things down clearly']
  },
  {
    group: 'Technical',
    items: ['Generative & agentic AI', 'Prompt engineering', 'TypeScript, React, Vue, Node', 'Python & SQL', 'CI/CD & code review']
  },
  {
    group: 'Tools',
    items: ['Figma', 'watsonx Orchestrate', 'IBM Cloud', 'GitHub', 'Docker & Podman', 'PostgreSQL']
  }
]

const EMAIL = 'rebeccahendsey@gmail.com'

function App() {
  const [active, setActive] = useState('overview')
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-30% 0px -60% 0px' }
    )
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${EMAIL}`
    }
  }

  return (
    <div className="doc">
      <header className="topbar">
        <span className="topbar-file">rebecca.hendsey</span>
        <span className="topbar-version">v3.0.0</span>
        <span className="status"><span className="status-dot" />open to PM roles</span>
        <span className="topbar-updated">last edited Oct 2026</span>
      </header>

      <div className="layout">
        <nav className="toc" aria-label="Sections">
          <p className="toc-label">Contents</p>
          <ol>
            {SECTIONS.map((s, i) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className={active === s.id ? 'is-active' : ''}>
                  <span className="toc-num">{String(i).padStart(2, '0')}</span>
                  {s.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <main>
          <section id="overview" className="section">
            <p className="eyebrow">Product spec · Rebecca Hendsey</p>
            <h1 className="display">
              I spent four years writing code and kept drifting toward the <em>questions around it.</em>
            </h1>
            <p className="lede">
              Who is this for? What ships first? How do we get people to actually use it? I’m an
              engineer turned project manager at IBM, and I’m making those questions my job.
            </p>

            <dl className="meta">
              <div><dt>Owner</dt><dd>Rebecca Hendsey</dd></div>
              <div><dt>Location</dt><dd>New York, NY</dd></div>
              <div><dt>Current release</dt><dd>Project Manager, IBM Expert Labs</dd></div>
              <div><dt>In development</dt><dd>M.S. Data Science, Columbia</dd></div>
              <div><dt>Status</dt><dd><span className="status-dot" /> Looking for product management &amp; product ops roles</dd></div>
            </dl>

            <figure className="figure">
              <img src="/hero-image.jpeg" alt="Foggy Manhattan skyline over rooftops" />
              <figcaption>fig. 1 · Field research, Manhattan</figcaption>
            </figure>
          </section>

          <section id="changelog" className="section">
            <h2 className="section-title"><span>01</span>Changelog</h2>
            <p className="section-note">Every release so far, newest first.</p>
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

          <section id="shipped" className="section">
            <h2 className="section-title"><span>02</span>Shipped</h2>
            <p className="section-note">Things I’ve owned, built, or both.</p>
            <div className="features">
              {FEATURES.map((f) => (
                <article key={f.id} className={`feature${f.stat ? ' has-stat' : ''}`}>
                  <div className="feature-top">
                    <span className="feature-id">{f.id}</span>
                    <span className="feature-role">{f.role}</span>
                  </div>
                  <h3>{f.name}</h3>
                  {f.stat && (
                    <p className="feature-stat">
                      {f.stat.value}<small>{f.stat.label}</small>
                    </p>
                  )}
                  <p className="feature-summary">{f.summary}</p>
                  <p className="feature-details">{f.details.join(' / ')}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="roadmap" className="section">
            <h2 className="section-title"><span>03</span>Roadmap</h2>
            <p className="section-note">Subject to change. That’s what roadmaps are for.</p>
            <div className="board">
              <div className="lane">
                <h3>Now</h3>
                <div className="card">Running client migration projects at IBM Expert Labs</div>
                <div className="card">M.S. Data Science at Columbia: Product Management, Innovation &amp; Design Lab</div>
              </div>
              <div className="lane lane-next">
                <h3>Next</h3>
                <div className="card card-hot">A product management or product ops role, ideally on something people use every day</div>
              </div>
              <div className="lane">
                <h3>Later</h3>
                <div className="card card-ghost">Build a product of my own</div>
              </div>
            </div>
          </section>

          <section id="requirements" className="section">
            <h2 className="section-title"><span>04</span>Requirements</h2>
            <p className="section-note">Acceptance criteria, all passing.</p>
            <div className="reqs">
              {REQUIREMENTS.map((g) => (
                <div key={g.group}>
                  <h3>{g.group}</h3>
                  <ul>
                    {g.items.map((item) => (
                      <li key={item}><span className="check" aria-hidden="true">✓</span>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section id="issues" className="section">
            <h2 className="section-title"><span>05</span>Known issues</h2>
            <ul className="issues">
              <li>
                <span className="issue-num">#12</span>
                <span>Asks “who is this for?” in every meeting.</span>
                <span className="issue-state">won’t fix</span>
              </li>
              <li>
                <span className="issue-num">#31</span>
                <span>Has opinions about button padding.</span>
                <span className="issue-state">working as intended</span>
              </li>
            </ul>
          </section>

          <section id="contact" className="section contact">
            <h2 className="section-title"><span>06</span>Contact</h2>
            <p className="display display-sm">Have a feature request? <em>Open a ticket.</em></p>
            <div className="contact-row">
              <a className="email" href={`mailto:${EMAIL}`}>{EMAIL}</a>
              <button type="button" className="copy" onClick={copyEmail}>
                {copied ? 'copied ✓' : 'copy'}
              </button>
            </div>
            <ul className="links">
              <li><a href="https://www.linkedin.com/in/rebeccahendsey/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></li>
              <li><a href="https://github.com/rebeccahendsey" target="_blank" rel="noopener noreferrer">GitHub ↗</a></li>
            </ul>
          </section>

          <footer className="footer">
            <span>© 2026 Rebecca Hendsey</span>
            <span>v3.0.0 · built in New York</span>
          </footer>
        </main>
      </div>
    </div>
  )
}

export default App
